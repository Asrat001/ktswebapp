import Image from "next/image";
import React from "react";
import free from "../public/free.png";
import hard from "../public/hard.png";
import soft from "../public/soft.png";

function Service() {
  return (
    <div className="bg-[#2D333F] h-[100vh]">
      <h1 className="text-3xl sm:text-6xl py-10 text-center font-open text-white">
        service we provide
      </h1>
      <div className=" py-16 px-8 grid sm:grid-cols-3 gap-4">
        <div className="border-gray-50 border-2 h-[300px] rounded-xl">
          <div className="flex justify-center py-6">
            <Image src={hard} width="100" height="100"/>
          </div>
          <div className="px-4">
          <p className="text-center text-xl font-open text-white font-bold"> hardware maintenance</p>
          <p className="text-justify text-[14px] font-open text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat!</p>
          </div>
        </div>
        <div className="border-gray-50 border-2 h-[300px] rounded-xl">
          <div className="flex justify-center py-7 ">
            <Image src={soft} width="100" height="100" />
          </div>
          <div className="px-4">
          <p className="text-center text-xl font-open text-white font-bold"> Software maintenance</p>
          <p className="text-justify text-[14px] font-open text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat!</p>
          </div>
        </div>
        <div className="border-gray-50 border-2 h-[300px] rounded-xl">
          <div className="flex justify-center py-3">
            <Image src={free} width="100" height="100" />
          </div>
          <div className="px-4">
          <p className="text-center text-xl font-open text-white font-bold"> Free service</p>
          <p className="text-justify text-[14px] font-open text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
