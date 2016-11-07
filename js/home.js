/*
home.js
(C) 2016 Carver Harrison
*/

function start() {
  $('icon').each(function (index) {
     $(this).append('<a href="apps/' + $('icon').attr('app') + '"><img class="icon-image" src="apps/' + $('icon').attr('app') + '/icon.png" /><div class="icon-title">' + $('icon').attr('title') + '</div>');
  });
}
