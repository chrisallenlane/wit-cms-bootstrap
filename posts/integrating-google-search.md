{{{
"title"      : "Google Custom Search API Integration",
"author"     : "John Doe",
"categories" : ["intro", "integration"],
"tags"       : ["search", "google", "api"],
"date"       : "2014-01-03"
}}}

Because `wit` does not (currently) provide for native search capability, you'll
need to use a third-party search provider (like Google) if your site needs to
be searchable.

This demo mocks one way that search might work, though it doesn't _actually_
work, because this app is not associated with any particular Google Account
(which is a prerequisite for API access.)

If you're interested in getting the Google Search to actually work, you'll need
to create a Google Apps account (not documented here - Google it), and then
fill in some variables in the `<app root>/public/javascripts/lib/search.js`
file. Pop that file open now if you're curious how this works.

Relevant event handlers are bound in `<app root>/public/javascripts/main.js` as
well, so you might want to peek in there too.
