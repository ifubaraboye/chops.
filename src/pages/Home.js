import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from '../assets/hero.png'
import './Home.css'
import  ProductList  from "../components/ProductList";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import Chicken from '../assets/chicken.jpg'
import Closeup from '../assets/closeup.jpg'
import Puff from '../assets/puff.jpg'
import Sauce from '../assets/chicken2.jpg'
import Heron from '../assets/hero2.jpg'
import Rice from '../assets/plat.jpg'
import { useState } from "react";

//Work in progress

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Pack')
  const categories = ['Pack', 'Platter', 'Protein']


    return (
      <div className="bg-[#eeeeee] px-auto mx-auto">
        <Navbar />
        <div className="flex justify-center gap-x-28 items-center mt-10 px-auto ">
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
                {/* <p className="border-[2px] border-[#E63946] rounded-lg"></p> */}
              </div>
              <div>
                <li><Link to='#platter'>PLATTERS</Link></li>
                {/* <p className="border-[2px] border-[#E63946] rounded-lg"></p> */}
              </div>
              <div>
                <li><Link to='#protein'>PROTEIN</Link></li>
                {/* <p className="border-[2px] border-[#E63946] rounded-lg"></p> */}
              </div>
            </ul>
          </div>

          <div id="pack" className="pt-12 pb-24"><ProductList Products={Products} category={selectedCategory} /></div>
          {/* <div id="platter" className=""><ProductList Products={Products} category='Platter' /></div> */}
          {/* <div id="protein" className=""><ProductList Products={Products} category='Protein' /></div> */}
          
        </div>

        <div className="bg-white py-20 px-40 flex gap-x-44">
          <div>
            <p className="font-semibold text-gray-500 tracking-wide">TESTIMONIALS</p>
            <div id="testimonial" className="flex text-[55px] leading-[60px]">
              <p>SATIFIED</p>
              <p className="text-[#E63946]">CUSTOMERS</p>
            </div>
            <div className="pt-6">
                <div className="w-[500px] leading-5 font-semibold text-gray-500 pb-4">
                  <p className="text-[18px] ">"Wow, just wow! This meal was an explosion of flavor. The delivery was incredibly fast and the packaging was top-notch. Will definitely be a repeat customer!"</p>
                  <p className="text-right pr-7">-FlavorFanatic</p>
                </div>
                <div className="w-[500px] leading-5 font-semibold text-gray-500 pb-4">
                  <p className="text-[18px] ">"Absolutely delighted with my order. The portions were generous, the quality was exceptional, and the delivery driver was friendly and efficient. 10/10!"</p>
                  <p className="text-right pr-5">-HappyHungry</p>
                </div>
                <div className="w-[500px] leading-5 font-semibold text-gray-500 pb-4">
                  <p className="text-[18px] ">"This was a truly satisfying meal. The flavors were perfectly balanced and the presentation was beautiful. I'm already planning my next order."</p>
                  <p className="text-right pr-4">-DelightedDiner</p>
                </div>
                <div className="w-[500px] leading-5 font-semibold text-gray-500">
                  <p className="text-[18px] ">"I'm a happy customer! The food was delicious, the delivery was on time, and the overall experience was fantastic. Will definitely order from here again."</p>
                  <p className="text-right pr-4">-SatisfiedSarah</p>
                </div>
              </div>
          </div>
          <div>
          <p className="font-semibold text-gray-500 tracking-wide">GALLERIES</p>
            <div id="testimonial" className="flex text-[55px] leading-[60px]">
              <p>PHOTO</p>
              <p className="text-[#E63946]">GALLERIES</p>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-x-7 gap-y-7 py-6 ">
              <img src={Chicken} alt="" className="rounded-md"></img>
              <img src={Closeup} alt="" className="rounded-md"></img>
              <img src={Puff} alt="" className="rounded-md"></img>
              <img src={Sauce} alt="" className="rounded-md"></img>
              <img src={Heron} alt="" className="rounded-md"></img>
              <img src={Rice} alt="" className="rounded-md"></img>
            </div>
            <button className="mt-1 border rounded-md p-3 font-semibold bg-[#E63946] text-white border-none"><Link to='/gallery'>MORE GALLERIES</Link></button>
          </div>
        </div>
      </div>
    );
  }
