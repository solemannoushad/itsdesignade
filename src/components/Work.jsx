import React from "react";
import WorkCard from "./WorkCard";
import PortfolioTitle from "./PortfolioTitle";
import { servicesData } from "@/content/services";

function Work() {
  return (
    <section className="flex w-full">
      <section className="h-screen w-[60%] shrink-0 bg-white text-black relative flex flex-col items-center justify-center gap-5">
        <h1 className=" text-8xl font-bold uppercase font-kiona">the Work</h1>
        <h2 className=" text-3xl">everyone loves</h2>
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
