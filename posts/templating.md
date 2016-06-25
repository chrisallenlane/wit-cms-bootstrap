{{{
"title"      : "Templating",
"author"     : "Chris Allen Lane",
"categories" : ["intro"],
"tags"       : ["views", "front-matter", "layout"],
"date"       : "2015-01-27"
}}}


Much like Wordpress, `wit` requires page templates to have specific names:

- Archive          : `archive`
- Blog Index       : `blog`
- Category Index   : `category`
- Tag Index        : `tag`
- Single Blog Post : `post`
- Page             : `page`

Beyond that, the "Page" and "Single Blog Post" templates can be overriden on a
per-page/per-post basis by embedding a `view` property into the page/post's
front-matter:

```javascript
{{{
"title"       : "My Special Page",
"author"      : "John Doe",
"description" : "This is a really special page, you guys"
"view"        : "special-view"
}}}
```

The page above would use the `special-view` template.

Additionally, it's worth noting that *any* properties included in a page/post's
front-matter will be bound to the respective page/post object in `wit`, making
those values accessible in page templates as well.
