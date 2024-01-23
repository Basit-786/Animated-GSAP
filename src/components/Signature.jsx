/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Signature = () => {
  let sign = useRef(null)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#sign",
      {
        x: "-100%",
        scale:0,
      },
      {
        scrollTrigger: {
          trigger:sign.current,
          // start: "top ",
          scrub: true,
        },
        x: 0,
        scale:1,
        ease: "power4.in",
      }
    );
  }, []);

  return (
      <div className="flex items-center justify-center gap-16 w-full min-h-screen h-full px-10 my-20" >
        <div className="flex flex-col h-full w-full max-w-[800px] text-lightBlack mb-4" >
          <div className="mb-8" ref={sign}>
            <h2 className="text-[45px] uppercase font-normal leading-[60px] ">
            Passie & Vakmanschap in Specialistische handen
            </h2>
          </div>
            <p className="text-lightBlack mb-8 text-[15px] leading-[27px]  tracking-[0.2px] max-w-[450px]">
            Van kinderdromen over de Porsche 911 tot het realiseren van unieke juweeltjes. Elk voertuig in onze showroom vertelt een verhaal van toewijding en vakmanschap. Lees het hier op onze 'Over Ons' pagina, waar elke Porsche een unieke reis van passie en precisie vertegenwoordigt
            </p>
            <div className="flex items-center gap-[10px] w-full ">
              <div className="flex items-center gap-[10px]">
                <div className="relative flex items-center">
                  <div className="flex items-center justify-center border border-lightBlack rounded-full p-2">
                    <Image
                      width={20}
                      height={20}
                      src="/icons/icon1.svg"
                      alt=""
                      className="w-[20px] h-[20px] object-cover object-center"
                    />
                  </div>
                  <div className="h-[1px] w-[40px] bg-lightBlack " />
                </div>
                <p className="text-[10px] tracking-[2px] uppercase">
                Vakmanschap
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="relative flex items-center">
                  <div className="flex items-center justify-center border border-lightBlack rounded-full p-2">
                    <Image
                      width={20}
                      height={20}
                      src="/icons/icon3.svg"
                      alt=""
                      className="w-[20px] h-[20px] object-cover object-center"
                    />
                  </div>
                  <div className="h-[1px] w-[40px] bg-lightBlack " />
                </div>
                <p className="text-[10px] tracking-[2px] uppercase">
                leer ons kennen
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="relative flex items-center">
                  <div className="flex items-center justify-center border border-lightBlack rounded-full p-2">
                    <Image
                      width={20}
                      height={20}
                      src="/icons/icon2.svg"
                      alt=""
                      className="w-[20px] h-[20px] object-cover object-center"
                    />
                  </div>
                  <div className="h-[1px] w-[40px] bg-lightBlack " />
                </div>
                <p className="text-[10px] tracking-[2px] uppercase">
                onze service
                </p>
              </div>
            </div>
            <div className="flex items-end justify-center w-[390px] overflow-hidden relative">
      <img src="/svg.svg" className="w-full" id="sign"/>
            </div>
        </div>
        <div className="w-[500px] lg:w-[564px] h-[600px] lg:h-[700px] " >
          <Image
            width={500}
            height={550}
            src="/sign.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
  );
};

export default Signature;
