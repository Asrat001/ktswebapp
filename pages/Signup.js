import Image from "next/image";
import React, { useState } from "react";
import Profile from "../public/pro.png";
import google from "../public/google.png";
import Link from "next/link";
import { UserAuth } from '../Context/AuthContext';
import { useRouter } from "next/router";


function Signup() {
  const [email,setEmail]=useState('')
  const [displayName,setdisplayName]=useState('')
  const [password, setPassword]=useState("")
  const route =useRouter()

  const {createUser,  googleSignin} =UserAuth()

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email,password)
      route.push('/product')

    } catch (e) {
      console.log(e.message);
    }
  };
  const handelGoogle = async (e) => {
    <Link></Link>
    try {
      await googleSignin()

    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="min-h-screen pt-16 pb-16 px-4 sm:px-0 bg-gradient-to-r from-slate-900   via-green-900 to-sky-900">
      <div className=" bg-gradient-to-r  from-red-400 via-orange-600 via-amber-500 to-pink-700 sm:w-[500px] h-[auto] m-auto rounded-2xl ">
        <div className=" flex justify-center items-center w-[150] h-[150] pt-8 ">
          <Image
            src={Profile}
            alt="avatar"
            width="100"
            height="100"
            className="  aspect-square  overflow-clip rounded-full"
          />
        </div>
        <h1 className="text-2xl text-center text-white pt-6"> Signup</h1>
        <form className=" flex justify-center items-center flex-col gap-6 mb-6">
        <div>
            <label className="text-white ">Name:</label>
            <br />
            <input
              type="text"
              className="w-[300px] h-[40px] rounded-[10px] opacity-[0.5] "
              onChange={(e)=>setdisplayName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-white ">Email:</label>
            <br />
            <input
              type="email"
              className="w-[300px] h-[40px] rounded-[10px] opacity-[0.5] "
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-white ">Password:</label>
            <br />
            <input
              type="password"
              className="w-[300px] h-[40px] rounded-[10px] opacity-[0.5]    "
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            className="  flex justify-center items-center gap-4  text-gray-800 w-[300px] h-[45px]  bg-white  rounded-[10px]"
            onClick={handelSubmit}
          >
            Signup
          </button>
        </form>
        <div className="flex justify-center items-center flex-col ">
          <button className="  flex  items-center gap-4  text-gray-800 w-[300px] h-[45px]  bg-white  rounded-[10px]" onClick={handelGoogle}>
            <Image
              src={google}
              alt=""
              width="35"
              height="35"
              className=" ml-4 "
            />
            Signup with Google
          </button>
          <p className="text-white text-center pt-6 pb-4">
            {" "}
            allrady have an account ?{" "}
            <Link href="/Login" className=" text-sky-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
