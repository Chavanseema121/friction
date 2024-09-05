import React from 'react';
import righticon from "../assets/home/righticon.png";
import choose from "../assets/home/choose.png";

function WhyChooseUsSection() {
  return (
    <div className="bg-[#241443] mx-auto text-white p-8">
      <h1 className="text-[30px] font-black text-center mb-4 text-[#FF5C00] ml-[50px]">Why Choose Us!</h1>
      <p className="text-[30px] text-left mb-2 font-semibold text-Poppins ml-[50px]">
        Don't Know How To Start With<br /> FrictionLearn
      </p>
      
      <p className="text-[20px] text-left font-normal text-Poppins ml-[50px] mb-8">
        Discover FrictionLearn: Gamified learning, expert guidance, and job<br /> opportunities—all in one platform.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left side with text content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start ml-[50px]">
            <div className='flex gap-2 mb-4 items-center'>
              <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
              </div>
              <h3 className="text-[22px] font-regular">Special Gamified Courses</h3>
            </div>
            <div className='flex gap-2 mb-4 items-center'>
              <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                <img src={righticon} alt="Share Ideas & Get Incubation" className="w-[12px] h-[11px]" />
              </div>
              <h3 className="text-[22px] font-regular">Share Ideas & Get Incubation</h3>
            </div>
            <div className='flex gap-2 mb-4 items-center'>
              <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                <img src={righticon} alt="Connect with Communities" className="w-[12px] h-[11px]" />
              </div>
              <h3 className="text-[22px] font-regular">Connect with Communities</h3>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className='flex gap-2 mb-4 items-center'>
              <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                <img src={righticon} alt="21 Language Model Learning" className="w-[12px] h-[11px]" />
              </div>
              <h3 className="text-[22px] font-regular">21 Language Model Learning</h3>
            </div>
            <div className='flex gap-2 mb-4 items-center'>
              <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                <img src={righticon} alt="Post Projects/ Hire Experts" className="w-[12px] h-[11px]" />
              </div>
              <h3 className="text-[22px] font-regular">Post Projects/ Hire Experts</h3>
            </div>
            <div className='flex gap-2 mb-4 items-center'>
              <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center">
                <img src={righticon} alt="Get Advance Skills & Get License/Passport with Levels" className="w-[12px] h-[11px]" />
              </div>
              <h3 className="text-[22px] font-regular">
                Get Advance Skills & Get <br /> License/Passport with Levels
              </h3>
            </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="flex items-center justify-center p-4 rounded-xl md:ml-16 w-full md:w-auto mr-[50px] mt-[-100px]">
          <img src={choose} alt="Why Choose Us" className="w-full h-auto object-cover rounded-xl md:max-w-[600px]" />
        </div>
      </div>

      <div className="text-left mb-8 ml-[50px] ">
        <button className="bg-white text-[#022956] px-6 py-2 rounded-full text-[16px] font-semibold text-Poppins">
          Explore All Courses
        </button>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
