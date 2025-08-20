'use client'

import Image from 'next/image'
import React from 'react'
import BackToTop from './BackToTop'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Footer() {


  useGSAP(() => {
    gsap.to('.footer' , {
      scrollTrigger: {
        trigger: '.footer',
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      }
    })

    // Scale the footer logo from 0.5 to 1 while scrolling through the pinned footer
    gsap.from('.footer-logo', {
      scale: 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: '+=100%',
        scrub: true,
      }
    })
  })


  return (
    <footer className='bg-white text-black py-16 flex flex-col gap-16 footer'>
      <BackToTop />
      <div className='flex justify-center'>
        <Image src={'/images/plain-logo-black.svg'}  width={1000} height={100} alt='ThinkLoom' className='w-[70%] footer-logo' />
      </div>
      <div className="w-[80%] h-0 border-t border-black mx-auto"></div>
      <div className='flex gap-x-36 px-16 justify-center'>
        <div className='footer-links flex flex-col gap-4'>
          <h4 className='text-4xl font-bold'>Company</h4>
          <ul className='flex flex-col gap-2'>
            <li><a href="" className='text-xl font-kiona'>Services</a></li>
            <li><a href="" className='text-xl font-kiona'>Portfolio</a></li>
            {/* <li><a href="" className='text-xl font-kiona'>Blogs</a></li> */}
          </ul>
        </div>
        <div className='footer-links flex flex-col gap-4'>
          <h4 className='text-4xl font-bold'>Policies</h4>
          <ul className='flex flex-col gap-2'>
            <li><Link href="/terms-and-conditions" className='text-xl font-kiona'>Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className='text-xl font-kiona'>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3 justify-center text-center items-center'>
        <div className='flex items-center justify-center'><span className='text-lg'>ThinkLoom Solutions | 2025. All rights reserved</span></div>
        <div className='flex items-center justify-center'><span className='text-lg font-kiona'> POWERED BY:</span> &nbsp; <Image src={'/images/plain-logo-black.svg'}  width={100} height={100} alt='ThinkLoom' className='' />  </div>
      </div>
    </footer>
  )
}

export default Footer