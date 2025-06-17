import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className='h-full overflow-x-hidden'>
        <div className='bg-black relative flex flex-col justify-center items-center h-full'>
            <video autoPlay loop muted className='w-[90%] mx-auto h-full object-cover'>
                <source src="/videos/bg-video.mp4" type="video/mp4" />
            </video>
            <Image src={'/images/logo.svg'}  width={1000} height={100} alt='designade' className='absolute bottom-0 w-[75%]' style={{mixBlendMode: 'difference'}} />
        </div>
    </section>
  )
}

export default Hero
