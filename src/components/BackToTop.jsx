import gsap from 'gsap';
import React from 'react'

function BackToTop() {
  return (
    <a className='fixed right-14 bottom-14 bg-black p-5 rounded-md cursor-pointer' onClick={e => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: { y: '#top', offsetY: 0 },
          duration: 1,
          ease: 'power2.out',
          onComplete: () => {
            if (typeof window !== 'undefined' && ScrollTrigger) {
              // ScrollTrigger.refresh();
            }
          }
        });
      }}>
      <i className="ri-arrow-up-line text-white text-3xl"></i>
    </a>
  )
}

export default BackToTop
