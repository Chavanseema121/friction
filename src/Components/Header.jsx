import React, { useState, useEffect } from "react";
import backgroundOne from "../assets/home/backgroundone.png";
import backgroundTwo from "../assets/home/backgroundtwo.png";
import backgroundThree from "../assets/home/backgroundthree.png";
import arrowone from "../assets/home/arrowone.png";

// Slide data with background images and content
const slides = [
  {
    backgroundImage: backgroundOne,
    title: (
      <>
        <p className="text-[14px] md:text-[16px] text-[#241443] font-semibold ">
          100% Quality courses
        </p>
        Advance Your Career in<br />
        a Digitalized{" "}
        <span className="bg-[#FFCC1F] p-1 rounded-full text-[#241443]">
          World
        </span>
      </>
    ),
    subtitle:
      "We Have 32k+ Online Courses with Gamified Technology & 400K+ Online Registered Students.",
  },
  {
    backgroundImage: backgroundTwo,
    title: (
      <>
        <p className="text-[14px] md:text-[16px] text-[#241443] font-semibold ">
          100% Quality courses
        </p>
        Find Your Perfect Courses And<br />
        Improve Your{" "}
        <span className="bg-[#F27329] p-1 rounded-full text-[#241443]">
          Skills
        </span>{" "}
        through<br />
        FrictionLearn!
      </>
    ),
    subtitle:
      "We Have 32k+ Online Courses with Gamified Technology & 400K+ Online Registered Students.",
  },
  {
    backgroundImage: backgroundThree,
    title: (
      <>
        <p className="text-[14px] md:text-[16px] text-[#241443] font-semibold ">
          100% Quality courses
        </p>
        Show your Creativity to<br />
        the world with<br />
        <span className="text-[#F27329]">Friction</span>Learn!
      </>
    ),
    subtitle:
      "Prepare yourself for the careers of tomorrow with our tailored programs.",
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto">
      {/* Desktop Layout */}
      <div
        className="w-full h-[500px] md:h-[769px] bg-cover bg-center transition-all duration-1000 relative hidden md:block"
        style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
      >
        {/* Carousel Content for Desktop */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-10">
          {/* Title */}
          <h2 className="text-[#241443] text-[32px] md:text-[52px] font-semibold text-Poppins leading-tight">
            {slides[currentSlide].title}
          </h2>

          {/* Subtitle */}
          <h3 className="text-[#241443] text-[16px] md:text-[20px] mt-4 font-medium text-Poppins">
            {slides[currentSlide].subtitle}
          </h3>

          {/* Call to Action Button */}
          <div className="mt-6 md:mt-8 text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#F27329] text-white text-[16px] md:text-[18px] font-semibold rounded-full hover:bg-orange-400 transition-colors"
            >
              Become an Instructor
              <img src={arrowone} alt="Arrow" className="w-3 h-2 md:w-4 md:h-3 ml-3" />
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row mt-8 md:mt-10 space-y-4 md:space-y-0 md:space-x-10">
            <div className="text-[#241443] text-center">
              <h4 className="text-[32px] md:text-[52px] font-medium text-Poppins">
                1k+
              </h4>
              <p className="text-[14px] md:text-[16px] font-semibold text-Poppins">
                Active Learners
              </p>
            </div>
            <div className="text-[#241443] text-center">
              <h4 className="text-[32px] md:text-[52px] font-medium text-Poppins">
                3k+
              </h4>
              <p className="text-[14px] md:text-[16px] font-semibold text-Poppins">
                Certified Students
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-gray-300" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-6 py-10">
        {/* Content Section */}
        <div className="flex flex-col items-start justify-center h-full">
          {/* Title */}
          <h2 className="text-[#241443] text-[28px] font-semibold text-Poppins leading-tight">
            {slides[currentSlide].title}
          </h2>

          {/* Subtitle */}
          <h3 className="text-[#241443] text-[16px] mt-4 font-medium text-Poppins">
            {slides[currentSlide].subtitle}
          </h3>

          {/* Call to Action Button */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-[#F27329] text-white text-[16px] font-semibold rounded-full hover:bg-orange-400 transition-colors"
            >
              Become an Instructor
              <img src={arrowone} alt="Arrow" className="w-3 h-2 ml-3" />
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex flex-row mt-8 space-x-4">
            <div className="text-[#241443] text-center">
              <h4 className="text-[32px] font-medium text-Poppins">1k+</h4>
              <p className="text-[14px] font-semibold text-Poppins">
                Active Learners
              </p>
            </div>
            <div className="text-[#241443] text-center">
              <h4 className="text-[32px] font-medium text-Poppins">3k+</h4>
              <p className="text-[14px] font-semibold text-Poppins">
                Certified Students
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full h-[300px] bg-cover bg-center mt-4"
          style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
        />
      </div>
    </div>
  );
}
