import React from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="ml-5">
        Furniture
      </NavLink>
      <NavLink to="/shop" className="ml-5">
        Shop
      </NavLink>
      <NavLink to="/about" className="ml-5">
        About
      </NavLink>
      <NavLink to="/contact" className="ml-5">
        Contact
      </NavLink>
    </>
  );
  return (
    <header
      className={`fixed left-0 right-0 top-0 text-white transition duration-300 ease-in-out z-50`}
    >
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Panto</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <FaShoppingBag className="mr-5 text-xl" />
            <sup className="w-3 h-3 bg-amber-700 flex justify-center items-center p-2 rounded-full  text-white text-xs border -ml-7">
              0
            </sup>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
