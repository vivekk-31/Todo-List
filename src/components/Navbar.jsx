import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gray-900 h-20 cursor-pointer w-full'>
        <ul className='mx-3 my-4 font-bold text-3xl text-gray-300 transition-transform duration-300 active:scale-95'>MyTask</ul>
      <ul className='flex gap-4 my-8 mx-20'>
       <div className="circle h-5 w-5 rounded-full bg-gradient-to-br from-[#003366] to-[#0f52ba] transition-transform duration-400 hover:scale-[120%] active:scale-[95%]"></div>
       <div className="circle h-5 w-5 rounded-full bg-gradient-to-br from-[#003366] to-[#0f52ba] transition-transform duration-400 hover:scale-[120%] active:scale-[95%]"></div>
       <div className="circle h-5 w-5 rounded-full bg-gradient-to-br from-[#003366] to-[#0f52ba] transition-transform duration-400 hover:scale-[120%] active:scale-[95%]"></div>
      </ul>
    </nav>
  )
}

export default Navbar
