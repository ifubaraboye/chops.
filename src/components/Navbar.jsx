import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'


export const Navbar = () => {
  return (
    <div className='flex justify-between px-9 px-auto py-4 items-center'>
        <div className='flex items-baseline'>
            <p className='text-[30px] font-bold'>Chops</p>
            <p className='text-[30px] font-bold text-[#E63946]'>.</p>
        </div>
        
        <div>
            <ul className='flex ml-16 gap-x-14 font-semibold'>
                <li className=''><Link to='/'>Home</Link></li>
                <li className=''><Link to='/gallery'>Gallery</Link></li>
                <li className=''><Link to='/about'>About</Link></li>
                <li className=''><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>

        <div className='flex items-center gap-x-7'>
        <li className='text-gray-500 list-none'><Link to='/cart'><FaCartShopping size={20}/></Link></li>
        <button className='border p-3 rounded-lg bg-[#E63946] outline-none text-white font-bold'><a href="#buysection">Place an Order</a></button>

        </div>
    </div>
  )
}
