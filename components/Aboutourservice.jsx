import Image from "next/image";
import React from "react";
import user from "../public/user.png"
import form from "../public/form.png"
import drop from "../public/drop.png"
import check from "../public/check.png"
import gang from "../public/gang.png"

function Aboutourservice() {
  return (
    <div className="h-[900px]">
      <p className="text-center text-5xl pt-[100px] pb-20   text-indigo-600">
        how to use our website
      </p>
      <div className="px-10">
        <div className=" w-full  items-center  gap-3 h-[calc(100vh-9rem)] myshadow   ">
          <div className="flex  p-10 gap-4">
<div className=" flex flex-col justify-evenly w-[50%] h-[400px] px-6 ">
  <div className="flex gap-4 items-center">
  <Image src={user} alt="user" /> 
  <p className=" text-slate-700 text-[18px]">first Register  to use our service</p>
  </div>
  <div className="flex gap-4 items-center">
  <Image src={form} alt="user" /> 
  <p className=" text-slate-700 text-[18px]">fill your form online </p>
  </div>
  <div className="flex gap-4 items-center">
  <Image src={drop} alt="user" /> 
  <p className=" text-slate-700 text-[18px]">drop your pc or other device  to be fixed to our office</p>
  </div>
  <div className="flex gap-4 items-center">
  <Image src={check} alt="user" /> 
  <p className=" text-slate-700 text-[18px]">you can check who is fixing your device online</p>
  </div>
  


</div>
<div className=" flex  justify-evenly  w-[50%] h-[400px] px-6 ">
<div className=" flex items-center pl-6  w-[80%]">
<Image src={gang} alt="pepople"/>
</div>

<p className=" text-blue-800 text-2xl "> we are here for You !! we gochu</p>

</div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Aboutourservice;
