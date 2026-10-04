// Mobile nav toggle + nav shadow on scroll
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var nav = document.getElementById('nav');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 8) {
      nav.style.boxShadow = '0 4px 16px rgba(18,57,91,0.10)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });
})();
