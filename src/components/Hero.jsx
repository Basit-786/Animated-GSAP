"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".tWrap div", {
      scrollTrigger: ".tWrap",
      y: 0,
      ease: "power4.out",
      opacity: 1,
      duration: 1.4,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url(/hero.jpeg)]">
      <div className="flex flex-col items-center justify-center text-lightWhite bg-black/50 w-full min-h-screen  h-full">
        <div className="flex items-center gap-[40px]">
          <div className="tWrap relative overflow-hidden">
            <div className="text-[50px] lg:text-[60px] uppercase translate-y-60 transform">
              Kennis over uw oldtimer Porsche
            </div>
          </div>
          <div className="flex flex-col text-[12px] lg:text-[13px] leading-[15px] text-lightWhite/80 uppercase font-bold">
            <div className="tWrap overflow-hidden relative">
              <div className=" translate-y-60 transform">Passie</div>
            </div>
            <div className="tWrap overflow-hidden relative">
              <div className=" translate-y-60 transform">Ervaring</div>
            </div>
            <div className="tWrap overflow-hidden relative">
              <div className=" translate-y-60 transform">Vakmanschap</div>
            </div>
          </div>
        </div>
        <div className="flex gap-[40px]">
          <div className="tWrap overflow-hidden relative flex  flex-col text-[12px] lg:text-[13px] mt-[10px] leading-[15px] text-lightWhite/80 uppercase font-bold">
            <div className=" translate-y-60 transform">gespecialiseerd</div>
          </div>
          <div className="tWrap overflow-hidden relative">
            <div className="text-[50px] lg:text-[60px] leading-[65px] uppercase  translate-y-60 transform">
              Van Den Berg Car Classic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
