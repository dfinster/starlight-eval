// Animation utilities for Yolo-style interactions

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      
      // Add staggered delay for multiple elements
      const delay = entry.target.dataset.delay || 0;
      if (delay > 0) {
        entry.target.style.animationDelay = `${delay}ms`;
      }
    }
  });
}, observerOptions);

// Counter animation function
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

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Observe elements with animation classes
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

// Export functions for use in other modules
export { observer, animateCounter };