import gsap from 'gsap';

/**
 * Smoothly scrolls to a target section using GSAP
 * @param {string} targetId - The CSS selector for the target element
 * @param {Event} e - The event object (will be prevented)
 * @param {Array} scrollTweensRef - Reference to store scroll tweens for cleanup
 */
export const scrollToSection = (targetId, e, scrollTweensRef) => {
  if (e) e.preventDefault();
  
  // Kill any existing scroll tweens to prevent conflicts
  if (scrollTweensRef && scrollTweensRef.current) {
    scrollTweensRef.current.forEach(tween => {
      if (tween) tween.kill();
    });
    scrollTweensRef.current = [];
  }
  
  const newTween = gsap.to(window, {
    scrollTo: { y: targetId, offsetY: 0 },
    duration: 1,
   ease: "circ.inOut"
  });
  
  if (scrollTweensRef && scrollTweensRef.current) {
    scrollTweensRef.current.push(newTween);
  }
  
  return newTween;
};

/**
 * Handles smooth scrolling to sections when navigating from different pages
 * This function should be called after the page loads to handle URL hash navigation
 * @param {Array} scrollTweensRef - Reference to store scroll tweens for cleanup
 */
export const handlePageLoadScroll = (scrollTweensRef) => {
  // Check if there's a hash in the URL
  if (typeof window !== 'undefined' && window.location.hash) {
    const targetId = window.location.hash;
    
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      scrollToSection(targetId, null, scrollTweensRef);
    }, 100);
  }
};

/**
 * Enhanced scroll function that works for both same-page and cross-page navigation
 * @param {string} targetId - The CSS selector for the target element
 * @param {Event} e - The event object (optional for programmatic calls)
 * @param {Array} scrollTweensRef - Reference to store scroll tweens for cleanup
 * @param {boolean} isCrossPage - Whether this is a cross-page navigation
 */
export const smartScrollToSection = (targetId, e, scrollTweensRef, isCrossPage = false) => {
  if (e) e.preventDefault();
  
  if (isCrossPage) {
    // For cross-page navigation, update the URL and let the page load handler deal with it
    if (typeof window !== 'undefined') {
      window.location.hash = targetId;
    }
    return;
  }
  
  // For same-page navigation, scroll immediately
  return scrollToSection(targetId, e, scrollTweensRef);
};
