"use strict";$(document).ready(function(){$(document).on("click",function(o){var n=$(o.target);if(!(n.is(".dropdown-toggle")||n.parent().is(".dropdown-toggle"))){$(".dropdown-menu").removeClass("show")}});$(".dropdown-toggle").on("click",function(o){o.preventDefault();$(this).siblings(".dropdown-menu").toggleClass("show")})});function openPopout(o){$(o).fadeIn(250);$(o).children(".content").slideDown(250);$("html").addClass("noscroll")}function closePopout(){$(".popout").children(".content").slideUp(250);$(".popout").fadeOut(250);$("html").removeClass("noscroll")}$(document).ready(function(){$("#close-popout-area").on("click",function(){closePopout()});$("body").keypress(function(o){if(o.which==27){$("#light-box").fadeOut(300);closePopout()}})});