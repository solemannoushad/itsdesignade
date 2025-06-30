import { servicesSteps } from "@/content/services";
import Image from "next/image";
import React from "react";


function ServiceSteps() {
  return (
    <section className="w-full h-screen bg-white text-black pl-36 py-10">
      {servicesSteps.map((service, index) => {
        const {title , img}= service
        return (
          <div className='service-title flex items-center gap-14 my-5 cursor-default relative group'  style={{ paddingLeft: `${index * 60}px` }} key={title}>

            <div className="hover-img-wrapper w-[160px] h-[200px] overflow-hidden rounded-xl -rotate-10 absolute right-0">
              <Image src={`/images/steps/${img}`} width={300} height={300} alt={service} />
            </div>

            <div className="service-title-count bg-white text-black border-1 border-black w-10 h-10 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white duration-300">
              {index + 1}
            </div>
            <div className="service-title-title text-[5rem] font-semibold group-hover:scale-90 duration-300">
              {title}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ServiceSteps;