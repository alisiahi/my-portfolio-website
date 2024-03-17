import Link from "next/link";

import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Socials from "./Socials";

import Image from "next/image";

import { getCVlink } from "@/lib";
import { Assets } from "@/lib/types";
import HeroTypeWriter from "./HeroTypeWriter";

const Hero = async () => {
  const assetsResult = await getCVlink();
  const assets: Assets[] = (assetsResult as { assets: Assets[] })?.assets || [];
  const cvUrl = assets[0].url;

  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left gap-8">
            <div className="text-base uppercase font-semibold mb-4 text-primary tracking-[4px]">
              <HeroTypeWriter />
            </div>
            <h1 className="h1 mb-4">Hello, my name is Ali Siahi</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href={cvUrl}>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}

          <Image
            width={500}
            height={500}
            src={"/hero-image.jpg"}
            className="hidden lg:flex rounded-full bg-primary w-[500px] h-[500px] shadow-xl shadow-primary border-1 border-primary"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
