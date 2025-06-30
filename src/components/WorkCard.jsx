'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CardTags = ({title}) => {
    return(
        <div className='px-6 text-lg py-2 rounded-full capitalize border-2 border-white'>{title}</div>
    )
}

const CardCategory = ({title}) => {
    return(
        <div className='card-category-pill text-lg capitalize'> {title} </div>
    )
}

function WorkCard({img, tags, tools, title, objectPosition}) {

    const cursorRef = useRef(null);
    const wrapperRef = useRef(null);
    
    useEffect(() => {
        const customCursor = cursorRef.current;
        const wrapper = wrapperRef.current;

        const handleMouseEnter = (e) => {
            // Get mouse position relative to the wrapper
            const wrapperRect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - wrapperRect.left;
            const mouseY = e.clientY - wrapperRect.top;

            // Set the custom cursor's position to where the mouse entered
            gsap.set(customCursor, {
                x: mouseX,
                y: mouseY,
                opacity: 0
            });

            // Animate opacity in
            gsap.to(customCursor, {
                opacity: 1,
                duration: 1
            });

            console.log("Mouse Enter at", mouseX, mouseY);
        }

        const handleMouseMove = (e) => {
            const wrapperRect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - wrapperRect.left;
            const mouseY = e.clientY - wrapperRect.top;
            gsap.to(customCursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.2,
                overwrite: 'auto',
            });
        }

        const handleMouseLeave = () => {
            gsap.to(customCursor, {
                opacity: 0,
                duration: 0.5
            });
        }

        if (wrapper) {
            wrapper.addEventListener("mouseenter", handleMouseEnter);
            wrapper.addEventListener("mousemove", handleMouseMove);
            wrapper.addEventListener("mouseleave", handleMouseLeave);
        }
    
        return () => {
            if (wrapper) {
                wrapper.removeEventListener("mouseenter", handleMouseEnter);
                wrapper.removeEventListener("mousemove", handleMouseMove);
                wrapper.removeEventListener("mouseleave", handleMouseLeave);
            }
        };

    } , [])

  return (
    <div className='flex flex-col w-full md:w-[1000px] min-h-[60vh] md:h-screen flex-shrink-0'>
      <div ref={wrapperRef} className="work-card-wrapper overflow-hidden border-l-1 border-l-slate-200 w-full h-full flex flex-col relative">
        <div ref={cursorRef} className="cursor-btn opacity-0 absolute flex items-center justify-center bg-[#131313] text-white px-8 py-3 rounded-full text-2xl uppercase font-kiona font-bold">
            Checkout
        </div>
        <div className="work-card-img w-full h-[40vw] md:h-[70%] min-h-[200px] md:min-h-0">
            <Image src={`/images/${img}`} className={`w-full h-full object-cover ${objectPosition === "top" ? "object-top" : "object-center"}`} width={1400} height={1400} alt={title} />
        </div>
        <div className="work-card-tags flex w-full p-5 items-center justify-between flex-wrap gap-2 md:gap-0">
            <div className="card-tags flex items-center gap-2 md:gap-4 flex-wrap">
                {
                    tags.map((tag, index) => {
                        return <CardTags key={index} title={tag} />
                    })
                }
            </div>
            <div className="card-category flex items-center gap-4 md:gap-7 flex-wrap">
                {
                    tools.map((tool, index) => {
                        return <CardCategory key={index} title={tool} />
                    })
                }
            </div>
        </div>
        <div className="work-card-title flex items-center justify-center py-6 md:py-10">
            <p className={`text-2xl md:text-6xl font-medium font-hero`}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard