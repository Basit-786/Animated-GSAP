import Image from "next/image";
import React from "react";

const Feed = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-32 ">
      <div className="flex items-center justify-center flex-col gap-5 mb-8">
        <h1 className="text-[44px] text-lightBlack uppercase">
          Follow our feeds
        </h1>
        <p className="text-[#A89991] text-[20px]">@dieterenluxuryperformance</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-[14px]">
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed3.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed1.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed2.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed3.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed1.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed3.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed2.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-[180px] h-[180px] overflow-hidden cursor-pointer">
            <Image
              src="/feed1.jpeg"
              width={200}
              height={200}
              alt="Feed"
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
