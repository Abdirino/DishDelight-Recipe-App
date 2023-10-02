import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFilter } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'

const TopNav = () => {
  return (
    <div className='max-w-[1600] mx-auto flex justify-between items-center p-4 shadow-lg'>
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className='text-xl sm:text-3xl lg:text-4xl px-2'>Dish
          <span className='text-[#d65939]'>Delight</span>
        </h1>
      </div>
      <div className='bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search recipes...'/>
      </div>
      <button className='bg-[#d65939] text-white hidden md:flex items-center gap-2 py-2 rounded-xl border-none hover:bg-[#983f28]'>
        <BsFillCartFill /> Cart
      </button>
    </div>
  )
}

export default TopNav