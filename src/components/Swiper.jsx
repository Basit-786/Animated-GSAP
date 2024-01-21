"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Swiper = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        x: 0,
      },
      {
        x: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 5%",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="overflow-x-hidden">
      <div
        id="sections"
        ref={sectionRef}
        className="flex items-center justify-between relative px-20 py-8 gap-32"
      >
        <div className="flex items-center justify-center gap-16 w-[100vw]">
          <div className="w-[600px] h-full">
            <img
              src="/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-[20px] h-full max-w-[500px] text-lightBlack mb-8">
            <h2 className="text-[45px] leading-[55px] uppercase font-normal">
              Take a luxurious trip through our extensive brand portfolio
            </h2>
            <p className="text-[#313434CC] text-[20px]">
              DIeteren Luxury Performance is the company of choice for the most
              prestigious of brands. Thanks to our local dealers, browse our
              extensive range of vehicles and services designed to meet the
              exacting requirements and expectations of those who are passionate
              about luxury and performance.
            </p>
            <div>
              <Link
                href={"#"}
                className="text-[#BDA191] inline-block border-b border-[#BDA191] text-[16px] uppercase "
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-16 w-[100vw]">
          <div className="w-[600px] h-full">
            <img
              src="/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-[20px] h-full max-w-[500px] text-lightBlack mb-8">
            <h2 className="text-[45px] leading-[55px] uppercase font-normal">
              Take a luxurious trip through our extensive brand portfolio
            </h2>
            <p className="text-[#313434CC] text-[20px]">
              DIeteren Luxury Performance is the company of choice for the most
              prestigious of brands. Thanks to our local dealers, browse our
              extensive range of vehicles and services designed to meet the
              exacting requirements and expectations of those who are passionate
              about luxury and performance.
            </p>
            <div>
              <Link
                href={"#"}
                className="text-[#BDA191] inline-block border-b border-[#BDA191] text-[16px] uppercase "
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-16 w-[100vw]">
          <div className="w-[600px] h-full">
            <img
              src="/1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-[20px] h-full max-w-[500px] text-lightBlack mb-8">
            <h2 className="text-[45px] leading-[55px] uppercase font-normal">
              Take a luxurious trip through our extensive brand portfolio
            </h2>
            <p className="text-[#313434CC] text-[20px]">
              DIeteren Luxury Performance is the company of choice for the most
              prestigious of brands. Thanks to our local dealers, browse our
              extensive range of vehicles and services designed to meet the
              exacting requirements and expectations of those who are passionate
              about luxury and performance.
            </p>
            <div>
              <Link
                href={"#"}
                className="text-[#BDA191] inline-block border-b border-[#BDA191] text-[16px] uppercase "
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
