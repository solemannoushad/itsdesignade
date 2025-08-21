"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function String({width = 100, color}) {

    const initialPosition = `M 10 60 Q 450 60 890 60`;

    useGSAP(() => {
      let svg = document.querySelector("svg");
      let pathEl = document.querySelector("svg path");
  
      svg.addEventListener("mousemove", function (dets) {
        let path = `M 10 60 Q ${dets.offsetX} ${dets.offsetY} 890 60`;
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
    <div className="mx-auto" style={{width: `${width}%`}}>
        <svg
          viewBox="0 0 900 120"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 10 60 Q 450 60 890 60"
            stroke={color || "white"}
            fill="transparent"
            strokeWidth="1"
          />
        </svg>
      </div>
  )
}

export default String
