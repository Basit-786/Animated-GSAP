import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recent = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-24 bg-[#F5F5F5]">
      <div className="text-center my-12">
        <h2 className="text-[50px] uppercase font-normal -ml-48 leading-[60px]">
          Recently added
        </h2>
        <h2 className="text-[50px] uppercase font-normal leading-[60px]">
          to our collection
        </h2>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 mr-4">
            <Image
              width={200}
              height={230}
              src="/recent1.png"
              alt=""
              className="max-w-[200px] shadow-2xl w-full h-full object-cover object-center"
            />
            <Image
              width={200}
              height={230}
              src="/recent1.png"
              alt=""
              className="max-w-[200px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="">
            <Image
              width={500}
              height={550}
              src="/recent3.png"
              alt=""
              className="max-w-[500px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white shadow-2xl px-16 py-8 text-black">
            <h2 className="text-[27px] leading-[39px]">McLaren GT</h2>
            <p className="text-[13px] tracking-[0.2px] my-2">
              4.0 V8 | Ceramic | Electrochromic | Black Pack |
            </p>
            <div className="flex items-center justify-between gap-3 my-6">
              <div className="">
                <p className="text-[#10182180] text[10px]">Jaar</p>
                <h5 className="text-[#151515] text-[18px] ">New</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Km Stand</p>
                <h5 className="text-[#151515] text-[18px] ">15km</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Prijs</p>
                <h5 className="text-[#151515] text-[18px] ">€ 305.450,-</h5>
              </div>
            </div>
            <div className="mt-8 mb-6">
              <Link
                href={"#"}
                className="text-[15px] px-[32px] bg-[#073737] py-[12px] rounded-[30px] text-white"
              >
                Bekijk alle wagens
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 mr-4">
            <Image
              width={200}
              height={230}
              src="/recent1.png"
              alt=""
              className="max-w-[200px] shadow-2xl w-full h-full object-cover object-center"
            />
            <Image
              width={200}
              height={230}
              src="/recent1.png"
              alt=""
              className="max-w-[200px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="">
            <Image
              width={500}
              height={550}
              src="/recent3.png"
              alt=""
              className="max-w-[500px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white shadow-2xl px-16 py-8 text-black">
            <h2 className="text-[27px] leading-[39px]">McLaren GT</h2>
            <p className="text-[13px] tracking-[0.2px] my-2">
              4.0 V8 | Ceramic | Electrochromic | Black Pack |
            </p>
            <div className="flex items-center justify-between gap-3 my-6">
              <div className="">
                <p className="text-[#10182180] text[10px]">Jaar</p>
                <h5 className="text-[#151515] text-[18px] ">New</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Km Stand</p>
                <h5 className="text-[#151515] text-[18px] ">15km</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Prijs</p>
                <h5 className="text-[#151515] text-[18px] ">€ 305.450,-</h5>
              </div>
            </div>
            <div className="mt-8 mb-6">
              <Link
                href={"#"}
                className="text-[15px] px-[32px] bg-[#073737] py-[12px] rounded-[30px] text-white"
              >
                Bekijk alle wagens
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 mr-4">
            <Image
              width={200}
              height={230}
              src="/recent1.png"
              alt=""
              className="max-w-[200px] shadow-2xl w-full h-full object-cover object-center"
            />
            <Image
              width={200}
              height={230}
              src="/recent1.png"
              alt=""
              className="max-w-[200px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="">
            <Image
              width={500}
              height={550}
              src="/recent3.png"
              alt=""
              className="max-w-[500px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white shadow-2xl px-16 py-8 text-black">
            <h2 className="text-[27px] leading-[39px]">McLaren GT</h2>
            <p className="text-[13px] tracking-[0.2px] my-2">
              4.0 V8 | Ceramic | Electrochromic | Black Pack |
            </p>
            <div className="flex items-center justify-between gap-3 my-6">
              <div className="">
                <p className="text-[#10182180] text[10px]">Jaar</p>
                <h5 className="text-[#151515] text-[18px] ">New</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Km Stand</p>
                <h5 className="text-[#151515] text-[18px] ">15km</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Prijs</p>
                <h5 className="text-[#151515] text-[18px] ">€ 305.450,-</h5>
              </div>
            </div>
            <div className="mt-8 mb-6">
              <Link
                href={"#"}
                className="text-[15px] px-[32px] bg-[#073737] py-[12px] rounded-[30px] text-white"
              >
                Bekijk alle wagens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
