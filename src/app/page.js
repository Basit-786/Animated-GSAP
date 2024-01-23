"use client";

import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recent from "@/components/Recent";
import Signature from "@/components/Signature";
import Swiper from "@/components/Swiper";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <div
        className="main relative z-20 bg-[#F5F5F5] overflow-x-hidden  overflow-auto" 
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
