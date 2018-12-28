$(document).ready(()=> {

    $("#btn-view-work").on("click", function(event) {
        event.preventDefault();
        scrollPage("#about");
    });

    $(".nav-item").on("click", function(event) {
        event.preventDefault();
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        scrollPage($(this).children(".nav-link").attr("href"));
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

// Animate scroll to section on page
function scrollPage(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 300);
}