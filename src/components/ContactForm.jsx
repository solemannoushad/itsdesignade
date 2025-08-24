"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BtnPrimary from "./BtnPrimary";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

// Reusable input field component
function InputField({
  value,
  onChange,
  type = "text",
  id,
  name,
  placeholder,
  className = "",
  as = "input",
}) {
  if (as === "textarea") {
    return (
      <textarea
        className="border-0 border-b-1 border-b-white text-4xl my-3 py-5 focus:border-b-primary focus:outline-none inputField resize-none"
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        placeholder={placeholder}
        rows={4}
      />
    );
  }
  return (
    <input
      className={
        "border-0 border-b-1 border-b-white text-4xl my-3 py-5  focus:outline-none focus:border-b-primary inputField"
      }
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}

function ContactForm() {
  const contactFormRef = useRef(null);
  const titleRef = useRef(null); 
  
  useGSAP(
    () => {

      gsap.from(contactFormRef.current, {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 80%",
          end: "+=300",
          scrub: 1.25,
        },
      });

      gsap.utils.toArray(".inputField").forEach((el) => {
        gsap.from(el, {
          width: "20%",
          opacity: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });
      // Animate the contact title with SplitText
      if (titleRef.current) {
        const split = SplitText.create(titleRef.current, { type: "chars", mask: "chars" });
        gsap.from(split.chars, {
          opacity: 0,
          yPercent: 150,
          autoAlpha: 0,
          duration: 0.4,
          stagger: {
            amount: 0.4,
            from: "edges",
          },
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "restart reset restart reset"
          }
        });
        return () => split.revert();
      }


      ScrollTrigger.refresh();
    },
    { scope: contactFormRef }
  );

  const [creds, setCreds] = useState({
    services: [],
    name: "",
    email: "",
    companyName: "",
    designation: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  // Add a handler for service selection
  const handleServiceToggle = (title) => {
    setCreds((prevCreds) => {
      const isSelected = prevCreds.services.includes(title);
      return {
        ...prevCreds,
        services: isSelected
          ? prevCreds.services.filter((s) => s !== title)
          : [...prevCreds.services, title],
      };
    });
  };

  const services = [
    {
      title: "Social Media",
      slug: "social-media",
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
    },
    {
      title: "Graphic Designing",
      slug: "graphic-designing",
    },
    {
      title: "Ecommerce",
      slug: "ecommerce",
    },
    {
      title: "Web Development",
      slug: "web-development",
    },
    {
      title: "Video Editing",
      slug: "video-editing",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // setDisabled(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs.sendForm(serviceId, templateId, contactFormRef.current, userId).then(
      () => {
        // setMessage("Thanks for reaching out! We’ll contact you shortly.");
        // setIsVisible(true);
        setCreds({
          services: [],
          name: "",
          email: "",
          companyName: "",
          designation: "",
          phone: "",
          description: "",
        })
        // setDisabled(false);
      },
      (error) => {
        // setMessage("Network error. Please try again later.")
        // setIsVisible(true);
        // setDisabled(false);
        console.error("FAILED...", error);
      }
    );
  };

  return (
    <form
      ref={contactFormRef}
      onSubmit={handleSubmit}
      id="contact"
      className="before-footer pins w-screen bg-black text-white py-32 rounded-tl-[250px] rounded-tr-[250px]"
    >
      <h1
        ref={titleRef}
        className="contact-title font-bold uppercase text-center text-8xl tracking-wider"
      >
        start a project
      </h1>

      <div className="contact-form-wrapper ml-32 pt-20">
          <h2 className="text-xl">You need to do</h2>

          <div className="services-pills mt-4">
            {services.map((service) => {
              const { title, slug } = service;
              const isSelected = creds.services.includes(title);
              return (
                <label
                  htmlFor={slug}
                  className={`border-2 border-white px-6 py-3 rounded-full cursor-pointer inline-flex items-center justify-center mx-2 my-3 transition-colors duration-200 ${isSelected ? "bg-white text-black" : "bg-black text-white"}`}
                  key={title}
                >
                  <input
                    type="checkbox"
                    name={"services"}
                    id={slug}
                    className="hidden"
                    checked={isSelected}
                    value={title}
                    onChange={() => handleServiceToggle(title)}
                  />
                  <span className="text-2xl">{title}</span>
                </label>
              );
            })}
          </div>
        <div
          className="flex flex-col gap-6 py-3 w-[60%]"
        >

          <InputField
            value={creds.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <InputField
            value={creds.email}
            onChange={handleChange}
            type="email"
            id="Email"
            name="email"
            placeholder="Email"
          />
          <InputField
            value={creds.companyName}
            onChange={handleChange}
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
          />
          <InputField
            value={creds.designation}
            onChange={handleChange}
            type="text"
            id="designation"
            name="designation"
            placeholder="Designation"
          />
          <InputField
            value={creds.phone}
            onChange={handleChange}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
          <InputField
            value={creds.description}
            onChange={handleChange}
            as="textarea"
            id="description"
            name="description"
            placeholder="Description"
          />
          <div className="mt-10">
            <BtnPrimary title={"Send"} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
