const express = require('express');
const path    = require('path');
const Wit     = require('wit-cms');
var app       = express();

// express configs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// wit configs
var config = {

  // template params
  params: {
    author  : 'Chris Allen Lane',
    fqdn    : 'https://example.com',
    name    : 'wit-bootstrap',
    tagLine : 'An example site made using wit-cms',
  },
  
};

Wit(app, config, function(err, wit) {

  // terminate on error
  if (err) {
    console.warn(err);
    process.exit(1);
  }

  // only use the static-file middleware on the dev environment
  if ('development' === app.get('env')) {
    app.use(express.static(path.join(__dirname, 'public')));
  }

  // redirect the home page to the blog
  app.get('/', function(req, res) {
    res.redirect(301, '/blog');
  });

  // implement a 404 page
  app.use(function(req, res, next) {
    res.status(404).render('404', {
      page : {
        title     : 'Not Found',
        content   : 'not found',
        name      : '404',
      },
      wit: wit,
    });
  });

  // start the server
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

});
