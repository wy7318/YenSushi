// Function to check if an element is in the viewport
export const isElementInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
};

// Function to handle scroll animations
export const handleScrollAnimations = (): void => {
  const animatedElements = document.querySelectorAll('.fade-in');
  
  animatedElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    }
  });
};

// Function to initialize parallax effect
export const initParallax = (): void => {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
      const yPos = -(scrolled * speed);
      
      const el = element as HTMLElement;
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
};

// Function to handle hover animations
export const handleHoverAnimations = (): void => {
  const hoverElements = document.querySelectorAll('.hover-animate');
  
  hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('hovered');
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('hovered');
    });
  });
};

// Initialize all animations
export const initAnimations = (): void => {
  handleScrollAnimations();
  initParallax();
  handleHoverAnimations();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimations);
};