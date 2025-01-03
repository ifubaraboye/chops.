import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from '../assets/hero.png'
import './Home.css'

export function Home() {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center gap-x-28 items-center">
          <div className="leading-tight">
            <p className="text-[100px] font-bold" id="enjoy">ENJOY YOUR FOOD</p>
            <p className="text-[100px] font-bold" id="naija">THE NAIJA WAY</p>
            <p>Savor the flavors that bring people together. From street eats to gourmet treats, every bite tells a story. Dive into a world where taste meets tradition.</p>
            <button className='border p-3 rounded-lg bg-[#E63946] outline-none text-white font-bold'>Place an Order</button>
          </div>
          <div>
            <img src={Hero}  alt="" width={500}></img>
          </div>
        </div>
      </div>
    );
  }
