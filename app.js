var express = require('express');
var fs      = require('fs');
var http    = require('http');
var path    = require('path');
var wit     = require('wit-cms');

// init the app
var app     = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
// pass the environment to the views
app.locals.env = app.get('env');

app.use(app.router);

// only use the static-file middleware on the dev environment
if ('development' == app.get('env')) {
  app.use(express.static(path.join(__dirname, 'public')));
}

// wit configs
var config = {
  // site configs
  site: {
    author  : 'Chris Allen Lane',
    fqdn    : 'https://github.com/chrisallenlane/wit-bootstrap',
    name    : 'wit-bootstrap',
    tagLine : 'An example site made using wit-cms',
  },
  
  // page configs
  pages: {
    dir: './pages/',
  },

  // post configs
  posts: {
    dir      : './posts/',
    excerpt  : {
      length : 1,
      units  : 'paragraphs',
    },
    perPage : 5,
  },
};

// init the app
wit.init(app, config, function(err, wit) {
  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  // redirect the home page to the blog
  app.get('/', function(req, res) {
    res.redirect(301, '/blog');
  });

  // implement a 404 page
  app.use(function(req, res, next) {
    res.status(404).render('404', {
      bodyClass : 'error error-404',
      title     : 'Not Found',
    });
  });

  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});
