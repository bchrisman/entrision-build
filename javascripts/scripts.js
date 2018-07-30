function toggleNav() {
  'use strict';
  var
    navbar = document.getElementById('navbar'),
    body = document.body;
  navbar.classList.toggle('hideNav'),
  body.classList.toggle('noScroll');
}

function bindEvents(){
  document.getElementById('navToggle').addEventListener('click', toggleNav, false);
  document.getElementById('navClose').addEventListener('click', toggleNav, false);
}
