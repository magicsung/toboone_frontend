"use strict";$(document).ready(function(){$("#xs-menu-action").click(function(n){n.preventDefault();toggleMenu()})});function toggleMenu(n){$("html").toggleClass("noscroll");if($("#xs-menu-action").attr("alt")==""){$("#xs-menu-action").attr("alt","active").addClass("active");$("#sidebar").removeClass("hidden-xs");$("#sidebar").addClass("slideInLeft"+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("slideInLeft animated")})}else{$("#xs-menu-action").attr("alt","").removeClass("active");$("#sidebar").addClass("slideOutLeft"+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("slideOutLeft animated");$("#sidebar").addClass("hidden-xs")})}}$(document).ready(function(){$(".popover").on("click",function(n){n.preventDefault();$(this).toggleClass("open")})});