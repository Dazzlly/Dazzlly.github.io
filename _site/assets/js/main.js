(function () {
  'use strict';

  // === Year in footer ===
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Mobile menu ===
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      var expanded = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded);
    });
    // Close on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // === Navbar scroll shadow ===
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // === Theme toggle ===
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    var saved = localStorage.getItem('dazzlly-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    themeBtn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
      localStorage.setItem('dazzlly-theme', next);
    });
  }

  // === Fade-in on scroll ===
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

  // === Media player toggle (Twitch / YouTube) ===
  var TWITCH_CHANNEL = 'dazzlly';
  var YOUTUBE_CHANNEL = 'dazzlly';

  var tabTwitch = document.getElementById('tabTwitch');
  var tabYouTube = document.getElementById('tabYouTube');
  var playerBox = document.getElementById('mediaPlayer');

  function buildTwitch() {
    var host = window.location.hostname || 'www.dazzlly.com';
    return '<iframe src="https://player.twitch.tv/?channel=' + TWITCH_CHANNEL +
      '&parent=' + host + '&muted=true&autoplay=false" ' +
      'allowfullscreen title="Twitch ao vivo - Dazzlly"></iframe>';
  }

  function buildYouTube() {
    return '<iframe src="https://www.youtube.com/embed?listType=user_uploads&list=' + YOUTUBE_CHANNEL +
      '" allowfullscreen title="Canal do YouTube - Dazzlly"></iframe>';
  }

  function showTwitch() {
    if (!playerBox) return;
    tabTwitch.classList.add('active');
    tabYouTube.classList.remove('active');
    playerBox.innerHTML = buildTwitch();
  }

  function showYouTube() {
    if (!playerBox) return;
    tabTwitch.classList.remove('active');
    tabYouTube.classList.add('active');
    playerBox.innerHTML = buildYouTube();
  }

  if (tabTwitch && tabYouTube) {
    tabTwitch.addEventListener('click', showTwitch);
    tabYouTube.addEventListener('click', showYouTube);
    // Initialize with Twitch
    showTwitch();
  }

  // === Contact form ===
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = contactForm.querySelector('[name="name"]').value;
      var email = contactForm.querySelector('[name="email"]').value;
      var message = contactForm.querySelector('[name="message"]').value;
      var subject = encodeURIComponent('Contato via portfólio - ' + name);
      var body = encodeURIComponent('Nome: ' + name + '\nEmail: ' + email + '\n\n' + message);
      window.location.href = 'mailto:lucas@dazzlly.com?subject=' + subject + '&body=' + body;
      var success = document.getElementById('formSuccess');
      if (success) success.classList.add('show');
      contactForm.reset();
    });
  }
})();
