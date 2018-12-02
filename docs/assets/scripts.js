// активный пункт меню
var activeNavMenu = () =>
{
  var currentUrl = window.location.pathname.split('/'),
    menuA = document.querySelectorAll('.navbar__navs a'),
    menuAlength = menuA.length;
  for (var i = 0; i < menuAlength; i++) {
    for (var q = 0; q < currentUrl.length; q++) {
      if (currentUrl[q] === menuA[i].getAttribute('href')) {
        menuA[i].classList.add('active');
        break;
      }
    }
  }

};
activeNavMenu();

var activeMenu = () =>
{
  var currentUrl = window.location.pathname.split('/'),
    menuA = document.querySelectorAll('.footer__nav-items a'),
    menuAlength = menuA.length;
  for (var i = 0; i < menuAlength; i++) {
    for (var q = 0; q < currentUrl.length; q++) {
      if (currentUrl[q] === menuA[i].getAttribute('href')) {
        menuA[i].classList.add('active');
        break;
      }
    }
  }

};
activeMenu();
// /активный пункт меню

// Прокрутка к началу страницы
$(document).ready(function(){

		$('.scroll-to-top').fadeOut();
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
// /Прокрутка к началу страницы
