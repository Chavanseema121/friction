import React from "react";
import sectionfifth from "../assets/home/sectionfifth.png";
import sectionfifthone from "../assets/home/sectionfifthone.png";
import sectionfifthtwo from "../assets/home/sectionfifthtwo.png";
import sectionfifththree from "../assets/home/sectionfifththree.png";
import sectionfifthfour from "../assets/home/sectionfifthfour.png";
import sectionfifthfive from "../assets/home/sectionfifthfive.png";
import arrowone from "../assets/home/arrowone.png";
import star from "../assets/home/star.png"


export default function CoursesSection() {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-16">
      
    {/* Section Title */}
    <div className="text-center mb-12 sm:mb-16">
      
      <div className="flex items-center justify-center mb-4 lg:mb-8">
      <img src={star} alt="star" className="lg:w-[36px] lg:h-[36px] h-[26px] w-[26px] mr-[-10px]" />
      <h3 className="text-[#FF5C00] text-[18px] font-black font-Lato sm:text-[24px] lg:text-[30px]">
        Top Class Courses
      </h3>
      </div>
      <h2 className="text-[20px] sm:text-[32px] lg:text-[40px] font-semibold font-poppins text-[#241443] mt-2">
        Explore 40,000+ Free Gamified Online <br className="hidden sm:block" /> Courses
      </h2>
      <p className="mt-4 text-[11px] sm:text-[18px] lg:text-[21px] text-[#241443] opacity-[60%] font-medium font-poppins">
        Take the next step towards achieving your personal & professional aspirations with FrictionLearn.
      </p>
    </div>
  
    {/* Course Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
      {/* Art & Design */}
      <div className="flex items-center border rounded-lg p-4 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg lg:h-[166px] h-[100px] w-full hover:border-[#B3A7FA]">
        <div className="flex-shrink-0">
          <div className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full bg-[#B3A7FA] flex items-center justify-center ml-[30px] lg:ml-0">
            <img src={sectionfifth} alt="Art & Design Icon" className="w-[36px] lg:w-[56px] h-[30px] lg:h-[50px] " />
          </div>
        </div>
        <div className="ml-4 sm:ml-6">
          <h3 className="text-[18px] lg:text-[23px] font-semibold text-[#241443] font-Poppins">
            Art & Design
          </h3>
          <p className="text-[#000000] text-[14px] sm:text-[15px] font-Poppins">8 Courses</p>
        </div>
      </div>
  
      {/* Business */}
      <div className="flex items-center border rounded-lg p-4 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg lg:h-[166px] h-[100px] w-full hover:border-[#F7847C]">
        <div className="flex-shrink-0">
          <div className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full bg-[#F7847C] flex items-center justify-center ml-[30px] lg:ml-0">
            <img src={sectionfifthone} alt="Business Icon" className="w-[36px] lg:w-[56px] h-[30px] lg:h-[50px]" />
          </div>
        </div>
        <div className="ml-4 sm:ml-6">
          <h3 className="text-[18px] lg:text-[23px] font-semibold text-[#241443] font-Poppins">
            Business
          </h3>
          <p className="text-[#000000] text-[14px] sm:text-[15px] font-Poppins">11 Courses</p>
        </div>
      </div>
  
      {/* Development */}
      <div className=" hidden lg:flex items-center border rounded-lg p-4 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg lg:h-[166px] h-[100px] w-full hover:border-[#5FD2CC]">
        <div className="flex-shrink-0">
          <div className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full bg-[#5FD2CC] flex items-center justify-center ml-[30px] lg:ml-0">
            <img src={sectionfifthtwo} alt="Development Icon" className="w-[36px] lg:w-[56px] h-[30px] lg:h-[50px]" />
          </div>
        </div>
        <div className="ml-4 sm:ml-6">
          <h3 className="text-[18px] lg:text-[23px] font-semibold text-[#241443] font-Poppins">
            Development
          </h3>
          <p className="text-[#000000] text-[14px] sm:text-[15px] font-Poppins">8 Courses</p>
        </div>
      </div>
  
      {/* Data Science */}
      <div className="flex items-center border rounded-lg p-4 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg lg:h-[166px] h-[100px] w-full hover:border-[#FFAF41]">
        <div className="flex-shrink-0">
          <div className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full bg-[#FFAF41] flex items-center justify-center ml-[30px] lg:ml-0">
            <img src={sectionfifththree} alt="Data Science Icon" className="w-[36px] lg:w-[56px] h-[30px] lg:h-[50px]" />
          </div>
        </div>
        <div className="ml-4 sm:ml-6">
          <h3 className="text-[18px] lg:text-[23px] font-semibold text-[#241443] font-Poppins">
            Data Science
          </h3>
          <p className="text-[#000000] text-[14px] sm:text-[15px] font-Poppins">8 Courses</p>
        </div>
      </div>
  
      {/* Finance & Market */}
      <div className=" hidden lg:flex items-center border rounded-lg p-4 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg lg:h-[166px] h-[100px] w-full hover:border-[#F78ED8]">
        <div className="flex-shrink-0">
          <div className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full bg-[#F78ED8] flex items-center justify-center ml-[30px] lg:ml-0">
            <img src={sectionfifthfour} alt="Finance & Market Icon" className="w-[36px] lg:w-[56px] h-[30px] lg:h-[50px]" />
          </div>
        </div>
        <div className="ml-4 sm:ml-6">
          <h3 className="text-[18px] lg:text-[23px] font-semibold text-[#241443] font-Poppins">
            Finance & Market
          </h3>
          <p className="text-[#000000] text-[14px] sm:text-[15px] font-Poppins">25 Courses</p>
        </div>
      </div>
  
      {/* Technology */}
      <div className=" hidden lg:flex items-center border rounded-lg p-4 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg lg:h-[166px] h-[100px] w-full hover:border-[#59CDFE]">
        <div className="flex-shrink-0">
          <div className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-full bg-[#59CDFE] flex items-center justify-center ml-[30px] lg:ml-0">
            <img src={sectionfifthfive} alt="Technology Icon" className="w-[36px] lg:w-[56px] h-[30px] lg:h-[50px]" />
          </div>
        </div>
        <div className="ml-4 sm:ml-6">
          <h3 className="text-[18px] lg:text-[23px] font-semibold text-[#241443] font-Poppins">
            Technology
          </h3>
          <p className="text-[#000000] text-[14px] sm:text-[15px] font-Poppins">5 Courses</p>
        </div>
      </div>
    </div>
  
    {/* Explore More Button */}
    <div className="text-center mt-8 lg:mt-12">
      <p className="mb-4 text-[#022956] opacity-[60%] font-medium text-[18px] lg:text-[21px]">& Many more</p>
      <a
        href="#"
        className="inline-flex bg-[#FF5C00] text-white lg:px-6 lg:py-3 px-4 py-2 text-[15px] lg:text-[20px] rounded-full shadow-md hover:bg-orange-600 transition"
      >
        Explore All
        <img src={arrowone} alt="Arrow" className="w-4 h-3 ml-3 mt-1" />
      </a>
    </div>
   
  </div>

  
  

  
  
  );
}
