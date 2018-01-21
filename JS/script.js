function navOpen() {
  var nav = document.getElementById('nav__list');
  if (nav.classList.contains('nav__list--active')) {
    nav.classList.remove('nav__list--active');
    console.log('removed class');
  } else {
    nav.classList.add('nav__list--active');
    console.log('added class')
  }
}
