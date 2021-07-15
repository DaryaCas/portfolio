
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.toggle-main');
  navMain.classList.remove('main-nav--nojs');
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navToggle.classList.remove('toggle-main--closed');
      navToggle.classList.add('toggle-main--open');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navToggle.classList.remove('toggle-main--open');
      navToggle.classList.add('toggle-main--closed');
    }
  });
