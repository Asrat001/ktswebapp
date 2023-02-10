import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import KtsPost from './KtsPost'

function Layout({ children }) {
  const [clicked,setClicked] = useState(false)
  return (
    <div className='bg-gradient-to-r from-slate-900   via-green-900 to-sky-900 h-[900px]  '>
      <div className='flex flex-col sm:flex-row '>
      <div className=' opacity-90  '>
         <h1 className='text-2xl text-white text-center font-semibold p-4'>kts service</h1>
         <Sidebar/>
         </div>
         {/* user pages*/}
         <div className='flex-1 h-[100vh] border-t-2 sm:border-t-0 sm:border-l-2 border-white sm:p-10' >
          
       {children}

         </div>

      </div>
       

    </div>
  )
}

export default Layout