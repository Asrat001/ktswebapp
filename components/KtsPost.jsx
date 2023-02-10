import Image from 'next/image'
import React from 'react'
import img from '../public/gang.png'

function KtsPost() {
  return (
    <div>
        <h1 className='text-white text-3xl font-semibold '> Useful <span className='text-3xl text-slate-800 font-semibold'>Blogs</span></h1>
        <div className='grid sm:grid-cols-4 py-6'>
          <div className='w-auto h-auto bg-white opacity-80 space-y-2 shadow-xl shadow-black rounded-[4px]'>
            <div className='bg-black flex justify-center items-center  h-[200px] py-4'>
             <Image src={img} alt='img' className=' h-[200px]' />
            </div>
            <div className='px-4 py-3'>
            <p className='text-[18px] text-sky-800 m'> How to use our service efficently </p>
            <p className=' text-gray-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nisi.</p>
            </div>
           <div>
            <button className=''>Read more</button>
           </div>
          </div>
        </div>
    </div>
  )
}

export default KtsPost