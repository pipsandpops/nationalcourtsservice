const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');
const toast = document.getElementById('toast');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => {
    toast.classList.remove('visible');
  }, 2500);
}

const contactButton = document.querySelector('.cta-panel .btn');
if (contactButton) {
  contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    showToast('Your consultation request has been sent.');
  });
}

const heroButton = document.querySelector('.hero-copy .btn-primary');
if (heroButton) {
  heroButton.addEventListener('click', (event) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
      showToast('We are ready to help with your legal matter.');
    }
  });
}
