"use client";
import React, { useEffect, useRef } from "react";
import BtnPrimary from "./BtnPrimary";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PortfolioTitle({animation}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;

    // gsap.to(section, {
    //   scrollTrigger: {
    //     containerAnimation: animation,
    //     trigger: section,
    //     start: "left left",
    //     end: "+=300",
    //     pin: true,
    //     pinSpacing: false,
    //     markers: true
    //   }
    // })

    // Mousemove effect for pills
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
      const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1
      const pills = section.querySelectorAll(".portfolio-title-pills");
      pills.forEach((pill, i) => {
        // Increase the movement multipliers for a more dramatic parallax effect
        const xMove = xPercent * (30 + i * 15); // px
        const yMove = yPercent * (30 + i * 15); // px
        gsap.to(pill, {
          x: xMove,
          y: yMove,
          duration: 0.4,
          overwrite: "auto",
        });
      });
    };
    section.addEventListener("mousemove", handleMouseMove);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };

    // Fix: Use horizontal scrollTrigger for horizontal reveal/pin

  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="portfolio-section-wrapper w-screen h-screen flex flex-col shrink-0 items-center justify-center bg-white text-black cursor-default"
    >
      <div className="portfolio-title-wrapper relative">
        <h2 className="text-[12vw] font-kiona tracking-tighter font-extrabold uppercase text-shadow-lg text-shadow-black">
          Portfolio
        </h2>
        <div className="portfolio-title-pills bg-white text-black border-1 border-black px-10 py-3 absolute top-[50%] left-[20%] rotate-20 inline text-2xl rounded-full">
          Marketing
        </div>
        <div className="portfolio-title-pills bg-white text-black border-1 border-black px-10 py-3 absolute top-[5%] left-[40%] -rotate-15 inline text-2xl rounded-full">
          Web Design
        </div>
        <div className="portfolio-title-pills bg-white text-black border-1 border-black px-10 py-3 absolute top-[65%] left-[60%] -rotate-15 inline text-2xl rounded-full">
          Social Media
        </div>
      </div>
      <p className="w-[40%] px-20 text-slate-600 text-xl text-center">
        Being unique is challenging, but those who are too afraid are never the
        ones who win. Don't just break the mold—frkn shatter it into pieces.
      </p>
      <div className="mt-10">
        <BtnPrimary />
      </div>
    </section>
  );
}

export default PortfolioTitle;
