'use strict';

const toggle = document.getElementById('toggle');
const menu = document.getElementById('list-mobile');

toggle.addEventListener('change', toggleMenu);
window.addEventListener('resize', closeMenu);

function toggleMenu() {
  menu.style.display = 
    (menu.style.display === '' || menu.style.display === 'none')
    ? 'flex'
    : 'none';
}

function closeMenu() {
  const mediaQuery = window.matchMedia('(min-width: 1141px)');

  if (mediaQuery.matches) {
    menu.style.display = 'none';
    toggle.checked = false;
  }
}
