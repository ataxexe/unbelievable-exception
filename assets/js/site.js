$(document).ready(function(){
  $(".theme-change").click(function(){
    theme_name = $(this).attr("id").split('-')[1]
    set_theme(theme_name)
  })
})
