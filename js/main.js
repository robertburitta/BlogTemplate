$(document).ready(function() {

    //toggle menu
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });
});