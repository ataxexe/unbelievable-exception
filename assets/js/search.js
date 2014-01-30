var search_engine = lunr(function () {
  this.field('title', { boost: 10 })
  this.field('tags', { boost: 8 })
  this.field('body', { boost: 5 })
  this.field('category')
  this.field('date')
  this.ref('url')
})

var index_loaded = false
var search_entries = null

var search = function(term, callback) {
  if(index_loaded) {
    callback(search_engine.search(term))
  }
}

var search_finish = function(result) {
  $("#search-result").empty()
  if(result.length == 0) {
    $("<div class='alert alert-danger'>" +
      "<strong>Não foi encontrada nenhuma postagem com esse termo!</strong>" +
    "</div>").appendTo("#search-result")
  }
  $.each(result, function(){
    index = this['ref']
    entry = search_entries[index]
    h4 = $("<h4 class='list-group-item-heading result-title'>" + entry['title'] + "</h4>")
    h5 = $("<h5 class='list-group-item-heading result-category'>" + entry['category'] + "</h5>")
    p = $("<p class='list-group-item-text'>" + entry['excerpt'] + "</p>")
    $("<a href='" + entry['url'] + "' class='list-group-item'>")
      .append(h4, h5, p)
      .appendTo("#search-result")
  })
  $("#search-result").show("slow")
  $("#content").hide("slow")
}

$(".search-input").keyup(function(){
  term = $(this).val()
  if (term.length > 3) {
    search(term, search_finish)
  } else {
    $("#search-result").hide("slow")
    $("#content").show("slow")
  }
}).focus(function(){
  if (!index_loaded) {
    $(".search-image").removeClass("fa-search").addClass("fa-cog")
    input = $(this)
    input.attr("placeholder", "Carregando...")
    $.getJSON("/search.json", function(data, textStatus, jqXHR){
      search_entries = data
      $.each(search_entries, function(){
        search_engine.add(this)
      })
      index_loaded = true
      $(".search-image").removeClass("fa-cog").addClass("fa-search")
      input.attr("placeholder", "Pesquisar")
    })
  }
})
