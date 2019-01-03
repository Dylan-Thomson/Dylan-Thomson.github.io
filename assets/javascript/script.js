$(document).ready(()=> {

    setNavLinkActive();

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

    $(".btn-learn-more").on("click", function(event) {
        $("#modal-learn-more").modal("show");
    });
    
    $(window).on("scroll", function() {
        setNavLinkActive();
    });

});

// Animate scroll to section on page
function scrollPage(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 300);
}

// Detect current section on page and set its nav link to active
function setNavLinkActive() {
    $("section").each(function() {
        if($(window).scrollTop() >= $(this).offset().top) {
            const id = $(this).attr("id");
            $(".nav-item").removeClass('active');
            $("a[href=\"#" + id + "\"]").parent().addClass("active");
        }
    });
}