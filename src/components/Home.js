import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Home = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  
  return (
    <>
    <nav>
    <div className="h-5vh shadow-md hover:bg-red-300 flex justify-between  bg-red-200 text-black lg:py-5 px-20 py-4">
      <div className="flex space-x-2  items-center ">
      <img className="flex justify-start  w-[50px] " src="logo.png"  alt="logo"/> 
  <a href="https://roopportfolio.netlify.app"><span className="text-xl font-bold cursor-pointer hover:text-white">Roopsngh Dawar</span> </a>
      </div>
      <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[16px]">
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link  spy={true} smooth={true} to="/home">Home</Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link  spy={true} smooth={true} to="/about">About</Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link  spy={true} smooth={true} to="/service">Service</Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link  spy={true} smooth={true} to="/projects">Projects</Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link  spy={true} smooth={true} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <button className="block lg:hidden transition" onClick={handleClick}>
        {click ? <FaTimes /> : <CiMenuFries />}
      </button>
    </div>
    {click && (
      <div className="lg:hidden block absolute top-18 w-full left-0 right-0 bg-slate-900 text-white">
        <ul className="text-center text-xl p-2">
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to="/home">Home</Link>
          </li>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to="/about">About</Link>
          </li>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to="/service">Service</Link>
          </li>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to="/projects">Projects</Link>
          </li>
          <li className="my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    )}
  </nav>
    </>
  )
}

export default Home