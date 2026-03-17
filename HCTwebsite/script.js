/* Harry's Clean Team — Site Scripts */

// ---------- Nav: scroll shadow + mobile menu ----------
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu   = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});


// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(
  '.service-card, .feature, .testimonial, .section-header, .why-us__text, .contact__text, .contact__form'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));


// ---------- Contact form ----------
const form = document.getElementById('contactForm');

form.addEventListener('submit', () => {
  const service = form.querySelector('#service').value;
  const message = form.querySelector('#message').value.trim();
  const parts = [];
  if (service) parts.push('Service: ' + service);
  if (message) parts.push(message);
  form.querySelector('#noteField').value = parts.join('\n\n');
});
