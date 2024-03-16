$(document).ready(function(){
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        navText:['PREV', 'NEXT'],
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            }
        }
    });

    // wrk owl slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText:['PREV', 'NEXT'],
        smartSpeed:1000,
        margin:24,
        responsive:{
            0:{
                items:1,
                nav:false,
                margin:0,
            },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
                dots:true,
            }
        }
    });

    // review slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:2000,
    });
})