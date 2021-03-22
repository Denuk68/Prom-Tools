// Header
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__menu ul li a').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
    });
});
// Scroll
$(document).ready(function () {
    var offset = $(".header").innerHeight();
    $(".header__menu ul li a[href^='#']").click(function () {
      var target = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - offset,
        },
        500
      );
      $(".header__menu ul li a[href^='#']").removeClass("active");
      $(this).addClass("active");
      return false;
    });
  });
