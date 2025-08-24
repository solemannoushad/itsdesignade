'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'

export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

    if (!window.ScrollSmootherInstance) {
      window.ScrollSmootherInstance = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
        ignoreMobileResize: true,
        normalizeScroll: true
      })
    }

    // ✅ Scroll to top when route changes
    if (window.ScrollSmootherInstance) {
      window.ScrollSmootherInstance.scrollTo(0, true) 
    }

    return () => {
      if (window.ScrollSmootherInstance) {
        window.ScrollSmootherInstance.kill();
        window.ScrollSmootherInstance = null;
      }
    };
  }, [pathname]) // re-run on route change

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
