


$('.wrap-temoignage').owlCarousel({
    items:2,
    loop:true,
    dots:true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause:true,
    autoplaySpeed: 1000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-arrow-left'></i></div>",
    "<div class='nav-btn next-slide'><i class='fa-solid fa-arrow-right'></i></div>"],
});

$('.banniere-box').owlCarousel({
    items:1,
    loop:true,
    dots:false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    autoplaySpeed: 1000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-arrow-left'></i></div>",
    "<div class='nav-btn next-slide'><i class='fa-solid fa-arrow-right'></i></div>"],
});
$('.wrap-item-left-banniere').owlCarousel({
    items:1,
    loop:true,
    dots:true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    smartSpeed: 2000,
    navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-chevron-left'></i></div>",
    "<div class='nav-btn next-slide'><i class='fa-solid fa-chevron-right'></i></div>"],
});
$('.wrap-item-right-vente').owlCarousel({
    items:2,
    loop:true,
    dots:false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    smartSpeed: 2000,
    navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-chevron-left'></i></div>",
    "<div class='nav-btn next-slide'><i class='fa-solid fa-chevron-right'></i></div>"],
});
$('.wrap-bottom-produit').owlCarousel({
    items:6,
    loop:true,
    dots:false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    smartSpeed: 2000,
    navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-chevron-left'></i></div>",
    "<div class='nav-btn next-slide'><i class='fa-solid fa-chevron-right'></i></div>"],
});

