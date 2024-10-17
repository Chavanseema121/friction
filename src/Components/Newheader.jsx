import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundOne from "../assets/home/backgroundone.png";
import backgroundTwo from "../assets/home/backgroundtwo.png";
import backgroundThree from "../assets/home/backgroundthree.png";
import arrowone from "../assets/home/arrowone.png";


// Carousel data
const slides = [
  {
    title: (
        <>
          <p className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px]  text-[#241443] opacity-40 font-semibold ">
            100% Quality courses
          </p>
          Advance Your Career in
          a Digitalized{" "}
          <span className="bg-[#FFCC1F] p-1 rounded-full text-[#241443]">
            World
          </span>
        </>
      ),
      subtitle:
        "We Have 32k+ Online Courses with Gamified Technology & 400K+ Online Registered Students.",
    imageUrl: backgroundOne,
  },
  {
    title: (
        <>
          <p className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#241443] opacity-40 font-semibold ">
            100% Quality courses
          </p>
          Find Your Perfect Courses And
          Improve Your{" "}
          <span className="bg-[#FF5C00] p-1 rounded-full text-[#241443]">
            Skills
          </span>{" "}
          through
          FrictionLearn!
        </>
      ),
      subtitle:
        "We Have 32k+ Online Courses with Gamified Technology & 400K+ Online Registered Students.",
    imageUrl: backgroundTwo,
  },
  {
    title: (
        <>
          <p className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#241443] opacity-40 font-semibold ">
            100% Quality courses
          </p>
          Show your Creativity to<br />
          the world with<br />
          <span className="text-[#FF5C00]">Friction</span>Learn!
        </>
      ),
      subtitle:
        "Prepare yourself for the careers of tomorrow with our tailored programs.",
    imageUrl: backgroundThree,
  },
];

const SliderComponent = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Auto-sliding enabled
    autoplaySpeed: 1000, // Speed of sliding (3 seconds)
  };

  return (
    <div className="w-full h-auto">
      {/* Header */}
     

      {/* Carousel Section */}
      <section className="bg-[#F2F2F2] w-full h-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="flex flex-col md:flex-row  rounded-lg overflow-hidden">
                {/* Left Side (Content) */}
                <div className="md:w-1/2 lg:w-1/2 p-4 lg:p-4  md:p-4">
                 
                  <p className="text-[#241443] text-[32px] md:text-[52px] font-semibold font-poppins">{slide.title}</p>
                  <p className="text-[#241443] opacity-60 text-[16px] md:text-[20px] mt-4 font-medium font-poppins">{slide.subtitle}</p>
                  <div className="mt-6 md:mt-8 text-left md:text-left">
            <a
              href="#"
              className="inline-flex items-center px-2 py-1 lg:px-4 lg:py-2.5 bg-[#FF5C00] text-white text-[12px] md:text-[18px] font-poppins font-semibold rounded-full"
            >
             Explore All Courses
              <img src={arrowone} alt="Arrow" className="w-3 h-3 md:w-4 md:h-3 ml-3" />
            </a>
          </div>

          <div className="flex flex-row md:flex-row mt-8 md:mt-10 space-y-0 space-x-4 md:space-y-0 md:space-x-10">
            <div className="text-[#241443] text-center">
              <h4 className="text-[40px] md:text-[52px] font-medium font-poppins">
                1k+
              </h4>
              <p className="text-[14px] opacity-40 md:text-[16px] font-semibold font-poppins">
                Active Learners
              </p>
            </div>
            <div className="text-[#241443] text-center ">
              <h4 className="text-[40px] md:text-[52px] font-medium font-poppins">
                3k+
              </h4>
              <p className="text-[14px] opacity-40 md:text-[16px] font-semibold font-poppins">
                Certified Students
              </p>
            </div>
          </div>
                </div>

                {/* Right Side (Image) */}
                <div className="md:w-1/2 lg:w-1/2 ">
                  <img
                    src={slide.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default SliderComponent;
