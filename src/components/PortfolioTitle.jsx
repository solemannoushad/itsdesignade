import React from "react";
import BtnPrimary from "./BtnPrimary";

const PortfolioPills = () => {
  return (
    <>
      <div className="bg-white text-black border-1 border-black px-10 py-3 absolute top-[50%] left-[20%] rotate-20 inline text-2xl rounded-full">
        Photography
      </div>
      <div className="bg-white text-black border-1 border-black px-10 py-3 absolute top-[5%] left-[40%] -rotate-15 inline text-2xl rounded-full">
        Branding
      </div>
      <div className="bg-white text-black border-1 border-black px-10 py-3 absolute top-[65%] left-[60%] -rotate-15 inline text-2xl rounded-full">
        Social Media
      </div>
    </>
  );
};

function PortfolioTitle() {
  return (
    <section className="w-screen h-screen flex flex-col shrink-0 items-center justify-center bg-white text-black">
      <div className="portfolio-title-wrapper relative">
        <h2 className="text-[12vw] font-kiona tracking-tighter font-extrabold uppercase text-shadow-lg text-shadow-black">
          Portfolio
        </h2>
        <PortfolioPills />
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
