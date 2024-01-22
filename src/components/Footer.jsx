"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".footerAnimation",
      {
        scale: 1.05,
        translate: "0% 25%",
        opacity: 0,
      },
      {
        scale: 1,
        translate: "0% 0%",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".main",
          start: "bottom bottom",
          end: "bottom+=200px bottom",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="h-[580px] bg-transparent nnn"></div>
      <div className="bg-[#073737] fixed z-10 bottom-0 left-0 right-0 w-full h-[580px] ">
        <div className="relative">
          <div className="max-w-[1500px] footerAnimation mx-auto w-full px-20 py-3 text-[#FFFFFFCC]">
            <div className="w-[100px] lg:w-[150px] mt-6">
              <Image
                src={"/logo.png"}
                width={120}
                height={100}
                className=""
                alt="LOGO"
              />
            </div>
            <div className="w-full grid grid-cols-3 py-6 my-12 border-[#423C3A] border-t border-b ">
              <div className="">
                <h3 className="text-[17px] text-lightWhite font-semibold">
                  DISCOVER D’Ieteren <br /> Luxury Performance
                </h3>
                <div className="flex flex-col gap-2 my-5">
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      Home
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      Advies
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      Collectie
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      Over ons
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[17px] text-lightWhite font-semibold">
                  Algemeen
                </h3>
                <div className="flex flex-col gap-2 my-5">
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      Openingstijden
                    </Link>
                  </div>
                </div>
                <h3 className="text-[17px] text-lightWhite font-semibold">
                  Onze showroom
                </h3>
                <div className="flex flex-col gap-2 my-5">
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      Simon Stevinstraat 17 A
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href={"#"}
                      className="uppercase text-[14px] nav-link "
                    >
                      3291 CA Strijen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between lg:mb-4">
              <div className="flex items-center justify-center gap-2">
                <Link href={"#"} className="text-[13px] border-r px-3">
                  Cookie Policy
                </Link>
                <Link href={"#"} className="text-[13px] border-r px-3">
                  Privacy Policy
                </Link>
              </div>

              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-[13px]">
                  Specialized in used Porsche © Copyright 2024 Van Den Berg Car
                  Classic | Website door Grandsolution
                </p>
                <p className="text-[13px]">
                  +31 (0)6 557 61 930 | e. info@vandenbergcarclassic.nl
                </p>
              </div>
              <div className="">
                <Link
                  href={"#"}
                  className="w-[40px] flex items-center justify-center bg-[#D8B959] p-2 "
                >
                  <img src="/icons/fb.png" className="w-full " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
