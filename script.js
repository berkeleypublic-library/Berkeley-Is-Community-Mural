// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
  // close the menu after choosing a link
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });
  // close if a click lands outside the header
  document.addEventListener('click', (e) => {
    if (!siteNav.classList.contains('is-open')) return;
    if (siteNav.contains(e.target) || navToggle.contains(e.target)) return;
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  });
}

// Expand/collapse full artist reflections
document.querySelectorAll('[data-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.toggle);
    if (!target) return;
    const isHidden = target.hasAttribute('hidden');
    if (isHidden) {
      target.removeAttribute('hidden');
      btn.textContent = btn.textContent.replace('Read', 'Hide');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      target.setAttribute('hidden', '');
      btn.textContent = btn.textContent.replace('Hide', 'Read');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// Scroll reveal for major sections
const revealTargets = document.querySelectorAll(
  '.about-inner, .process, .wall-panel, .artist-card, .partner-card, .edi-block, .child-ack, .funder-primary, .thanks-card'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Stretch the creek path to match full document height
function sizeCreek() {
  const creek = document.getElementById('creek');
  if (!creek) return;
  const height = document.body.scrollHeight;
  creek.setAttribute('viewBox', `0 0 100 ${height}`);
  const path = document.getElementById('creek-path');
  if (path) {
    const steps = 8;
    let d = 'M 50 0';
    for (let i = 1; i <= steps; i++) {
      const y = (height / steps) * i;
      const x = i % 2 === 0 ? 22 : 78;
      const cy1 = y - (height / steps) * 0.65;
      d += ` C ${x} ${cy1} ${100 - x} ${y - (height / steps) * 0.25} 50 ${y}`;
    }
    path.setAttribute('d', d);
  }
}
window.addEventListener('load', sizeCreek);
window.addEventListener('resize', sizeCreek);
