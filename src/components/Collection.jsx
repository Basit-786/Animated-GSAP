"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";


const Collection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(".cWrap div",{
      y: '100%',
      opacity: 0,
    }, {
      scrollTrigger: ".cWrap",
      y: 0,
      ease: "power4.out",
      opacity: 1,
      delay:0.5,
      duration: 1.5,
      stagger: {
        amount: 0.4,
      },
    });
    
    gsap.fromTo(".imgAnimate",{
      y: '100%',
      opacity: 0,
    }, {
      scrollTrigger: ".imgAnimate1Wrap",
      y: 0,
      opacity: 1,
      delay: 0.8,
      duration: 1.4,
    });

    gsap.fromTo(".cWrap2 div",{
      y: '100%',
      opacity: 0,
    }, {
      scrollTrigger: ".cWrap2",
      y: 0,
      ease: "power4.out",
      opacity: 1,
      delay:0.5,
      duration: 1.5,
      stagger: {
        amount: 0.4,
      },
    });
    
    gsap.fromTo(".imgAnimate2",{
      y: '100%',
      opacity: 0,
    }, {
      scrollTrigger: ".imgAnimate2Wrap",
      y: 0,
      opacity: 1,
      delay: 0.8,
      duration: 1.4,
    });

  }, []);

  return (
    <div className="p-5 px-24 py-16"  >
      <div className="collection1">
        <div className="text-lightBlack uppercase flex items-center justify-between mb-6">
          <div className="cWrap overflow-hidden">
            <div className=" text-[60px] font-semibold">
              Our Collection.
            </div>
          </div>
          <Link
            href={"#"}
            className="cWrap overflow-hidden text-[#CEAC51] hover:text-white hover:bg-black transition-all duration-500 ease-in-out text-[15px] px-[35px] py-[11px] border rounded-[30px] border-black"
          >
            <div className="">Bekijk alle wagens</div>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-lightWhite imgAnimate1Wrap w-[94%] h-[600px] overflow-hidden">
            <Image src="/collection.png"
            width={500}
            height={500}
              alt=""
              className="w-full object-cover object-center imgAnimate"
             />
          </div>
        </div>
      </div>
      <div className="collection2">
        <div className="text-lightBlack uppercase flex items-center justify-between mb-6">
          <div className="cWrap2 overflow-hidden">
            <div className=" text-[60px] font-semibold">
              Coming soon.
            </div>
          </div>
          <Link
            href={"#"}
            className="cWrap2 overflow-hidden text-[#CEAC51] hover:text-white hover:bg-black transition-all duration-500 ease-in-out text-[15px] px-[35px] py-[11px] border rounded-[30px] border-black"
          >
            <div className="">Bekijk alle wagens</div>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-lightWhite imgAnimate2Wrap w-[94%] h-[600px] overflow-hidden">
            <Image src="/coming.png"
            width={500}
            height={500}
              alt=""
              className="w-full object-cover object-center imgAnimate2"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
