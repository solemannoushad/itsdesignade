'use client';

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceSteps from "@/components/ServicesSteps";
import Work from "@/components/Work";
import { handlePageLoadScroll } from "@/utils/helper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollTweensRef = useRef([]);

  useGSAP(() => {
    const elements = document.querySelectorAll('.before-footer');
    elements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "bottom bottom",
          pin: true,
          pinSpacing: false,
          markers: false
        }
      });
    });
  });

  useEffect(() => {
    // Handle page load scroll for hash navigation
    handlePageLoadScroll(scrollTweensRef);
  }, []);

  return (
    <>
    <header className="w-screen h-screen">
      <Hero />
    </header>
    <Work />
    <ServiceSteps />
    <ContactForm />
    <Footer />
    </>
  );
}