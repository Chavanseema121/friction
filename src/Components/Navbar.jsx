import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import friction from '../assets/communities/friction.png';
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import closeicon from "../assets/communities/closeicon.png";


// Array of backgrounds and texts
const slides = [
  {
    backgroundImage: "url('../src/assets/home/backgroundone.png')",
    title: "Are You Ready to Excel?",
    subtitle: "Challenge yourself with courses that push your boundaries."
  },
  {
    backgroundImage: "url('../src/assets/home/backgroundtwo.png')",
    title: "Can You Innovate Fearlessly",
    subtitle: "Transform your ideas into successful startups with our<br> incubation program."
  },
  {
    backgroundImage: "url('../src/assets/home/backgroundthree.png')",
    title: "Can You Shape Your Future?",
    subtitle: "Prepare yourself for the careers of tomorrow with our<br> tailored programs."
  },
  {
    backgroundImage: "url('../src/assets/home/backgroundfour.png')",
    title: "Will You Turn Vision into Victory?",
    subtitle: "Develop and launch your business with our expert<br> guidance and support."
  },
  // Add more slides as needed
];

export default function Navbar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[full] ">
      <div
        className="w-full h-[769px] bg-cover bg-center align-middle transition-all duration-1000"
        style={{ backgroundImage: slides[currentSlide].backgroundImage }}
      >
        <nav className="h-[95px] flex items-center">
          <div className="ml-[146px] mr-[47px]">
            <img
              src={friction}
              alt="friction learn logo"
              className="w-[157px] h-[64px] mt-[20px] transparent opacity-75"
            />
          </div>
          <div className="flex items-center bg-white bg-opacity-75 rounded-md w-[402px] h-[62px] ml-[10px] mt-[20px]">
            <ul className="flex justify-between gap-5 search">
              <li className="text-[#1D2228] text-[18px] font-bold ml-[20px] my-[28px] flex">
                <Link to="/courses" className="flex items-center">
                  Courses
                  <img
                    src={arr}
                    alt=""
                    className="w-[11.13px] h-[7.13px] ml-[10px] mt-[10px]"
                  />
                </Link>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold mr-[10px] ml-[10px] my-[28px]">
                <Link to="/community">Communities</Link>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold my-[28px]">
                <Link to="/incubation">Incubation</Link>
              </li>
            </ul>
          </div>

          {/* search bar */}
          <div className="flex justify-end mt-5 ml-[30px] w-[529px]">
            <div
              className={`relative flex items-center justify-end ml-[140px] bg-white bg-opacity-75 rounded-md h-[64px] px-4 ${
                isOpen ? "w-[529px]" : "w-[240px]"
              }`}
            >
              <div
                className={`flex items-center rounded-2xl border border-solid transition-all duration-300 mr-[10px] ${
                  isOpen ? "w-[350px]" : "w-[40px]"
                } h-[42px] ml-auto`}
                style={{ position: "relative" }}
              >
                <img
                  src={searchicon}
                  alt="Search Icon"
                  className="w-[20px] h-[20px] ml-2 cursor-pointer"
                  onClick={handleToggle}
                  style={{ order: 1 }}
                />
                <input
                  type="text"
                  placeholder="Search here"
                  className={`border-none outline-none h-full transition-all duration-300 rounded-full ${
                    isOpen ? "w-[312px] px-4" : "w-0 px-0"
                  }`}
                  style={{ order: 2 }}
                />
                <img
                  src={closeicon}
                  alt="Close Icon"
                  className="w-[20px] h-[20px] ml-2 cursor-pointer"
                  onClick={handleToggle}
                  style={{
                    order: 3,
                    visibility: isOpen ? "visible" : "hidden",
                  }}
                />
              </div>
              <div className="text-[16px]">
                <button className="w-[180px] h-[42px] px-[20px] py-[10px] bg-[#022956] text-white rounded-md">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative">
          <div className="text-center mt-[201px]">
            <h2 className="text-[#FFFFFF] text-[40px] font-semibold sm:text-[20px] lg:text-[90px]">
              {slides[currentSlide].title}
            </h2>
            <h3
              className="text-[#FFFFFF] lg:text-[40px] lg:font-semibold sm:text-[40px] lg:mt-[50px]"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].subtitle }}
            ></h3>
          </div>
        </div>

        <div className="flex justify-center mt-[50px]">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-[10px] h-[10px] mx-[5px] mt-[50px] ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
