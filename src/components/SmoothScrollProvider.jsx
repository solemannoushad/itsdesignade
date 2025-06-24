'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother)
    if (!window.ScrollSmootherInstance) {
      window.ScrollSmootherInstance = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1
      })
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
} 