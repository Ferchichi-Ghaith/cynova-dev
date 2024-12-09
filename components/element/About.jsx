'use client';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import Benefits from "./Benefits";
import FloatingImage from "./FloatImage";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="services" className="min-h-screen w-screen bg-n-8">
      <div className="relative  flex flex-col items-center gap-5">
      <AnimatedTitle
      title="<b>M</b>aintenant que vous avez dé<b>c</b>ouvert <b>n</b>otre desig<b>n</b>, </br> passons à <b>n</b>otre appro<b>c</b>he et à <b>n</b>os <b>s</b>ervi<b>c</b>es <b>p</b>rofessio<b>n</b><b>n</b>els"
      containerClass="mt-5 !text-6xl pointer-events-none mix-blend-difference relative z-10 "
    />
        <Benefits />
        
      </div>
    </div>
  );
};

export default About;

