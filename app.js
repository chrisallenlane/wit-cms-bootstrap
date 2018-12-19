const Wit     = require('wit-cms');
const express = require('express');
const favicon = require('serve-favicon');
const lodash  = require('lodash');
const logger  = require('morgan');
const path    = require('path');
var app       = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// wit configs
const config = {

  // website metadata, a la Wordpress
  params: {
    author   : 'John Doe',
    fqdn     : 'https://example.com',
    name     : 'example.com',
    tagLine  : 'Built with wit-bootstrap',
    appStart : Date.now(), // for stylesheet cache-busting
  },

  // specify the home page
  pages: {
    home: '/about',
  },

};

// initialize the app
const wit = Wit(app, config);

// extract years for blog archives
wit.params.years = lodash(wit.posts)
  .map('date.year')
  .uniq()
  .sort()
  .reverse()
  .value();

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

module.exports = app;
