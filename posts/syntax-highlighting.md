{{{
"title"      : "Syntax Highlighting",
"author"     : "Chris Allen Lane",
"categories" : ["intro"],
"tags"       : ["views", "front-matter", "layout"],
"date"       : "2015-02-01"
}}}

`wit-bootstrap` supports syntax-highlighting out-of-the-box via
[highlight.js][hljs]. Syntax-highlighting is configured via
`config.remarkable.highlight` in `app.js`:

<!--more-->

```javascript
// wit configs
const config = {
  params: {
    author  : 'John Doe',
    fqdn    : 'https://example.com',
    name    : 'example.com',
    tagLine : 'Built with wit-bootstrap',
  },

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
```

By default, syntax is highlighted using a "solarized dark" color scheme. To
change the color scheme, do the following:

1. Download the `highlight.js` colorscheme stylesheet that you would like to
   use to `public/stylesheets`.

2. Modify `bin/uglify-css` to include your preferred stylesheet in the `files`
   constant. (File order is important. Files will be concatenated and uglified
   in the specified order.)

3. Run: `npm run build` to compile a new concatenated and minified stylesheet.


[hljs]: https://highlightjs.org/
