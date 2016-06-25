{{{
"title"      : "Security",
"author"     : "Chris Allen Lane",
"categories" : [ "intro" ],
"tags"       : [ "xss", "security" ],
"date"       : "2014-01-05"
}}}

`wit` has a smaller attack-surface than many other content-management systems,
but it's not "hacker-proof", in that its attack-surface consists at least of:

1. Components that write to the DOM
2. The attack-surface of Express
3. The attack-surface of nodejs

`wit` contains defenses against [Cross-Site Scripting attacks][owasp] via the
[`xss`][xss] module, it is recommended to read the [Express "Best Practices"
documentation][best-practices] for suggestions regarding further precautions
that should be taken.

[best-practices]: http://expressjs.com/en/advanced/best-practice-security.html
[owasp]: https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
[xss]: https://www.npmjs.com/package/xss
