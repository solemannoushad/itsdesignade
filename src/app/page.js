import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServiceSteps from "@/components/ServicesSteps";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
    <header className="w-screen h-screen">
      <Navbar />
      <Hero />
    </header>
    <Work />
    <ServiceSteps />
    <ContactForm />
    </>
  );
}