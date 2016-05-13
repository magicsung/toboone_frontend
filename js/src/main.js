"use strict";

$( document ).ready(function() {
  $('.popover').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('open');
  });
});
