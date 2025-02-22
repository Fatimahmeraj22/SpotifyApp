import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className='w-full flex jsutify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_left}
            alt=""
          />
          <img
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className='flex items-center gap-4'>

            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center'>Explore Premium</p>

        </div>

        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl'>All </p>
            <p className='bg-white px-4 py-1 rounded-2xl'>Music </p>
            <p className='bg-white px-4 py-1 rounded-2xl'>Podcast </p>

        </div>
      </div>
    </>
  );
};

export default Navbar;
