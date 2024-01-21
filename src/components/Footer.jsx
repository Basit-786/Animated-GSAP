"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const triggerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".footerAnimation",
      {
        scale: 1.05,
        opacity: 0,
        translate: "0% 25%",
      },
      {
        scale: 1,
        opacity: 1,
        translate: "0% 0%",
        ease: "power4.in",
        scrollTrigger: {
          trigger: ".main",
          start: "bottom bottom",

          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="bg-[#073737] fixed z-10 bottom-0 left-0 right-0 w-screen h-screen ">
        <div className="footerAnimation max-w-[1400px] mx-auto w-full flex items-center justify-end flex-col px-20 py-10 text-[#FFFFFFCC] h-full">
          <div className="w-full">
            <Image
              src={"/logo.png"}
              width={120}
              height={200}
              className=""
              alt="LOGO"
            />
          </div>
          <div className="w-full grid grid-cols-3 py-5 my-10 border-[#423C3A] border-t border-b ">
            <div className="">
              <h3 className="text-[16px] text-lightWhite font-semibold">
                DISCOVER D’Ieteren <br /> Luxury Performance
              </h3>
              <div className="flex flex-col gap-2 my-5">
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Who we are
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Our Brand
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Experiences
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-[16px] text-lightWhite font-semibold">
                Brands
              </h3>
              <div className="flex flex-col gap-2 my-5">
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Porsche
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Lamborghini
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Rimac
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Bugatti
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Bentley
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"} className="uppercase text-[14px] nav-link ">
                    Maserati
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-[13px]">
              D’Ieteren Automotive SA/NV - Rue du Mail, 50 – 1050 Brussels –
              Belgium - TVA BE 0466.909.993 - RPM Brussels
            </p>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/"} className="text-[13px] border-r px-3">
                Cookie Policy
              </Link>
              <Link href={"/"} className="text-[13px] border-r px-3">
                Privacy Policy
              </Link>
              <Link href={"/"} className="text-[13px] border-r px-3">
                Legal notice
              </Link>
              <Link href={"/"} className="text-[13px] px-3">
                CO2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
