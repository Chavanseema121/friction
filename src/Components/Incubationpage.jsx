import React from "react";
import success from "../assets/incubation/success.png";
import menimg from "../assets/incubation/menimg.png";
import Section from "../Components/Section";
import Footer from "../Components/Footer";
import communityImg from "../assets/incubation/communityImg.png";
import backgroundImage from "../assets/incubation/backgroundImage.png";
import arr from "../assets/aboutus/arr.png";
import star from "../assets/home/star.png";

export default function Incubationpage() {
  return (
    <div>

      
      {/* section one */}
      <div
  className="one w-full h-auto lg:h-[601px] bg-cover p-4 sm:p-10 lg:p-0 "
  style={{ backgroundImage: `url(${backgroundImage})` }}>
   <div className="  flex flex-row gap-2 lg:ml-5 ml-2 mb-3">
        <div className="  flex flex-row mt-0 lg:mt-4">
          <h2 className=" text-[#241443]  text-[15px] font-poppins font-semibold">
            Home
          </h2>
          <img
            src={arr}
            alt=""
            className="w-[9px] h-[10px] ml-[8px] mt-[8px]"
          />{" "}
        </div>
        <h2 className=" text-[#FF5C00]  text-[15px] font-poppins font-semibold lg:mt-4 mt-0">
        Incubation
        </h2>
      </div>
  
  {/* Main Title */}
  <div>
    <h1 className="text-[45px] lg:text-[85px] font-bold text-center md:mt-[68px] text-[#FF5C00] font-koh">
      <span className="block text-[#0E1D5F]">
        Join India’s Best</span>Students Incubation
    </h1>
  </div>

  {/* Content Section with Text and Image */}
  <div className="flex flex-col sm:flex-col md:flex-row justify-around">
    {/* Left Text Section */}
    <div className="left md:ml-[53px] mr-5">
      <h1 className="text-[25px]  lg:text-[50px] font-bold text-[#241443] text-start mt-10 sm:mt-14 lg:mt-[200px] font-albert">
        We Help Early Stage<br></br> Startups to Define Their<br></br> Goals & Get Early<br></br> Funding
      </h1>
    </div>

    {/* Right Image Section */}
    <div className="mt-[20px] sm:mt-[30px] md:mt-[130px]">
      <img
        src={communityImg}
        alt="Community Event"
        className="w-[686px] h-auto"
      />
    </div>
  </div>

  {/* Button Section */}
  <div className="flex justify-center md:justify-start mt-[40px] md:mt-[60px] lg:mt-[-73px] lg:ml-[80px]">
    <button className="w-[180px] lg:w-[230px] h-[50px] lg:h-[55px] bg-[#FF5C00] rounded-full text-white text-[16px] md:text-[18px] font-medium flex items-center justify-center">
      Apply for Incubation
    </button>
  </div>
</div>


      {/* section two */}

      <div className="flex flex-col items-center bg-[#241443] py-8 px-6 lg:py-8 lg:px-32 lg:mt-[600px]">
  {/* Top Heading */}
  <div className="flex items-center mb-6 lg:mb-8">
    <img
      src={star}
      alt="star"
      className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-0 lg:mr-0" // Updated margin-right for better alignment
    />
    <h2 className="text-[#FF5C00] text-[18px] lg:text-[30px] font-black font-Lato font-sans">
      What our Investor Says
    </h2>
  </div>

  {/* Main Content: Left Image and Right Content */}
  <div className="flex flex-col md:flex-row items-center w-full">
    {/* Left Side - Image */}
    <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
      <div className="relative overflow-hidden shadow-lg w-full max-w-[300px] md:max-w-[400px] bg-white rounded-lg mt-0 lg:mt-4">
        <img
          src={menimg} // Replace with actual image path
          alt="Investor"
          className="w-full h-auto object-cover border-b-[20px] border-l-[20px] border-white" // Ensures the image fills the space properly
        />
      </div>
    </div>

    {/* Right Side - Testimonial */}
    <div className="md:w-2/3 text-white md:ml-10">
      <p className="text-[15px] lg:text-[30px] mb-4 font-poppins font-medium">
        "I've been fortunate to engage with the FL incubation community at
        past events over the last few years, and always walk away impressed
        with the passion and caliber of talent that FL incubation brings
        together for students."
      </p>
      <p className="font-medium font-poppins text-[#FF5C00] text-[12px] lg:text-[20px]">
        ROMANTH GAROX
      </p>
      <p className="text-[10px] lg:text-[16px] font-poppins font-normal">
        CEO at Romanth Groups
      </p>
    </div>
  </div>
</div>


      {/* section three */}

      <div className="flex flex-col md:flex-row justify-between items-center bg-white lg:py-8 py-8 px-6 md:px-20 lg:px-25">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-left md:text-left">
          <h1 className="text-[20px] md:text-[35px] font-semibold text-[#241443] font-poppins mb-4 lg:mt-16 mt-0">
            "Unlock Expert Mentorship for Your Long-Term Business Vision Across
            Diverse Industries"
          </h1>
          <p className="text-[14px] md:text-[20px] text-[#FF5C00] font-poppins font-normal mb-6">
            Gain expert insights and strategies from seasoned mentors to shape
            your long-term business vision. Get guidance from industry leaders
            across diverse sectors for lasting growth and success.
          </p>
          <button className="lg:order-none order-3 bg-[#241443] text-white py-2 px-4 rounded-full mt-4 hover:bg-[#3C0C70] text-[14px] lg:text-[18px] font-semibold font-poppins">
            Get Started Now
          </button>
        </div>

        {/* Right Side - Image/Graphic */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center lg:order-none order-2">
          <div className="relative">
            {/* Image or Illustration */}
            <img
              src={success} // Replace this with the path to your image
              alt="Mentorship Success"
              className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] object-contain"
            />
            {/* Success Label */}
          </div>
        </div>
      </div>

      {/* section four */}

      <Section />

      <div className="button md:w-[190px] h-[48px]  sm:w-[260px]  w-[260px]  lg:hidden    flex text-center justify-center align-middle md:ml-[400px]   sm:mt-8  mt-18 md:mt-0  sm:ml-9 ml-10 animate-endanimation mb-8">
          <button
            id="apply-button"
            className="w-[190px] h-[48px] text-[16px] text-[#FFFFFF] font-bold bg-[#022956]  transform transition-transform duration-300  rounded-md hover:text-[#022956] hover:bg-white hover:border border-[#022956]"
          >
            Apply Now
          </button>
        </div>

      {/* section footer */}

      <Footer />
    </div>
  );
}
