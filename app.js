const Wit     = require('wit-cms');
const express = require('express');
const favicon = require('serve-favicon');
const hljs    = require('highlight.js');
const lodash  = require('lodash');
const logger  = require('morgan');
const path    = require('path');
var app       = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// only use the static-file middleware on the dev environment
if ('development' == app.get('env')) {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/media', express.static('media'));
}

// wit configs
const config = {

  // website metadata, a la Wordpress
  params: {
    author  : 'John Doe',
    fqdn    : 'https://example.com',
    name    : 'example.com',
    tagLine : 'Built with wit-bootstrap',
  },

  // syntax highlighting configuration
  remarkable: {
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) {}

      }
      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {}
      return '';
    }
  },
};

// init the app
Wit(app, config, function(err, wit) {

  // extract years for blog archives
  wit.params.years = lodash(wit.posts)
    .map('date.year')
    .uniq()
    .sort()
    .reverse()
    .value();
  
  // redirect the home page to the blog
  app.get('/', function(req, res) {
    res.redirect(301, '/blog');
  });

  // implement a 404 page
  app.use(function(req, res, next) {
    res.status(404).render('404', {
      page : {
        title     : 'Not Found',
        name      : 'Not Found',
        content   : '<p>Not Found</p>',
      },
      wit: wit,
    });
  });

});

module.exports = app;
