/*Появление адаптивного меню*/
$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    // $('body').toggleClass('lock');
  });
});

/*Анимация меню при скроле*/
window.onscroll = () => {
  const headerbar = document.querySelector('.header');
  const Y = window.scrollY;

  if (Y > 50) {
    headerbar.classList.add('bar-fixed');
  }else if (Y < 50) {
    headerbar.classList.remove('bar-fixed');
  }
};