import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recent = () => {
  return (
    <div className="px-4 py-24 bg-[#F5F5F5]">
      <div className="text-center my-12">
        <h2 className="text-[50px] uppercase font-normal leading-[60px]">
          Ontdek Onze
        </h2>
        <h2 className="text-[50px] uppercase font-normal leading-[60px]">
          Classic Car Collectie
        </h2>
      </div>
      <div className="flex flex-col gap-20">
     
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center flex-shrink-0 justify-center gap-2 mr-4">
            <Image
              width={250}
              height={250}
              src="/re3.png"
              alt=""
              className="max-w-[250px] shadow-2xl w-full h-full object-cover object-center"
            />
            <Image
              width={200}
              height={230}
              src="/re2.png"
              alt=""
              className="max-w-[250px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="">
            <Image
              width={680}
              height={600}
              src="/rec1.png"
              alt=""
              className="max-w-[600px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white shadow-2xl pl-[90px] pr-[85px] p-[40px] text-black">
            <h2 className="text-[27px] leading-[39px]">
            Porsche 911T 2.4 Targa
            </h2>
            <p className="text-[13px] tracking-[0.2px] my-2">
            2.4 | Targa | Viper green |
            </p>
            <div className="flex items-center justify-between gap-3 my-6">
              <div className="">
                <p className="text-[#10182180] text[10px]">Jaar</p>
                <h5 className="text-black text-[18px] ">1972</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Km Stand</p>
                <h5 className="text-black text-[18px] ">15 km</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Prijs</p>
                <h5 className="text-black text-[18px] ">€ 139.500,-</h5>
              </div>
            </div>
            <div className="mt-8 mb-6">
              <Link
                href={"#"}
                className="text-[15px] px-6 py-4 bg-[#073737] rounded-[30px] text-white"
              >
                Bekijk alle wagens
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center flex-shrink-0 justify-center gap-2 mr-4">
            <Image
              width={250}
              height={250}
              src="/re21.png"
              alt=""
              className="max-w-[250px] shadow-2xl w-full h-full object-cover object-center"
            />
            <Image
              width={200}
              height={230}
              src="/re22.png"
              alt=""
              className="max-w-[250px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="">
            <Image
              width={680}
              height={600}
              src="/re23.png"
              alt=""
              className="max-w-[600px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white shadow-2xl pl-[90px] pr-[85px] p-[40px] text-black">
            <h2 className="text-[27px] leading-[39px]">
            Porsche 911T 2.4 Targa
            </h2>
            <p className="text-[13px] tracking-[0.2px] my-2">
            2.4 | Targa | Viper green |
            </p>
            <div className="flex items-center justify-between gap-3 my-6">
              <div className="">
                <p className="text-[#10182180] text[10px]">Jaar</p>
                <h5 className="text-black text-[18px] ">1972</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Km Stand</p>
                <h5 className="text-black text-[18px] ">15 km</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Prijs</p>
                <h5 className="text-black text-[18px] ">€ 139.500,-</h5>
              </div>
            </div>
            <div className="mt-8 mb-6">
              <Link
                href={"#"}
                className="text-[15px] px-6 py-4 bg-[#073737] rounded-[30px] text-white"
              >
                Bekijk alle wagens
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center flex-shrink-0 justify-center gap-2 mr-4">
            <Image
              width={250}
              height={250}
              src="/re31.png"
              alt=""
              className="max-w-[250px] shadow-2xl w-full h-full object-cover object-center"
            />
            <Image
              width={200}
              height={230}
              src="/re32.png"
              alt=""
              className="max-w-[250px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="">
            <Image
              width={680}
              height={600}
              src="/re33.png"
              alt=""
              className="max-w-[600px] shadow-2xl w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white shadow-2xl pl-[90px] pr-[85px] p-[40px] text-black">
            <h2 className="text-[27px] leading-[39px]">
            Porsche 911T 2.4 Targa
            </h2>
            <p className="text-[13px] tracking-[0.2px] my-2">
            2.4 | Targa | Viper green |
            </p>
            <div className="flex items-center justify-between gap-3 my-6">
              <div className="">
                <p className="text-[#10182180] text[10px]">Jaar</p>
                <h5 className="text-black text-[18px] ">1972</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Km Stand</p>
                <h5 className="text-black text-[18px] ">15 km</h5>
              </div>
              <div className="">
                <p className="text-[#10182180] text[10px]">Prijs</p>
                <h5 className="text-black text-[18px] ">€ 139.500,-</h5>
              </div>
            </div>
            <div className="mt-8 mb-6">
              <Link
                href={"#"}
                className="text-[15px] px-6 py-4 bg-[#073737] rounded-[30px] text-white"
              >
                Bekijk alle wagens
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slider */}

      <div className="mt-[10rem]">
      <div className=" my-12">
        <h2 className="text-[50px] font-semibold leading-[60px]">
        Onze Porsche Klassiekers. 
        </h2>
        <p className="text-[14px] text-[#999]">
        Bekijk onze verkochte modellen

        </p>
      </div>
      <div className="flex items-center flex-nowrap overflow-auto scroll-smooth snap-mandatory snap-center hideScroll">
        <div className="flex-shrink-0 w-[480px] mr-[3rem]">
        <Image
              width={600}
              height={650}
              src="/reswipe1.jpeg"
              alt=""
              className="w-full shadow-2xl h-full object-cover object-center"
            />
        </div>
        <div className="flex-shrink-0 w-[480px] mr-[3rem]">
        <Image
              width={600}
              height={650}
              src="/reswipe2.jpeg"
              alt=""
              className="w-full shadow-2xl h-full object-cover object-center"
            />
        </div>
        <div className="flex-shrink-0 w-[480px] mr-[3rem]">
        <Image
              width={600}
              height={650}
              src="/reswipe3.jpeg"
              alt=""
              className="w-full shadow-2xl h-full object-cover object-center"
            />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Recent;
