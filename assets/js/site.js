set_theme = function(theme) {
  $.cookie("theme", theme);
  css_files = ["bootstrap-" + theme + ".min.css", "style.css", "code.css"]
  for (var i = 0; i < css_files.length; i++) {
    $('head')
      .append('<link rel="stylesheet" href="/assets/css/' + css_files[i] + '" type="text/css" />');
  }
}

theme = $.cookie("theme")
if(theme == undefined) {
  theme = "dark"
}
set_theme(theme)


$("#btn-light-theme").click(function(){
  $.cookie("theme", "light");
  location.reload(false);
})

$("#btn-dark-theme").click(function(){
  $.cookie("theme", "dark");
  location.reload(false);
})