set_theme = function(theme) {
  if (theme == undefined) {
    theme = "dark"
  }
  localStorage.setItem("theme", theme)
  console.log(theme)
  css_files = ["bootstrap-" + theme + ".min.css", "style.css", "code.css"]
  for (var i = 0; i < css_files.length; i++) {
    $('head')
      .append('<link rel="stylesheet" href="/assets/css/' + css_files[i] + '" type="text/css" />');
  }
}

set_theme(localStorage.getItem("theme"))

$("#btn-light-theme").click(function(){
  set_theme("light")
})

$("#btn-dark-theme").click(function(){
  set_theme("dark")
})
