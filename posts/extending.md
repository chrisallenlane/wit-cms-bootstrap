{{{
"title"      : "Extending",
"author"     : "Chris Allen Lane",
"categories" : [ "intro" ],
"tags"       : [ "architecture" ],
"date"       : "2016-01-28"
}}}

From an architectural standpoint, it's important to note that `wit-cms`
primarily only does two things:

1. Structures a `wit` object containing all relevant site information
2. Attaches some routes to a previously-initialized Express app.

<!--more-->

That's all.

`wit` thus "plays nicely" with other Express components, and leaves you free to
continue modifying the express app as desired. `wit` can thus be useful even if
you're building something different (or more complicated) than a typical
website/blog.
