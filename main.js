// Nav scroll effect
const nav = document.querySelector('.nav-header');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });

document.querySelectorAll('.class-card, .instructor-card, .testimonial-card, .stat-item, .about-text, .about-visual')
  .forEach(el => { el.classList.add('fade-up'); observer.observe(el); });

// CTA form
document.querySelector('.cta-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '신청이 완료되었습니다!';
  btn.style.background = '#7caf7c';
  btn.disabled = true;
});
