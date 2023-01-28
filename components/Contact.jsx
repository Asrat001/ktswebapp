import React from 'react'

function Contact() {
  return (
    <div className=' bg-[#2C3632]'>
<h1 className='text-5xl text-white p-16'>contact us </h1>
<div className=' '>
<div className='flex flex-col px-6 py-4'>
    <label className='text-white font-open text-[18px]'>Name</label>
    <input className='p-4 w-[600px]   rounded-xl ' type='text'/>
</div>
<div className='flex flex-col px-6 py-4'>
    <label className='text-white font-open text-[18px]'>Email</label>
    <input className='p-4 w-[600px]   rounded-xl ' type='email'/>
</div>
<div className='flex flex-col px-6 py-4'>
    <label className='text-white font-open text-[18px]'>Massege</label>
    <input className='py-16 w-[600px]   rounded-xl ' type='text'/>
</div>
<div className='py-6'> 
<button className='text-2xl font-open p-4  text-white ml-8 rounded-[6px] w-[400px]  bg-cyan-800'>Send</button>
</div>
</div>
    </div>
  )
}

export default Contact