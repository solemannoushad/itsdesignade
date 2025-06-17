import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
    <header className="w-screen h-screen">
      <Navbar />
      <Hero />
    </header>
    <Work />
    </>
  );
}
