import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [email, setemail] = useState();

  const postdata = async () => {
    const response = await axios.post(uri, { email: email });
  };
  return (
    <div className="my-10">
      <div className="">
        <article className="text-center">
          <h1 className="text-xl font-bold py-3 ">our shop</h1>
          <h1 className="text-2xl font-bold">
            go pre-order buy & Get best <span>Prices</span> for you !
          </h1>
          <p className="text-md mb-5">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt.
          </p>
          <Link className="bg-blue-700 px-4 py-2 rounded-2xl text-white">Shop Now</Link>
        </article>
      </div>
      <div>
        <article className="text-center py-3">
          <p className="font-bold text-xl py-2">Newsletter</p>
          <h2 className="text-md py-3">
            get up to $100 off just Buy <span>Subscribe</span>Newletter!
          </h2>
          <form onSubmit={postdata}>
            <input type="text" placeholder="your email...."  className="ring-2 px-3 py-1 sm:px-5 sm:py-2 "/>
            <button type="submit" className="bg-red-500 rounded-md font-bold text-white py-1 px-2 sm:py-2 sm:px-3">Subscribe Now</button>
          </form>
        </article>
      </div>
    </div>
  );
}
