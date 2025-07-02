"use client";
import React, { useEffect, useRef } from "react";
import BtnPrimary from "./BtnPrimary";

function PortfolioTitle() {
  const sectionRef = useRef(null);

  useEffect(() => {}, []);

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