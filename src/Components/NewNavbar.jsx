import React, { useState } from "react";
import { NavLink  } from "react-router-dom";
import friction from "../assets/home/friction.png"; // Your logo path
import heart from "../assets/home/heart.png"; // Your heart icon path
import cart from "../assets/home/cart.png"; // Your cart icon path
import arr from "../assets/arr.png"; // Your dropdown arrow path
import newsearch from "../assets/home/newsearch.png";
import newsearchone from "../assets/home/newsearchone.png"; // Your search icon path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for services dropdown

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen); // Toggle services dropdown
  };

  // Define a style for the active link
  const activeLinkStyle = {
    color: "#FF5C00",
  };


  return (
    <div className="w-full h-auto mx-auto">
      <nav className="bg-white border-b border-gray-200">
        {/* Top Section for Desktop and Mobile */}
        <div className="container mx-auto flex items-center justify-between py-3">
          <div className="md:hidden flex items-center justify-between">
            {/* Logo for Mobile */}
            <img src={friction} alt="FrictionLearn Logo" className="w-[138px] h-[69px]" />

            {/* Search Button */}
            <div className="flex items-center">
              <button className="flex items-center px-6 py-2 text-blue-600">
                <img src={newsearchone} alt="Search" className="w-[32px] h-[32px] mr-2" />
              </button>
            </div>

            {/* Hamburger Menu */}
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Desktop: Logo (hidden on mobile) */}
          <div className="hidden md:flex items-center">
            <img
              src={friction}
              alt="FrictionLearn Logo"
              className="w-[194px] h-[101px] mt-[27px] ml-[50px]"
            />
          </div>

          {/* Search Bar (Visible on larger screens only) */}
          <div className="hidden md:flex items-center">
            <div className="relative w-full mx-auto flex rounded-full border border-gray-300 focus-within:ring-1 focus-within:ring-black">
              {/* All Categories Dropdown */}
              <select className="pl-4 pr-4 py-2 bg-gray-100 text-[#241443] border-r border-gray-300 focus:outline-none focus:bg-white focus:border-gray-500 lg:text-[16px] font-semibold text-Poppins rounded-l-full">
                <option>All Categories</option>
              </select>

              {/* Search Input */}
              <input
                type="text"
                className="flex-grow pl-2 pr-20 py-2 border-none focus:outline-none focus:ring-0 text-[17px] font-semibold text-Poppins text-[#241443] placeholder-gray-400 rounded-full"
                placeholder="Find your courses, clubs, events etc...."
              />

              {/* Search Button */}
              <button className="flex items-center px-6 py-2 text-white text-[20px] font-semibold text-Poppins bg-[#241443] rounded-full hover:bg-[#3d2a71] transition-colors">
                <img src={newsearch} alt="Search" className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>

          {/* User Actions: Signup and Icons for Mobile */}
          <div className="hidden md:flex items-center space-x-2 mr-[50px]">
            <button className="px-8 py-2 text-white bg-[#241443] rounded-full text-[18px] font-semibold text-Poppins hover:bg-[#3d2a71] transition-colors">
              Log In
            </button>
            <button className="px-8 py-2 text-[#241443] border border-[#241443] rounded-full text-[18px] font-semibold text-Poppins hover:bg-[#f1f1f1] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
         {/* Cart and Heart Icons below Sign Up (Mobile Only) */}
         <div className="md:hidden flex justify-end space-x-4 ">
          <div className="relative">
            <img src={heart} alt="Wishlist" className="w-6 h-6" />
            <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div className="relative">
            <img src={cart} alt="Cart" className="w-6 h-6" />
            <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
        

        
        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden flex flex-col items-center space-y-4 py-4">
              <NavLink to="/" className="text-lg font-semibold text-[#241443] hover:underline" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
                Home
              </NavLink>
              <NavLink to="/courses" className="text-lg font-semibold text-[#241443] hover:underline" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
                Courses
              </NavLink>
              <NavLink to="/about" className="text-lg font-semibold text-[#241443] hover:underline" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
                About Us
              </NavLink>
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center text-lg font-semibold text-[#241443]"
                >
                  Services
                  <img src={arr} alt="Dropdown arrow" className="w-[15px] h-[12px] ml-[8px] mb-2" />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                    <NavLink
                      to="/communityandevent"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Community and Event
                    </NavLink>
                    <NavLink
                      to="/incubation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Incubation
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink to="/contact" className="text-lg font-semibold text-[#241443] hover:underline" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
                Contact Us
              </NavLink>
            </div>
          )}

        {/* Desktop Bottom Section: Navigation Links and Icons */}
      {/* Desktop Bottom Section: Navigation Links and Icons */}
      <div className="hidden md:flex justify-between items-center py-2 text-purple-800">
            {/* Navigation Links */}
            <div className="flex space-x-12 items-center mx-auto text-[#241443] font-Poppins font-semibold text-[23px] lg:ml-[350px]">
              <NavLink to="/" className="hover:underline" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
                Home
              </NavLink>
              <div className="flex">
              <NavLink to="/courses" className="hover:underline">
                Courses
              </NavLink>
              <img
                src={arr}
                alt=""
                className="w-[15px] h-[10px] ml-[8px] mt-[14px]"
              />
            </div>
            <NavLink to="/about" className="hover:underline" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
                About Us
              </NavLink>
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center hover:underline"
                >
                  Services
                  <img src={arr} alt="Dropdown arrow" className="w-[16px] h-[12px] ml-[8px] mt-[8px]" />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                    <NavLink
                      to="/communityandevent"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Community and Event
                    </NavLink>
                    <NavLink
                      to="/incubation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Incubation
                    </NavLink>
                  </div>
                )}
              </div>
         
              <NavLink to="/contact" className="hover:underline" style={({ isActive }) => (isActive ? activeLinkStyle : {})}>
                Contact Us
              </NavLink>
            </div>

            {/* Desktop Icons */}
            <div className="flex items-center space-x-8 mr-[50px]">
            <div className="relative">
              <img src={heart} alt="Wishlist" className="w-[31px] h-[26px]" />
              <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
                0
              </span>
            </div>
            <div className="relative flex items-center">
              <img src={cart} alt="Cart" className="w-[28px] h-[31px]" />
              <span className="absolute -top-2 -left-2 bg-[#FFD70E] text-black text-xs rounded-full px-1">
                0
              </span>
              <span className="ml-2 text-[#241443] font-semibold">$0.36</span>
            </div>
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;