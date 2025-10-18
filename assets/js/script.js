(function(){
  'use strict';

  // Sticky header shadow on scroll
  const header = document.querySelector('.site-header');
  const setScroll = () => header && header.setAttribute('data-scrolled', window.scrollY > 6 ? 'true' : 'false');
  setScroll();
  window.addEventListener('scroll', setScroll, {passive:true});

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.style.display = expanded ? 'none' : 'flex';
    });
    // Close on link (mobile)
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && getComputedStyle(toggle).display !== 'none'){
        toggle.setAttribute('aria-expanded','false');
        menu.style.display = 'none';
      }
    });
  }

  // Current year in footer
  const y = document.getElementById('year');
  if (y){ y.textContent = new Date().getFullYear(); }
})();
