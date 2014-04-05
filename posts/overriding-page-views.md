{{{
"title"      : "Overriding Page Views",
"author"     : "John Doe",
"categories" : ["intro"],
"tags"       : ["views", "front-matter", "layout"],
"date"       : "2014-01-02"
}}}

This isn't actually demonstrated in this sample site, but here's a pro-tip: the
views associated with each page and post are pre-configured by convention, but
can be explicitly overridden with each post/page's front-matter.

These are the default views:

- Archive          : `archive.ejs`
- Blog Index       : `blog.ejs`
- Category Index   : `category.ejs`
- Tag Index        : `tag.ejs`
- Single Blog Post : `post.ejs`
- Page             : `page.ejs`

(That should seem pretty familiar to you if you've worked in WordPress in the past.)

If you want to use a different view on any post or page, however, you may specify which to use in the front-matter:

```javascript
{{{
"title"       : "About",
"author"      : "John Doe",
"description" : "This is an introduction to wit-cms"
"view"        : "special-view"
}}}
```
`view` is something of a "special" or "reserved" property within the
front-matter, so please don't attempt to use it for anything else.
