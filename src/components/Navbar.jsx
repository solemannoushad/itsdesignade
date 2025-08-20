'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { scrollToSection } from '../utils/helper';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

function Navbar() {
  const logoWrapperRef = useRef(null);
  const scrollTweensRef = useRef([]);

  useGSAP(() => {
    const logo = logoWrapperRef.current;
    if (!logo) return;

    const handleMouseMove = (e) => {
      const bounds = logo.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;

      gsap.to(logo, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const resetPosition = () => {
      gsap.to(logo, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
    };

    logo.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', resetPosition);

  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      scrollTweensRef.current.forEach(tween => {
        if (tween) tween.kill();
      });
    };
  }, []);

  return (
    <nav id='top' className='flex absolute w-screen justify-between items-center py-10 px-24 bg-transparent z-50'>
      <ul className='flex gap-10'>
        <li><a className='nav-a text-xl font-medium text-[#c2c2c2]' href="" onClick={(e) => scrollToSection('#services', e, scrollTweensRef)}>Services</a></li>
        <li><Link className='nav-a text-xl font-medium text-[#c2c2c2]' href="/portfolio" >Portfolio</Link></li>
      </ul>

      <Link href={"/"} ref={logoWrapperRef} className="cursor-pointer flex items-center justify-center">
        <Image src="/images/logo.svg" className='w-[45%]' alt="ThinkLoom" width={200} height={100} />
      </Link>

      <ul className='flex gap-10'>
        <li><a className='nav-a text-xl font-medium text-[#c2c2c2]' href="/">Blog</a></li>
        <li><a className='nav-a text-xl font-medium text-[#c2c2c2]' href="" onClick={(e) => scrollToSection('#contact', e, scrollTweensRef)}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
