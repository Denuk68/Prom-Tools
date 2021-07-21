
//  Navigation
let menu__li = document.querySelectorAll(".navigation  ul.menu > li");
let submenu = document.querySelectorAll(".navigation ul.submenu");

if( window.screen.width <= 650 ){
    for (let i = 1; i < menu__li.length; i++) { 
        menu__li[i].addEventListener("click", function(){
            submenu[i - 1].style.display = "flex";
        }) 
    };
}
else if( window.screen.width > 650 ){
    for (let i = 1; i < menu__li.length; i++) { 
        menu__li[i].addEventListener("mouseenter", function(){
            submenu[i - 1].style.display = "flex";
        }) 
    };
    for (let i = 1; i < menu__li.length; i++) { 
        menu__li[i].addEventListener("mouseleave", function(){
            submenu[i - 1].style.display = "none";
        }) 
    };
}




