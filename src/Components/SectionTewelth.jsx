import React from 'react';
import righticon from "../assets/home/righticon.png";
import choose from "../assets/home/choose.png";
import star from "../assets/home/star.png"

function WhyChooseUsSection() {
  return (
    <div className="bg-[#241443] mx-auto text-white p-4 sm:p-8">

    <div className="flex items-center justify-center">
    <img src={star} alt="star" className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px] mb-5" />
    <h1 className="text-[18px] lg:text-[30px] font-black text-center mb-4 text-[#FF5C00] font-Lato font-sans">Why Choose Us!</h1>
    </div>
    <p className="text-[20px] lg:text-[30px] text-left sm:text-left mb-2 font-semibold text-Poppins text-[#FFFFFF]">
      Don't Know How To Start With<br /> FrictionLearn
    </p>
  
    <p className="text-[11px] lg:text-[20px] text-left sm:text-left font-normal text-Poppins text-white mb-8">
      Discover FrictionLearn: Gamified learning, expert guidance, and job<br /> opportunities—all in one platform.
    </p>
  
    <div className="flex flex-col md:flex-row justify-between items-start">
      {/* Left side with text content */}
      <div className="grid grid-cols-2 lg:gap-4 gap-2 mb-8 md:mb-0 lg:grid-cols-2 md:gap-4">
        <div className="flex flex-col items-start lg:px-4 ">
          <div className="flex gap-1  lg:mb-4 mb-2 items-center">
            <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[14px] bg-[#573EE8] rounded-full flex items-center justify-center lg:mt-0 mt-[-15px]">
              <img src={righticon} alt="Special Gamified Courses" className="lg:w-[12px] lg:h-[11px] w-[7px] h-[6px]" />
            </div>
            <div className=''>
            <h3 className="text-[10px] lg:text-[22px] font-Regular font-poppins">Special Gamified Courses</h3>
            </div>
          </div>
          <div className="flex gap-1  lg:mb-4 mb-2 items-center">
            <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[14px] bg-[#573EE8] rounded-full flex items-center justify-center  lg:mt-0 mt-[-15px]">
              <img src={righticon} alt="Share Ideas & Get Incubation" className="lg:w-[12px] lg:h-[11px] w-[7px] h-[6px]" />
            </div>
            <h3 className="text-[10px] lg:text-[22px] font-Regular font-poppins">Share Ideas & Get Incubation</h3>
          </div>
          <div className="flex gap-1  lg:mb-4 mb-2 items-center">
            <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[14px] bg-[#573EE8] rounded-full flex items-center justify-center  lg:mt-0 mt-[-15px]">
              <img src={righticon} alt="Connect with Communities" className="lg:w-[12px] lg:h-[11px] w-[7px] h-[6px]" />
            </div>
            <h3 className="text-[10px] lg:text-[22px] font-Regular font-poppins">Connect with Communities</h3>
          </div>
        </div>
  
        <div className="flex flex-col items-start lg:px-4">
          <div className="flex gap-1 lg:mb-4 mb-2 items-center">
            <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[14px] bg-[#573EE8] rounded-full flex items-center justify-cente  lg:mt-0 mt-[-15px]">
              <img src={righticon} alt="21 Language Model Learning" className="lg:w-[12px] lg:h-[11px] w-[7px] h-[6px] ml-[2px]" />
            </div>
            <h3 className="text-[10px] lg:text-[22px] font-Regular font-poppins">21 Language Model Learning</h3>
          </div>
          <div className="flex gap-1 lg:mb-4 mb-2 items-center">
            <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[14px] bg-[#573EE8] rounded-full flex items-center justify-center  lg:mt-0 mt-[-15px]">
              <img src={righticon} alt="Post Projects/ Hire Experts" className="lg:w-[12px] lg:h-[11px] w-[7px] h-[6px]" />
            </div>
            <h3 className="text-[10px] lg:text-[22px] font-Regular font-poppins">Post Projects/ Hire Experts</h3>
          </div>
          <div className="flex gap-1  lg:mb-4 mb-2 items-center">
            <div className="lg:w-[24px] lg:h-[24px] w-[16px] h-[14px] bg-[#573EE8] rounded-full flex items-center justify-center  lg:mt-0 mt-[-40px]">
              <img src={righticon} alt="Get Advance Skills & Get License/Passport with Levels" className="lg:w-[12px] lg:h-[11px] w-[7px] h-[6px] " />
            </div>
            <h3 className="text-[10px] lg:text-[22px] font-Regular font-poppins">
              Get Advance Skills &  Get License/<br></br>Passport with Levels
            </h3>
          </div>
        </div>
      </div>
  
      {/* Right side with image */}
      <div className="flex items-center justify-center p-4 rounded-xl w-full lg:w-auto lg:mt-[-100px] md:mt-0 mt-[-40px]">
        <img src={choose} alt="Why Choose Us" className="w-full h-auto object-cover rounded-xl md:max-w-[600px]" />
      </div>
    </div>
  
    {/* Button at the bottom */}
    <div className="lg:text-left text-center mt-2 lg:ml-[50px]">
      <button className="bg-white text-[#022956] lg:px-6 lg:py-2 px-2 py-1 rounded-full text-[14px] font-semibold font-poppins">
        Explore All Courses
      </button>
    </div>
  </div>
  

  );
}

export default WhyChooseUsSection;
