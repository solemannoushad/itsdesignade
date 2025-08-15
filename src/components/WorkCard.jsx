'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

function WorkCard({img, tags, tools, title, objectPosition, animation}) {

    const cardRef = useRef(null);
    const cursorRef = useRef(null);
    const wrapperRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null)
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const customCursor = cursorRef.current;
        const wrapper = wrapperRef.current;
        const card = cardRef.current;
        const image =  imageRef.current;
        const content = contentRef.current;
        

        // Defer until container animation is ready
        if (!animation || !card) {
            return;
        }

        const tween = gsap.from(card , {
            height: "2%",
            scrollTrigger: {
                containerAnimation: animation,
                trigger: image,
                scrub: true,
                start: 'left 80%',
                end: 'left 5%',
                // markers: true
            }
        })
        const tween2 = gsap.from(content , {
           opacity: 0,
            scrollTrigger: {
                containerAnimation: animation,
                trigger: content,
                scrub: true,
                start: 'left 80%',
                end: 'left 5%',
                // markers: true
            }
        })

        // const twee1 = gsap.from(card , {
        //     width: "300px",
        //     scrollTrigger: {
        //         containerAnimation: animation,
        //         trigger: card,
        //         scrub: 0.5,
        //         start: 'left 80%',
        //         end: 'left 5%',
        //         markers: true
        //     }
        // })
        // Ensure ST recalculates positions with the new child trigger
        ScrollTrigger.refresh()

        const handleMouseEnter = (e) => {
            // Get mouse position relative to the wrapper
            // getBoundingClientRect() returns an object with the size of the element and its position relative to the viewport.
            // For example: {top, left, bottom, right, width, height, x, y}
            const wrapperRect = e.currentTarget.getBoundingClientRect();
            console.log("Bounding: " , wrapperRect)
            const mouseX = e.clientX - wrapperRect.left;
            const mouseY = e.clientY - wrapperRect.top;

            // Set the custom cursor's position to where the mouse entered
            gsap.set(customCursor, {
                x: mouseX,
                y: mouseY,
                opacity: 1
            });

        }

        const handleMouseMove = (e) => {
            const wrapperRect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - wrapperRect.left;
            const mouseY = e.clientY - wrapperRect.top;
            gsap.to(customCursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.1,
                overwrite: 'auto',
            });
        }

        const handleMouseLeave = (e) => {
            const wrapperRect = e.currentTarget.getBoundingClientRect();
            const centerX = wrapperRect.width / 2;
            const centerY = wrapperRect.height / 2;
            gsap.to(customCursor, {
                x: centerX,
                y: centerY,
                opacity: 0,
                duration: 0.2
            });
        }

        if (wrapper) {
            wrapper.addEventListener("mouseenter", handleMouseEnter);
            wrapper.addEventListener("mousemove", handleMouseMove);
            wrapper.addEventListener("mouseleave", handleMouseLeave);
        }
    
        return () => {
            // Kill the card's ST when animation changes/unmounts
            if (tween && tween.scrollTrigger) {
                tween.scrollTrigger.kill()
            }
            if (wrapper) {
                wrapper.removeEventListener("mouseenter", handleMouseEnter);
                wrapper.removeEventListener("mousemove", handleMouseMove);
                wrapper.removeEventListener("mouseleave", handleMouseLeave);
            }
        };

    } , [animation])

  return (
    <div ref={cardRef} className='flex flex-col w-[55vw] min-h-[60vh] h-screen flex-shrink-0'>
      <div ref={wrapperRef} className="work-card-wrapper overflow-hidden border-l-1 border-l-slate-200 w-full h-full flex flex-col relative cursor-none">
        <div ref={cursorRef} className="cursor-btn opacity-0 absolute flex items-center justify-center bg-[#131313] text-white px-8 py-3 rounded-full text-2xl uppercase font-kiona font-bold z-40">
            {title}
        </div>
        <div ref={imageRef} className="work-card-img w-full h-[40vw] md:h-[70%] min-h-[200px] md:min-h-0">
            <Image  src={`/images/${img}`} className={`w-full h-full object-cover ${objectPosition === "top" ? "object-top" : "object-center"}`} width={1400} height={1400} alt={title} />
        </div>
        <div ref={contentRef} className="work-card-tags flex w-full p-5 items-center justify-between flex-wrap gap-2 md:gap-0">
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
        <div ref={contentRef} className="work-card-title flex items-center justify-center py-6 md:py-10">
            <p className={`text-2xl md:text-6xl font-medium font-hero`}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard