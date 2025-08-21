"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function TextBgAnimation({text, className, bgColor = "red"}) {


    useGSAP(() => {
        gsap.to(".bg" , {
            width: "calc(100% + 18px)"
        })
    })

  return (
    <div className='relative inline-block py-2'>
      <div className={`relative z-10 ${className}`}>{text}</div>
      <div className="bg z-0 w-0 h-full absolute top-0 -left-2 pointer-events-none" style={{backgroundColor: bgColor}}></div>
    </div>
  )
}

export default TextBgAnimation
