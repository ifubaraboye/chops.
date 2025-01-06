import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from '../assets/hero.png'
import './Home.css'
import  ProductList  from "../components/ProductList";
import Products from "../components/Products";
import { Link } from "react-router-dom";

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

        <div className="pt-20 pb-5">
          <div className="flex justify-center items-center pt-10 px-auto">
            <ul className="flex gap-x-10 text-gray-500 font-semibold">
              <div>
                <li className="text-black"><Link to='#packs'>PACKS</Link></li>
                <p className="border-[2px] border-[#E63946] rounded-lg"></p>
              </div>
              <div>
                <li><Link to='#platter'>PLATTERS</Link></li>
                <p className="border-[2px] border-[#E63946] rounded-lg"></p>
              </div>
              <div>
                <li><Link to='#protein'>PROTEIN</Link></li>
                <p className="border-[2px] border-[#E63946] rounded-lg"></p>
              </div>
            </ul>
          </div>

          <div id="pack" className="pt-12"><ProductList Products={Products} category='Pack' /></div>
          {/* <div id="platter" className=""><ProductList Products={Products} category='Platter' /></div> */}
          {/* <div id="protein" className=""><ProductList Products={Products} category='Protein' /></div> */}
          
        </div>
      </div>
    );
  }
