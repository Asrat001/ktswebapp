import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div>
        <div className='p-4 space-y-3  sm:flex-col'>
            <button className=' w-[150px] bg-white opacity-70 h-10 flex justify-center items-center px-2 rounded-xl hover:opacity-100 hover:text-sky-700'>
            <Link href="/product">   Posts from Kts</Link>
            
            </button>
            <button className='w-[150px] bg-white opacity-70 h-10 flex justify-center items-center px-2 rounded-xl hover:opacity-100 hover:text-sky-700'>
              
                <Link href="/Register">    checking progress</Link>
            </button>
            <button className='w-[150px] bg-white opacity-70 h-10 flex justify-center items-center px-2 rounded-xl hover:opacity-100 hover:text-sky-700'>
          
            <Link href="/Register">   register a device</Link>
            </button>
            <button className='w-[150px] bg-white opacity-70 h-10 flex justify-center items-center px-2 rounded-xl hover:opacity-100 hover:text-sky-700'>
          
            <Link href="/QandA">  Q&A</Link>
            </button>
        </div>
    </div>
  )
}

export default Sidebar