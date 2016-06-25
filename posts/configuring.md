{{{
"title"      : "Configuring",
"author"     : "Chris Allen Lane",
"categories" : [ "intro" ],
"tags"       : [ "config" ],
"date"       : "2016-01-29"
}}}

`wit-cms` exports a function that requires a configuration parameters when
invoked:

```javascript
// ... dependencies, Express bootstrapping, etc.

// initialize the `wit` object:
Wit(app, config, function(err, wit) {

  // wit is initialized

});
```

What follows is an excerpt from the `wit-cms` source-code, showing the default
vaules for the configuration parameters. (Each of these may be overriden as
required.):

```javascript
var configs = {

  path: {
    // path at which data may be retrieved asynchronously
    asyncRoot: '/async/',

    // 404 page
    notFoundPage: '/not-found',
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
    perPage  : 5,
  },

  // search configs
  search: {
    boost: {
      title       : 10,
      description : 5,
      excerpt     : 5,
      content     : 0,
      author      : 0,
    },
  },

  // misc configs
  dateFormat         : 'D MMMM YYYY',
  readMoreSeparator  : '<!--more-->',
  markdownExtensions : [ 'markdown', 'md' ],
  enableAsyncRoutes  : true,
};
```

Whereby:

- `path.asyncRoot` specifies the prefix for the asynchronous `wit` paths.
  (These are useful if you'd like to integrate `wit` with an AJAX-based
  front-end, like `react`.

- `path.notFoundPage` is the 404 page to which you'd like to redirect when
  content is not found.

- `pages.dir` specifies the path to the "page" markdown files

- `post.dir` specifies the path to the "post" markdown files

- `posts.excerpt.*` specify how to truncate blog
  posts that don't contain an explicit `<!--more-->` marker. (See
  [`truncatise`][truncatise] for configuation options.)

- `search.boost.*` specify how much of a "boost" should be applied to search
  matches in each of the respective blog post parts. (Read more about this in
  the [`lunr`][lunr] docs.)

- `dateFormat` specifies the desired "pretty date" format for blog posts.

- `readMoreSeparator` specifies the string that denotes a "read more"
  breakpoint.

- `markdownExtensions` indicates the extensions being used for markdown files
  containing page and most content.

- `enableAsyncRoutes` indicates whether or not asynchronous routes should be
  created automatically. If you're not using an AJAX-based framework like
  `react` for your front-end, you may consider setting this to `false`.

Additionally, `wit` will optionally accept an `init` property, which is a
function that will be run immediately before the `wit` object is returned to
Express. This is its signature:

```javascript
var init = function(app, wit, callback) {};
```

The `init` function provides you with an opportunity to modify either the `wit`
object or express app before calling-back to the main application. This will
probably only be useful in rare circumstances.

Lastly - and importantly - `wit` also accepts an optional `params` object. The
`params` object will be bound to the `wit` object directly, and will thus be
made available to all view templates.

[truncatise]: https://www.npmjs.com/package/truncatise
[lunr]: https://www.npmjs.com/package/lunr

