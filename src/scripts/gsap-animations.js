// Advanced GSAP Animations - Yolo Design System
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set default GSAP settings
  gsap.defaults({
    duration: 0.8,
    ease: "power2.out"
  });

  // Initialize all animation modules
  initScrollAnimations();
  initNavAnimations();
  initCounterAnimations();
  initCarouselAnimations();
  initHoverAnimations();
  initStaggerAnimations();
  initRevealAnimations();
  initMorphAnimations();
});

// Advanced scroll-triggered animations
function initScrollAnimations() {
  // Enhanced fade-in animations
  gsap.utils.toArray('.animate-fade-in').forEach((element) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Advanced slide animations
  gsap.utils.toArray('.animate-slide-left').forEach((element) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: -100,
        rotation: -5
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  gsap.utils.toArray('.animate-slide-right').forEach((element) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: 100,
        rotation: 5
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Advanced scale animations
  gsap.utils.toArray('.animate-scale-in').forEach((element) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.8,
        rotation: 10
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Hero section parallax effect
  const heroSection = document.querySelector('.hero-parallax');
  if (heroSection) {
    gsap.to(heroSection, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }
}

// Enhanced navigation animations
function initNavAnimations() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  // Smooth navigation show/hide with GSAP
  let lastScrollY = 0;
  let navTimeline = gsap.timeline({ paused: true });

  navTimeline.to(nav, {
    y: "-100%",
    duration: 0.5,
    ease: "power3.inOut"
  });

  ScrollTrigger.create({
    start: "top -100",
    end: 99999,
    onUpdate: (self) => {
      const currentScrollY = self.scroll();
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down
        navTimeline.play();
      } else {
        // Scrolling up
        navTimeline.reverse();
      }
      
      lastScrollY = currentScrollY;
    }
  });

  // Dropdown animations
  gsap.utils.toArray('[data-dropdown-toggle]').forEach((trigger) => {
    const dropdownId = trigger.getAttribute('data-dropdown-toggle');
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(dropdown, 
      {
        opacity: 0,
        y: 20,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      }
    );

    trigger.parentElement?.addEventListener('mouseenter', () => tl.play());
    trigger.parentElement?.addEventListener('mouseleave', () => tl.reverse());
  });
}

// Advanced counter animations
function initCounterAnimations() {
  gsap.utils.toArray('.counter').forEach((counter) => {
    const target = parseInt(counter.dataset.target || counter.textContent || '0');
    const suffix = counter.dataset.suffix || '';
    
    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(counter, 
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              counter.textContent = Math.floor(this.targets()[0].textContent) + suffix;
            }
          }
        );
      }
    });
  });
}

// Carousel/slider functionality with GSAP
function initCarouselAnimations() {
  gsap.utils.toArray('.yolo-carousel').forEach((carousel) => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    if (slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize carousel
    gsap.set(slides, { xPercent: (i) => i * 100 });

    function goToSlide(index) {
      const tl = gsap.timeline();
      
      tl.to(slides, {
        xPercent: (i) => (i - index) * 100,
        duration: 0.8,
        ease: "power3.inOut"
      });

      // Update indicators
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });

      currentSlide = index;
    }

    // Navigation handlers
    nextBtn?.addEventListener('click', () => {
      goToSlide((currentSlide + 1) % totalSlides);
    });

    prevBtn?.addEventListener('click', () => {
      goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
    });

    // Indicator handlers
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });

    // Auto-play functionality
    if (carousel.dataset.autoplay !== 'false') {
      let autoplayInterval = setInterval(() => {
        goToSlide((currentSlide + 1) % totalSlides);
      }, 5000);

      // Pause on hover
      carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
      carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
          goToSlide((currentSlide + 1) % totalSlides);
        }, 5000);
      });
    }
  });
}

// Enhanced hover animations
function initHoverAnimations() {
  // Card hover effects
  gsap.utils.toArray('.hover-lift').forEach((card) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(card, {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      duration: 0.3,
      ease: "power2.out"
    });

    card.addEventListener('mouseenter', () => tl.play());
    card.addEventListener('mouseleave', () => tl.reverse());
  });

  // Button hover effects
  gsap.utils.toArray('.btn-primary, .btn-secondary').forEach((button) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(button, {
      scale: 1.05,
      duration: 0.2,
      ease: "back.out(1.7)"
    });

    button.addEventListener('mouseenter', () => tl.play());
    button.addEventListener('mouseleave', () => tl.reverse());
  });

  // Icon animations
  gsap.utils.toArray('.animate-icon').forEach((icon) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(icon, {
      rotation: 360,
      scale: 1.2,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

    icon.addEventListener('mouseenter', () => tl.play());
    icon.addEventListener('mouseleave', () => tl.reverse());
  });
}

// Stagger animations for groups
function initStaggerAnimations() {
  // Feature cards stagger
  gsap.utils.toArray('.grid-feature-cards').forEach((grid) => {
    const cards = grid.querySelectorAll('.card, .card-feature, .card-elevated');
    
    gsap.fromTo(cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Statistics grid stagger
  gsap.utils.toArray('.grid-stats').forEach((grid) => {
    const stats = grid.querySelectorAll('.text-center, .stat-item');
    
    gsap.fromTo(stats,
      {
        opacity: 0,
        y: 40,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Navigation menu stagger
  const navItems = document.querySelectorAll('[data-testid^="nav-item"]');
  if (navItems.length > 0) {
    gsap.fromTo(navItems,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5
      }
    );
  }
}

// Advanced scroll-based reveal animations
function initRevealAnimations() {
  gsap.utils.toArray('.reveal-text').forEach((element) => {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => 
      `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    const chars = element.querySelectorAll('span');
    
    gsap.fromTo(chars,
      {
        opacity: 0,
        y: 20,
        rotation: 10
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.1,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

// Morphing animations for SVGs
function initMorphAnimations() {
  gsap.utils.toArray('.morph-icon').forEach((icon) => {
    const paths = icon.querySelectorAll('path');
    
    ScrollTrigger.create({
      trigger: icon,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(paths,
          {
            opacity: 0,
            scale: 0.5,
            rotation: 180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1, 0.8)"
          }
        );
      }
    });
  });
}

// Export utilities for external use
window.YoloAnimations = {
  fadeIn: (element, delay = 0) => {
    gsap.fromTo(element,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: "power2.out" }
    );
  },
  
  slideIn: (element, direction = 'left', delay = 0) => {
    const x = direction === 'left' ? -100 : 100;
    gsap.fromTo(element,
      { opacity: 0, x },
      { opacity: 1, x: 0, duration: 0.8, delay, ease: "back.out(1.7)" }
    );
  },
  
  scaleIn: (element, delay = 0) => {
    gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay, ease: "elastic.out(1, 0.8)" }
    );
  }
};