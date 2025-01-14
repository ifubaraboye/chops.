import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'


export const Navbar = () => {
  return (
    <div className='flex justify-between px-9 px-auto py-4 items-center flex-wrap'>
        <div className='flex items-baseline'>
            <p className='text-[30px] font-bold'>Chops</p>
            <p className='text-[30px] font-bold text-[#E63946]'>.</p>
        </div>
        
        <div>
            <ul className='pr-12 gap-x-14 font-semibold hidden sm:hidden lg:visible lg:flex'>
                <li className=''><Link to='/'>Home</Link></li>
                <li className=''><Link to='/gallery'>Gallery</Link></li>
                <li className=''><Link to='/about'>About</Link></li>
                <li className=''><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>

        <div className='flex items-center gap-x-7'>
        
        <li className='text-gray-500 list-none' title='Cart'><Link to='/cart'><FaCartShopping size={25}/></Link></li>

        </div>
    </div>
  )
}
