"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import String from "./String";

function PortfolioHero() {

  useGSAP(() => {


    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
    for (let i = 0; i < 4; i++) {
      const position = i === "+=0.5" ? ">" : "+=0.8";
      tl.to(".animated-spans h1", {
        yPercent: "-=100",
        duration: 0.5,
        ease: "none"
      }, position);
    }

  }, []);

  return (
    <div className="bg-black pt-52 pb-0">
      <div className="text-[10vw] flex gap-0">
        <h1 className="font-medium ml-28">
          Do Epic
        </h1>
        <div className="animated-spans font-bold text-primary relative overflow-y-hidden w-1/2 ">
          <h1 className="absolute" style={{ transform: "translateY(0%)" }}><span>&nbsp; design</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(100%)" }}><span>&nbsp; dev</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(200%)" }}><span>&nbsp; creative</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(300%)" }}><span>&nbsp; social</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(400%)" }}><span>&nbsp; design</span></h1>
        </div>
      </div>
      <String width={90} />
    </div>
  );
}

export default PortfolioHero;
