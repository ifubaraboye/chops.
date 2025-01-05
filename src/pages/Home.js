import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from '../assets/hero.png'
import './Home.css'
import  ProductList  from "../components/ProductList";

export function Home() {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center gap-x-28 items-center mt-10 px-auto">
          <div className="leading-tight">
            <p className="text-[100px] font-bold text-zinc-800" id="enjoy">ENJOY YOUR FOOD</p>
            <p className="text-[100px] font-bold text-gray-800" id="naija">THE NAIJA WAY</p>
            <div className="pb-6 pl-2">
              <p className="text-gray-500 font-semibold">Savor the flavors that bring people together. From street eats to gourmet</p>
              <p className="text-gray-500 font-semibold">treats, every bite tells a story. Dive into a world where taste meets</p>
              <p className="text-gray-500 font-semibold">traditions that unite, and dishes that delight your senses.</p>
            </div>
            <button className='border p-3 rounded-lg bg-[#E63946] outline-none text-white font-bold'>Place an Order</button>
          </div>
          <div>
            <img src={Hero}  alt="" width={500}></img>
          </div>
        </div>

        <div>
          <ProductList />
        </div>
      </div>
    );
  }
