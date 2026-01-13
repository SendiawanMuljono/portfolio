'use strict';

(function ($) {
    $(".activities_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        dotsEach: 1,
        smartSpeed: 500,
    });

    $(".feedbacks_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        dotsEach: 1,
        smartSpeed: 1000,
        autoHeight: false,
        autoplay: true
    });

})(jQuery);