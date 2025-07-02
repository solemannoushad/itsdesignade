'use client'
import { servicesSteps } from "@/content/services";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";


function ServiceSteps() {

  const imageRefs = useRef([]);
  const blockRefs = useRef([]);

  useEffect(() => {
    const wrappers = blockRefs.current;
    const images = imageRefs.current;

    const handleMouseEnter = (e, idx) => {
      const wrapperRect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - wrapperRect.left;
      const mouseY = e.clientY - wrapperRect.top;
      gsap.fromTo(
        images[idx],
        {
          scale: 0,
          rotate: 0,
          x: wrapperRect.width, // start from right edge (right-0)
          y: mouseY,
        },
        {
          scale: 1,
          duration: 0.2,
          rotate: -10,
          x: mouseX + 200,
          y: mouseY,
        }
      );
    };

    const handleMouseMove = (e, idx) => {
      const wrapperRect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - wrapperRect.left;
      const mouseY = e.clientY - wrapperRect.top;
      // Rotate based on horizontal movement, e.g. -20deg to 20deg
      const rotate = -20 + ((mouseX / wrapperRect.width) * 25);
      gsap.to(images[idx], {
        x: mouseX + 200,
        y: mouseY,
        rotate: rotate,
        duration: 0.2,
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = (e, idx) => {
      const wrapperRect = e.currentTarget.getBoundingClientRect();
      gsap.to(images[idx], {
        scale: 0,
        // x: wrapperRect.width -100, // animate x to right-0
        duration: 0.2
      });
    };

    wrappers.forEach((wrapper, idx) => {
      if (wrapper) {
        const enter = (e) => handleMouseEnter(e, idx);
        const move = (e) => handleMouseMove(e, idx);
        const leave = (e) => handleMouseLeave(e, idx);
        wrapper.addEventListener("mouseenter", enter);
        wrapper.addEventListener("mousemove", move);
        wrapper.addEventListener("mouseleave", leave);
        // Store listeners for cleanup
        wrapper._enter = enter;
        wrapper._move = move;
        wrapper._leave = leave;
      }
    });

    return () => {
      wrappers.forEach((wrapper) => {
        if (wrapper && wrapper._enter && wrapper._move && wrapper._leave) {
          wrapper.removeEventListener("mouseenter", wrapper._enter);
          wrapper.removeEventListener("mousemove", wrapper._move);
          wrapper.removeEventListener("mouseleave", wrapper._leave);
        }
      });
    };
  }, []);

  return (
    <section className="w-full h-screen bg-white text-black pl-36 py-10 overflow-hidden">
      {servicesSteps.map((service, index) => {
        const { title, img } = service;
        return (
          <div
            ref={el => blockRefs.current[index] = el}
            className='service-title flex items-center gap-14 my-5 cursor-default relative group'
            style={{ paddingLeft: `${index * 70}px` }}
            key={title}
          >
            <div
              ref={el => imageRefs.current[index] = el}
              className="hover-img-wrapper w-[200px] h-[240px] overflow-hidden rounded-xl absolute scale-0 z-40"
            >
              <Image src={`/images/steps/${img}`} className="object-contain" width={1000} height={1000} alt={service} />
            </div>
            <div className="service-title-count bg-white text-black border-1 border-black w-10 h-10 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white duration-300">
              {index + 1}
            </div>
            <div className="service-title-title text-[5rem] font-semibold group-hover:scale-90 duration-300">
              {title}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ServiceSteps;