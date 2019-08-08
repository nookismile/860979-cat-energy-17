'use strict';

var navToggle = document.querySelector('.toggle-menu');
var navMenu = document.querySelector('.main-nav');

navMenu.classList.remove('main-nav--no-js');
navToggle.classList.remove('toggle-menu--no-js');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('toggle-menu--closed');
  navMenu.classList.toggle('main-nav--opened');
});
