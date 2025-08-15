'use client'
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkCard from "./WorkCard";
import PortfolioTitle from "./PortfolioTitle";
import { servicesData } from "@/content/services";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Work() {
  const workContentRef = useRef(null);
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  const [animation, setAnimation] = useState(null);

  useGSAP(() => {
    const el = workContentRef.current;
    const sectionEl = sectionRef.current;
    const horizontalEl = horizontalRef.current;

    // Animate from 80px above and 60px right (original animation)
    gsap.from(
      el,
      {
        y: -100,
        x: 50,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom center",
          scrub: 1.2,
        },
      }
    );

    // Horizontal scroll for cards+PortfolioTitle while section is pinned
    // Lock width and scroll distance so child width animations won't shift starts/ends
    const measuredWidth = horizontalEl.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = measuredWidth - viewportWidth;

    // Fix the width so subsequent child layout changes don't alter scrollWidth
    horizontalEl.style.width = `${measuredWidth}px`;

    setAnimation(
      gsap.to(horizontalEl, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1.25,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: false,
          // pinSpacing: false
        },
      })
    )

  });

  return (
    <section id="services" ref={sectionRef} className="w-full h-screen overflow-x-hidden relative border-none bg-background">
      <div
        ref={horizontalRef}
        className="flex h-screen items-center"
        style={{
          width: `calc(${servicesData.length * 500}px + 60vw + 300px)`
        }}
      >
        <section
        
          className="h-screen w-[60vw] shrink-0 bg-white text-black z-10 relative flex flex-col items-center justify-center gap-5"
        >
          <div ref={workContentRef} className="work-content flex flex-col items-center justify-center gap-5">
            <h1 id="services-title" className=" text-8xl font-bold uppercase font-kiona text-center">the services</h1>
            <h2 className=" text-3xl text-center">everyone needs</h2>
          </div>
          <a className="text-xl font-medium absolute top-[3%] left-[3%]" href="https://www.instagram.com/thinkloomsolutions/" target="_blank">
            Instagram
          </a>
          <a className="text-xl font-medium absolute top-[3%] right-[3%]" href="">
            Facebook
          </a>
          <a
            className="text-xl font-medium absolute bottom-[3%] left-[3%]"
            href=""
          >
            Youtube
          </a>
          <a
            className="text-xl font-medium absolute bottom-[3%] right-[3%]"
            href=""
          >
            Linkedin
          </a>
        </section>
        <div className="flex h-screen items-end">
          {servicesData.map((service) => (
            <WorkCard
              key={service.title}
              img={service.image}
              tags={service.tags}
              tools={service.tools}
              title={service.title}
              objectPosition={service.objectFit}
              animation={animation}
            />
          ))}
        </div>
          <PortfolioTitle animation={animation} />
      </div>
    </section>
  );
}

export default Work;