import gsap from 'gsap';

/**
 * Smoothly scrolls to a target section using GSAP
 * @param {string} targetId - The CSS selector for the target element
 * @param {Event} e - The event object (will be prevented)
 * @param {Array} scrollTweensRef - Reference to store scroll tweens for cleanup
 */
export const scrollToSection = (targetId, e, scrollTweensRef) => {
  e.preventDefault();
  
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
    ease: 'power2.out'
  });
  
  if (scrollTweensRef && scrollTweensRef.current) {
    scrollTweensRef.current.push(newTween);
  }
  
  return newTween;
};
