// Enhanced Animation utilities for Yolo Design System with GSAP integration

// Check if GSAP is available and use enhanced animations, fallback to CSS otherwise
const useGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

if (useGSAP) {
  // GSAP-powered animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Enhanced scroll-triggered animations
  gsap.utils.toArray('.animate-fade-in').forEach((element) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  gsap.utils.toArray('.animate-slide-left').forEach((element) => {
    gsap.fromTo(element,
      { opacity: 0, x: -100, rotation: -5 },
      {
        opacity: 1, x: 0, rotation: 0,
        duration: 1.2, ease: "back.out(1.7)",
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
      { opacity: 0, x: 100, rotation: 5 },
      {
        opacity: 1, x: 0, rotation: 0,
        duration: 1.2, ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Enhanced counter animations
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

} else {
  // Fallback to CSS-based animations
  console.log('GSAP not available, using CSS fallback animations');
  
  // Basic Intersection Observer for CSS animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        const delay = entry.target.dataset.delay || 0;
        if (delay > 0) {
          entry.target.style.animationDelay = `${delay}ms`;
        }
      }
    });
  }, observerOptions);

  // Basic counter animation function
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);
      
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  // Initialize basic animations
  document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-slide-up'
    );
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    // Initialize counters
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          const duration = parseInt(entry.target.dataset.duration) || 2000;
          animateCounter(entry.target, target, duration);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  });
}

// Utility functions available globally
window.YoloAnimations = window.YoloAnimations || {
  fadeIn: (element, delay = 0) => {
    if (useGSAP) {
      gsap.fromTo(element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay, ease: "power2.out" }
      );
    } else {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      setTimeout(() => {
        element.style.transition = 'all 0.8s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay * 1000);
    }
  },
  
  slideIn: (element, direction = 'left', delay = 0) => {
    const x = direction === 'left' ? -100 : 100;
    if (useGSAP) {
      gsap.fromTo(element,
        { opacity: 0, x },
        { opacity: 1, x: 0, duration: 0.8, delay, ease: "back.out(1.7)" }
      );
    } else {
      element.style.opacity = '0';
      element.style.transform = `translateX(${x}px)`;
      setTimeout(() => {
        element.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
      }, delay * 1000);
    }
  }
};