"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function PortfolioSection() {
  const [selected, setSelected] = React.useState('all');
  const portfolioRef = useRef(null)
  const [loadedCount, setLoadedCount] = React.useState(0)

  const smImages = [
    '/images/portfolio/sm/4.png',
    '/images/portfolio/sm/5.png',
    '/images/portfolio/sm/6.png',
    '/images/portfolio/sm/11.png',
    '/images/portfolio/sm/7.png',
    '/images/portfolio/sm/15.png',
    '/images/portfolio/sm/14.png',
    '/images/portfolio/sm/12.png',
    '/images/portfolio/sm/13.png',
    '/images/portfolio/sm/8.jpg',
    '/images/portfolio/sm/2.png',
    '/images/portfolio/sm/3.png',
    '/images/portfolio/sm/1.jpg',
    '/images/portfolio/sm/16.png',
    '/images/portfolio/sm/9.png',
    '/images/portfolio/sm/10.png',
  ];
  const gdImages = [
    '/images/portfolio/gd/12.png',
    '/images/portfolio/gd/14.png',
    '/images/portfolio/gd/15.png',
    '/images/portfolio/gd/13.png',
    '/images/portfolio/gd/11.png',
    '/images/portfolio/gd/10.png',
    '/images/portfolio/gd/7.jpg',
    '/images/portfolio/gd/8.jpg',
    '/images/portfolio/gd/1.png',
    '/images/portfolio/gd/9.jpg',
    '/images/portfolio/gd/3.png',
    '/images/portfolio/gd/4.png',
    '/images/portfolio/gd/5.png',
    '/images/portfolio/gd/6.jpg',
    '/images/portfolio/gd/2.png',
  ];

  const images = React.useMemo(() => {
    if (selected === 'all') return [...smImages, ...gdImages];
    if (selected === 'sm') return smImages;
    if (selected === 'gd') return gdImages;
    return [];
  }, [selected]);

  useGSAP(() => {
    if (!portfolioRef.current) return;
    const st = ScrollTrigger.create({
      trigger: portfolioRef.current,
      start: "bottom bottom",
      pin: true,
      markers: true,
      pinSpacing: false,
      invalidateOnRefresh: true
    });
    return () => {
      st.kill();
    };
  });

  React.useEffect(() => {
    const id = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(id);
  }, [images.length]);

  React.useEffect(() => {
    setLoadedCount(0);
  }, [selected]);

  React.useEffect(() => {
    if (images.length > 0 && loadedCount >= images.length) {
      ScrollTrigger.refresh();
    }
  }, [loadedCount, images.length]);

  return (
    <div  className='bg-black portfolio-main'>
      <div className="portfolio-titles-main ml-28 flex gap-5 py-10">
        {[
          { id: 'all', label: 'All' },
          { id: 'sm', label: 'Social Media' },
          { id: 'gd', label: 'Graphic Designing' }
        ].map(option => (
          <label className='flex items-center gap-5' htmlFor={option.id} key={option.id}>
            <span className={`cursor-pointer text-3xl ${selected === option.id ? 'text-primary' : 'text-[#bbbbbb]'}`}>{option.label}</span>
            {option.id !== 'gd' && <div className="w-3 h-3 bg-white rounded-full"></div>}
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
      <div ref={portfolioRef} className="portfolio-data flex flex-wrap content-start gap-10 justify-center pt-10 pb-20">
        {
          images.map((image, index) => {
            return(
              <div key={image} className='rounded-md overflow-hidden group'>
                <Image
                  src={image}
                  width={500}
                  height={500}
                  alt='ThinkLoom Portfolio'
                  className='object-contain group-hover:scale-115 duration-300'
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
                  priority={selected === 'all' && index < 4}
                  onLoad={() => setLoadedCount((c) => c + 1)}
                />
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PortfolioSection
