/* Gi Village — site interactions */
(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      toggle.innerHTML = expanded ? '&times;' : '&#9776;';
    });
    // close menu when a link is clicked
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '&#9776;';
      }
    });
  }

  /* --- Contact / enquiry form (mailto fallback, no backend) --- */
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var name = form.querySelector('#f-name');
      var email = form.querySelector('#f-email');
      var msg = form.querySelector('#f-message');
      var product = form.querySelector('#f-product');

      if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
        status.className = 'err';
        status.textContent = 'Please fill in your name, email and message.';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        status.className = 'err';
        status.textContent = 'Please enter a valid email address.';
        return;
      }

      var subject = encodeURIComponent('Enquiry: ' + (product ? product.value : 'General'));
      var body = encodeURIComponent(
        'Name: ' + name.value.trim() + '\n' +
        'Email: ' + email.value.trim() + '\n' +
        'Product: ' + (product ? product.value : '—') + '\n\n' +
        msg.value.trim()
      );
      var mailto = 'mailto:Jerry888.xu@gmail.com?subject=' + subject + '&body=' + body;
      window.location.href = mailto;

      status.className = 'ok';
      status.textContent = 'Your email client has been opened — please press send to complete the enquiry.';
      form.reset();
    });
  }

  /* --- Lightbox for gallery images --- */
  var overlay = null;
  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.style.cssText =
      'display:none;position:fixed;inset:0;background:rgba(15,18,40,.92);z-index:999;' +
      'align-items:center;justify-content:center;cursor:zoom-out;padding:24px;';
    var img = document.createElement('img');
    img.style.cssText = 'max-width:94vw;max-height:92vh;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,.5);';
    overlay.appendChild(img);
    overlay.addEventListener('click', function () { overlay.style.display = 'none'; });
    document.body.appendChild(overlay);
    return overlay;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-lightbox]');
    if (!a) return;
    e.preventDefault();
    var ov = ensureOverlay();
    ov.querySelector('img').src = a.getAttribute('href');
    ov.style.display = 'flex';
  });

  /* --- Scroll reveal --- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = '1';
          en.target.style.transform = 'translateY(0)';
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      io.observe(el);
    });
  }

  /* --- Footer year --- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* --- Active nav highlight --- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path.indexOf('products') === 0 && href === 'products.html')) {
      a.classList.add('active');
    }
  });
})();
