import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='flex justify-between px-9 px-auto py-4 items-center'>
        <div className='flex items-baseline'>
            <p className='text-[30px] font-bold'>Chops</p>
            <p className='text-[30px] font-bold text-[#E63946]'>.</p>
        </div>
        
        <div>
            <ul className='flex gap-x-14 font-semibold'>
                <li className=''><Link to='/'>Home</Link></li>
                <li className='text-gray-500'><Link to='/gallery'>Gallery</Link></li>
                <li className='text-gray-500'><Link to='/about'>About</Link></li>
                <li className='text-gray-500'><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <button className='border p-3 rounded-lg bg-[#E63946] outline-none text-white font-bold'>Place an Order</button>
    </div>
  )
}
