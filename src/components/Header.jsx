import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-8 fixed z-40 top-0 right-0 left-0 w-full">
      <div className="">
        <Image
          src={"/logo.png"}
          width={130}
          height={200}
          className=""
          alt="LOGO"
        />
      </div>
      <ul className="flex items-center gap-5 text-lightWhite text-[13px] leading-[30px] uppercase">
        <li>
          <Link href={"#"} className="nav-link">
            Who we are
          </Link>
        </li>
        <li>
          <Link href={"#"} className="nav-link">
            Our brands
          </Link>
        </li>
        <li>
          <Link href={"#"} className="nav-link">
            Experiences
          </Link>
        </li>
        <li>
          <Link href={"#"} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
