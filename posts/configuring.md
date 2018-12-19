{{{
"title"      : "Configuring",
"author"     : "Chris Allen Lane",
"categories" : [ "intro" ],
"tags"       : [ "config" ],
"date"       : "2016-01-29"
}}}

`wit-cms` exports a function that accepts configuration parameters when
invoked:

```javascript
// ... dependencies, Express bootstrapping, etc.
var app = express();

// ...

const wit = Wit(app, config);
```

What follows is an excerpt from the `wit-cms` source-code, showing the default
vaules for the configuration parameters. (Each of these may be overriden as
required.):

```javascript
const hljs = require('highlight.js');

// set the default configs
module.exports = {

  // markdown configs
  markdown: {
    extensions: [ 'markdown', 'md' ], // markdown file extensions

    // remarkable (markdown parser) configs
    remarkable: {
      html    : true,                 // allow html tags in source
      linkify : true,                 // auto-link urls?

      // implement code syntax-highlighting via highlightjs
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
  },

  // async routes
  async: {
    enabled : true,                    // enable async routes?
    root    : '/async/',               // prefix at which async routes are available
  },

  // build hooks
  build: {
    /*
    // function to invoke before initializing the wit object
    before: function (configs, app, wit) {

    },

    // function to invoke after the wit object has been initialized
    after: function (configs, app, wit) {

    },
    */
  },
  
  // page configs
  pages: {
    dir      : './pages/',             // directory in which markdown page files are located
    notFound : '/not-found',           // 404 "not found" page url
    home     : false,                  // page to which '/' should be 302 redirected
  },

  // post configs
  posts: {
    dir      : './posts/',              // directory in which markdown page files are located
    excerpt  : {                        // rules for generating excerpts
      length : 1,
      units  : 'paragraphs',
    },
    perPage  : 5,                       // number of posts to display on the blog index page
    readMoreSeparator : '<!--more-->',  // separator between excerpt and remaining content
    dateFormat        : 'D MMMM YYYY',  // article date format
  },

  // search configs
  search: {                             // lunrjs search configs
    boost: {                            // ranking weights per post property
      title       : 10,
      description : 5,
      excerpt     : 5,
      content     : 0,
      author      : 0,
    },
  },

};
```

Whereby:

- `markdown.extensions` indicates the extensions being used for markdown files
  containing page and most content.

- `async.enabled` indicates whether or not asynchronous routes should be
  created automatically. If you're not using an AJAX-based framework like React
  for your front-end, you may consider setting this to `false`.

- `async.root` specifies the prefix for the asynchronous `wit` paths.  (These
  are useful if you'd like to integrate `wit` with an AJAX-based front-end,
  like React)

- `build.before` is an optional method that will be run before Express routes
  are bound to the `app` object.

- `build.after` is an optional method that will be invoked immediately prior to
  returning the bootsrapped `wit` object.

- `pages.notFound` is the 404 page to which you'd like to redirect when content
  is not found.

- `pages.dir` specifies the path to the "page" markdown files

- `posts.dir` specifies the path to the "post" markdown files

- `posts.excerpt.*` specify how to truncate blog
  posts that don't contain an explicit `<!--more-->` marker. (See
  [`truncatise`][truncatise] for configuation options.)

- `posts.readMoreSeparator` specifies the string that denotes a "read more"
  breakpoint.

- `posts.dateFormat` specifies the desired "pretty date" format for blog posts.

- `search.boost.*` specify how much of a "boost" should be applied to search
  matches in each of the respective blog post parts. (Read more about this in
  the [`lunr`][lunr] docs.)

Lastly - and importantly - `wit` also accepts an optional `params` object. The
`params` object will be bound to the `wit` object directly, and will thus be
made available to all view templates.

[truncatise]: https://www.npmjs.com/package/truncatise
[lunr]: https://www.npmjs.com/package/lunr

