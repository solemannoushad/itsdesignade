'use client'
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkCard from "./WorkCard";
import PortfolioTitle from "./PortfolioTitle";
import { servicesData } from "@/content/services";

function Work() {
  const workContentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = workContentRef.current;

    // Animate from 80px above and 60px right
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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="flex w-full z-10">
      <section className="h-screen w-[60%] shrink-0 bg-white text-black z-10 relative flex flex-col items-center justify-center gap-5">
        <div ref={workContentRef} className="work-content flex flex-col items-center justify-center gap-5">
          <h1 id="services-title" className=" text-8xl font-bold uppercase font-kiona text-center">the services</h1>
          <h2 className=" text-3xl text-center">everyone needs</h2>
        </div>
        <a className="text-xl font-medium absolute top-[3%] left-[3%]" href="">
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
      {
        servicesData.map((service) => {
        return <WorkCard key={service.title} img={service.image} tags={service.tags} tools={service.tools} title={service.title} objectPosition={service.objectFit}  />
        })
      }
    <PortfolioTitle />
    </section>
  );
}

export default Work;