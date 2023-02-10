import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import device from "../public/device.png";
import num from "../public/number.png";
import phone from "../public/phone.png";

function Register() {
  return (
    <Layout>
      <h1 className="text-white text-3xl font-semibold ">
        {" "}
        Register your{" "}
        <span className="text-3xl text-slate-800 font-semibold">Device</span>
      </h1>
      <div className="py-6 px-4">
        <div className="sm:w-[500px] h-[600px] bg-white  shadow-lg shadow-black">
          <form className="flex flex-col justify-center items-center py-4 gap-2">
            <div>
              <label className=" text-sky-800 text-[18px] ">Device Name:</label>
              <br />
              <div className="h-[40px] justify-center items-center flex bg-indigo-800 rounded-[10px]  pl-2">
                <Image src={device} alt="h" className="w-[30px] h-[30px]" />
                <input
                  type="text"
                  className=" h-[40px] rounded-r-[10px]  bg-black ml-2 opacity-60 text-white p-2 "
                />
              </div>
            </div>
            <div>
              <label className=" text-sky-800 text-[18px] ">S/N Number:</label>
              <br />
              <div className="h-[40px] justify-center items-center flex bg-indigo-800 rounded-[10px]  pl-2">
                <Image src={num} alt="h" className="w-[30px] h-[30px]" />
                <input
                  type="text"
                  className=" h-[40px] rounded-r-[10px]  bg-black ml-2 opacity-60 text-white p-2 "
                  placeholder="only if the device is PC"
                />
              </div>
            </div>
            <div>
              <label className=" text-sky-800 text-[18px] ">
                phone Number:
              </label>
              <br />
              <div className="h-[40px] justify-center items-center flex bg-indigo-800 rounded-[10px]  pl-2">
                <Image src={phone} alt="h" className="w-[30px] h-[30px]" />
                <input
                  type="text"
                  className=" h-[40px] rounded-r-[10px]  bg-black ml-2 opacity-60 text-white p-2 "
                />
              </div>
            </div>
            <div>
              <label className=" text-sky-800 text-[18px] ">
                phone Number:
              </label>
              <br />
              <div className="h-[40px] justify-center items-center flex bg-indigo-800 rounded-[10px]  pl-2">
                <Image src={phone} alt="h" className="w-[30px] h-[30px]" />
                <input
                  type="text"
                  className=" h-[40px] rounded-r-[10px]  bg-black ml-2 opacity-60 text-white p-2 "
                />
              </div>
            </div>
            <div>
              <label className=" text-sky-800 text-[18px] ">
                phone Number:
              </label>
              <br />
              <div className="h-[40px] justify-center items-center flex bg-indigo-800 rounded-[10px]  pl-2">
                <Image src={phone} alt="h" className="w-[30px] h-[30px]" />
                <input
                  type="text"
                  className=" h-[40px] rounded-r-[10px]  bg-black ml-2 opacity-60 text-white p-2 "
                />
              </div>
            </div>
            <button className="  flex  items-center mt-6  justify-center text-white w-[100px] h-[45px]  bg-indigo-900 rounded-[10px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
