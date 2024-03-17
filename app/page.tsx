import About from "@/components/About";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
    </main>
  );
}
