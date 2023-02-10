import Image from "next/image";
import React from "react";
import free from "../public/free.png";
import hard from "../public/hard.png";
import soft from "../public/soft.png";

function Service() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... h-[100vh]">
      <h1 className="text-3xl sm:text-5xl py-10 text-center font-open text-white">
        service we provide
      </h1>
      <div className=" py-16 px-8 grid sm:grid-cols-3 gap-4">
        <div className="border-2 border-indigo-500/50  h-[300px] bg-white shadow-lg shadow-indigo-900/50 rounded-xl">
          <div className="flex justify-center py-6">
            <Image src={hard} width="60" height="60"/>
          </div>
          <div className="px-4">
          <p className="text-center text-xl font-open font-bold"> hardware maintenance</p>
          <p className="text-justify text-[14px] font-open "> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat!</p>
          </div>
        </div>
        <div className="border-2 border-indigo-400/50 h-[300px]  bg-white text-black shadow-lg shadow-indigo-900/50 rounded-xl">
          <div className="flex justify-center py-7 ">
            <Image src={soft} width="50" height="50" />
          </div>
          <div className="px-4">
          <p className="text-center text-xl font-open  font-bold"> Software maintenance</p>
          <p className="text-justify text-[14px] font-open "> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat!</p>
          </div>
        </div>
        <div className="border-2 border-pink-400/50  h-[300px]  bg-white shadow-lg shadow-indigo-900/50 rounded-xl">
          <div className="flex justify-center py-6">
            <Image src={free} width="50" height="50" />
          </div>
          <div className="px-4">
          <p className="text-center text-xl font-open  font-bold"> Free service</p>
          <p className="text-justify text-[14px] font-open "> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
