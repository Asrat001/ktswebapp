import Image from "next/image";
import React from "react";
import fixing from "../public/fixing.png";

function Landingpage() {
  return (
    <div>
      <div className="h-[100vh] bg-[#202124] flex flex-col sm:flex-row sm:justify-between  w-full">
        <div className="sm:w-[50%] sm:ml-[4rem] sm:mt-[10rem]">
          <h1 className="text-4xl pt-12 sm:text-[64px] text-white text-center sm:text-start font-open">
            {" "}
            Welcome to Kts
          </h1>
          <p className=" text-[16px] sm:text-2xl my-6 text-white font-open text-center sm:text-start ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aliquid quod odio suscipit quae architecto dignissimos adipisci
            placeat, voluptates doloremque?
          </p>
        </div>
        <div className="sm:w-[50%] sm:pt-[4rem]">
          <div className="w-[100%] h-[400px] sm:h-[500px] flex justify-center items-center">
            <Image
              src={fixing}
              width="500"
              height="400"
              alt="hgyhdb"
              className="sm:ml-10 aspect-square  overflow-clip "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
