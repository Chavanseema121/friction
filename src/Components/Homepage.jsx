import React, { useState } from "react";
import NewNavbar from "./NewNavbar";
import Header from "../Components/Header";
import SectionFifth from "../Components/SectionFifth";
import SectionEleventh from "../Components/SectionEleventh";
import SectionTewelth from "../Components/SectionTewelth";
import Section from "./Section";
import Footer from "./Footer";

import benefitslearn from "../assets/home/benefitslearn.png";

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

import sfourgroupone from "../assets/home/sfourgroupone.png";
import sfourgrouptwo from "../assets/home/sfourgrouptwo.png";

import lastone from "../assets/home/lastone.png";
import lasttwo from "../assets/home/lasttwo.png";
import lastthree from "../assets/home/lastthree.png";
import lastfour from "../assets/home/lastfour.png";
import lastfive from "../assets/home/lastfive.png";

import instructorimg from "../assets/home/instructorimg.png";

import arrowone from "../assets/home/arrowone.png";

import tringleimg from "../assets/home/tringleimg.png";
import girlimg from "../assets/home/girlimg.png";

import stenone from "../assets/home/stenone.png";
import stentwo from "../assets/home/stentwo.png";
import stenthree from "../assets/home/stenthree.png";
import stenfour from "../assets/home/stenfour.png";
import stenfive from "../assets/home/stenfive.png";
import stensix from "../assets/home/stensix.png";

import android from "../assets/home/android.png";

import Contactus from "../assets/home/Contactus.png";

import passportImage from "../assets/home/passportImage.png";
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
      <NewNavbar />
      <Header />

      {/* section one */}

      <section className="bg-white dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-lg lg:py-8">
          <div className="mb-8">
            <h2 className="text-[#FF5C00] mt-[40px] text-[30px] font-black text-center font-Lato font-sans">
              {" "}
              What We Offers
            </h2>
            <p
              className="text-[40px] text-Poppins font-semibold text-[#241443] mt-[30px] text-center px-1 
           sm:text-[12] sm:font-medium  lg:text-[40px] sm:text-center sm:px-10
           
           "
            >
              Unlock Your Potential: Growth, Creativity,<br></br> and
              Collaboration at FrictionLearn
            </p>
            <img
              src={benefitslearn}
              alt=""
              className="align-middle w-full  mt-[50px]    
         
          
          "
            />
          </div>
        </div>
      </section>

      {/* section two */}

      <div className="w-full h-auto  lg:h-[293px]">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-[#FF5C00] text-[40px] lg:text-[40px] font-medium">
            Trusted By Over<span className="text-[#241443]"> 13400+ </span>
            Students & Organization<br></br>
            Recommended Around the World
          </h2>
        </div>
        <div className="overflow-hidden mt-[50px] lg:mt-[100px] scroll-container">
          <div className="scroll-content whitespace-nowrap animate-scroll">
            {collaborators.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo ${index + 1}`}
                className="inline-block mx-4"
                style={{ height: "50px", width: "auto", margin: "0 50px" }} // Adjust size as needed
              />
            ))}
            {/* Duplicate content to ensure continuous scrolling */}
            {collaborators.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo}
                alt={`logo ${index + 1}`}
                className="inline-block mx-4"
                style={{ height: "50px", width: "auto", margin: "0 50px" }} // Adjust size as needed
              />
            ))}
          </div>
        </div>
      </div>

      {/* section three */}

      {/* section four */}

      <div className="grid md:grid-cols-2 gap-4 ">
        <div className=" m-auto max-w-screen-lg lg:py-16">
          <h2 className="text-[40px] font-black text-[#FF5C00] mb-4">
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
      </div>

      {/* section fifth */}

      <SectionFifth />

      {/* section six */}

      <div className="w-full h-auto mb-[20px] sm:mx-auto mt-[40px]">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-[#FF5C00] text-[30px] font-black mb-2 font-Lato font-sans">
            Tailored Training to Achieve Your Goals
          </h2>
          <p className="text-[40px] text-[#241443] font-semibold text-Poppins">
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
                className={`w-full h-auto shadow-lg flex cursor-pointer ${
                  index === hoveredImageIndex
                    ? "border-2 border-orange-500"
                    : ""
                } ${index > 0 ? "mt-[20px]" : ""}`}
                onMouseEnter={() => setHoveredImageIndex(index)}
              >
                <img
                  src={content.img}
                  alt=""
                  className="w-[48px] h-[48px] justify-center mt-[38px] ml-[32px]"
                />
                <div className="ml-[23px] text-start">
                  <h3 className="text-[#F27329] text-[18px] font-semibold mt-[15px] font-lato,sans">
                    {content.title}
                  </h3>
                  <p className="text-[#1D2228] text-[14px] font-normal mt-[8px]">
                    {content.description}
                  </p>
                </div>
              </div>
              <img
                src={images[index]}
                alt="Selected"
                className="w-full h-auto mt-[20px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* section seven */}

      {/* section eight */}

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="mb-8">
            <h2 className="text-[#FF5C00] mt-[52px] text-[30px] font-black text-center">
              Our Strategic Success Framework
            </h2>
            <h3 className="text-[40px] text-[#241443] font-semibold mt-[10px] text-center text-Poppins">
              Experience the Structure, Embrace the Success
              <span className="text-[#022956] text-[30px] font-semibold">
                {" "}
                “FrictionLearn”
              </span>
            </h3>
          </div>

          {/* First Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center mx-auto mt-[50px] md:mb-[160px]">
              <h2 className="text-[#241443] text-[40px] font-semibold font-sans font-lato">
                1. Engaging Learning Experience
              </h2>
              <p className="text-[22px] font-medium text-[#FF5C00] mt-[31px] text-Poppins">
                “Friction<span className="text-[#241443]">Learn</span>”
                transforms traditional education into an engaging, fun, and
                motivating gamified learning journey.
              </p>
            </div>
            <div className="flex justify-center mt-[20px]">
              <img
                src={sfourgroupone}
                alt=""
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center mx-auto mt-[50px] md:order-2 md:mb-[160px]">
              <h2 className="text-[#241443] text-[40px] font-semibold font-sans font-lato">
                2. Structured Course Levels:
              </h2>
              <p className="text-[22px] font-medium text-[#FF5C00] mt-[31px]">
                Our 24-level courses guide students from 1st to 3rd<br></br>{" "}
                year in exploring future paths, with welcome kits<br></br>{" "}
                promoting professional growth.
              </p>
            </div>
            <div className="flex justify-center mt-[20px] md:order-1">
              <img
                src={sfourgrouptwo}
                alt=""
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* Third Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center mx-auto mt-[50px] md:mb-[160px]">
              <h2 className="text-[#241443] text-[40px] font-semibold font-sans font-lato">
                3. AI-Focused Learning Support:
              </h2>
              <p className="text-[22px] font-medium text-[#FF5C00] mt-[31px]">
                Friction<span className="text-[#241443]">Learn</span> uses
                dedicated AI to clarify doubts<br></br> and offer personalized
                support, enhancing students'<br></br> learning experience.
              </p>
            </div>
            <div className="flex justify-center mt-[20px]">
              <img
                src={sfourgroupone}
                alt=""
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          {/* Fourth Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center mx-auto mt-[50px] md:order-2 md:mb-[160px]">
              <h2 className="text-[#241443] text-[40px] font-semibold font-sans font-lato">
                4. Incubation for Idea Generators:
              </h2>
              <p className="text-[22px] font-medium text-[#FF5C00] mt-[31px]">
                Starting in the second year, our Incubation programs<br></br>{" "}
                provide mentorship and resources to help students<br></br>{" "}
                develop innovative ideas.
              </p>
            </div>
            <div className="flex justify-center mt-[20px] md:order-1">
              <img
                src={sfourgrouptwo}
                alt=""
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* secton nine */}

      {/* section ten */}

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-[#FF5C00] text-[30px] font-black mb-4">
            Our Career Passport/License
          </h3>
          <h2 className="text-[#241443] text-[36px] lg:text-[40px] font-semibold mb-8">
            Digitize your resume, unlock opportunities, and<br></br> streamline
            placements with our tech-driven<br></br> passport
          </h2>
        </div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Side Content */}
          <div className="lg:pr-8 ml-[40px]">
            <h1 className="text-[#FF5C00] text-[22px] font-black mb-4 font-Lato font-sans">
              Benefits of Passport/License
            </h1>
            <p className="text-[#241443] text-[18px] mb-8 text-Poppins font-normal">
              FrictionLearn's Career Passport empowers students by validating
              their skills through a 4-level assessment. Upon completion,
              students receive a digital license with a QR code linking to their
              resume and a personalized job page, streamlining job opportunities
              and enhancing visibility within the platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-8">
              <ul className="space-y-4">
                <li className="flex items-center text-[#241443] text-[22px] font-medium">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                <li className="flex items-center text-[#241443] text-[22px] font-medium">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                <li className="flex items-center text-[#241443] text-[22px] font-medium">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                <li className="flex items-center text-[#241443] text-[22px] font-medium">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                <li className="flex items-center text-[#241443] text-[22px] font-medium">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                  "Tech-Driven Advancement
                </li>
                <li className="flex items-center text-[#241443] text-[22px] font-medium">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FF5C00] text-white mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                  Job-Ready Access
                </li>
              </ul>
            </div>

            <a
              href="#"
              className="inline-flex items-center bg-[#241443] text-white text-[18px] px-6 py-3 rounded-full shadow-lg hover:bg-[#241443] transition font-semibold"
            >
              Get Your License
              {/* <span className="ml-2 text-white">→</span> */}
              <img src={arrowone} alt="" className="ml-2"></img>
            </a>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={passportImage}
              alt="FrictionLearn Career License"
              className="w-[605px] h-[604px] "
            />
          </div>
        </div>
      </div>

      {/* section eleventh */}

      <SectionEleventh />

      {/* section twelth */}

      <SectionTewelth />

      {/* section thirteenth */}

      {/* section fourthinth */}

      <Section />

      {/* section fiftheenth */}

      <section className="bg-white mt-[100px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <div className="text-center mb-8">
            <h1 className="text-[#FF5C00] text-[30px] font-black">
              Become an Instructor/Mentor
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[#241443] text-[40px] font-semibold mb-2">
                Let’s Join Us & Spread Your Knowledge
              </h2>
              <p className="text-[22px] font-medium text-[#FF5C00] mb-4">
                Welcome to FrictionLearn’s Mentor Program!
              </p>
              <p className="text-[20px] font-normal text-Poppins text-[#6B7083]">
                Empower the next generation by sharing your expertise. Guide
                learners through personalized insights and real-world
                experiences. Expand your network by connecting with ambitious
                students and professionals. Join us in shaping careers and
                making a meaningful impact on future talent.
              </p>

              <div className="mt-8 text-center md:text-left">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-[#241443] text-white text-[18px] font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                  Become on Instructor
                  <img src={arrowone} alt="Arrow" className="w-4 h-3 ml-3" />
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                src={instructorimg}
                alt="Instructor"
                className="w-full max-w-[416px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section sixteenth */}

      <div className="bg-[#241443] p-4 flex flex-col md:flex-row items-center">
        {/* Left side with images */}
        <div className="relative flex-1 flex justify-center md:justify-start w-1/3 ml-10">
          <img
            src={tringleimg}
            alt="Triangle"
            className="absolute top-[40%] left-0 w-[416px] h-[229px]  "
          />
          <img
            src={girlimg}
            alt="Girl"
            className="relative bottom-[-50%] left-10  z-10 w-[204px] h-[342px] "
          />
        </div>

        {/* Right side with text and button */}
        <div className="flex-1 mt-8 w-full">
          <h1 className="text-[28px] font-semibold text-white mb-4  mr-10">
            Affordable Online Gamified Courses & Learning Opportunities For You
          </h1>
          <div className="mt-8 text-end">
            <div className="mt-8 text-center md:text-right">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-[#ffffff] text-blue-950 text-[18px] font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                Start Learning Today
                <img src={arrowone} alt="Arrow" className="w-4 h-3 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* section eighteenth */}

      <div className="relative w-full h-auto pb-16">
        <div className="flex flex-col justify-center text-center mt-[20px] md:mt-[80px]">
          <h2 className="text-[#022956] text-[24px] md:text-[40px] font-semibold font-sans font-lato">
            Experience Our Impact Through Their Words
          </h2>
        </div>
        <div className="flex overflow-hidden justify-center items-center w-full h-auto space-x-4 md:space-x-7 mt-6 md:mt-8">
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
                <div className="rounded-lg flex flex-col items-center w-[195px] h-[205px] mx-2">
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
        <div className="text-center mt-4 md:mt-6">
          <h3 className="text-[#1D2228] text-[16px] md:text-[20px] font-medium">
            {testimonials[current].name}
          </h3>
          <p className="text-[#1D2228] text-[14px] md:text-[16px] font-light">
            {testimonials[current].role}
          </p>
        </div>
        <div className="mt-[20px] md:mt-[50px] mx-4 md:mx-[20px] text-center font-medium">
          <p className="text-[#1D2228] text-[14px] md:text-[36px] mx-2 md:mx-[100px] font-light">
            {testimonials[current].text}
          </p>
        </div>
      </div>

      {/* section nineteenth */}
      <div
        className="h-auto w-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${android})` }} // Inline style for dynamic image
      >
        <div className="text-left py-8 lg:py-32 px-12">
          <h1 className="mb-4 text-[25px] font-black  text-[#ff5c00]">
            Available On Android & iOS
          </h1>
          <p className="mb-8 text-[40px] font-semibold text-Poppins text-white lg:text-[40px]">
            Build A Beautiful, Professional-Looking
            <br />
            Online Course With FrictionLearn
          </p>

          {/* Buttons for Apple Store and Google Play */}
          <div className="flex items-center space-x-4">
            {/* Apple Store Button */}
            <a
              href="#"
              className="w-full sm:w-auto bg-[#231342] hover:bg-gray-700 border-2 border-white border-opacity-20 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            >
              <svg
                className="me-3 w-[45px] h-[52px]"
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
                <div className="mb-1 font-sans text-sm font-semibold">
                  Apple Store
                </div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="w-full sm:w-auto bg-[#231342] hover:bg-gray-700 border-2 border-white border-opacity-20 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            >
              <svg
                className="me-3 w-[47px] h-[52px]"
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
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* section twenty */}
      <div className="bg-white p-10">
  <div
    className="relative bg-center bg-no-repeat bg-cover rounded-[40px] overflow-hidden mx-auto max-w-screen-xl"
    style={{ backgroundImage: `url(${Contactus})` }} // Background image here
  >
    {/* Semi-transparent blue overlay */}
    <div className="absolute inset-0 bg-[#241443] opacity-100 rounded-md"></div>

    {/* Content (Text and Buttons) */}
    <div className="relative text-center py-24 lg:py-48">
      {/* Heading */}
      <h1 className="mb-4 text-[70px] font-bold  text-white md:text-5xl lg:text-6xl text-Source font-serif ">
        Ready to Start Learning?
      </h1>
      
      {/* Subtext */}
      <p className="mb-8 text-[23px] font-normal text-gray-300 lg:text-[23px] text-Source font-serif">
        Dive into our Comprehensive course catalog and begin your Gamified e-Learning Journey
      </p>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        {/* Contact Us Button */}
        <a
          href="#"
          className="rounded-full inline-flex justify-center items-center py-2 px-5 text-base font-medium text-[#241443] bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300"
        >
          Contact Us
        </a>

        {/* Explore Courses Button */}
        <a
          href="#"
          className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-white border border-white rounded-full hover:bg-white hover:text-[#241443] transition-colors"
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
