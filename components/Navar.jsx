import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";
function Navar() {
  return (
    <div className="sticky w-full">
      <div className="h-[80px]  w-full text-white flex justify-between px-[4rem] items-center bg-gradient-to-r from-slate-900   via-green-900 to-sky-900">
        {/* right logo*/}
        <div className="flex  justify-center items-center gap-1">
          <Image src={logo} alt="logo" />
          <p className="text-white text-[24px]  "> Kts</p>
        </div>
        {/* navigation*/}
        <div className="flex gap-4">
          <Link href="/Login" >
            Login
          </Link>
          <Link href="/Signup" >
            Sign up
          </Link>
          <Link href="/Aboutus" >
            About us
          </Link>
          <Link href="/#contact" >
            About us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navar;
