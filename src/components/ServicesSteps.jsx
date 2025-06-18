import React from "react";

const services = [
  "Branding",
  "Social Media",
  "UI/UX Design",
  "Photography",
  "Videography",
  "CGI Video",
];

function ServiceSteps() {
  return (
    <section className="w-full h-screen bg-white text-black pl-36 py-10">
      {services.map((service, index) => {
        return (
          <div className='service-title flex items-center gap-4 my-5 cursor-default group'  style={{ paddingLeft: `${index * 120}px` }} key={index}>
            <div className="service-title-count bg-white text-black border-1 border-black w-10 h-10 flex items-center justify-center rounded-full text-xl group-hover:bg-black group-hover:text-white duration-300">
              {index + 1}
            </div>
            <div className="service-title-title text-[5rem] font-semibold">
              {service}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ServiceSteps;
