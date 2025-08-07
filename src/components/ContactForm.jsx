'use client'
import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger, useGSAP);

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
      },
    });
    gsap.utils.toArray('.inputField').forEach((el) => {
      gsap.from(el, {
        width: "20%",
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 80%"
        }
      });
    });
    ScrollTrigger.refresh();
  } , {scope: contactFormRef})

  const [creds, setCreds] = useState({
    services: [],
    name : "",
    email: "",
    companyName: "",
    designation: "",
    phone: "",
    description: "",
  })


  return (
    <section ref={contactFormRef} id='contact' className='w-screen bg-black text-white z-30 py-32 rounded-tl-[250px] rounded-tr-[250px]'>
      <h1 className='font-bold uppercase text-center text-8xl tracking-wider'>start a project</h1>

      <div className="contact-form-wrapper">
        <form action="" className='flex flex-col gap-6 px-10 py-3 w-[60%] ml-32 pt-20'>
          {/* <label htmlFor="">You need to do</label>
          <input type="radio" name="service" id="service" value={"Social Media"} /> */}

          <input className='border-0 border-b-1 border-b-white text-4xl my-3 py-5 px-3 focus:border-b-primary focus:outline-none bg-black autofill:bg-black inputField' type="text" id='name' name='name' placeholder='Name' />
          <input className='border-0 border-b-1 border-b-white text-4xl my-3 py-5 px-3 focus:border-b-primary focus:outline-none bg-black autofill:bg-black inputField' type="email" id='Email' name='Email' placeholder='Email' />
          <input className='border-0 border-b-1 border-b-white text-4xl my-3 py-5 px-3 focus:border-b-primary focus:outline-none bg-black autofill:bg-black inputField' type="text" id='companyName' name='companyName' placeholder='Company Name' />
          <input className='border-0 border-b-1 border-b-white text-4xl my-3 py-5 px-3 focus:border-b-primary focus:outline-none bg-black autofill:bg-black inputField' type="text" id='designation' name='designation' placeholder='Designation' />
          <input className='border-0 border-b-1 border-b-white text-4xl my-3 py-5 px-3 focus:border-b-primary focus:outline-none bg-black autofill:bg-black inputField' type="tel" id='phone' name='phone' placeholder='Phone Number' />
          <textarea className='border-0 border-b-1 border-b-white text-4xl my-3 py-5 px-3 focus:outline-none focus:border-b-primary bg-black autofill:bg-black inputField' name="description" id="description" placeholder='Description'></textarea>

        </form>
      </div>

    </section>
  )
}

export default ContactForm