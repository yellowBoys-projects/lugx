import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AppBar from "./AppBar";
import Footer from "./footer";
import Cards from "./Cards";
import Contact from "./contact";

const uri = "http://localhost:8000";
export default function Home() {
  return (
    <section>
      <div className="bg-blue-500 h-screen   ">
        <AppBar/>
        <Content/>
      </div>
      <div>
        <Cards/>
        <Contact/>
        <Footer/>
      </div>
    </section>
  );
}

function Content() {
  const [email, setemail] = useState();
  const postdata = async () => {
    const response = await axios.post(uri, { email: email });
  };
  return (
    <div className="md:flex justify-center h-full  items-center md:px-10">

    <div className="text-center   text-white">
      <h2 className="text-xl capitalize font-bold sm:text-md">welcome to lugx </h2>
      <h1 className="text-2xl font-bold capitalize">
        best gaming site <span className="text-orange-400 xs:text-blue-400 sm:text-red-600 md:text-yellow-500 lg:text-blue-900 xl:text-gray-400 ">ever!</span>
      </h1>
      <p className="py-3 w-4/5 mx-auto text-center text-sm sm:text-md ">
        LUGX gaming is free bootstrap 5 HTML CSS website temaplte for your
        gaming websites. you can download and use this layout for commercial
        purposes. plaese tell your friends about templateMo.
      </p>
      <div className="">
        <form onSubmit={postdata} className="mx-3 my-5 ">
          <input
            type="text"
            placeholder="Type Something"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="text-black  px-3 py-1 text-md sm:px-5 sm:py-2 "
            />
          <input type="submit" value="SEARCH NOW" 
          className="bg-red-500 py-1 rounded-md px-3 text-md sm:px-5 sm:py-2"
          />
        </form>
      </div>
        </div>
      <div className="relative">
        <img
          src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-image.jpg"
          alt="lugx-img.png"
          className="object-cover  object-center size-60 md:size-full xl:size-96 h-auto mx-auto sm:w-80 sm:h-80 sm:rounded-xl"
        />  
        <span className="hidden span-1 absolute font-bold  top-72 left-20 bg-red-500 p-2 rounded-full text-gl sm:left-56 sm:top-60 md:left-96">-40%</span>
        <span className="hidden span-2 absolute lg:left-auto  top-10 right-16 ring-2 ring-red-400 shadow-lg font-bold extlg bg-white text-black p-3 rounded-full sm:top-3 sm:right-56  md:right-96 lg:right-1/3 tra ">$22</span>
      </div>
          </div>
  );
}
