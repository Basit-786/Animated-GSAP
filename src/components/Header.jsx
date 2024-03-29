"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <header
      className={`fixed z-50 top-0 right-0 left-0 w-full ${
        scroll ? "bg-black/40" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-16 py-5 lg:py-5 w-full">
        <div
          className={`${
            scroll ? "w-[50px]" : "w-[100px] lg:w-[120px]"
          } transition-all duration-300 ease-in-out`}
        >
          <Image
            src={`${scroll ? "/scrolllogo.png" : "/logo.png"}`}
            width={130}
            height={200}
            className="w-full object-cover object-center"
            alt="LOGO"
          />
        </div>
        <ul className="flex items-center gap-5 text-lightWhite text-[13px] leading-[30px] uppercase">
          <li>
            <Link href={"#"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href={"#"} className="nav-link">
              Advies
            </Link>
          </li>
          <li>
            <Link href={"#"} className="nav-link">
              Collectie
            </Link>
          </li>
          <li>
            <Link href={"#"} className="nav-link">
              Over ons
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
