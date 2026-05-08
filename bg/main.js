async function loadNavbar() {
  try {
    const response = await fetch('navbar.html');
    const navbarHTML = await response.text();
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = navbarHTML;
    document.body.insertBefore(navbarContainer, document.body.firstChild);
	
	// ===== AUTO ACTIVE NAV =====
	const currentPath = window.location.pathname.replace(/\/$/, "");

	const navLinks = document.querySelectorAll(".nav-link[data-path]");

	navLinks.forEach(link => {
	  const linkPath = link.getAttribute("data-path").replace(/\/$/, "");

	  if (linkPath === currentPath) {
		link.classList.add("active");
	  } else {
		link.classList.remove("active");
	  }
	});
	
	// ===== LANGUAGE SWITCH =====
const langOptions = document.querySelectorAll(".lang-option");

langOptions.forEach(option => {
  option.addEventListener("click", function (e) {
    e.preventDefault();

    const selectedLang = this.getAttribute("data-lang");
    const currentPath = window.location.pathname;

    let newPath = currentPath;

    const isBG = currentPath.startsWith("/bg");

    // BG -> EN
    if (selectedLang === "en" && isBG) {
      newPath = currentPath.replace(/^\/bg/, "") || "/";
    }

    // EN -> BG
    if (selectedLang === "bg" && !isBG) {
      newPath = "/bg" + (currentPath === "/" ? "/" : currentPath);
    }

    window.location.href = newPath;
  });
});

    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    function openMobileMenu() {
      mobileMenu.classList.add('active');
      mobileOverlay.classList.add('active');
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
    }

    mobileToggle.addEventListener('click', openMobileMenu);
    mobileClose.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);

    const header = document.getElementById('header');
    let lastScrollY = 0;
    let showHeader = true;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (showHeader) {
          header.classList.add('hidden');
          showHeader = false;
        }
      } else {
        if (!showHeader) {
          header.classList.remove('hidden');
          showHeader = true;
        }
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  } catch (error) {
    console.error('Error loading navbar:', error);
  }
}

async function loadFooter() {
  try {
    const response = await fetch('footer.html');
    const footerHTML = await response.text();
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer);

    const footer = document.querySelector('.atlantex-footer');
    if (footer) {
      footer.style.opacity = '0';
      footer.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        footer.style.opacity = '1';
      }, 100);
    }
  } catch (error) {
    console.error('Error loading footer:', error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();

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

// Initialize Lucide icons
lucide.createIcons();

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs2 = document.querySelectorAll('.tab-button2');
    const tabContents2 = document.querySelectorAll('.tab-content2');
    const tabsNav2 = document.querySelector('.tabs-nav2');
    const scrollLeftBtn2 = document.getElementById('scrollLeft2');
    const scrollRightBtn2 = document.getElementById('scrollRight2');

    // Tab switching
    tabs2.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab2');

            // Remove active class from all tabs and contents
            tabs2.forEach(t => t.classList.remove('active'));
            tabContents2.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Scroll functionality
    function updateScrollButtons2() {
        const isScrollable = tabsNav2.scrollWidth > tabsNav2.clientWidth;
        const isAtStart = tabsNav2.scrollLeft <= 0;
        const isAtEnd = tabsNav2.scrollLeft >= tabsNav2.scrollWidth - tabsNav2.clientWidth;

        scrollLeftBtn2.classList.toggle('visible', isScrollable && !isAtStart);
        scrollRightBtn2.classList.toggle('visible', isScrollable && !isAtEnd);
    }

    // Scroll buttons click handlers
    scrollLeftBtn2.addEventListener('click', () => {
        tabsNav2.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRightBtn2.addEventListener('click', () => {
        tabsNav2.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Update scroll buttons visibility
    tabsNav2.addEventListener('scroll', updateScrollButtons2);
    window.addEventListener('resize', updateScrollButtons2);

    // Initial check for scroll buttons
    updateScrollButtons2();

    // Scroll active tab into view on load (horizontal only)
    const activeTab2 = document.querySelector('.tab-button2.active');
    if (activeTab2) {
        setTimeout(() => {
            const tabsNav2 = document.querySelector('.tabs-nav2');
            const tabLeft = activeTab2.offsetLeft;
            const tabWidth = activeTab2.offsetWidth;
            const tabsWidth = tabsNav2.offsetWidth;

            tabsNav2.scrollTo({
                left: tabLeft - (tabsWidth / 2) + (tabWidth / 2),
                behavior: 'smooth'
            });
        }, 100);
    }

    // Add scroll animation for feature cards
    const cards2 = document.querySelectorAll('.feature-card2');

    function checkScroll2() {
        cards2.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state
    cards2.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });

    // Check scroll position
    window.addEventListener('scroll', checkScroll2);
    checkScroll2(); // Initial check
});

// Calendly integration
function openCalendly2() {
    Calendly.initPopupWidget({
        url: 'https://calendly.com/asenlyubomirov35/30min?hide_gdpr_banner=1&background_color=1a1333&text_color=ffffff&primary_color=9333ea'
    });
}

// About page specific functionality
function initAboutPage() {
    // Only run if we're on the about page
    if (document.querySelector('.container4')) {
        // Initialize Lucide icons
        lucide.createIcons();

        // Intersection Observer for fade-in4 animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in4 class
        document.querySelectorAll('.fade-in4').forEach(element => {
            observer.observe(element);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAboutPage();
});

// Legal Pages Common JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the content element (works for both terms and privacy pages)
    const contentElement = document.getElementById('termsContent') || document.getElementById('privacyContent');

    if (contentElement) {
        // Trigger the animation after a short delay to ensure the element is rendered
        setTimeout(() => {
            contentElement.classList.add('animated');
        }, 50);
    }
});
