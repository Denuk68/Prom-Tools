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

let menu_li = document.querySelectorAll(".menu #main__li");
let submenu = document.querySelectorAll("ul.submenu");
for(let i = 0; i < menu_li.length; i ++ ){
    menu_li[i].addEventListener("mouseenter", function(){
        submenu[i].classList.toggle("active");
    });
};
for(let i = 0; i < menu_li.length; i ++ ){
    menu_li[i].addEventListener("mouseleave", function(){
        submenu[i].classList.toggle("active");
    });
};