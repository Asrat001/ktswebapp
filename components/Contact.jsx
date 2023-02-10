import React from "react";

function Contact() {
  return (
      <div className="bg-gradient-to-r from-emerald-500  via-green-600 to-lime-600 ">
      <h1 className="text-5xl text-white px-8">contact us </h1>
      <div className=" ">
        <div className="flex  flex-col px-6 py-4 ">
          <label className="text-white font-open text-[18px]">Name</label>
          <input className="p-4 w-[600px]   rounded-xl " type="text" />
        </div>
        <div className="flex  flex-col px-6 py-4">
          <label className="text-white font-open text-[18px]">Email</label>
          <input className="p-4 w-[600px]   rounded-xl " type="email" />
        </div>
        <div className="flex flex-col px-6 py-4">
          <label className="text-white font-open text-[18px]">Massege</label>
          <input className="py-16 w-[600px]   rounded-xl " type="text" />
        </div>
        <div className="pb-24 pt-4">
          <button className="text-2xl font-open p-4  text-white ml-8 rounded-[6px] w-[400px] bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-600 hover:btn-shadow">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
