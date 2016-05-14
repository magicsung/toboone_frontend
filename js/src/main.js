"use strict";

$( document ).ready(function() {
  $('#xs-menu-action').click(function() {
    $('html').toggleClass('noscroll');
  });

  $('.popover').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('open');
  });
});
