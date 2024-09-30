import React, { useState } from "react";
// import NewNavbar from "./NewNavbar";
import Newheader from "../Components/Newheader";
import SectionFifth from "../Components/SectionFifth";
import SectionEleventh from "../Components/SectionEleventh";
import SectionTewelth from "../Components/SectionTewelth";
import Section from "./Section";
import Footer from "./Footer";

import incubationsector from "../assets/home/incubationsector.png";

import benefitslearn from "../assets/home/benefitslearn.png";

import aboutskillimg from "../assets/home/aboutskillimg.png";

import goalimgones from "../assets/home/goalimgones.png";
import goalimgtwo from "../assets/home/goalimgtwo.png";
import mindimgone from "../assets/home/mindimgone.png";
import mindimgtwo from "../assets/home/mindimgtwo.png";

import imgone from "../assets/home/imgone.png";
import imgtwo from "../assets/home/imgtwo.png";
import imgthree from "../assets/home/imgthree.png";
import imgfour from "../assets/home/imgfour.png";
import imgfive from "../assets/home/imgfive.png";
import imgsix from "../assets/home/imgsix.png";
import imgseven from "../assets/home/imgseven.png";
import imgeight from "../assets/home/imgeight.png";
import imgnine from "../assets/home/imgnine.png";
import imgten from "../assets/home/imgten.png";
import imgeleven from "../assets/home/imgeleven.png";

import sthreegroup from "../assets/home/sthreegroup.png";
import sthreegroupone from "../assets/home/sthreegroupone.png";
import sthreegrouptwo from "../assets/home/sthreegrouptwo.png";
import sthreegroupthree from "../assets/home/sthreegroupthree.png";
import sthreegroupfour from "../assets/home/sthreegroupfour.png";
import sthreeone from "../assets/home/sthreeone.png";
import sthreetwo from "../assets/home/sthreetwo.png";
import sthreethree from "../assets/home/sthreethree.png";
import sthreefour from "../assets/home/sthreefour.png";
import sthreefive from "../assets/home/sthreefive.png";

// import sfourgroupone from "../assets/home/sfourgroupone.png";
// import sfourgrouptwo from "../assets/home/sfourgrouptwo.png";

import updatesection from "../assets/home/updatesection.png";

import lastone from "../assets/home/lastone.png";
import lasttwo from "../assets/home/lasttwo.png";
import lastthree from "../assets/home/lastthree.png";
import lastfour from "../assets/home/lastfour.png";
import lastfive from "../assets/home/lastfive.png";

import instructorimg from "../assets/home/instructorimg.png";

import arrowone from "../assets/home/arrowone.png";

import girltriangle from "../assets/home/girltriangle.png";
import girlbackground from "../assets/girlbackground.png";

import stenone from "../assets/home/stenone.png";
import stentwo from "../assets/home/stentwo.png";
import stenthree from "../assets/home/stenthree.png";
import stenfour from "../assets/home/stenfour.png";
import stenfive from "../assets/home/stenfive.png";
import stensix from "../assets/home/stensix.png";

import android from "../assets/home/android.png";

import Contactus from "../assets/home/Contactus.png";
import purplesection from "../assets/home/purplesection.png";
import bulbimg from "../assets/home/bulbimg.png";
import award from "../assets/home/award.png";
import bookimg from "../assets/home/bookimg.png";

import passportImage from "../assets/home/passportImage.png";

import whydoprojectone from "../assets/home/whydoprojectone.png";
import whydoprojecttwo from "../assets/home/whydoprojecttwo.png";

import whydoprojectthree from "../assets/home/whydoprojectthree.png";

import elevenone from "../assets/home/elevenone.png";
import eleventwo from "../assets/home/eleventwo.png";

import eleventhree from "../assets/home/eleventhree.png";

import infoimg from "../assets/home/infoimg.png";
import star from "../assets/home/star.png";
import crossline from "../assets/home/crossline.png"
const collaborators = [
  stenone,
  stentwo,
  stenthree,
  stenfour,
  stenfive,
  stensix,
];

const items = [
  {
    img: imgone,
    title: "1. College and Industry Collaboration",
    description:
      "Partnering with top colleges and leading industries to /> provide cutting-edge courses and real-world insights.",
  },
  {
    img: imgtwo,
    title: "2. AI-Powered Learning Support",
    description:
      "Enhance your education with AI-driven learning assistance for personalized support and improved outcomes.",
  },
  {
    img: imgthree,
    title: "3. Early Course Exploration",
    description:
      "Discover and explore courses early to make informed educational decisions.",
  },
  {
    img: imgfour,
    title: "4. Incubation for Idea Generators",
    description:
      "Offering dedicated support and resources to turn your innovative ideas into successful startups.",
  },
  {
    img: imgfive,
    title: "5. Certification with Gamified Learning Methods",
    description:
      "Earn your certification through engaging gamified learning methods.",
  },
  {
    img: imgsix,
    title: "6. Real-Time Freelance Projects",
    description:
      "Gain practical experience and generate income by working on live projects with our partner companies.",
  },
  {
    img: imgseven,
    title: "7. Community Knowledge Sharing",
    description:
      "Collaborative platform for exchanging insights and expertise within a community.",
  },
  {
    img: imgeight,
    title: "8. Club Creation and Collaboration",
    description:
      "Empower your community by creating and collaborating through dynamic clubs.",
  },
  {
    img: imgnine,
    title: "9. Community Connections",
    description:
      "Building relationships and fostering collaboration within a supportive community.",
  },
  {
    img: imgten,
    title: "10. Events with Industry Leaders",
    description:
      "Engage with industry leaders at exclusive events for insights and networking.",
  },
  {
    img: imgeleven,
    title: "11. Personalized learning paths",
    description:
      "Customized educational routes tailored to individual learning styles and goals.",
  },
];

const images = [
  sthreegroup,
  sthreegroupone,
  sthreegrouptwo,
  sthreegroupthree,
  sthreegroupfour,
];

const contents = [
  {
    title: "Practical Skill Development",
    description:
      "Gain real-world experience solving practical problems and building a portfolio.",
    img: sthreeone,
  },
  {
    title: "AI-Powered Learning Support",
    description:
      "Enhance your learning experience with personalized, AI-driven educational support.",
    img: sthreetwo,
  },
  {
    title: "Earn Your Certification with Gamification",
    description:
      "Earn certifications to showcase expertise and enhance your professional qualifications.",
    img: sthreethree,
  },
  {
    title: "Real-Time Progress Tracking",
    description:
      "Monitor your learning journey with instant updates on your course achievements and milestones.",
    img: sthreefour,
  },
  {
    title: "Events with Industry Leaders",
    description:
      "Network with peers, industry leaders, and mentors through vibrant clubs, communities, and engaging events.",
    img: sthreefive,
  },
];

const testimonials = [
  {
    name: "J.Rohith",
    role: "B.Tech(CSC) at Vignan College",
    text: "I'm so excited to finish my studies with FrictionLearn. The progressive ideas and real-world projects are exactly what I need to prepare for my career. I can't wait to get started!",
    image: lastone,
  },
  {
    name: "Sowmya",
    role: "Degree (2nd year) at Tara College",
    text: "FrictionLearn's unique approach to education with progressive ideas and practical assessments is exactly what I was looking for. I'm ready to dive in and develop my skills further.",
    image: lasttwo,
  },
  {
    name: "Sanjana",
    role: "B.com (computers-2nd year) LNK college",
    text: "Joining FrictionLearn has been the best decision for my academic and career growth. The hands-on projects and guidance from experienced mentors are invaluable. I'm thrilled to start this journey!",
    image: lastthree,
  },
  {
    name: "Sravya",
    role: "B-tech(ECE) at MGIT",
    text: "I'm excited about the opportunity to study with FrictionLearn. The well-structured courses and emphasis on real-world applications will undoubtedly prepare me for a successful career. Ready to start this now!",
    image: lastfour,
  },
  {
    name: "k.Priya",
    role: "B Tech () at BVRIT",
    text: "FrictionLearn provides the perfect mix of education and practical experience. I'm excited to start the courses and take on the projects that will enhance my skills and prepare me for my future. Let's get started!",
    image: lastfive,
  },
];

export default function Homepage() {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);

  const [current, setCurrent] = useState(2);

  const handleMouseEnterIn = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full h-auto">
      <Newheader />

      {/* section one */}

     

      <section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-lg lg:py-10">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <img
                src={star}
                alt="star"
                className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
              />
              <h2 className="text-[#FF5C00] text-[20px] sm:text-[20px] md:text-[30px] lg:text-[30px] font-black  font-Lato font-sans text-center">
                What We Offer
              </h2>
            </div>
            <p className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] text-[#241443] font-semibold font-poppins text-center ">
              Unlock Your Potential: Growth, Creativity and Collaboration at
              FrictionLearn
            </p>
            <img
              src={benefitslearn}
              alt="Benefits"
              className="w-full mt-[40px] lg:mt-[50px]"
            />
          </div>

          {/* Horizontal line added for mobile screens */}
          <hr className="block sm:hidden border-t border-gray-300 mt-4" />
        </div>
      </section>

      {/* section two */}

      <div className="w-full h-auto lg:h-[293px]">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-[#FF5C00] text-[20px] sm:text-[20px] md:text-[35px] lg:text-[40px] font-Mixed font-poppins">
            Trusted By Over<span className="text-[#241443]"> 13400+ </span>
            Students & Organizations
            <br /> Recommended Around the World
          </h2>
        </div>
        <div className="overflow-hidden mt-[30px] md:mt-[50px] lg:mt-[100px] scroll-container">
          <div className="scroll-content whitespace-nowrap animate-scroll">
            {collaborators.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo ${index + 1}`}
                className="inline-block mx-4"
                style={{ height: "50px", width: "auto", margin: "0 15px" }} // Scaled for better responsiveness
              />
            ))}
            {/* Duplicate content to ensure continuous scrolling */}
            {collaborators.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo}
                alt={`logo ${index + 1}`}
                className="inline-block mx-4"
                style={{ height: "50px", width: "auto", margin: "0 15px" }} // Scaled for better responsiveness
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-[40px] md:mt-[50px] lg:mt-[60px]">
        <div className="flex items-center justify-center mb-6">
          <img
            src={star}
            alt="star"
            className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
          />
          <h2 className="text-[#FF5C00] text-[18px] sm:text-[30px] lg:text-[30px] font-black text-center font-lato font-sans">
            About Us
          </h2>
        </div>

        <h2 className="text-[#241443] text-[20px] sm:text-[20px] lg:font-semibold lg:text-[40px] font-semibold text-center font-poppins">
          Empowering Minds, Shaping Futures:
          <br></br> Meet the FrictionLearn Plan
        </h2>
      </div>

      <div className="parent flex flex-col lg:flex-row justify-around mx-[20px] md:mx-[40px] lg:mx-[85px] mt-[40px] md:mt-[60px] lg:mt-[80px] space-y-7 lg:space-y-0 lg:space-x-7">
        <div className="childleft w-full md:w-[90%] lg:w-[700px]">
          {/* <div className="">
           
          <h2 className="text-[#241443] text-[24px] sm:text-[24px] md:text-[60px] lg:text-[75px] font-Lato font-extrabold text-start font-sans  leading-[45px] md:leading-[75px] lg:leading-[90px]">
            About FrictionLearn
          </h2>
          <img src={crossline} alt="" className="w-[360px] h-[33px] lg:ml-[350px] lg:mt-[-60px]" />
          </div> */}

<div className="">
  <h2 className="text-[#241443] text-[24px] sm:text-[24px] md:text-[60px] lg:text-[75px] font-Lato font-extrabold text-start font-sans leading-[45px] md:leading-[75px] lg:leading-[90px] relative">
    About <span style={{
      backgroundImage: `url(${crossline})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '180px',
      backgroundSize: 'contain',
      paddingLeft: '0px' /* Adjust this value based on your image width */
    }}>FrictionLearn</span>
  </h2>
</div>

          <h6 className="mt-4 lg:mt-4 text-[#FF5C00] text-[14px] sm:text-[14px] lg:text-[21px] font-Regular font-poppins leading-[24px] md:leading-[32px]">
            Driven by the mission to make quality education accessible to all
          </h6>
          <p className="text-[#241443] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-Regular font-poppins leading-[22px] md:leading-[28px] lg:leading-[32px] mt-[20px]">
            FrictionLearn is a gamified e-learning platform designed to bridge
            the gap between learners and industry experts. Through dynamic,
            personalized tasks, we provide an engaging and interactive learning
            journey aimed at enhancing skills and career growth. Our mission is
            to create a seamless learning experience that empowers users to
            achieve their goals with ease and innovation.
          </p>
        </div>

        <div className="childright mt-[30px] md:mt-[50px] flex justify-center lg:justify-end">
          <img
            src={aboutskillimg}
            alt="About Skill"
            className="w-[350px] sm:w-[350px] md:w-[450px] lg:w-[606px] h-auto"
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-start mt-[20px] md:mt-[40px] lg:mt-[-40px] ml-[30px] lg:ml-[200px] ">
        <button className="w-[166px]  lg:w-[214px] h-[49px]  md:h-[62px] bg-[#FF5C00] rounded-full text-[#ffffff] text-[14px] sm:text-[16px] md:text-[18px] font-semibold font-poppins flex items-center justify-center">
          <span>Learn More</span>
          <img
            src={arrowone}
            alt=""
            className="w-[18px] sm:w-[20px] md:w-[26px] h-[12px] sm:h-[14px] md:h-[18px] ml-2"
          />
        </button>
      </div>

      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section three */}
      <section className="w-full h-auto mt-[40px] sm:mt-[40px] lg:mt-[40px]">
        <div className="heading flex justify-center items-center text-center">
          <div className="flex items-center justify-center mb-8">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
            />
            <h2 className="text-[#FF5C00] text-[20px] lg:text-[30px] font-black font-Lato font-sans">
              What’s Our Main Goal
            </h2>
          </div>
        </div>

        <div className="parent flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-7 mt-[10px] lg:mt-[65px] mx-[20px] lg:mx-[50px]">
          {/* Left Side */}
          <div className="childleft w-full lg:w-[700px] mt-[10px] lg:mt-0 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              <div className="one bg-[#FFCC1F] w-full h-[150px] md:h-[200px] rounded-3xl flex items-center justify-center">
                <h2 className="text-[#022956] text-[20px] md:text-[30px] font-black text-center font-poppins">
                  8+ Years of Experience
                </h2>
              </div>
              <div className="two w-full h-[250px] md:h-[356px] rounded-3xl">
                <img
                  src={goalimgones}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="two w-full h-[250px] md:h-[356px] rounded-3xl mt-[-100px] md:mt-[-150px]">
                <img
                  src={goalimgtwo}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="one border border-[#504f4d] w-full h-[100px] md:h-[158px] rounded-2xl flex items-center justify-center mt-[20px] px-[40px]">
                {/* Left side: Image */}
                <img
                  src={infoimg}
                  alt=""
                  className="w-[72px] h-[74px] mr-[20px]"
                />

                {/* Right side: Text */}
                <div className="flex flex-col">
                  <h2 className="text-[#022956] text-[24px] md:text-[30px] font-black text-left font-poppins">
                    32k+
                  </h2>
                  <p className="text-[#022956] text-[12px] md:text-[16px] font-medium">
                    Positive Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="childright w-full lg:w-[771px] order-2 lg:order-2">
            <h2 className="text-[#241443] text-[20px] md:text-[30px] lg:text-[40px] font-bold text-start font-poppins lg:mt-0 mt-[20px]">
              Take the Next Step Towards Your Personal And Professional Goals
              With FrictionLearn
            </h2>
            <p className="text-[#241443] opacity-[60%] text-[10px] md:text-[18px] lg:text-[20px] font-medium font-poppins leading-[22px] md:leading-[28px] lg:leading-[32px] mt-[20px]">
              Take the next step towards achieving your Personal & Professional
              aspirations with FrictionLearn. In a world that demands constant
              growth & adaptability, FrictionLearn is your trusted partner on
              the journey to success.
            </p>
            <div className="subparent mt-[30px] md:mt-[40px] lg:mt-[50px]">
              {/* First Row */}
              <div className="childone flex items-start mb-[20px]">
                <img
                  src={mindimgone}
                  alt=""
                  className="w-[73px] md:w-[125px] h-[73px] md:h-[126px]  mt-[10px]"
                />
                <div className="subchild text-start ml-4 md:ml-[20px]">
                  <h2 className="text-[#FF5C00] text-[15px] md:text-[25px] lg:text-[30px] font-semibold font-poppins mb-2">
                    Learn From Experts
                  </h2>
                  <p className="text-[#241443] opacity-[60%] text-[10px] lg:text-[15px] font-medium font-poppins mt-[5px]">
                    Learn directly from industry experts, gaining valuable
                    insights, hands-on experience, and practical knowledge.
                  </p>
                </div>
              </div>

              {/* Second Row */}
              <div className="childtwo flex items-start mb-[20px]">
                <img
                  src={mindimgtwo}
                  alt=""
                  className="w-[73px] md:w-[125px] h-[73px] md:h-[126px] mt-[10px]"
                />
                <div className="subchild text-start ml-4 md:ml-[20px]">
                  <h2 className="text-[#FF5C00] text-[15px] md:text-[25px] lg:text-[30px] font-semibold font-poppins">
                    Video Tutorial
                  </h2>
                  <p className="text-[#241443] opacity-[60%] text-[10px] lg:text-[15px] font-medium font-poppins mt-[5px]">
                    Comprehensive video tutorials designed to simplify complex
                    topics, making learning engaging and accessible anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="block sm:hidden border-t border-gray-300 mt-4" />
      </section>

      {/* section four */}
      {/* 
      <div className="grid md:grid-cols-2 gap-4 mt-40 ">
        <div className=" m-auto max-w-screen-lg lg:py-16 sm:text-center">
          <h2 className="text-[40px] font-black text-[#FF5C00] mb-4 ">
            What Sets FrictionLearn <br></br>Apart From Other<br></br> Platforms
          </h2>
          <p className="text-[18px] font-normal font-Lato font-sans text-[#241443]">
            Empowering students with real-world skills through<br></br> industry
            collaboration, practical projects, and dynamic<br></br> communities.
          </p>
        </div>
        <div className="overflow-y-scroll pr-4 sm:pr-6 lg:pr-10 scrollbar-hide py-4 h-[500px] sm:h-[600px] md:h-[650px] lg:h-[729px]">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-md p-4 sm:p-3 lg:p-5"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] object-cover rounded-lg"
                />
                <div className="ml-4 sm:ml-6">
                  <h3 className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] text-[#241443] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#1D2228]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 md:px-10 mt-10 lg:mt-20">
        {/* Left Side - Content */}
        <div className="m-auto max-w-screen-lg py-8 md:py-16">
          <h2 className="text-[24px] sm:text-[28px] md:text-[40px] font-black text-[#FF5C00] mb-4">
            What Sets FrictionLearn <br /> Apart From Other <br /> Platforms
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal font-Lato font-sans text-[#241443] leading-[24px] sm:leading-[28px] md:leading-[32px]">
            Empowering students with real-world skills through <br /> industry
            collaboration, practical projects, and dynamic <br /> communities.
          </p>
        </div>

        {/* Right Side - Scrollable Section */}
        <div className="overflow-y-scroll pr-2 sm:pr-4 lg:pr-6 scrollbar-hide py-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-5"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] object-cover rounded-lg"
                />
                <div className="ml-3 sm:ml-5">
                  <h3 className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px] text-[#241443] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#1D2228]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="block sm:hidden border-t border-gray-300 mt-4" />
      </div>

      {/* section fifth */}

      <SectionFifth />

      {/* section six */}

      <div className="w-full h-auto  mx-auto lg:mt-[40px] mt-[20px]">
        <div className="flex flex-col justify-center text-center px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-center mb-2  lg:mb-2">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] lg:mr-[-16px] lg:mt-[15px] mr-[-34px] mb-[25px]"
            />
            <h2 className="text-[#FF5C00] text-[18px] sm:text-[18px] md:text-[30px] lg:text-[30px] font-black font-Lato font-sans">
              Tailored Training to Achieve Your Goals
            </h2>
          </div>
          <p className="text-[18px] sm:text-[18px] md:text-[36px] lg:text-[40px] text-[#241443] font-semibold font-Poppins">
            Customized Learning Paths for Your Success
          </p>
        </div>

        {/* Desktop and Laptop View */}
        <div className="hidden md:flex mt-[49px] justify-center items-center">
          <div className="left-section flex flex-col">
            {contents.map((content, index) => (
              <div
                key={index}
                className={`w-[498px] h-[119px] shadow-lg flex cursor-pointer ${
                  index === hoveredImageIndex
                    ? "border-2 border-orange-500"
                    : ""
                } ${index > 0 ? "mt-[23px]" : ""}`}
                onMouseEnter={() => setHoveredImageIndex(index)}
              >
                <img
                  src={content.img}
                  alt=""
                  className="w-[48px] h-[48px] justify-center mt-[38px] ml-[32px]"
                />
                <div className="ml-[23px] text-start">
                  <h3 className="text-[#241443] text-[18px] font-semibold mt-[15px] font-lato,sans">
                    {content.title}
                  </h3>
                  <p className="text-[#F27329] text-[14px] font-normal mt-[8px]">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-[50px]">
            <img
              src={images[hoveredImageIndex]}
              alt="Selected"
              className="w-[707px] h-[707px]"
            />
          </div>
        </div>

        {/* Small Screen View */}
        <div className="flex flex-col mt-[49px] md:hidden items-center">
          {contents.map((content, index) => (
            <div
              key={index}
              className="w-full max-w-[90%] flex flex-col items-center"
            >
              <div
                className={`w-full h-auto shadow-lg flex flex-col items-center cursor-pointer ${
                  index === hoveredImageIndex ? "border" : ""
                } ${index > 0 ? "mt-[20px]" : ""}`}
                onMouseEnter={() => setHoveredImageIndex(index)}
              >
                {/* Image and Content in one block for mobile */}
                <div className="flex items-center w-full">
                  <img
                    src={content.img}
                    alt=""
                    className="w-[48px] h-[48px] justify-center mt-[10px] ml-[16px]"
                  />
                  <div className="ml-[16px] text-start">
                    <h3 className="text-[#241443] text-[18px] font-semibold mt-[10px] font-lato,sans">
                      {content.title}
                    </h3>
                    <p className="text-[#F27329] text-[14px] font-normal mt-[8px]">
                      {content.description}
                    </p>
                  </div>
                </div>

                {/* The corresponding image placed below content */}
                <img
                  src={images[index]}
                  alt="Selected"
                  className="w-full h-auto mt-[20px]"
                />
              </div>
            </div>
          ))}
        </div>
        <hr className="block sm:hidden border-t border-gray-300 mt-4" />
      </div>

      {/* section seven */}

      <section className="purple w-full h-auto sm:h-auto md:h-auto lg:h-[344px] bg-[#241443] mt-[100px] bg-cover bg-center bg-no-repeat py-4"
        style={{ backgroundImage: `url(${purplesection})` }}
      >
        <div className="parent flex flex-col lg:flex-row flex-wrap justify-around sm:justify-around gap-y-6 lg:gap-x-2">
          <div className="one flex flex-row lg:flex-row items-center justify-center w-full lg:w-[361px] h-auto lg:h-[72px] mt-[20px] lg:mt-[120px]">
            <img
              src={bookimg}
              alt=""
              className="w-[51px] h-[56px] mb-[10px] ml-[40px] sm:mb-0"
            />
            <div className="subchild w-full sm:w-[428px] text-center sm:text-start  ml-[30px] mt-[10px]">
              <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center lg:text-start font-poppins">
                Get Achieve New Levels
              </h2>
              <p className="text-[#ffffff] text-[12px] font-medium font-poppins mt-[10px]">
                Unlock New Heights with every Stepforward
              </p>
            </div>
          </div>

          <div className="one flex sm:flex-col md:flex-row items-center justify-center w-full lg:w-[361px] h-auto lg:h-[72px] mt-[20px] lg:mt-[120px]  ">
            <img
              src={bulbimg}
              alt=""
              className="w-[52px] h-[57px] mb-[10px] sm:mb-0   ml-[40px] lg:ml-[10px]   "
            />

            <div className="subchild w-full sm:w-[428px] text-center sm:text-start  ml-[30px] mt-[10px]">
              <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center lg:text-start font-poppins">
                Learn in Gamified way
              </h2>
              <p className="text-[#ffffff] text-[12px] font-medium font-poppins mt-[10px]">
                Making learning Fun & Effective to boost your career growth in
                heights
              </p>
            </div>
          </div>

          <div className="one flex sm:flex-col md:flex-row items-center justify-center w-full sm:w-[361px] h-auto sm:h-[72px] mt-[20px] lg:mt-[120px] ">
            <img
              src={award}
              alt=""
              className="w-[56px] h-[57px] mb-[10px] sm:mb-0  ml-[30px] lg:ml-[10px]"
            />
            <div className="subchild w-full sm:w-[428px] text-center sm:text-start ml-[30px] mt-[10px]">
              <h2 className="text-[#FFFFFF] text-[18px] font-bold text-center lg:text-start font-poppins">
                Award Winning Team
              </h2>
              <p className="text-[#ffffff] text-[12px] font-medium font-poppins mt-[10px]">
                Recognized for Excellence & Innovation to deliver the
                Outstanding results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section eight */}

      <div className="flex flex-col items-center justify-center px-6 py-8 md:px-12 lg:px-24">
        <div className="flex items-center justify-center">
          <img
            src={star}
            alt="star"
            className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
          />
          <h2 className="text-[#FF5C00] text-[18px] lg:text-[30px] font-black mb-2">
            Our Strategic Success Framework
          </h2>
        </div>
        <h1 className="text-[20px] lg:text-[40px] font-semibold text-center mb-10 text-[#241443]">
          Experience the Structure, Embrace the Success
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="mb-8 lg:mb-0 lg:mr-12">
            <img
              src={updatesection}
              alt="Strategic Framework"
              className="w-full h-auto"
            />
          </div>
          {/* Content Section */}
          <div className="max-w-lg text-left space-y-6">
            <div>
              <h3 className="font-semibold text-[14px] lg:text-[26px] text-[#241443]">
                1. Engaging Learning Experience:
              </h3>
              <p className="text-[#FF5C00] text-[14px] lg:text-[18px] text-Poppins font-Lato font-sans">
                "FrictionLearn" transforms traditional education into an
                engaging, fun, and motivating gamified learning journey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[14px] lg:text-[26px] text-[#241443]">
                2. Structured Course Levels:
              </h3>
              <p className="text-[#FF5C00] text-[14px] lg:text-[18px] text-Poppins font-Lato font-sans">
                Our 24-level courses guide students from 1st to 3rd year in
                exploring future paths, with welcome kits promoting professional
                growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[14px] lg:text-[26px] text-[#241443]">
                3. AI-Focused Learning Support:
              </h3>
              <p className="text-[#FF5C00] text-[14px] lg:text-[18px] text-Poppins font-Lato font-sans">
                FrictionLearn uses dedicated own AI to clarify doubts and offer
                personalized support, enhancing students' learning experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[14px] lg:text-[26px] text-[#241443]">
                4. Incubation for Idea Generators:
              </h3>
              <p className="text-[#FF5C00] text-[14px] lg:text-[18px] text-Poppins font-Lato font-sans">
                Starting in the second year, our Incubation programs provide
                mentorship and resources to help students develop innovative
                ideas.
              </p>
            </div>
          </div>
        </div>
        <button className="mt-12 bg-[#241443] text-white py-2  px-4 rounded-full hover:bg-purple-700 text-[18px] font-semibold">
          Explore Courses &rarr;
        </button>
      </div>
      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* secton nine */}

      <section className="whydoprojects w-full sm:h-auto mt-[40px]">
        <div className="flex flex-col justify-center items-center text-center px-4">
          <div className="flex items-center justify-center">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
            />
            <h2 className="text-[#FF5C00] text-[15px] sm:text-[30px] lg:text-[30px] font-black text-center font-poppines">
              Why do Projects
            </h2>
          </div>
          <h2 className="text-[#241443] text-[20px] lg:text-[40px] font-semibold text-center font-poppines mt-4">
            Doing these Projects will Gain Hands-On real
            <br className="hidden sm:block" />
            World Project Experience with{" "}
            <span className="text-[#FF5C00] text-[28px] sm:text-[40px]">
              Friction
            </span>
            Learn
          </h2>
        </div>

        <div className="parent flex flex-row flex-wrap gap-6 justify-evenly sm:justify-center px-4 sm:px-0">
          {/* First Project Card */}
          <div className="flex flex-col w-full sm:w-[389px] min-h-[0] mt-[40px] sm:mt-[10px] p-[10px] border-gray-950 shadow-xl rounded-lg transition-transform transform-gpu duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src={whydoprojectone}
              alt=""
              className="w-[76px] h-[77px] mt-[40px] sm:mt-[60px] mx-auto mb-[20px]"
            />

            <div className="subchild w-full text-center">
              <h2 className="text-[#241443] text-[20px] sm:text-[23px] font-bold text-center font-poppines">
                Become Job Ready
              </h2>
              <p className="text-[#FF5C00] text-[16px] font-medium font-poppines leading-[28px] sm:leading-[32px] mt-[10px]">
                Kickstart Your Career by Building Stellar Proof of Work
              </p>
            </div>
          </div>

          {/* Second Project Card */}
          <div className="flex flex-col w-full sm:w-[389px] min-h-[0] mt-[40px] sm:mt-[10px] p-[10px] border-gray-950 shadow-md rounded-lg transition-transform transform-gpu duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src={whydoprojecttwo}
              alt=""
              className="w-[69px] h-[69px] mt-[40px] sm:mt-[60px] mx-auto mb-[20px]"
            />

            <div className="subchild w-full text-center">
              <h2 className="text-[#241443] text-[20px] sm:text-[23px] font-bold text-center font-poppines">
                Learn By Doing
              </h2>
              <p className="text-[#FF5C00] text-[16px] font-medium font-poppines leading-[28px] sm:leading-[32px] mt-[10px]">
                Upskill by building hands-on projects with level-wise learning.
              </p>
            </div>
          </div>

          {/* Third Project Card */}
          <div className="flex flex-col w-full sm:w-[389px] min-h-[0] mt-[40px] sm:mt-[10px] p-[10px] border-gray-950 shadow-md rounded-lg transition-transform transform-gpu duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img
              src={whydoprojectthree}
              alt=""
              className="w-[51px] h-[71px] mt-[40px] sm:mt-[60px] mx-auto mb-[20px]"
            />

            <div className="subchild w-full text-center">
              <h2 className="text-[#241443] text-[20px] sm:text-[23px] font-bold text-center font-poppines">
                Become Job Ready
              </h2>
              <p className="text-[#FF5C00] text-[16px] font-medium font-poppines leading-[28px] sm:leading-[32px] mt-[10px]">
                Build a strong foundation to showcase your skills and proof of
                work.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="">
            <a
              href="#"
              className="inline-flex bg-[#FF5C00] text-white px-4 py-2 text-[18px] sm:text-[20px] rounded-full shadow-md hover:bg-[#FF5C00] transition"
            >
              Explore Projects
              <img src={arrowone} alt="Arrow" className="w-4 h-3 ml-3 mt-1" />
            </a>
          </div>
        </div>
        <hr className="block sm:hidden border-t border-gray-300 mt-4" />
      </section>

      {/* section ten */}

      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] lg:mr-[-10px]  mr-[-10px] mb-5 "
            />
            <h3 className="text-[#FF5C00] text-[18px] lg:text-[30px] font-black font-Lato font-sans mb-4">
              Our Career Passport/License
            </h3>
          </div>
          <h2 className="text-[#241443] text-[20px] sm:text-[36px] lg:text-[40px] font-semibold font-poppins mb-8">
            Digitize your resume, unlock opportunities, and{" "}
            <br className="hidden lg:block" />
            streamline placements with our tech-driven{" "}
            <br className="hidden lg:block" />
            passport
          </h2>
        </div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Side Content */}
          <div className="lg:pr-8 lg:ml-[40px]">
            <h1 className="text-[#FF5C00] text-[23px] lg:text-[22px] font-black mb-4 font-Lato font-sans">
              Benefits of Passport/License
            </h1>
            <p className="text-[#000000] text-[11px] lg:text-[16px] mb-8 font-Poppins font-Regular">
              FrictionLearn's Career Passport empowers students by validating
              their skills through a 4-level assessment. Upon completion,
              students receive a digital license with a QR code linking to their
              resume and a personalized job page, streamlining job opportunities
              and enhancing visibility within the platform.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-2 lg:gap-y-4 gap-y-2 mb-8">
              <ul className="lg:space-y-4 space-y-2">
                <li className="flex items-center text-[#241443] text-[11px] lg:text-[22px] font-medium font-poppins">
                  <span className="lg:w-4 lg:h-4 w-3 h-3 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-1 lg:mt-[-30px] mt-[-20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  "Verified Career Credentials"
                </li>
                <li className="flex items-center text-[#241443] text-[11px] lg:text-[22px] font-medium">
                  <span className="lg:w-4 lg:h-4 w-3 h-3 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-1 mt-[-20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  "QR-Linked Resume"
                </li>
                <li className="flex items-center text-[#241443] text-[11px] lg:text-[22px] font-medium">
                  <span className="lg:w-4 lg:h-4 w-3 h-3  flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-1  lg:mt-[-30px] mt-[-20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  "Level-Based Certification"
                </li>
                <li className="flex items-center text-[#241443] text-[11px] lg:text-[22px] font-medium">
                  <span className="lg:w-4 lg:h-4 w-3 h-3  flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-1 lg:mt-[-30px] mt-[-20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  "Streamlined Job Placement"
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center text-[#241443] text-[11px] lg:text-[22px] font-medium">
                  <span className="lg:w-4 lg:h-4 w-3 h-3  flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-1 lg:mt-[-30px] mt-[-20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  "Tech-Driven Advancement"
                </li>
                <li className="flex items-center text-[#241443] text-[11px] lg:text-[22px] font-medium">
                  <span className="lg:w-4 lg:h-4 w-3 h-3  flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  "Job-Ready Access"
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={passportImage}
              alt="FrictionLearn Career License"
              className="w-[300px] sm:w-[400px] lg:w-[605px] h-auto"
            />
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left mt-8 lg:mt-0 lg:pl-2">
            <p className="text-[#ff5c00] text-[13px] font-medium mb-2 lg:ml-[30px]">
              Apply for Passport/License
            </p>
            <a
              href="#"
              className="inline-flex items-center lg:w-[262px] lg:h-[62px] bg-[#241443] text-white text-[11px] lg:text-[20px] px-4 py-2 rounded-full shadow-lg hover:bg-[#241443] transition font-semibold font-poppins"
            >
              Get Your License
              <img src={arrowone} alt="" className="ml-2"></img>
            </a>
          </div>
        </div>
      </div>
      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section eleventh */}

      <SectionEleventh />

      {/* section twelth */}

      <SectionTewelth />

      {/* section thirteenth */}
      <section className="main w-full lg:h-auto">
        <div className="flex flex-col justify-center items-center text-center mt-[40px] lg:mt-[40px] md:mt-[40px]">
          <div className="flex items-center justify-center">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px] mt-[-20px]"
            />
            <h2 className="text-[#FF5C00] lg:text-[30px] text-[18px] font-black text-center font-poppins mb-4">
              Our Instructor/Mentors
            </h2>
          </div>
          <h2 className="text-[#241443] lg:text-[40px] text-[20px] font-semibold text-center font-poppins">
            From The FrictionLearn Community Mentors
          </h2>
          <p className="text-[#24144399] lg:text-[20px] text-[11px] font-Regular font-poppins  sm:w-full sm:px-4 md:w-[80%] md:px-8 text-center mt-[20px]">
            Expert mentors guiding you with personalized insights, real-world
            experience, and industry connections.
          </p>
        </div>

        <div className="parent flex flex-col lg:flex-row lg:flex-wrap lg:justify-center md:justify-evenly lg:mt-[40px] mt-[20px]">
          {/* Mentor Card 1 */}
          <div className="one lg:flex flex-col lg:w-[389px] lg:h-[527px] w-[345px] h-[500px] mt-[30px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg  lg:max-w-[90%] sm:mx-auto md:w-[30%] first:block visible mx-auto">
            <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
              <img
                src={elevenone}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
              />
            </div>
            <div className="subchild  text-center lg:mt-[20px] mt-[10px]  sm:w-full lg:px-4">
              <h2 className="text-[#241443] lg:text-[35px] text-[20px] font-bold text-center font-Lato font-sans">
                Johnson
              </h2>
              <h2 className="text-[#FF5C00] lg:text-[16px] text-[11px] font-Regular text-center font-poppins">
                Business Advisor
              </h2>
              <p className="text-[#6B7083] lg:text-[14px] text-[10px] font-Regular font-Lato font-sans leading-[32px] text-center mt-[10px]">
                Guiding entrepreneurs with strategic insights
                <br />
                and practical business solutions.
              </p>
            </div>
          </div>

          {/* Mentor Card 2 */}
          <div className="one lg:flex flex-col lg:w-[389px] lg:h-[527px] w-[345px] h-[467px] mt-[40px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-full sm:max-w-[90%] sm:mx-auto md:w-[30%] hidden  mx-auto">
            <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
              <img
                src={eleventwo}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
              />
            </div>
            <div className="subchild w-[428px] text-center lg:mt-[20px] mt-[10px] mx-auto sm:w-full sm:px-4">
              <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppins">
                Rekha
              </h2>
              <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppins">
                Web Designer
              </h2>
              <p className="text-[#6B7083] text-[12px] font-medium font-poppins leading-[32px] text-center mt-[10px]">
                Crafting visually appealing and user-friendly
                <br />
                websites for impactful online presence.
              </p>
            </div>
          </div>

          {/* Mentor Card 3 */}
          <div className="one lg:flex flex-col lg:w-[389px] lg:h-[527px] w-[345px] h-[467px] mt-[40px] bg-[#F4F4F4] border-gray-950 shadow-md rounded-lg sm:w-full sm:max-w-[90%] sm:mx-auto md:w-[30%] hidden  mx-auto ">
            <div className="relative w-[283px] mx-auto mt-[61px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
              <img
                src={eleventhree}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
              />
            </div>
            <div className="subchild w-[428px] text-center lg:mt-[20px] mt-[10px] mx-auto sm:w-full sm:px-4">
              <h2 className="text-[#241443] text-[35px] font-bold text-center font-poppins">
                Sara Singh
              </h2>
              <h2 className="text-[#FF5C00] text-[18px] font-bold text-center font-poppins">
                Business Advisor
              </h2>
              <p className="text-[#6B7083] text-[12px] font-medium font-poppins leading-[32px] text-center mt-[10px]">
                Transforming data into actionable insights
                <br />
                to drive business decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-row justify-center mt-[73px] sm:mt-[40px]">
          <button className="lg:w-[240px] lg:h-[62px] w-[160px] h-[42px] bg-[#FF5C00] rounded-full text-[#ffffff] text-[14px] lg:text-[20px] font-semibold font-poppins flex flex-row justify-center items-center">
            <span>Explore All</span>
            <img src={arrowone} alt="" className="w-[26px] h-[18px] ml-2" />
          </button>
        </div>
      </section>
      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section fourthinth */}

      {/* <Section /> */}

      <div className="flex flex-col items-center justify-center px-6 py-8 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
            />
            <h2 className="text-[#FF5C00] text-[18px] lg:text-[30px] font-black font-Lato font-sans">
              Our Incubator Program
            </h2>
          </div>
          <h1 className=" text-[#241443] text-[20px] lg:text-[40px] font-semibold mt-4 font-poppins">
            "Fuel Innovation, Turn Ideas Into Reality"
          </h1>
          <p className="text-[#241443] mt-2 text-[14px] lg:text-[20px] font-Regular font-poppins">
            "Nurturing innovative ideas through guided incubation for success."
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-left max-w-lg lg:mr-12 mb-8 lg:mb-0">
            <h2 className="text-[25px] lg:text-[50px] font-semibold text-[#FF5C00] font-poppins mb-4">
              We Help Early Stage<br></br> Startups to Define Their Goals
              <br></br> & Get Daily Funding...
            </h2>
            {/* <button className="mt-4 bg-[#241443] text-white py-2 px-4 rounded-full hover:bg-purple-700 text-[14px] lg:text-[22px] font-semibold">
                        About Incubator Program &rarr;
                    </button> */}
          </div>

          {/* Image Section */}
          <div>
            <img
              src={incubationsector}
              alt="Incubator Program"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="mt-2 lg:mt-4 text-center ml-[-40px] lg:text-left lg:ml-[-900px]">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-[#241443] text-white text-[16px] sm:text-[18px] font-semibold rounded-full"
          >
            About Incubator Program
            <img src={arrowone} alt="Arrow" className="lg:w-4 lg:h-3 w-3 h-2 ml-2 lg:ml-3" />
          </a>
        </div>
      </div>
      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section sixteenth */}

      
   <section className="h-auto w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${girlbackground})` }}
      >
      <div className="flex flex-col md:flex-row  max-w-6xl w-full p-6 md:p-0 rounded-lg lg:ml-[40px]">
        {/* Left Side (Image) */}
        <div className=" lg:order-none order-2 md:w-1/4 w-full flex items-center justify-center">
          <img
            src={girltriangle}
            alt="Left Side"
            className="object-cover max-w-full h-auto rounded-lg lg:mb-[-40px]"
          />
        </div>

        {/* Right Side (Content + Button) */}
        <div className="md:w-3/4 w-full flex flex-col justify-between mt-6 md:mt-16 md:pl-6">
          {/* Content */}
          <div className="lg:order-none order-1">
            <h2 className="text-[20px] lg:text-[37px] font-semibold font-poppins text-white mb-4  lg:text-left  text-center">Affordable Online Gamified Courses & Learning Opportunities For You</h2>
            
          </div>

          {/* Button */}
          <div className="lg:order-none order-3 md:mt-auto flex justify-end lg:mr-[100px] lg:py-4">
            <button className="bg-white text-[#241443]  py-2 px-4 rounded-full lg:text-[18px] text-[14px] font-semibold font-poppins">
            Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>



      {/* section fiftheenth */}

      <section className="bg-white mt-[10px] lg:mt-[40px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center">
              <img
                src={star}
                alt="star"
                className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
              />
              <h1 className="text-[#FF5C00] lg:text-[30px] text-[18px] font-black font-Lato font-sans">
                Become an Instructor/Mentor
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[#241443] text-[20px] lg:text-[40px] md:text-[40px] font-semibold font-poppins mb-2 text-left">
                Let’s Join Us & Spread Your Knowledge
              </h2>
              <p className="text-[12px] lg:text-[22px] font-medium text-[#FF5C00] mb-4 text-left font-poppins">
                Welcome to FrictionLearn’s Mentor Program!
              </p>
              <p className="text-[9px] lg:text-[20px] md:text-[20px] font-Regular  text-Poppins text-[#6B7083] text-left">
                Empower the next generation by sharing your expertise. Guide
                learners through personalized insights and real-world
                experiences. Expand your network by connecting with ambitious
                students and professionals. Join us in shaping careers and
                making a meaningful impact on future talent.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={instructorimg}
                alt="Instructor"
                className="w-full max-w-[416px] h-auto"
              />
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-[#241443] text-white text-[16px] lg:text-[20px] font-semibold rounded-full"
            >
              Become an Instructor
              <img src={arrowone} alt="Arrow" className="w-3 h-2 ml-3" />
            </a>
          </div>
        </div>
      </section>

      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section eighteenth */}

      <div className="relative w-full h-auto lg:pb-16 pb-0">
        <div className="flex flex-col justify-center text-center mt-[20px] md:mt-[40px]">
          <div className="flex items-center justify-center">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
            />
            <h1 className="text-[#FF5C00] text-[15px] lg:text-[30px] text-center font-black">
              Our Testimonials
            </h1>
          </div>
          <h2 className="text-[#022956] text-[20px] lg:text-[40px] font-semibold font-sans font-lato">
            Experience Our Impact Through Their Words
          </h2>
        </div>
        <div className="flex overflow-hidden justify-center items-center w-full h-auto  lg:space-x-4 space-x-2 md:space-x-7 mt-6 md:mt-8">
          {testimonials.map((testimonial, index) => {
            const isActive = index === current;

            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out ${
                  isActive ? "scale-110" : "scale-75 blur-sm"
                } ${isActive ? "opacity-100" : "opacity-50"}`}
                style={{
                  transform: isActive ? "scale(1.1)" : "scale(0.75)",
                  opacity: isActive ? 1 : 0.5,
                  width: isActive ? "186px" : "150px",
                  height: isActive ? "205px" : "150px",
                }}
                onMouseEnter={() => handleMouseEnterIn(index)}
              >
                <div className="rounded-lg flex flex-col items-center lg:w-[195px] lg:h-[205px]  w-[65px] h-[72px] lg:mx-2 mx-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`${
                      isActive ? "filter-none" : "filter grayscale"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-2 lg:mt-6">
          <h3 className="text-[#1D2228] text-[10px] lg:text-[20px] font-medium font-Lato font-sans">
            {testimonials[current].name}
          </h3>
          <p className="text-[#1D2228] text-[7px] lg:text-[16px] font-light font-Lato font-sans">
            {testimonials[current].role}
          </p>
        </div>
        <div className="mt-[20px] lg:mt-[40px] mx-4 lg:mx-[20px] text-center font-medium">
          <p className="text-[#1D2228] text-[11px] lg:text-[36px] mx-2 md:mx-[100px] font-light font-Lato font-sans">
            {testimonials[current].text}
          </p>
        </div>
      </div>

      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section nineteenth */}

      
      <div
        className="h-auto w-full bg-center bg-no-repeat bg-cover sm:bg-contain sm:bg-center lg:min-h-[400px] min-h-[300px]"
        style={{ backgroundImage: `url(${android})` }} // Inline style for dynamic image
      >
        <div className="text-left py-8 lg:py-32 px-4 sm:px-8 lg:px-12">
          <h1 className="mb-4 text-[15px] lg:text-[25px] font-black text-center font-Lato font-sans lg:text-left  text-[#ff5c00]">
            Available On Android & iOS
          </h1>
          <p className="mb-8 text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold font-poppins text-center lg:text-left text-white">
            Build A Beautiful, Professional-Looking
            <br className="hidden sm:block" />
            Online Course With FrictionLearn
          </p>

          {/* Buttons for Apple Store and Google Play */}
          <div className="flex flex-row lg:flex-row items-center lg:space-x-4 space-x-2 lg:space-y-0">
            {/* Apple Store Button */}
            <a
              href="#"
              className="w-full sm:w-auto bg-[#231342] hover:bg-gray-700 border-2 border-white border-opacity-20 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center lg:px-4 lg:py-2.5 px-2 py-1"
            >
              <svg
                className="me-3 w-[35px] lg:w-[45px] h-[35px] lg:h-[52px]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="mb-1 font-sans text-[11px] lg:text-[20px] font-semibold">
                  Apple Store
                </div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="w-full sm:w-auto bg-[#231342] hover:bg-gray-700 border-2 border-white border-opacity-20 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center lg:px-4 lg:py-2.5 px-2 py-1"
            >
              <svg
                className="me-3 w-[30px] sm:w-[47px] h-[35px] sm:h-[52px]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div className="text-left">
                <div className="mb-1 font-sans  text-[11px] lg:text-[20px] font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* section twenty */}

      <div className="bg-white p-2 lg:p-5 ">
        <div
          className="relative bg-center bg-no-repeat bg-cover rounded-[25px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden mx-auto lg:w-[1259px] lg:h-[628px] w-[350px] h-[300px]"
          style={{
            backgroundImage: `url(${Contactus})`,
            backgroundSize: "cover", // Ensure the image covers the entire div
            backgroundPosition: "center", // Center the image in the div
            borderRadius:"40px"
          }}
        >
          {/* Semi-transparent blue overlay */}
          <div className="absolute inset-0 bg-[#241443] opacity-0"></div>

          {/* Content (Text and Buttons) */}
          <div className="relative text-center py-6 sm:py-24 md:py-32 lg:py-29">
            {/* Heading */}
            <h1 className="mb-2 text-[25px] sm:text-[50px] lg:text-[70px] font-bold text-white font-serif">
              Ready to Start Learning?
            </h1>

            {/* Subtext */}
            <p className="mb-2 text-[10px] sm:text-[18px] lg:text-[23px] font-Regular font-serif text-white">
              Dive into our comprehensive course catalog and begin your Gamified
              e-Learning Journey
            </p>

            {/* Buttons */}
            <div className="flex flex-row lg:flex-row justify-center space-y-0 space-x-2 lg:space-y-0 lg:space-x-4 lg:mt-[80px] mt-[50px]">
              {/* Contact Us Button */}
              <a
                href="#"
                className="rounded-full inline-flex justify-center items-center py-2 px-4 sm:py-2 sm:px-6 lg:py-3 lg:px-8 text-[10px] sm:text-sm lg:text-base font-medium text-[#241443] bg-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
              >
                Contact Us
              </a>

              {/* Explore Courses Button */}
              <a
                href="#"
                className="rounded-full inline-flex justify-center items-center py-2 px-4 sm:py-2 sm:px-6 lg:py-3 lg:px-8 text-[10px] sm:text-sm lg:text-base font-medium text-white border border-white hover:bg-white hover:text-[#241443] transition-colors"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* section footer */}

      <Footer />
    </div>
  );
}
