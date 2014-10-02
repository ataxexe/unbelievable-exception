set_theme = function(theme) {
  if (theme == undefined) {
    theme = "dark"
  }
  localStorage.setItem("theme", theme)
  var css = document.createElement('link')
  css.setAttribute('rel', 'stylesheet')
  css.setAttribute('src','http://example.com/site.js');
  css.setAttribute('href', '/assets/css/bootstrap-' + theme + '.css')
  css.setAttribute('type', 'text/css')
  document.head.appendChild(css)
}

set_theme(localStorage.getItem("theme"))