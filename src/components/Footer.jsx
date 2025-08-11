'use client'

import Image from 'next/image'
import React from 'react'
import BackToTop from './BackToTop'

function Footer() {
  return (
    <footer className='bg-white text-black py-16 flex flex-col gap-16'>

      <BackToTop />

      <div className='flex justify-center'>
        <Image src={'/images/plain-logo-black.svg'}  width={1000} height={100} alt='designade' className='w-[70%]' />
      </div>
      <div className="divider w-[80%] h-[1px] bg-black mx-auto"></div>
      <div className='flex gap-x-36 px-16 justify-center'>
        <div className='footer-links flex flex-col gap-4'>
          <h4 className='text-4xl font-bold'>Company</h4>
          <ul className='flex flex-col gap-2'>
            <li><a href="" className='text-xl font-kiona'>Services</a></li>
            <li><a href="" className='text-xl font-kiona'>Portfolio</a></li>
            <li><a href="" className='text-xl font-kiona'>Blogs</a></li>
          </ul>
        </div>
        <div className='footer-links flex flex-col gap-4'>
          <h4 className='text-4xl font-bold'>Policies</h4>
          <ul className='flex flex-col gap-2'>
            <li><a href="" className='text-xl font-kiona'>Terms & Condition</a></li>
            <li><a href="" className='text-xl font-kiona'>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3 justify-center text-center items-center'>
        <div className='flex items-center justify-center'><Image src={'/images/plain-logo-black.svg'}  width={100} height={100} alt='designade' className='' /> &nbsp; <span className='text-lg'> | 2025. All rights reserved</span></div>
        <div className='flex items-center justify-center'><span className='text-lg font-kiona'> POWERED BY:</span> &nbsp; <Image src={'/images/plain-logo-black.svg'}  width={100} height={100} alt='designade' className='' />  </div>
      </div>

    </footer>
  )
}

export default Footer
