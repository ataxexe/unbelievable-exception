set_theme = function(theme) {
  if (theme == undefined) {
    theme = "dark"
  }
  localStorage.setItem("theme", theme)
  $('head')
    .append('<link rel="stylesheet" href="/assets/css/bootstrap-' 
      + theme + '.css" type="text/css" />');
}

set_theme(localStorage.getItem("theme"))

$(document).ready(function(){
  $(".theme-change").click(function(){
    theme_name = $(this).attr("id").split('-')[1]
    set_theme(theme_name)
  })
})
