/* eslint-disable react/no-unescaped-entities */
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
    // let sectionsWidth =  sectionRef.current.offsetWidth ;
    // let amountToScroll = sectionsWidth - window.innerWidth;

    let pin = gsap.fromTo(
      sectionRef.current,
      {
        x: 0,
      },
      {
        x: "-87%",
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 2%",
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
    <div
      ref={triggerRef}
      className="overflow-hidden grid place-items-center h-[100vh] w-[100%]"
    >
      <div
        id="sections"
        ref={sectionRef}
        className="flex items-center relative"
      >
        <div className="flex items-center justify-center flex-shrink-0 flex-grow ml-[10rem]">
          <div className="w-[500px] max-h-[80vh] flex-shrink-0 relative">
            <img
              src="/swipe1.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col ml-[10rem] gap-[20px] flex-shrink-0 h-full max-w-[500px] text-lightBlack mb-8">
            <h2 className="text-[45px] leading-[55px] uppercase font-normal">
              De Bijzondere Ervaring van Het Kopen van Een Porsche Oldtimer
            </h2>
            <p className="text-[#313434CC] text-[20px]">
              Bij Van Den Berg Car Classic wordt het kopen van een Porsche
              oldtimer een unieke, bijzondere belevenis. Ontdek onze prachtige
              collectie, waar onze liefde voor auto's samenkomt met tijdloze
              elegantie en authentieke klasse.
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
        <div className="flex items-center justify-center gap-16 flex-shrink-0 flex-grow ml-[10rem]">
          <div className="w-[500px] max-h-[80vh] flex-shrink-0 relative">
            <img
              src="/swipe2.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col ml-[4rem] gap-[20px] flex-shrink-0 h-full max-w-[500px] text-lightBlack mb-8">
            <h2 className="text-[45px] leading-[55px] uppercase font-normal">
              Ontdek Onze Bijzondere Porsche Collectie
            </h2>
            <p className="text-[#313434CC] text-[20px]">
              Loop onze showroom binnen, waar we elk voertuig met zorg hebben
              uitgekozen en liefdevol gerestaureerd. Ontdek zeldzame, bijzondere
              Porsche-modellen die voldoen aan de hoogste normen van kwaliteit
              en schoonheid.
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
        <div className="flex items-center justify-center gap-16 flex-shrink-0 flex-grow ml-[10rem]">
          <div className="w-[500px] max-h-[80vh] flex-shrink-0 relative">
            <img
              src="/swipe3.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col ml-[4rem] gap-[20px] flex-shrink-0 h-full max-w-[500px] text-lightBlack mb-8">
            <h2 className="text-[45px] leading-[55px] uppercase font-normal">
              Het Proces van Restauratie - Transparantie en Kwaliteit
            </h2>
            <p className="text-[#313434CC] text-[20px]">
              Een grondig technisch onderzoek leidt ons restauratieproces, waar
              openheid en het behoud van originele kenmerken centraal staan.
              Onze vakbekwame monteurs zorgen voor de onbetwiste kwaliteit van
              elke Porsche.
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
        <div className="flex items-center justify-center gap-16 flex-shrink-0 flex-grow ml-[10rem]">
          <div className="w-[500px] max-h-[80vh] flex-shrink-0 relative">
            <img
              src="/swipe4.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col ml-[4rem] gap-[20px] flex-shrink-0 h-full max-w-[500px] text-lightBlack mb-8">
            <h2 className="text-[45px] leading-[55px] uppercase font-normal">
              DeAankoopervaring - Het Verwezenlijken van Uw Droom-Porsche{" "}
            </h2>
            <p className="text-[#313434CC] text-[20px]">
              Laat ons toegewijde team u persoonlijk begeleiden in het
              aankoopproces. Ervaar de kracht en elegantie van uw gewenste
              Porsche met een exclusieve proefrit, waar uw dromen werkelijkheid
              worden.
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
