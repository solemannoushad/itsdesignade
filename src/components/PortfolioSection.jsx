"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function PortfolioSection() {
  const [selected, setSelected] = React.useState('all');

  const smImages = [
    '/images/portfolio/sm/1.jpg',
    '/images/portfolio/sm/2.png',
    '/images/portfolio/sm/3.png',
    '/images/portfolio/sm/4.png',
    '/images/portfolio/sm/5.png',
    '/images/portfolio/sm/6.png',
    '/images/portfolio/sm/7.png',
    '/images/portfolio/sm/8.jpg',
    '/images/portfolio/sm/9.png',
    '/images/portfolio/sm/10.png',
    '/images/portfolio/sm/11.png',
    '/images/portfolio/sm/12.png',
    '/images/portfolio/sm/13.png',
    '/images/portfolio/sm/14.png',
    '/images/portfolio/sm/15.png',
    '/images/portfolio/sm/16.png',
  ];
  const gdImages = [
    '/images/portfolio/gd/1.png',
    '/images/portfolio/gd/2.png',
    '/images/portfolio/gd/3.png',
    '/images/portfolio/gd/4.png',
    '/images/portfolio/gd/5.png',
    '/images/portfolio/gd/6.jpg',
    '/images/portfolio/gd/7.jpg',
    '/images/portfolio/gd/8.jpg',
    '/images/portfolio/gd/9.jpg',
    '/images/portfolio/gd/10.png',
    '/images/portfolio/gd/11.png',
    '/images/portfolio/gd/12.png',
    '/images/portfolio/gd/13.png',
    '/images/portfolio/gd/14.png',
    '/images/portfolio/gd/15.png',
  ];

  const images = React.useMemo(() => {
    if (selected === 'all') return [...smImages, ...gdImages];
    if (selected === 'sm') return smImages;
    if (selected === 'gd') return gdImages;
    return [];
  }, [selected]);

  useGSAP(() => [
    gsap.to('.portfolio-main' , {
      scrollTrigger: {
        trigger: '.portfolio-main',
        start: "bottom bottom",
        pin: true,
        pinSpacing: false
      }
    })
  ])

  return (
    <div className='bg-black text-white portfolio-main'>
      <div className="portfolio-titles-main ml-28 flex gap-3 py-10">
        {[
          { id: 'all', label: 'All' },
          { id: 'sm', label: 'Social Media' },
          { id: 'gd', label: 'Graphic Designing' }
        ].map(option => (
          <label className='flex items-center gap-3' htmlFor={option.id} key={option.id}>
            <span className={`cursor-pointer text-2xl ${selected === option.id ? 'text-primary' : 'text-white'}`}>{option.label}</span>
            {option.id !== 'gd' && <div className="w-2 h-2 bg-white rounded-full"></div>}
            <input
              type="radio"
              name="portfolio"
              id={option.id}
              checked={selected === option.id}
              onChange={() => setSelected(option.id)}
              className='hidden'
            />
          </label>
        ))}
      </div>
      <div className="portfolio-data">
        {
          images.map((image) => {
            return(
              <Image
              src={image}
              width={500}
              height={500}
              alt='ThinkLoom Portfolio'
            />
            )
          })
        }
      </div>
    </div>
  )
}

export default PortfolioSection
