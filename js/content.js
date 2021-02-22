console.log("extension is running!")

// TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.

$("body").css("background-color", "#171617");
$("body").css("color", "white");

$(".navbar-light .navbar-toggler").css("border", "1px solid #343434");

$(".card").css("background-color", "#343434");

//$(".calendar_event_course").css("background-color", "#7D7A7C");

$(".btn").css("background-color", "#363636");
$(".btn").css("color", "white");
$(".btn").css("border-color", "#7D7A7C");

$(".uleth_main_top_nav").css("background-color", "#171617");

$("#uleth_burgers_fries_n_pop.navbar-collapse.collapse.show").css("border-color", "#7D7A7C");

$(".dropdown-menu.dropdown-menu-right.menu.align-tr-br.show").css("background-color", "#363636");

$(".page-link").css("background-color", "#363636");
$(".page-link").css("color", "#007193");

$("#region-main").css("background-color", "#171617");

$(".generaltable").css("color", "#B3B1B3");

$(" .content.sectionhidden, .sectionhead.toggle.toggle-point").css("background-color", "#363636");
$(" .sectionname").css("color", "#007193");

//$(".hidden").css("background-color", "#363636");
//$(".hidden").css("color", "white");


//image credit: University of Lethbridge, edited by myself
var imgURL = chrome.runtime.getURL("images/university_logoEdit.png");

$(".logo img").attr("src", imgURL);