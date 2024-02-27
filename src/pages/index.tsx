import Image from "next/image";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About"; 

export default function Home() {
  return (
    <main
    >
      <Hero />
      <Benefits />
      <About />
    </main>
  );
}
