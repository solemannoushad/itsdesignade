import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

function BackToTop() {
  const tweenRef = useRef(null)

  const scrollToTop = (e) => {
    e.preventDefault();
    
    // Kill any existing tween to prevent conflicts
    if (tweenRef.current) {
      tweenRef.current.kill()
    }
    
    tweenRef.current = gsap.to(window, {
      scrollTo: { y: '#top', offsetY: 0 },
      duration: 1,
      ease: "circ.inOut"
    });
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill()
      }
    }
  }, [])

  return (
    <a className='fixed right-14 bottom-14 bg-black p-5 rounded-md cursor-pointer' onClick={scrollToTop}>
      <i className="ri-arrow-up-line text-white text-3xl"></i>
    </a>
  )
}

export default BackToTop
