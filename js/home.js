/*
home.js
(C) 2016 Carver Harrison
*/

function start() {
  $('icon').each(function (index) {
     $(this).append('<a href="apps/' + $(this).attr('app') + '"><img class="icon-image" src="apps/' + $(this).attr('app') + '/icon.png" /><div class="icon-title">' + $(this).attr('title') + '</div>');
  });
}
