import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppBar() {
  return(
  <>
    <nav className="flex justify-between items-center py-3 px-3 md:px-8 md:py-5 ">
      <Link>
        <img
          src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/logo.png"
          alt="lugx-gameing-logo.png"
          className="md:w-32 w-32"
        />
      </Link>
      <button className="md:hidden">
        <span className="text-3xl text-white font-bold">=</span>
      </button>
      <div className="hidden md:flex">
        <ul className="flex gap-10 md:text-xl text-white">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>our shop</Link>
          </li>
          <li>
            <Link>product details</Link>
          </li>
          <li>
            <Link>contact us</Link>
          </li>
          <li>
            <Link>sign in</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  </>)
}
