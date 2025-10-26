var swiper = new Swiper(".hero-slider", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 800,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var typed = new Typed('#element', {
    strings: ['lorem1', 'lorem2', "lorem3"],
    typeSpeed: 50,
    loop: true,
});

var typed = new Typed('#element2', {
    strings: ['lorem1', 'lorem2', "lorem3"],
    loop: true,
    typeSpeed: 50,
});

var typed = new Typed('#element3', {
    strings: ['lorem1.', 'lorem2', "lorem3"],
    loop: true,
    typeSpeed: 50,
});