"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function BlogsSection() {


  return (
    <div  className='bg-black flex items-center justify-center blogs-main h-[50vh]'>
      <h1 className='capitalize text-4xl'>No data found</h1>
    </div>
  )
}

export default BlogsSection
