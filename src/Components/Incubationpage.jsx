import React from "react";
import success from "../assets/incubation/success.png";
import menimg from "../assets/incubation/menimg.png";
import Section from "../Components/Section";
import Footer from "../Components/Footer";
import communityImg from "../assets/incubation/communityImg.png";
import backgroundImage from "../assets/incubation/backgroundImage.png";

export default function Incubationpage() {
  return (
    <div>
      {/* section one */}

      <div
  className="one w-full h-auto sm:h-[501px] bg-cover p-4 sm:p-10 md:p-0"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  {/* Main Title */}
  <div>
    <h1 className="text-[45px] lg:text-[85px] font-bold text-center md:mt-[98px] text-[#FF5C00] font-koh">
      <span className="block text-[#0E1D5F]">
        Join India’s Best
      </span>
      Students Incubation
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
    <button className="w-[180px] md:w-[264px] h-[50px] md:h-[62px] bg-[#FF5C00] rounded-full text-white text-[16px] md:text-[18px] font-medium flex items-center justify-center">
      Apply for Incubation
    </button>
  </div>
</div>


      {/* section two */}

      <div className="flex flex-col md:flex-row items-center bg-[#241443] py-16 px-6 md:px-20 lg:px-32 lg:mt-[600px]">
        {/* Left Side - Image */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          {/* Container with custom border styling */}
          <div className="relative overflow-hidden shadow-lg w-full max-w-[300px] md:max-w-[400px] bg-white rounded-lg mt-16">
            <img
              src={menimg} // Replace with actual image path
              alt="Investor"
              className="w-full h-auto object-cover border-b-[20px] border-l-[20px] border-white" // Ensures the image fills the space properly
            />
          </div>
        </div>

        {/* Right Side - Testimonial */}
        <div className="md:w-2/3 text-white md:ml-10">
          <h2 className="text-[#FF5C00] text-[15px] lg:text-[30px] font-black mb-8 font-Lato font-sans">
            What our Investor Says
          </h2>
          <p className="text-[15px] md:text-[30px] mb-4 font-poppins font-medium">
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

      {/* section three */}

      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-8 px-6 md:px-20 lg:px-25">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-[20px] md:text-[35px] font-semibold text-[#241443] font-poppins mb-4 mt-16">
            "Unlock Expert Mentorship for Your Long-Term Business Vision Across
            Diverse Industries"
          </h1>
          <p className="text-[14px] md:text-[20px] text-[#FF5C00] font-poppins font-normal mb-6">
            Gain expert insights and strategies from seasoned mentors to shape
            your long-term business vision. Get guidance from industry leaders
            across diverse sectors for lasting growth and success.
          </p>
          <button className="bg-[#241443] text-white py-2 px-4 rounded-full mt-4 hover:bg-[#3C0C70] text-[14px] lg:text-[18px] font-semibold font-poppins">
            Get Started Now
          </button>
        </div>

        {/* Right Side - Image/Graphic */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
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

      {/* section footer */}

      <Footer />
    </div>
  );
}