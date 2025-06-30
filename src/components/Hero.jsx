'use client'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Hero() {
  const heroImgRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const img = heroImgRef.current
    const dest = document.getElementById('services-title')
    if (!img || !dest) return

    const destRect = dest.getBoundingClientRect()
    const imgRect = img.getBoundingClientRect()

    // Calculate destination center
    const destCenterX = destRect.left + destRect.width / 2
    const destCenterY = destRect.top + destRect.height / 2
    const imgCenterX = imgRect.left + imgRect.width / 2
    const imgCenterY = imgRect.top + imgRect.height / 2

    const x = destCenterX - imgCenterX
    const y = destCenterY - imgCenterY

    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 60%',
        end: 'bottom top',
        scrub: 1.25,
      },
      x,
      y,
      scale: 0.4,
    })

    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 20%',
        end: 'bottom top',
        scrub: 1.25,
        markers: true
      },
      opacity: 0,
    })
  }, [])

  return (
    <section className='h-screen'>
        <div className='relative flex flex-col justify-center items-center h-full'>
            <video autoPlay loop muted className='w-[90%] mx-auto h-full object-contain'>
                <source src="/videos/bg-element.mp4" type="video/mp4" />
            </video>
            <Image ref={heroImgRef} src={'/images/plain-logo-white.svg'}  width={1000} height={100} alt='designade' className='absolute bottom-15 w-[70%] z-30' style={{mixBlendMode: 'difference'}} />
        </div>
    </section>
  )
}

export default Hero
