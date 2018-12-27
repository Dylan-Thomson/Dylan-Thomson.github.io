$(document).ready(()=> {

    $(".nav-link").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $("#btn-view-work").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });

});
