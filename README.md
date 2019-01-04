wit-cms-bootstrap
=================
`wit-cms-bootstrap` is an example blog built with [Express][] and [wit-cms][]. It
is to be used a starting point when building a website with `wit-cms`.


Usage
-----
Clone this repository and start the local webserver to become acquainted with
`wit-cms`:

```sh
npm run start
```

The webserver will bind to port `3000` by default, and will be available at
`http://localhost:3000`.

The example blog posts contain tips regarding using `wit-cms`. You may want to
read them.

After you've become acqainted with this example website, you may freely modify
it to suit your needs.


Layout
------
`wit-cms-bootstrap` contains the following files and directories:

File/Directory | Purpose 
---------------|--------
`app.js`       | The Express application entry-point.
`bin`          | Contains executable scripts.
`media`        | Intended to serve static post/page content. (_Not_ intended to serve "code", like stylesheets.)
`pages`        | Contains "page" content markdown files.
`post`         | Contains "post" content markdown files.
`public`       | Intended to serve static application assets, like stylesheets and JavaScript.
`views`        | Contains Express views.


Configuring
-----------
This repository will require minor configuration changes before production use.

### app.js ###
A `config` object is defined in `app.js`. You'll likely want to update some of
its values:

```javascript
// wit configs
const config = {

  // website metadata, a la Wordpress
  params: {
    author  : 'John Doe',
    fqdn    : 'https://example.com',
    name    : 'example.com',
    tagLine : 'Built with wit-cms-bootstrap',
  },

};
```

You may likewise freely attach any additional values to `config.params` to make
them available to the `wit` object.

### bin/minify-css ###
`bin/minify-css` contains an array of stylesheets that are to be concatenated
and minified:

```javascript
// stylesheets to concatenate (ordered)
const files = [
  'normalize.css',
  'main.css',
  'desktop.css',
  'mobile.css',
  'solarized-dark.css', // highlighting styles for highlight.js
];
```

Modify those as necessary. Note that array order is important - stylesheets
will be concatenated in the order in which they are specified. (See: <a
href='#building'>Building</a>)

### bin/www ###
Change the logging application name in the following line of `bin/www`:

```javascript
var debug = require('debug')('wit-cms-bootstrap:server');
```

### Static File Serving ###
By default, the local webserver is configured only to serve static files in the
development environment:

```javascript
// only use the static-file middleware on the dev environment
if ('development' == app.get('env')) {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/media', express.static('media'));
}
```

In production, it is recommended to use a webserver like [Apache][], [Nginx][],
or [Caddy][] for serving static files.


Building
--------
By default, `wit-cms-bootstrap` defines a single build task, which concatenates and
minifies all stylesheets specified in `bin/minify-css`:

```sh
npm run build
```

By default, the combined stylesheets will be saved to
`public/stylesheets/app.css`.


Extending
---------
`wit-cms` is for programmers, and `wit-cms-bootstrap` is ultimately just an Express
application. You may freely modify it as you would any other application.


[Apache]:  https://httpd.apache.org/
[Caddy]:   https://caddyserver.com/
[Express]: https://expressjs.com/
[Nginx]:   https://www.nginx.com/
[hljs]:    https://highlightjs.org/ 
[wit-cms]: https://github.com/chrisallenlane/wit-cms
