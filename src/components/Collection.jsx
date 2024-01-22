"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Collection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".cWrap div",
      {
        y: "100%",
        opacity: 0,
      },
      {
        scrollTrigger: ".cWrap",
        y: 0,
        ease: "power4.out",
        opacity: 1,
        delay: 0.5,
        duration: 1,
        stagger: {
          amount: 0.3,
        },
      }
    );

    gsap.fromTo(
      ".imgAnimate",
      {
        y: "100%",
        opacity: 0,
      },
      {
        scrollTrigger: ".imgAnimate1Wrap",
        y: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.8,
      }
    );

    gsap.fromTo(
      ".cWrap2 div",
      {
        y: "100%",
        opacity: 0,
      },
      {
        scrollTrigger: ".cWrap2",
        y: 0,
        ease: "power4.out",
        opacity: 1,
        delay: 0.5,
        duration: 1,
        stagger: {
          amount: 0.3,
        },
      }
    );

    gsap.fromTo(
      ".imgAnimate2",
      {
        y: "100%",
        opacity: 0,
      },
      {
        scrollTrigger: ".imgAnimate2Wrap",
        y: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.8,
      }
    );
  }, []);

  return (
    <div className="p-5 relative px-16 py-16 space-y-20 ">
      <div className="box min-h-screen flex justify-center flex-col relative">
        <div className="relative w-full mx-[5%] lg:mx-auto">
          <div className="text-lightBlack absolute z-20 top-[4%] w-full -left-[6%] lg:-left-[6%] uppercase flex items-center justify-between mb-2">
            <div className="flex items-center justify-between w-[90%] lg:w-full">
              <div className="cWrap overflow-hidden">
                <div className=" text-[60px] font-semibold">
                  COur Collection.
                </div>
              </div>
              <Link
                href={"#"}
                className="cWrap overflow-hidden text-white text-[15px] px-[35px] py-[11px] border rounded-[30px] border-black"
              >
                <div className="">Bekijk alle wagens</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-[90%] lg:w-[100%]">
            <div className="bg-[#ccc] imgAnimate1Wrap w-[100%] h-[480px] lg:h-[580px] overflow-hidden">
              <Image
                src="/collection.png"
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover object-center imgAnimate"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box min-h-screen flex justify-center flex-col relative">
        <div className="relative w-full mx-[5%] lg:mx-auto">
          <div className="text-lightBlack absolute z-20 top-[4%] w-full -left-[6%] lg:-left-[6%] uppercase flex items-center justify-between mb-2">
            <div className="flex items-center justify-between w-[90%] lg:w-full">
              <div className="cWrap2 overflow-hidden">
                <div className=" text-[60px] font-semibold">Coming Soon.</div>
              </div>
              <Link
                href={"#"}
                className="cWrap2 overflow-hidden text-white text-[15px] px-[35px] py-[11px] border rounded-[30px] border-black"
              >
                <div className="">Bekijk alle wagens</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-[90%] lg:w-[100%]">
            <div className="bg-[#ccc] imgAnimate2Wrap w-[100%] h-[480px] lg:h-[580px] overflow-hidden">
              <Image
                src="/comin.png"
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover object-center imgAnimate2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
