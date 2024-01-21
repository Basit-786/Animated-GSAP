"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";


const Collection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".cWrap div", {
      scrollTrigger: ".cWrap",
      y: 0,
      ease: "power4.out",
      opacity: 1,
      duration: 1.4,
      stagger: {
        amount: 0.2,
      },
    });
    
    gsap.to(".imgAnimate", {
      scrollTrigger: ".imgAnimate1Wrap",
      y: 0,
      opacity: 1,
      ease: "power4.out",
      duration: 1.4,
    });

    gsap.to(".cWrap2 div", {
      scrollTrigger: ".cWrap2",
      y: 0,
      ease: "power4.out",
      opacity: 1,
      duration: 1.4,
      stagger: {
        amount: 0.2,
      },
    });

    gsap.to(".imgAnimate2", {
      scrollTrigger: ".imgAnimate2Wrap",
      y: 0,
      opacity: 1,
      ease: "power4.out",
      duration: 1.4,
    });
  }, []);

  return (
    <div className="container mx-auto p-5 space-y-28 my-32"  >
      <div className="collection">
        <div className="text-lightBlack uppercase flex items-center justify-between ">
          <div className="cWrap overflow-hidden">
            <div className=" text-[80px] translate-y-60 transform">
              Our Collection.
            </div>
          </div>
          <Link
            href={"#"}
            className="cWrap overflow-hidden text-[15px] px-[32px] py-[12px] border rounded-[30px] border-black"
          >
            <div className="translate-y-60 transform">Bekijk alle wagens</div>
          </Link>
        </div>
        <div className="flex items-center justify-end mt-10 ">
          <div className="bg-lightWhite imgAnimate1Wrap w-[93%] flex items-center justify-end overflow-hidden">
            <Image src="/collection.png"
            width={500}
            height={500}
              alt=""
              className="w-full object-cover object-center imgAnimate transform translate-y-[500px] opacity-0"
             />
          </div>
        </div>
      </div>
      <div className="collection">
        <div className="text-lightBlack uppercase flex items-center justify-between ">
          <div className="cWrap overflow-hidden">
            <div className=" text-[80px] translate-y-60 transform">
              Coming Soon.
            </div>
          </div>
          <Link
            href={"#"}
            className="cWrap2 overflow-hidden text-[15px] px-[32px] py-[12px] border rounded-[30px] border-black"
          >
            <div className="translate-y-60 transform">Bekijk alle wagens</div>
          </Link>
        </div>
        <div className="flex items-center justify-end mt-10 ">
          <div className="bg-lightWhite imgAnimate2Wrap w-[93%] flex items-center justify-end overflow-hidden">
          <Image src="/coming.png"
            width={500}
            height={500}
              alt=""
              className="w-full object-cover object-center imgAnimate2 transform translate-y-[500px] opacity-0"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
