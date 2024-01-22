"use client";

import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recent from "@/components/Recent";
import Signature from "@/components/Signature";
import Swiper from "@/components/Swiper";

import "@/css/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function Home() {
  const srollRef = useRef(null);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const scroll = new LocomotiveScroll({
    //     el: srollRef.current,
    //     smooth: true,
    //   });
    //   return () => {
    //     scroll.destroy();
    //   };
    // }
  }, []);

  return (
    <>
      <div
        className="main relative z-20 bg-[#F5F5F5] overflow-x-hidden"
        id="main"
      >
        <Header />
        <Hero />
        <div className="max-w-[1500px] mx-auto px-6">
          <Collection />
        </div>
        <Swiper />
        <div className="max-w-[1500px] mx-auto px-6">
          <Signature />
          <Recent />
        </div>
      </div>
      <Footer />
    </>
  );
}
