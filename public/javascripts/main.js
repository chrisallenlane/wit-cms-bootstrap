$(document).ready(function() {
  // buffer some DOM elements
  var $search      = $('#search');
  var $closeSearch = $('#close-search');

  // @kludge to make this play more nicely with the responsive design
  $closeSearch.hide();

  // perform and render a search
  $search.change(function() {
    search.get($(this).val(), function(items) {
      $search.val('');
      var html = "<h1 class='context'>Search Results</h1>";
      html    += search.render(items);
      search.display('main', html);
      $closeSearch.show();
    });
  });

  // close the search results
  $closeSearch.click(function() {
    $closeSearch.hide();
    search.hide('main');
  })
});
