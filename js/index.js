$(".slider__carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    responsive: {
        0: {
            items: 1,
        },
        650: {
            items: 1,
        },
        651: {
            items: 3,
        },
        768: {
            items: 3,
        },
        992: {
            items: 3,
        },
    },
});


//  Navigation
let menu__li = document.querySelectorAll(".navigation  ul.menu > li");
let submenu = document.querySelectorAll(".navigation ul.submenu");

if (window.screen.width <= 650) {
    for (let i = 0; i < menu__li.length; i++) {
        menu__li[i].addEventListener("click", function () {
            submenu[i].style.display = "flex";
        })
    };
}
else if (window.screen.width > 650) {
    for (let i = 1; i < menu__li.length; i++) {
        menu__li[i].addEventListener("mouseenter", function () {
            submenu[i - 1].style.display = "flex";
        })
    };
    for (let i = 1; i < menu__li.length; i++) {
        menu__li[i].addEventListener("mouseleave", function () {
            submenu[i - 1].style.display = "none";
        })
    };
}






