import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


function Navbar() {
  return (
    <div>
      <nav
        style={{fontFamily: 'Kanit'}} className=" z-50 text-center text-2xl sm:text-2xl p-3 bg-white shadow text-[#26AFC8]">
        <div className="relative">
          <div className="absolute">
            <button className="cursor-pointer inline-flex items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400">
            <ChevronLeftIcon className='text-[#26AFC8] '/>
            </button>
          </div>
        </div>
        Planet EV
      </nav>
    </div>
  )
}

export default Navbar