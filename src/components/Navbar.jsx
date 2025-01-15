import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import './Navbar.css'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setBurgerClass(isMenuOpen ? 'burger-bar unclicked' : 'burger-bar clicked')
  }

  return (
    <nav className='relative'>
      <div className='flex justify-between px-9 py-4 items-center flex-wrap'>
        <div className='flex items-baseline'>
          <p className='text-[30px] font-bold'><Link to='/'>Chops</Link></p>
          <p className='text-[30px] font-bold text-[#E63946]'>.</p>
        </div>
        
        {/* Desktop Menu */}
        <div>
          <ul className='pr-12 gap-x-14 font-semibold hidden lg:flex'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div className='flex items-center gap-x-7'>
          <li className='text-gray-500 list-none' title='Cart'>
            <Link to='/cart'><FaCartShopping size={25}/></Link>
          </li>

          {/* Hamburger Button */}
          <button 
            className='lg:hidden flex flex-col justify-center items-center'
            onClick={toggleMenu}
            aria-label='Menu'
          >
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden absolute top-full right-10 bg-white shadow-lg z-50 w-[200px] justify-end'>
          <ul className='flex flex-col py-4 px-9 '>
            <li className='py-2'>
              <Link to='/' onClick={toggleMenu}>Home</Link>
            </li>
            <li className='py-2'>
              <Link to='/gallery' onClick={toggleMenu}>Gallery</Link>
            </li>
            <li className='py-2'>
              <Link to='/about' onClick={toggleMenu}>About</Link>
            </li>
            <li className='py-2'>
              <Link to='/contact' onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}