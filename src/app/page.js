"use client"
import react, {useEffect} from "react";

import Collection from "@/components/Collection";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recent from "@/components/Recent";
import Signature from "@/components/Signature";
import Swiper from "@/components/Swiper";



export default function Home() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <div className="main relative z-20 bg-[#F5F5F5]" id="main" >
        <Header />
        <Hero />
        <Collection />
        <Swiper />
        <Signature />
        <Recent />
        <Feed />
      </div>
        <div className="h-screen bg-transparent"></div>
      <Footer />
    </>
  );
}
