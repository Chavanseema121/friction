import React from "react";
import homeicon from "../assets/homeicon.png";
import searchicon from "../assets/searchicon.png";
import arr from "../assets/arr.png";
import bussiness from "../assets/bussiness.png";
import bussiness1 from "../assets/bussiness1.png";
import bussiness2 from "../assets/bussiness2.png";
import bussiness3 from "../assets/bussiness3.png";
import bussiness4 from "../assets/bussiness4.png";
import bussiness5 from "../assets/bussiness5.png";

export default function Coursesthree() {
  return (
    // header section
    <div className="w-full h-[921px] bg-white p-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-2 ml-[102px]">
          <div className="bg-gray-200 p-2 rounded-full">
            <img src={homeicon} alt="Home" className="w-6 h-6" />
          </div>
          <span className="text-[24px]  font-bold">Home</span>
        </div>
        <button className="text-white px-4 py-2 rounded bg-[#022956] text-[16px] font-bold w-[236px] h-[42px] mr-[102px]">
          Get Started
        </button>
      </header>

      <div className="">
        <h1 className="text-[40px] font-black font-Lato font-sans text-center mb-[25px] text-[#022956]">
          Explore Courses
        </h1>
        <p className="text-center text-[#F27329] text-[30px] font-semibold mb-8">
          Discover a variety of courses to advance your skills and knowledge.
        </p>
      </div>
      <div className="flex justify-between w-full h-[42px] mt-[50px]">
        <div className="mb-8 max-w-lg inline-flex items-center w-[452px] h-[42px] border border-gray-600 rounded-full ml-[102px]">
          <img
            src={searchicon}
            alt="Search Icon"
            className="w-[20px] h-[20px] ml-[10px]"
          />
          <input
            type="text"
            placeholder="Search here"
            className="border-none outline-none w-[300px] h-[19px] rounded-lg shadow-2xl mr-[20px] ml-[20px]"
          />
        </div>
        <div className="mr-[102px]  ">
          <button className="flex items-center bg-white border border-gray-600 px-4 py-2 rounded-full w-[159px] h-[42px]">
            <span>Sort</span>
            <img
              src={arr}
              alt="Arrow Icon"
              className="w-[11.13px] h-[7.13px] ml-[50px]"
            />
          </button>
        </div>
      </div>

      {/* middle content */}

      <div className="container mx-auto px-4 py-16 w-full mt-[57px]">
        <div className="flex">
          {/* First Course Card (Full Width on Larger Screens) */}
          <div className="lg:col-span-1 bg-white p-4 mr-[91px] w-[283px] h-[48px]">
            <h2 className="text-[23px] font-semibold mb-6 font-Lato font-sans text-[#1D2228]">
              Code Career
            </h2>
            <ul className="text-[20px] font-semibold font-Lato font-sans text-gray-600">
              <li className="mb-4 text-[#F27329]">Business Career</li>
              <li className="mb-4">Non-IT Career</li>
              <li className="mb-4">Lifestyle Career</li>
              <li className="mb-4">Nature Career</li>
              <li className="mb-4">Competitive Exams</li>
              <li className="mb-4">Other</li>
            </ul>
          </div>
          <div className=" grid grid-rows-3 grid-flow-col gap-4">
            {/* Other Course Cards */}

            {/* row one cards */}
            <div className="bg-white shadow-md rounded-md p-2  flex flex-row gap-[120px]  w-[456px] h-[112px] mb-[5px]">
              <div>
                {" "}
                <h2 className="text-[16px] font-medium font-Lato font-sans text-[#1D2228]  text-start mb-1">
                  Entrepreneurship
                </h2>
                <p className="text-[12px] text-normal font-Lato font-sans">
                  Develop skills to launch and scale successful startups and
                  ventures.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src={bussiness}
                  alt="Entrepreneurship"
                  className="w-[60px] h-[59px]"
                />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-2 flex flex-row gap-[120px]  w-[456px] h-[112px]">
              <div className=" ">
                <h2 className="text-[16px] font-medium font-Lato font-sans text-[#1D2228]  text-start mb-1">
                  Digital Marketing
                </h2>
                <p className="text-[12px] text-normal font-Lato font-sans">
                  Learn strategies for online branding, SEO, social media, and
                  content marketing.
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <img
                  src={bussiness1}
                  alt="Development"
                  className="w-[60px] h-[59px]"
                />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-2 flex flex-row gap-[100px]  w-[456px] h-[112px]">
              <div className="">
                {" "}
                <h2 className="text-[16px] font-medium font-Lato font-sans text-[#1D2228]  text-start mb-1">
                  Finance & Accounting
                </h2>
                <p className="text-[12px] text-normal font-Lato font-sans">
                  Understand financial principles, bookkeeping, and accounting
                  practices for business management.
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <img
                  src={bussiness2}
                  alt="Finance & Accounting"
                  className="w-[60px] h-[59px]"
                />
              </div>
            </div>

            {/* row two cards */}

            <div className="bg-white shadow-md rounded-md p-2  flex flex-row gap-[110px]  w-[456px] h-[112px]">
              <div>
                {" "}
                <h2 className="text-[16px] font-Lato font-sans font-medium  text-[#1D2228]  text-start mb-1">
                  Project Management
                </h2>
                <p className="text-[12px] text-normal font-Lato font-sans">
                  Master techniques for planning, executing, and leading
                  projects effectively.
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <img
                  src={bussiness3}
                  alt="Project Management"
                  className="w-[60px] h-[59px]"
                />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-2  flex flex-row gap-[120px]  w-[456px] h-[112px]">
              <div className="text-start mb-[44px] align-middle">
                {" "}
                <h2 className="text-[16px]  font-medium font-Lato font-sans  text-[#1D2228]  text-start mb-1">
                  Human Resources
                </h2>
                <p className="text-[12px] text-normal font-Lato font-sans">
                  Explore recruitment, employee development, and performance
                  management best practices
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <img src={bussiness4} alt="" className="w-[60px] h-[59px] " />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-2  flex flex-row gap-[110px]  w-[456px] h-[112px] ">
              <div className="text-start mb-[44px] align-middle">
                {" "}
                <h2 className="text-[16px] font-medium font-Lato font-sans  text-[#1D2228]  text-start mb-1">
                  Personal Development
                </h2>
                <p className="text-[12px] text-normal font-Lato font-sans">
                  Explore conservation, animal behavior, and biodiversity for
                  wildlife protection
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <img
                  src={bussiness5}
                  alt="Development"
                  className="w-[60px] h-[59px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
