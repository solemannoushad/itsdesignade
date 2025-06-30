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

    const handleMouseEnter = (idx) => {
      gsap.to(images[idx], {
        scale: 1,
        duration: 0.2,
      });
    };

    const handleMouseLeave = (idx) => {
      gsap.to(images[idx], {
        scale: 0,
        duration: 0.2
      });
    };

    wrappers.forEach((wrapper, idx) => {
      if (wrapper) {
        const enter = () => handleMouseEnter(idx);
        const leave = () => handleMouseLeave(idx);
        wrapper.addEventListener("mouseenter", enter);
        wrapper.addEventListener("mouseleave", leave);
        // Store listeners for cleanup
        wrapper._enter = enter;
        wrapper._leave = leave;
      }
    });

    return () => {
      wrappers.forEach((wrapper) => {
        if (wrapper && wrapper._enter && wrapper._leave) {
          wrapper.removeEventListener("mouseenter", wrapper._enter);
          wrapper.removeEventListener("mouseleave", wrapper._leave);
        }
      });
    };
  }, []);

  return (
    <section className="w-full h-screen bg-white text-black pl-36 py-10">
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
              className="hover-img-wrapper w-[160px] h-[200px] overflow-hidden rounded-xl absolute right-0 scale-0"
            >
              <Image src={`/images/steps/${img}`} width={300} height={300} alt={service} />
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