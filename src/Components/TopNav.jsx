import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { FaGoogleWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  return (

    <div className='max-w-[1600] mx-auto flex justify-between items-center p-3 fixed top-0 left-0 right-0 z-20'>
      <div className='flex items-center'>
        <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className='text-xl sm:text-3xl lg:text-4xl px-2 relative top-1'>Dish
          <span className='text-[#d65939]'>Delight</span>
        </h1>
      </div>

      <div className='bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search recipes...' />
      </div>

      <button className='bg-[#d65939] text-white hidden md:flex items-center gap-2 py-2 rounded-xl border-none hover:bg-[#983f28]'>
        <BsFillCartFill /> Cart
      </button>
      {
        sideNav ? (
          <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNav(!sideNav)}></div>
        ) : ("")
      }

      <div className={sideNav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200"
        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"}>

        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className="p-4 text-2xl flex items-start">Dish<span className='text-[#d65939]'>Delight</span></h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-700">
            <li className='text-xl py-4 flex'>
              <BsPerson size={25} className='mr-4 text-white bg-black  rounded-lg' />
              My Account
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckReturn size={25} className='mr-4 text-white bg-black  rounded-lg' />
              Delivery
            </li>
            <li className='text-xl py-4 flex'>
              <MdOutlineFavorite size={25} className='mr-4 text-white bg-black  rounded-lg' />
              My Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <FaGoogleWallet size={25} className='mr-4 text-white bg-black  rounded-lg' />
              Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4 text-white bg-black  rounded-lg' />
              Help
            </li>
          </ul>
        </nav>
      </div>

    </div>

  )
}

export default TopNav