$(document).ready(()=> {

    $("#btn-view-work").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });

    $(".nav-link").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    
    $(window).on("scroll", function() {
        $("section").each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                const id = $(this).attr("id");
                $(".nav-item").removeClass('active');
                $("a[href=\"#" + id + "\"]").parent().addClass("active");
            }
        });
    });

});
