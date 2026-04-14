// Nav scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 48);
}, { passive: true });

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Marquee duplicate for seamless loop
const track = document.querySelector('.marquee-track');
if (track) track.innerHTML += track.innerHTML;

// Scroll fade-in
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.class-card, .inst-card, .testi-card, .stat, .split-text, .split-img, .problem-text'
).forEach(el => { el.classList.add('fade-up'); io.observe(el); });

// CTA form
document.querySelector('.cta-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '신청이 완료되었습니다';
  btn.style.background = '#7aaf7a';
  btn.style.borderColor = '#7aaf7a';
  btn.disabled = true;
});
