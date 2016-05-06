"use strict";

$( document ).ready(function() {
  $("#xs-menu-action").click(function(event) {
    event.preventDefault();
    toggleMenu();
  });

  toggleMenu();
});

function toggleMenu() {
  $('html').toggleClass("noscroll");
  if ( $("#xs-menu-action").attr("alt") == "" ) {
    $("#xs-menu-action").attr("alt", "active").addClass("active");
    $('#sidebar').toggleClass("hidden-xs");
    $('#sidebar').addClass('slideInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('slideInLeft animated');
    });
  } else {
    $("#xs-menu-action").attr("alt", "").removeClass("active");
    $('#sidebar').addClass('slideOutLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('slideOutLeft animated');
      $('#sidebar').toggleClass("hidden-xs");
    });
  }
};
