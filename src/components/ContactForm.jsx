'use client'
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(useGSAP, ScrollTrigger);

function ContactForm() {

  const contactFormRef = useRef(null);

  useGSAP(()=> {
    gsap.from(contactFormRef.current, {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      scrollTrigger: {
        trigger: contactFormRef.current,
        start: "top 80%",
        end: "+=300",
        scrub: 1.25,
        markers: true,
      },
    })
  })


  return (
    <section ref={contactFormRef} id='contact' className='w-screen bg-black text-white z-30 py-32 rounded-tl-[250px] rounded-tr-[250px] h-screen'>
      <h1 className='font-bold uppercase text-center text-8xl tracking-wider'>start a project</h1>
    </section>
  )
}

export default ContactForm