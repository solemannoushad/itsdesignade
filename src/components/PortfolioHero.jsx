"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import String from "./String";

function PortfolioHero({title = "", text = []}) {

  useGSAP(() => {
    const textItems = text.length || 4; // fallback to 4 if no text provided
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
    
    for (let i = 1; i < textItems; i++) {
      const position = i === 0 ? "+=0.5" : "+=0.8";
      tl.to(".animated-spans h1", {
        yPercent: "-=100",
        duration: 0.5,
        ease: "none"
      }, position);
    }

  }, [text]);

  return (
    <div className="bg-black pt-52 pb-0">
      <div className="text-[10vw] flex gap-0">
        <h1 className="font-medium ml-28">
          {title}
        </h1>
        <div className="animated-spans font-bold text-primary relative overflow-y-hidden w-1/2 ">
          {text.map((item, index) => (
            <h1 
              key={index} 
              className="absolute" 
              style={{ transform: `translateY(${index * 100}%)` }}
            >
              <span>&nbsp; {item}</span>
            </h1>
          ))}
        </div>
      </div>
      <String width={90} />
    </div>
  );
}

export default PortfolioHero;
