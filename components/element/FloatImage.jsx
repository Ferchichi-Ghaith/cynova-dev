"use client";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null); 

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="services" className="min-h-dvh w-screen  flex items-center justify-center mt-5">
      <div className="flex size-full flex-col items-center ">
        <div className="relative size-full" ref={frameRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <AnimatedTitle
            title="<b>m</b>aintenant que Vous Avez Dé<b>c</b>ouvert <b>n</b>otre Desig<b>n</b>, </br> Passons à <b>n</b>os <b>s</b>ervi<b>c</b>es <b>p</b>rofessio<b>n</b><b>n</b>els"
            containerClass=" !text-6xl pointer-events-none mix-blend-difference relative z-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
