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
import Slap from '../assets/snail.jpg'
import { useState } from "react";
// import Alert from '../components/Alert'

//Work in progress

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Pack')
  const categories = ['Pack', 'Platter', 'Protein']


    return (
      <div className="bg-[#eeeeee] px-auto mx-auto">
        <Navbar />
        <div className=" lg:px-0">
        <div className="block text-center lg:text-left lg:flex justify-center gap-x-28 items-center mt-10 px-auto ">
          <div className="leading-tight">
            <p className="text-[100px] font-bold text-zinc-800" id="enjoy">ENJOY YOUR FOOD</p>
            <p className="text-[100px] font-bold text-gray-800" id="naija">THE NAIJA WAY</p>
            <div className="pb-6 lg:pl-2 px-5 lg:px-0">
              <p className="text-gray-500 font-semibold">Savor the flavors that bring people together. From street eats to gourmet</p>
              <p className="text-gray-500 font-semibold">treats, every bite tells a story. Dive into a world where taste meets</p>
              <p className="text-gray-500 font-semibold">traditions that unite, and dishes that delight your senses.</p>
            </div>
            <button className='border p-3 rounded-lg bg-[#E63946] outline-none text-white font-bold mb-10 lg:mb-0' ><a href="#buysection">Place an Order</a></button>
          </div>
          <div className="hidden lg:block">
            <img src={Hero}  alt="" width={500}></img>
          </div>
        </div>

        <div id="buysection" className="pt-20 pb-5">
          <div className="flex justify-center items-center pt-10 px-auto">
            <ul className="flex gap-x-10 text-gray-500 font-semibold">
              {categories.map( (category) => (
                <li key={category} onClick={ () => setSelectedCategory(category)} className={`cursor-pointer ${selectedCategory === category ? "text-black border-b-4  border-[#E63946]" : ""}`}>{category.toUpperCase()}</li>
              ))}
            </ul>
          </div>

          <div id="pack" className="pt-12 pb-24"><ProductList Products={Products} category={selectedCategory} /></div>
          {/* <div id="platter" className=""><ProductList Products={Products} category='Platter' /></div> */}
          {/* <div id="protein" className=""><ProductList Products={Products} category='Protein' /></div> */}
          
        </div>

        <div className="bg-white py-20 lg:px-40 lg:flex gap-x-44">
          <div className="px-5 lg:px-0">
            <p className="font-semibold text-gray-500 tracking-wide">TESTIMONIALS</p>
            <div id="testimonial" className="flex text-[55px] leading-[60px]">
              <p>SATIFIED</p>
              <p className="text-[#E63946]">CUSTOMERS</p>
            </div>
            <div className="pt-6">
                <div className="lg:w-[500px] leading-5 font-semibold text-gray-500 pb-4">
                  <p className="lg:text-[18px] ">"Wow, just wow! This meal was an explosion of flavor. The delivery was incredibly fast and the packaging was top-notch. Will definitely be a repeat customer!"</p>
                  <p className="lg:text-right pr-7 text-right">-FlavorFanatic</p>
                </div>
                <div className="lg:w-[500px] leading-5 font-semibold text-gray-500 pb-4">
                  <p className="lg:text-[18px] ">"Absolutely delighted with my order. The portions were generous, the quality was exceptional, and the delivery driver was friendly and efficient. 10/10!"</p>
                  <p className="lg:text-right pr-5 text-right">-HappyHungry</p>
                </div>
                <div className="lg:w-[500px] leading-5 font-semibold text-gray-500 pb-4">
                  <p className="lg:text-[18px] ">"This was a truly satisfying meal. The flavors were perfectly balanced and the presentation was beautiful. I'm already planning my next order."</p>
                  <p className="lg:text-right pr-4 text-right">-DelightedDiner</p>
                </div>
                <div className="lg:w-[500px] leading-5 font-semibold text-gray-500">
                  <p className="lg:text-[18px] ">"I'm a happy customer! The food was delicious, the delivery was on time, and the overall experience was fantastic. Will definitely order from here again."</p>
                  <p className="lg:text-right pr-4 text-right">-SatisfiedSarah</p>
                </div>
              </div>
          </div>
          <div className="hidden lg:block">
          <p className="font-semibold text-gray-500 tracking-wide">GALLERIES</p>
            <div id="testimonial" className="flex text-[55px] leading-[60px]">
              <p>PHOTO</p>
              <p className="text-[#E63946]">GALLERIES</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-7 py-6 ">
              <img src={Chicken} alt="" className="rounded-md"></img>
              <img src={Closeup} alt="" className="rounded-md"></img>
              <img src={Puff} alt="" className="rounded-md"></img>
              <img src={Sauce} alt="" className="rounded-md"></img>
              <img src={Heron} alt="" className="rounded-md"></img>
              <img src={Slap} alt="" className="rounded-md"></img>
            </div>
            <button className="mt-1 border rounded-md p-3 font-semibold bg-[#E63946] text-white border-none"><Link to='/gallery'>MORE GALLERIES</Link></button>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
