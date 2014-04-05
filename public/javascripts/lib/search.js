var search = {};

// buffer for old page content
search.cache = '';

// Queries the Google CSE API and passes an array of results to the callback
search.get = function (term, callback) {
  var url         = 'https://www.googleapis.com/customsearch/v1?';
  var queryParams = {
    // @todo: fill this out to use the Google Custom Search Engine API
    key : 'your-google-cse-key',
    cx  : 'your-google-cse-cx',
    q   : term,
  }
  url += $.param(queryParams);

  // make an AJAX call to the CSE API
  $.get(url, function(response) {
    callback(response.items);
  });
};

// returns markup representing an array of search items
search.render = function (items) {
  // compile the hogan template
  var template = "";
  template += "{{#items}}";
  template += "<article>";
  template += "  <hgroup>";
  template += "    <h1><a href='{{link}}'>{{title}}</a></h1>";
  template += "  </hgroup>";
  template += "  {{snippet}}";
  template += "  <p><a href='{{link}}'>Read More</a>";
  template += "</article>";
  template += "{{/items}}";
  template += "{{^items}}";
  template += "  <p>No matches found.</p>";
  template += "{{/items}}";

  return Hogan.compile(template).render({items: items});
};

// displays the search results
search.display = function(target, html) {
  // buffer the current page content
  var $target  = $(target);
  search.cache = $target.html();
  
  // display the new search results
  $target.fadeOut('fast', function() {
    $target.html(html).fadeIn('fast');
  });
}

// hides the search results
search.hide = function(target) {
  var $target = $(target);
  // restores the normal page content
  $target.fadeOut('fast', function() {
    $target.html(search.cache).fadeIn('fast');
  });
}
