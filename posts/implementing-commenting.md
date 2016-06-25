{{{
"title"      : "Implementing Commenting",
"author"     : "Chris Allen Lane",
"categories" : [ "intro" ],
"tags"       : [ "comments" ],
"date"       : "2015-01-30"
}}}

`wit` does not - and cannot - natively implement a reader commenting system,
because `wit` does not have a database back-end.

With that said, if you'd like to implement a reader comments, `wit` works
nicely with client-side solutions like [Disqus][] and [`isso`][isso].

[Disqus]: https://disqus.com/
[isso]: https://github.com/posativ/isso
