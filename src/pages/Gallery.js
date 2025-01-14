import React from "react";
import { Navbar } from "../components/Navbar";
import Chicken from '../assets/chicken.jpg'
import Closeup from '../assets/closeup.jpg'
import Puff from '../assets/puff.jpg'
import Sauce from '../assets/chicken2.jpg'
import Heron from '../assets/hero2.jpg'
import Slap from '../assets/snail.jpg'

export function Gallery() {
  return (
    <div>
      <Navbar />
      <div className="px-8">
        <h1 className="text-[50px] font-bold flex">Gallery <span className="text-red-500">.</span> </h1>

        <div className="grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-5 pb-20">
          <img src={Chicken} alt="chicken"></img>
          <img src={Chicken} alt="chcken"></img>
          <img src={Closeup} alt="closeup"></img>
          <img src={Heron} alt="heron"></img>
          <img src={Chicken} alt="heron"></img>
          <img src={Sauce} alt="sauce"></img>
          <img src={Chicken} alt="chicken"></img>
          <img src={Slap} alt="slap"></img>
          <img src={Chicken} alt="chicken"></img>
          <img src={Chicken} alt="chicken"></img>
          <img src={Puff} alt="puff"></img>
          <img src={Chicken} alt="chicken"></img>
          <img src={Chicken} alt="chicken"></img>
          <img src={Heron} alt="heron"></img>
          <img src={Chicken} alt="chicken"></img>

        </div>
      </div>
    </div>
  );
}

