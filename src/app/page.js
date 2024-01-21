import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recent from "@/components/Recent";
import Signature from "@/components/Signature";
import Swiper from "@/components/Swiper";

export default function Home() {
  return (
    <>
      <div
        className="main relative z-20 bg-[#F5F5F5] overflow-x-hidden"
        id="main"
      >
        <Header />
        <Hero />
        <div className="max-w-[1400px] mx-auto">
          <Collection />
        </div>
        <Swiper />
        <div className="max-w-[1400px] mx-auto">
          <Signature />
          <Recent />
        </div>
      </div>
      <Footer />
    </>
  );
}
