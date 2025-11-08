document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(faq => {
        faq.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

window.openCalendly = function() {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/asenlyubomirov35/30min?hide_gdpr_banner=1&background_color=1a1333&text_color=ffffff&primary_color=9333ea'
  });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const animatedElements = document.querySelectorAll('.card, .hero h1, .hero p, .btn');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(element => {
  observer.observe(element);
});
