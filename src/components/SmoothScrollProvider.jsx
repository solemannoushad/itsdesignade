'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
    
    // Only create ScrollSmoother if it doesn't exist
    if (!window.ScrollSmootherInstance) {
      window.ScrollSmootherInstance = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        // Add ScrollTrigger compatibility
        ignoreMobileResize: true,
        normalizeScroll: true
      })
    }

    // Return cleanup function
    return () => {
      if (window.ScrollSmootherInstance) {
        window.ScrollSmootherInstance.kill();
        window.ScrollSmootherInstance = null;
      }
    };
  }, [])

  return (
    <div id="smooth-wrapper" className='bg-black'>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
} 