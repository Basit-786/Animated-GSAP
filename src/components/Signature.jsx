"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Signature = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".sign",
      {
        x: "500px",
      },
      {
        scrollTrigger: {
          trigger: ".signTrigger",
          start: "bottom bottom",
          scrub: true,
        },
        x: 0,
        ease: "power4.out",
      }
    );
  }, []);

  return (
      <div className="flex items-center justify-center gap-16 w-full px-10">
        <div className="flex flex-col items-center justify-center gap-[20px] h-full max-w-[650px] text-lightBlack mb-8">
          <div className="">
            <h2 className="text-[45px] uppercase font-normal leading-[60px]">
            Passie & Vakmanschap in Specialistische handen
            </h2>
          </div>
          <div className="ml-[100px] space-y-[20px]">
            <p className="text-lightBlack text-[15px] leading-[27px]  tracking-[0.2px]">
              We zijn er trots op dat wij onze passie voor luxe auto’s mogen
              delen. Wellicht overbodig om te noemen, maar vanaf het moment dat
              je onze wereld in stapt stellen wij alles in het werk om jouw
              rijervaring onvergetelijk te maken én te houden.
            </p>
            <div className="flex flex-col gap-[20px] ">
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
                <p className="text-[13px] tracking-[3px] uppercase">
                  Our maintenance
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
                <p className="text-[13px] tracking-[3px] uppercase">
                  Meet the team
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
                <p className="text-[13px] tracking-[3px] uppercase">
                  Our services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[400px]">
          <Image
            width={500}
            height={550}
            src="/sign.png"
            alt=""
            className="w-full object-cover object-center"
          />
        </div>
      </div>
  );
};

export default Signature;
