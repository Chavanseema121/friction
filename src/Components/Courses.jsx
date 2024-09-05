import React from "react";
import homeicon from "../assets/homeicon.png";
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';

const Courses = () => {
  return (
    <div className="w-full h-[921px] bg-white p-8">
      {/* Header section */}
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-2 ml-[102px]">
          <div className="bg-gray-200 p-2 rounded-full">
            <img src={homeicon} alt="Home" className="w-6 h-6"/>
          </div>
          <span className="text-[24px] font-bold">Home</span>
        </div>
        <button className="text-white px-4 py-2 rounded bg-[#022956] text-[16px] font-bold w-[236px] h-[42px] mr-[102px]">Get Started</button>
      </header>

      <div>
        <h1 className="text-[40px] font-black font-Lato font-sans text-center mb-[25px] text-[#022956]">Explore Courses</h1>
        <p className="text-center text-[#F27329] text-[30px] font-semibold mb-8">
          Discover a variety of courses to advance your skills and knowledge.
        </p>
      </div>

      <div className='flex justify-between w-full h-[42px] mt-[50px]'>
        <div className="mb-8 max-w-lg inline-flex items-center w-[452px] h-[42px] border border-gray-600 rounded-full ml-[102px]">
          <img src={searchicon} alt="Search Icon" className="w-[20px] h-[20px] ml-[10px]" />
          <input
            type="text"
            placeholder="Search here"
            className="border-none outline-none w-[300px] h-[19px] rounded-lg shadow-2xl mr-[20px] ml-[20px]"
          />
        </div>
        <div className='mr-[104px] '>
          <button className="flex items-center bg-white border border-gray-600 px-4 py-2 rounded-full w-[159px] h-[42px]">
            <span>Sort</span>
            <img src={arr} alt="Arrow Icon" className="w-[11.13px] h-[7.13px] ml-[50px]" />
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-4 mt-[58px]">
        {/* Sidebar */}
        <div className="p-10 ">
          <h2 className="text-[23px] font-semibold text-[#F27329] mb-8">Code Career</h2>
          <ul className="list-none text-[#1D2228] text-[20px] mb-8 font-medium font-Lato font-sans">
            <li className="mb-8">Development</li>
            <li className="mb-8">Design</li>
            <li className="mb-8">Data Science & Analytics</li>
            <li className="mb-8">AI & ML</li>
            <li className="mb-8">More</li>
          </ul>
        </div>

         {/* First Vertical Line */}
         <div className="absolute top-[55%] left-[420px] bottom-[-200px] w-[2px] bg-[#F27329]"></div>
        {/* Second Vertical Line */}
        <div className="absolute top-[55%] left-[460px] bottom-[-180px] w-[2px] bg-[#F27329]"></div>

        {/* Bar Graph */}
        <div className="col-span-3 w-full px-12">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-[40px] font-black text-[#022956] ml-[10px] ">Code Career</h2>
          </div>
          <div className="flex items-end space-x-[77px] w-full border-b-2 border-orange-600 ">
            <div className="bg-[#FBEBE1] h-[212px] w-[43px]"></div>
            <div className="bg-[#FBEBE1] h-[246px] w-[43px]"></div>
            <div className="bg-[#FBEBE1] h-[283px] w-[43px]"></div>
            <div className="bg-[#FBEBE1] h-[318px] w-[43px]"></div>
            <div className="bg-[#FBEBE1] h-[356px] w-[43px]"></div>
            <div className="bg-[#FBEBE1] h-[389px] w-[43px]"></div>
            <div className="bg-[#FBEBE1] h-[425px] w-[43px]"></div>
            <div className="bg-[#FBEBE1] h-[463px] w-[43px]"></div>
          </div>
          <div className="flex justify-between text-[14px] text-[#1D2228] mt-2 font-medium">
            <span>Development</span>
            <span>Design</span>
            <span>Data Science<br></br> & Analytics</span>
            <span>AI & ML</span>
            <span>Cybersecurity</span>
            <span>DevOps</span>
            <span>Cloud Computing</span>
            <span>Blockchain<br></br> Development</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
