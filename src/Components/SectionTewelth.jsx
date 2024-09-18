import React from 'react';
import righticon from "../assets/home/righticon.png";
import choose from "../assets/home/choose.png";
import star from "../assets/home/star.png"

function WhyChooseUsSection() {
  return (
    <div className="bg-[#241443] mx-auto text-white p-4 sm:p-8">

    <div className="flex items-center justify-center">
    <img src={star} alt="star" className="w-[36px] h-[36px] mr-[-10px] mb-5" />
    <h1 className="text-[24px] sm:text-[30px] font-black text-center mb-4 text-[#FF5C00]">Why Choose Us!</h1>
    </div>
    <p className="text-[18px] sm:text-[24px] text-left sm:text-left mb-2 font-semibold text-Poppins text-[#FFFFFF]">
      Don't Know How To Start With<br /> FrictionLearn
    </p>
  
    <p className="text-[16px] sm:text-[20px] text-left sm:text-left font-normal text-Poppins text-white mb-8">
      Discover FrictionLearn: Gamified learning, expert guidance, and job<br /> opportunities—all in one platform.
    </p>
  
    <div className="flex flex-col md:flex-row justify-between items-start">
      {/* Left side with text content */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:mb-0 md:grid-cols-2 md:gap-4">
        <div className="flex flex-col items-start px-4">
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
              <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
            </div>
            <h3 className="text-[18px] sm:text-[22px] font-regular">Special Gamified Courses</h3>
          </div>
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
              <img src={righticon} alt="Share Ideas & Get Incubation" className="w-[12px] h-[11px]" />
            </div>
            <h3 className="text-[18px] sm:text-[22px] font-regular">Share Ideas & Get Incubation</h3>
          </div>
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
              <img src={righticon} alt="Connect with Communities" className="w-[12px] h-[11px]" />
            </div>
            <h3 className="text-[18px] sm:text-[22px] font-regular">Connect with Communities</h3>
          </div>
        </div>
  
        <div className="flex flex-col items-start px-4">
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
              <img src={righticon} alt="21 Language Model Learning" className="w-[12px] h-[11px]" />
            </div>
            <h3 className="text-[18px] sm:text-[22px] font-regular">21 Language Model Learning</h3>
          </div>
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
              <img src={righticon} alt="Post Projects/ Hire Experts" className="w-[12px] h-[11px]" />
            </div>
            <h3 className="text-[18px] sm:text-[22px] font-regular">Post Projects/ Hire Experts</h3>
          </div>
          <div className="flex gap-2 mb-4 items-center">
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
              <img src={righticon} alt="Get Advance Skills & Get License/Passport with Levels" className="w-[12px] h-[11px]" />
            </div>
            <h3 className="text-[18px] sm:text-[22px] font-regular">
              Get Advance Skills & Get <br /> License/Passport with Levels
            </h3>
          </div>
        </div>
      </div>
  
      {/* Right side with image */}
      <div className="flex items-center justify-center p-4 rounded-xl w-full md:w-auto mt-4 md:mt-0">
        <img src={choose} alt="Why Choose Us" className="w-full h-auto object-cover rounded-xl md:max-w-[600px]" />
      </div>
    </div>
  
    {/* Button at the bottom */}
    <div className="text-center mt-8">
      <button className="bg-white text-[#022956] px-6 py-2 rounded-full text-[16px] font-semibold text-Poppins">
        Explore All Courses
      </button>
    </div>
  </div>
  

  );
}

export default WhyChooseUsSection;
