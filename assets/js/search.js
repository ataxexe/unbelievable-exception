$("#btn-search").attr("disabled", "disabled")

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
    h4 = $("<h2 class='list-group-item-heading result-title'>" + 
              entry['title'] + " <small>(" + entry["date"] + ")</small></h4>")
    h5 = $("<h3 class='list-group-item-heading result-category'>" + entry['category'] + "</h5>")
    p = $("<p class='list-group-item-text result-excerpt'>" + entry['excerpt'] + "</p>")
    $("<a href='" + entry['url'] + "' class='list-group-item'>")
      .append(h4, h5, p)
      .appendTo("#search-result")
  })
  $("#search-result").show("slow")
  $("#content").hide("slow")
  $("#btn-clear-search").show()
}

var cancel_search = function() {
  $("#search-result").hide("slow")
  $("#content").show("slow")
  $(this).hide()
}

$("#btn-clear-search").click(cancel_search)
$("#btn-search").click(function(){
  term = $("#search-input").val()
  search(term, search_finish)
})
$("#search-input").keydown(function(event){
  var ENTER = 13
  if (event.keyCode == ENTER) {
    term = $(this).val()
    search(term, search_finish)
  }
}).focus(function(){
  if (!index_loaded) {
    input = $(this)
    input.attr("placeholder", "Carregando...")
    $("#search-input").attr("disabled", "disabled")
    $.getJSON("/search.json", function(data, textStatus, jqXHR){
      search_entries = data
      $.each(search_entries, function(){
        search_engine.add(this)
      })
      index_loaded = true
      input.attr("placeholder", "Pesquisar")
      $("#btn-search, #search-input").removeAttr("disabled")
    })
  }
})
