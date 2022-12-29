 
 $('.owl-carousel').owlCarousel({
    items:5,
    loop: true,
    nav: false,
    autplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    respnsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})