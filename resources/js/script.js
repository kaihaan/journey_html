
// ******** SLIDER **********
var slider = document.getElementById("slider");
var output = document.getElementById("output");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = () => output.innerHTML = slider.value;

// ******** MAP **********
function initMap() { }; // now it IS a function, lol, and it is in global
const debug = true;

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxQy2F-8ud-Ronqxbg_isPvJ-4E9ZRSV0&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
    // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);


// ******** JQUERY / ON DOC READY **********

$(document).ready(function () {

    /* map */
    // Initialize and add the map
    initMap = () => {
        if (debug) {

            $("#map").html("<img src='resources/img/blessed_home.png'>");
        } else {
            // The location of Tehran
            var tehran = { lat: 35.6806682, lng: 51.4272088 };
            // The map, centered at Tehran
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 15, center: tehran });
            // The marker, positioned at Tehran
            var marker = new google.maps.Marker({ position: tehran, map: map });
        }

    }



    /* mobile navigation */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });


});



