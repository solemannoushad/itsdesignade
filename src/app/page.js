import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioTitle from "@/components/PortfolioTitle";
import ServiceSteps from "@/components/ServicesSteps";
import Work from "@/components/Work";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  return (
    <>
    <header className="w-screen h-screen">
      <Navbar />
      <Hero />
    </header>
    <Work />
    <PortfolioTitle />
    <ServiceSteps />
    </>
  );
}
