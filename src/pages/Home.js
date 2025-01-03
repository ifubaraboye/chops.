import React from "react";
import { Navbar } from "../components/Navbar";
import HeroImage from '../assets/heroimage.jpg'

export function Home() {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center gap-x-14 items-center">
          <div>
            <p className="">ENJOY YOUR FOOD</p>
            <p>THE NAIJA WAY</p>
          </div>
          <div>
            <img src={HeroImage} alt="" width={500}></img>
          </div>
        </div>
      </div>
    );
  }
