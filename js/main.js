$(document).ready(function() {

    //toggle menu
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    //owl carousel
    $('.owl-carousel').owlCarousel();
});