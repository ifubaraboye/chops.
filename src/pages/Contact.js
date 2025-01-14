import React from "react";
import { Navbar } from "../components/Navbar";


export function Contact() {
    return (
      <div className="">
        <Navbar />
        <div className="px-8">
          <h1 className="text-[50px] font-semibold mb-6 flex">Contact Us <span className="text-red-500">.</span> </h1>
          
          <div className="grid ">
            <form>
              <div>
                <input type="text" placeholder="First Name" className="p-3 mb-3 w-[300px] bg-gray-100 focus:outline-none "></input> <br></br>
                <input type="text" placeholder="Last Name" className="p-3 mb-3 bg-gray-100 w-[300px] focus:outline-none"></input> <br></br>
                <input type="email" placeholder="Email" className="p-3 bg-gray-100 w-[300px] mb-3 focus:outline-none"></input> <br></br>
                {/* <input type="textarea" className="w-[500px]  bg-gray-100 focus:outline-none" placeholder="Your Message" ></input> */}

                <div className="hidden lg:block">
                <textarea className="bg-gray-100 p-3 resize-none focus:outline-none" placeholder="Enter message" rows={10} cols={60}></textarea>

                </div>

                <div className="lg:hidden">
                <textarea className="bg-gray-100 p-3 resize-none focus:outline-none " placeholder="Enter message" rows={10} cols={30}></textarea>
                </div>
              </div>
              <div className="pb-10">
                <button className="p-3 border outline-none mt-4 bg-[#E63946] text-white font-semibold">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    );
  }

 