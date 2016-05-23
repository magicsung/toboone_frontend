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

// popout
function openPopout(target) {
  $(target).fadeIn(250);
  $(target).children('.content').slideDown(250);
  $('html').addClass('noscroll');
}
function closePopout() {
  $('.popout').children('.content').slideUp(250);
  $('.popout').fadeOut(250);
  $('html').removeClass('noscroll');
}

$( document ).ready(function() {
  $('#close-popout-area').on('click', function() {
    closePopout();
  });
  $('body').keypress(function(e){
    if(e.which == 27){
      $('#light-box').fadeOut(300);
      closePopout();
    }
  });
});
