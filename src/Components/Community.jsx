import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import CSS
import community from "../assets/communities/community.png"; // Adjust path as needed
import friction from "../assets/communities/friction.png";
import arr from "../assets/arr.png";
// import searchicon from '../assets/searchicon.png';
import sectiontwoone from "../assets/communities/sectiontwoone.png";
import sectiontwothree from "../assets/communities/sectiontwothree.png";
import sectiontwotwo from "../assets/communities/sectiontwotwo.png";
import groupone from "../assets/communities/groupone.png";
import grouptwo from "../assets/communities/grouptwo.png";
import groupthree from "../assets/communities/groupthree.png";
// import closeicon from '../assets/Vector (16).png';
import Footer from "./Footer";
import closeicon from "../assets/communities/closeicon.png";
import searchicon from "../assets/searchicon.png";
import imageone from "../assets/communities/imageone.png";
import imagetwo from "../assets/communities/imagetwo.png";
import imagethree from "../assets/communities/imagethree.png";

import Hamburgericon from "../assets/home/Hamburgericon.png";

export default function Community() {
  // search bar
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // how communitys
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    { date: "Sun, Sep 13", title: "Leadership Skills for Tech Professionals" },
    { date: "Mon, Sep 14", title: "Advanced JavaScript Workshop" },
    { date: "Tue, Sep 15", title: "React Development Best Practices" },
  ];

  return (
    <div className="container">
      {/* section one */}
      <div
        className="h-[729px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${community})` }}
      >
        {/* Navbar Content */}
        <nav className="h-[95px] flex items-center justify-between px-4 lg:px-[146px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={friction}
              alt="friction learn logo"
              className="w-[120px] h-[50px] mt-[20px] lg:w-[157px] lg:h-[64px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center bg-white bg-opacity-75 rounded-md w-[402px] h-[62px] ml-[10px] mt-[10px]">
            <ul className="flex justify-between gap-5 search">
              <li className="text-[#1D2228] text-[18px] font-bold ml-[20px] my-[18px] flex">
                <Link to="/courses" className="flex items-center">
                  Courses
                  <img
                    src={arr}
                    alt=""
                    className="w-[15px] h-[10px] ml-[8px] mt-[5px]"
                  />
                </Link>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold mr-[10px] ml-[10px] my-[18px]">
                <Link to="/community">Communities</Link>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold my-[18px]">
                <Link to="/incubation">Incubation</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="focus:outline-none ml-auto"
            >
              <img
                src={Hamburgericon}
                alt="Menu"
                className="w-[30px] h-[30px]"
              />
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex justify-end mt-3 ml-[30px] w-full lg:w-[529px]">
            <div
              className={`relative flex items-center justify-end ml-auto bg-white bg-opacity-75 rounded-md h-[62px] px-4 ${
                isOpen ? "w-[557px]" : "w-[250px]"
              }`}
            >
              <div
                className={`flex items-center rounded-2xl border border-solid transition-all duration-300 mr-[10px] ${
                  isOpen ? "w-[350px]" : "w-[40px]"
                } h-[42px] ml-auto`}
                style={{ position: "relative" }}
              >
                <img
                  src={searchicon}
                  alt="Search Icon"
                  className="w-[20px] h-[20px] ml-1 mr-2 cursor-pointer"
                  onClick={handleToggle}
                  style={{ order: 1 }}
                />
                <input
                  type="text"
                  placeholder="Search here"
                  className={`border-none outline-none h-full transition-all duration-300 rounded-full ${
                    isOpen ? "w-[312px] px-4" : "w-0 px-0"
                  }`}
                  style={{ order: 2 }}
                />
                <img
                  src={closeicon}
                  alt="Close Icon"
                  className="w-[20px] h-[20px] ml-2 cursor-pointer"
                  onClick={handleToggle}
                  style={{
                    order: 3,
                    visibility: isOpen ? "visible" : "hidden",
                  }}
                />
              </div>
              <div className="text-[16px]">
                <button className="w-[180px] h-[42px] px-[20px] py-[10px] bg-[#022956] text-white rounded-md">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white bg-opacity-75 rounded-md mt-2 p-4 absolute w-full z-10">
            <ul className="flex flex-col gap-4">
              <li className="text-[#1D2228] text-[18px] font-bold">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold">
                <Link to="/community">Communities</Link>
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold">
                <Link to="/incubation">Incubation</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center text-center h-full px-4 mb-20">
          <h1 className="text-[28px] lg:text-[60px] text-[#FFFFFF] font-black font-sans font-lato leading-snug lg:leading-none">
            Be Part of Something Bigger to Achieve More
          </h1>
          <h3 className="text-[18px] lg:text-[25px] text-[#FFFFFF] font-semibold font-sans font-lato mt-2 lg:mt-4">
            Join our community to connect, learn, and grow together.
          </h3>
        </div>

        {/* <div className="flex justify-center mt-2 lg:mt-[-100px] ">
        <button className="text-[18px] lg:text-[22px] w-[180px] h-[50px] lg:w-[210px] lg:h-[56px] bg-[#F27329] text-[#FFFFFF] font-bold font-sans font-lato">
          Join Community
        </button>
      </div> */}
      </div>

      {/* section two */}

      <div className="childOne mt-[67px] flex flex-col lg:flex-row justify-center gap-[67px] p-4">
        <div className="w-[356px] h-[370px] border shadow-md shadow-gray-300 flex flex-col text-center justify-center transform transition-transform duration-300 hover:scale-110">
          <div>
            <img
              src={sectiontwoone}
              alt=""
              className="w-[50px] h-[65px] mt-[37px] mx-auto"
            />
            <p className="text-[#1D2228] text-[18px] font-medium font-lato text-center mt-[27px]">
              Our goal is to foster a supportive
              <br /> environment for continuous
              <br /> learning and professional growth.
            </p>
          </div>
          <div className="bg-[#F5F5F5] mt-[40px]">
            <h3 className="text-[#F27329] text-[28px] font-semibold py-[38px] px-[80px]">
              Our Mission
            </h3>
          </div>
        </div>

        <div className="w-[356px] h-[370px] border shadow-md shadow-gray-300 flex flex-col text-center justify-center transform transition-transform duration-300 hover:scale-110 mt-10 lg:mt-0">
          <div>
            <img
              src={sectiontwotwo}
              alt=""
              className="w-[50px] h-[65px] mt-[37px] mx-auto"
            />
            <p className="text-[#1D2228] text-[18px] font-medium font-lato text-center mt-[22px]">
              Register for our upcoming
              <br />
              webinars, workshops, and
              <br />
              meetups to stay ahead in your
              <br /> career.
            </p>
          </div>
          <div className="bg-[#F5F5F5] mt-[40px]">
            <h3 className="text-[#F27329] text-[28px] font-semibold py-[38px] px-[80px]">
              Our Events
            </h3>
          </div>
        </div>

        <div className="w-[356px] h-[370px] border shadow-md shadow-gray-300 flex flex-col text-center justify-center transform transition-transform duration-300 hover:scale-110 mt-10 lg:mt-0">
          <div>
            <img
              src={sectiontwothree}
              alt=""
              className="w-[50px] h-[65px] mt-[37px] mx-auto"
            />
            <p className="text-[#1D2228] text-[18px] font-medium font-lato text-center mt-[27px]">
              Volunteer, participate in
              <br /> discussions, and contribute
              <br /> to our growing community.
            </p>
          </div>
          <div className="bg-[#F5F5F5] mt-[40px]">
            <h3 className="text-[#F27329] text-[28px] font-semibold py-[38px] px-[80px]">
              Get Involved
            </h3>
          </div>
        </div>
      </div>

      {/* section two */}

      <div className="w-full h-auto">
        <div className="heading mt-[105px] flex justify-center items-center text-center">
          <h1 className="text-[#022956] w-[612px] h-[48px] text-[40px] font-black font-sans font-lato">
            Upcoming Events
          </h1>
        </div>
        <div className="elements mt-[72px] flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            {events.map((event, index) => (
              <React.Fragment key={index}>
                <div
                  className="flex flex-row justify-start items-center mb-6"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`content w-[606px] h-[60px] ml-[106px] ${
                      hoveredIndex === index
                        ? "text-orange-500"
                        : "text-[#1D2228]"
                    }`}
                  >
                    <p
                      className={`text-[16px] font-light font-sans font-lato ${
                        hoveredIndex === index
                          ? "text-orange-500"
                          : "text-[#1D2228]"
                      }`}
                    >
                      {event.date}
                    </p>
                    <h3
                      className={`text-[18px] font-medium font-lato ${
                        hoveredIndex === index
                          ? "text-orange-500"
                          : "text-[#1D2228]"
                      }`}
                    >
                      {event.title}
                    </h3>
                  </div>
                  <div className="button w-[194px] h-[42px] bg-[#022956] flex justify-center items-center ml-4">
                    <button className="text-[#FFFFFF] text-[16px] font-semibold font-sans font-lato py-2">
                      Register Now
                    </button>
                  </div>
                </div>
                {index < events.length - 1 && (
                  <hr className="border-t border-gray-300 w-full my-6" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="rightsidecontent ml-10">
            <img
              src={
                hoveredIndex === 0
                  ? imageone
                  : hoveredIndex === 1
                  ? imagetwo
                  : hoveredIndex === 2
                  ? imagethree
                  : imagethree
              }
              alt="rightsideimage"
              className="w-[376px] h-[326px]"
            />
          </div>
        </div>
      </div>

      {/* section three */}
      <div className="w-full h-auto mx-auto p-4 flex flex-col items-center mt-[40px]">
        <div className="text-center">
          <h1 className="text-[40px] text-[#022956] font-sans font-lato font-black">
            Why Communities?
          </h1>
          <p className="text-[28px] sm:text-[14px] font-lato font-sans font-semibold text-[#F27329] mt-[10px]">
            Boost your growth through active and supportive community engagement
            and <br /> collaboration.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-[155px] mt-[40px] lg:mt-[100px]">
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <img
              src={groupone}
              alt="groupone"
              className="w-[318px] h-[190px] mb-4"
            />
            <p className="text-center text-base text-[#1D2228] text-[24px] font-medium font-lato font-sans">
              Gain insights and advice from
              <br /> seasoned industry leaders.
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <img
              src={grouptwo}
              alt="grouptwo"
              className="w-[286px] h-[190px] mb-4"
            />
            <p className="text-center text-base text-[#1D2228] text-[24px] font-medium font-lato font-sans">
              Utilize top-notch tools, tech,
              <br /> and facilities for growth.
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <img
              src={groupthree}
              alt="groupthree"
              className="w-[286px] h-[190px] mb-4"
            />
            <p className="text-center text-base text-[#1D2228] text-[24px] font-medium font-lato font-sans">
              Connect with investors, peers, <br />
              and potential partners effectively.
            </p>
          </div>
        </div>
      </div>

      {/* section four */}

      <div className=" lg:px-16 mb-14">
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-[#022956] text-[40px] font-black font-sans font-lato mt-[61px] mb-[16px]">
            Our History by the Numbers
          </h1>
          <p className="text-[#F27329] text-[28px] font-semibold font-lato font-sans">
            A snapshot of our community's growth and impact over the years. See
            how <br /> we've evolved and the milestones we've achieved together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[219px] mt-[40px] lg:mt-[100px] items-center lg:items-center">
          <div className="w-full lg:w-[261px] h-[131px] text-center mb-8 lg:mb-0">
            <h1 className="text-[60px] lg:text-[90px] font-medium font-poppins text-[#022956]">
              9k+
            </h1>
            <h3 className="text-[24px] lg:text-[28px] font-semibold font-sans font-lato text-[#2872BB]">
              Ideas Liked
            </h3>
          </div>

          <div className="w-full lg:w-[261px] h-[131px] text-center mb-8 lg:mb-0">
            <h1 className="text-[60px] lg:text-[90px] font-medium font-poppins text-[#022956]">
              8k+
            </h1>
            <h3 className="text-[24px] lg:text-[28px] font-semibold font-sans font-lato text-[#2872BB]">
              People Reached
            </h3>
          </div>

          <div className="w-full lg:w-[261px] h-[131px] text-center">
            <h1 className="text-[60px] lg:text-[90px] font-medium font-poppins text-[#022956]">
              7k+
            </h1>
            <h3 className="text-[24px] lg:text-[28px] font-semibold font-sans font-lato text-[#2872BB]">
              Positive Responses
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
