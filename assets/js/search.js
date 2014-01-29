var search_engine = lunr(function () {
  this.field('title', { boost: 10 })
  this.field('tags', { boost: 8 })
  this.field('body', { boost: 5 })
  this.field('category')
  this.field('date')
  this.ref('url')
})

var index_loaded = false

var search = function(term, callback) {
  if(index_loaded) {
    callback(search_engine.search(term))
  } else {
    $.getJSON("/search.json", function(data, textStatus, jqXHR){
      $.each(data["entries"], function(){
        search_engine.add(this)
      })
      index_loaded = true
      search(term, callback)
    });
  }
}
