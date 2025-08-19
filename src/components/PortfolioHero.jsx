"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function PortfolioHero() {
  const initialPosition = `M 10 100 Q 450 100 890 100`;

  useGSAP(() => {
    let svg = document.querySelector("svg");
    let pathEl = document.querySelector("svg path");

    svg.addEventListener("mousemove", function (dets) {
      let path = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 890 100`;
      console.log(path);
      gsap.to(pathEl, {
        attr: { d: path },
        duration: 0.2
      });
    });

    svg.addEventListener("mouseleave", function () {
      gsap.to(pathEl, {
        attr: { d: initialPosition },
        duration: 1.2,
        ease: "elastic.out(1, 0.2)"
      });
    });
  }, []);

  return (
    <div className="bg-black pt-64 pb-20">
      <div className="text-[11vw] flex gap-0">
        <h1 className="font-medium ml-20">
          Do Epic
        </h1>
        <div className="animated-spans font-bold text-primary relative bg-red-500 w-1/2 overflow-y-hidden">
          <h1 className="absolute"><span>&nbsp; design</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(100%)" }}><span>&nbsp; dev</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(200%)" }}><span>&nbsp; creative</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(300%)" }}><span>&nbsp; social</span></h1>
          <h1 className="absolute" style={{ transform: "translateY(400%)" }}><span>&nbsp; design</span></h1>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <svg
          viewBox="0 0 900 200"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 10 100 Q 450 100 890 100"
            stroke="white"
            fill="transparent"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}

export default PortfolioHero;
