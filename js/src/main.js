"use strict";

$( document ).ready(function() {
  // mobile header menu
  $('#xs-menu-action').click(function() {
    $('html').toggleClass('noscroll');
  });

  // dropdown-menu
  $(document).on('click', function(event) {
    var target = $( event.target );
    if ( !(target.is('.dropdown-toggle') || target.parent().is('.dropdown-toggle')) ) {
      $('.dropdown-menu').removeClass('show');
    }
  });
  $('.dropdown-toggle').on('click', function(event) {
    event.preventDefault();
    $(this).siblings('.dropdown-menu').toggleClass('show');
  });

});
