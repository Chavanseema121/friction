import React, { useState } from "react";
import Footer from "./Footer";
import groupone from "../assets/incubation/groupone.png";
import grouptwo from "../assets/incubation/grouptwo.png";
import groupthree from "../assets/incubation/groupthree.png";
// import Mainpage from "../Components/Mainpage";
import Section from "../Components/Section";
import friction from "../assets/communities/friction.png";
import arr from "../assets/arr.png";
import closeicon from "../assets/communities/closeicon.png";
import searchicon from "../assets/searchicon.png";

import Benefitstruride from "../assets/incubation/Benefitstruride.png";

import queryform from "../assets/incubation/queryform.png";

import headerbg from "../assets/incubation/headerbg.png";

import incubation from "../assets/incubation/incubation.png";

export default function Incubation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="h-auto w-full items-center justify-center">
      <div
        style={{ backgroundImage: `url(${headerbg})` }}
        className="h-[729px] w-full bg-cover bg-center"
      >
        {/* navbar */}

        <nav className="h-[95px] flex items-center ">
          {" "}
          {/* Added flex and items-center */}
          <div className="ml-[146px] mr-[47px]">
            <img
              src={friction}
              alt="friction learn logo"
              className="w-[157px] h-[64px] mt-[20px]   transparent opacity-75"
            />
          </div>
          <div className="flex items-center bg-white bg-opacity-75 rounded-md w-[402px] h-[62px] ml-[10px] mt-[20px]">
            <ul className="flex justify-between gap-5 search">
              <li className="text-[#1D2228] text-[18px] font-bold ml-[20px] my-[28px] flex">
                Courses{" "}
                <img
                  src={arr}
                  alt=""
                  className="w-[11.13px] h-[7.13px] ml-[10px] mt-[10px]"
                />
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold mr-[10px] ml-[10px] my-[28px]">
                Communities
              </li>
              <li className="text-[#1D2228] text-[18px] font-bold my-[28px]">
                Incubation
              </li>
            </ul>
          </div>
          {/* search bar */}
          <div className="flex justify-end mt-5   ml-[30px]  w-[529px]  ">
            <div
              className={`relative flex items-center justify-end ml-[140px] bg-white bg-opacity-75 rounded-md h-[64px] px-4 ${
                isOpen ? "w-[557px]" : "w-[250px]"
              }`}
            >
              <div
                className={`flex items-center rounded-2xl border border-solid             transition-all duration-300 mr-[10px] ${
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
                  className={`border-none outline-none h-full transition-all duration-300   rounded-full  ${
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
              <button className=" w-[180px] h-[42px]   px-[20px] py-[10px] bg-[#022956] text-white rounded-md">
                Join Incubation
              </button>
              </div>
            </div>
            {/* <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md">Join Community</button> */}
          </div>
        </nav>

        {/* header   */}

        <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className=" text-[40px] font-black text-white sm:text-5xl lg:text-5xl mt-[167px] mb-[36px]">
            Accelerate Your Startup Journey
          </h1>
          <p className="text-[35px] text-gray-300 font-semibold font-Lato font-sans mb-[103px]">
            Empowering innovators with resources, mentorship, and funding to
            succeed
          </p>
          <div className="mt-[103px]">
            <button className="bg-orange-500  text-white w-[219px] h-[52px] rounded-md font-bold text-[22px] font-Lato font-sans ">
              Join Incubation
            </button>
          </div>
        </div>
      </div>

      {/* what is incubation */}

      <div className="w-full h-[898px] mx-auto">
        <h1 className="font-bold text-[40px] text-[#022956] text-center mt-[61px]">
          What is Incubation
        </h1>
        <p className="font-semibold text-[28px] text-[#F27329] text-center mt-[38px]">
          Incubation provides startups with mentorship, resources, networking,
          and <br />
          funding to accelerate growth.
        </p>
        <div className="flex justify-center">
          <img
            src={incubation}
            alt="incubation"
            className="w-[787px] h-[512px]  mt-[98px]"
          ></img>
        </div>
      </div>

      {/* how incubation work */}

      <Section />

      {/* why incubation section*/}

      <div className="w-full h-[730px] mx-auto p-4 flex flex-col items-center">
        <div className="text-center ">
          <h1 className="text-[40px] text-[#022956] font-bold mb-2">
            Why Incubation
          </h1>
          <p className="text-[28px] font-semibold text-[#F27329]  mb-[132px]">
            Understand the vital benefits of incubation for startup growth.
          </p>
        </div>
        <div className="flex justify-center gap-[169px]  mx-[125px]">
          <div className="flex flex-col items-center">
            <img
              src={groupone}
              alt="groupone"
              className="w-[271px] h-[203px] mb-[68px] "
            />
            <p className="text-center text-[20px] font-medium">
              Gain insights and advice<br />  from
              seasoned industry leaders.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={grouptwo}
              alt="grouptwo"
              className=" w-[271px] h-[203px] mb-[68px]"
            />
            <p className="text-center text-[20px] font-medium">
              Utilize top-notch tools,<br />tech,
              and facilities for growth.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={groupthree}
              alt="groupthree"
              className=" w-[271px] h-[203px] mb-[68px]"
            />
            <p className="text-center text-[20px] font-medium">
              Connect with investors, <br /> peers,
              and potential partners effectively.
            </p>
          </div>
        </div>
      </div>

      {/* benifits of incubation section */}

      {/* <div className="w-[1440px] h-[1025px] mx-auto p-4 flex flex-col items-cente mt-[61px]">
        <div className="text-center mb-8">
          <h1 className="text-[40px] font-bold  text-[#022956] mb-[20px]">Benefits of Incubation </h1>
          <p className="text-[28px] font-semibold text-[#F27329] mb-[174px]">
            Unlock key advantages that drive startup success through incubation
          </p>
        </div>
        <div className="text-center">
          <img
            src={Benefitstruride}
            alt="Benefitstruride"
            className=" w-[1013px] h-[512px]"
          ></img>
        </div>
      </div>
         */}

      <div className="w-full h-auto mx-auto p-4 flex flex-col items-center mt-[61px]">
        <div className="text-center mb-8">
          <h1 className="text-[40px] font-black text-[#022956] mb-[20px]">
            Benefits of Incubation
          </h1>
          <p className="text-[28px] font-semibold text-[#F27329] mb-[146px]">
            Unlock key advantages that drive startup success through incubation
          </p>
        </div>
        <div className="text-center  mx-[107px]">
          <img
            src={Benefitstruride}
            alt="Benefitstruride"
            className="w-[1013px] h-[512px] max-w-none mb-[65px]"
          />
        </div>
      </div>

      {/* Query form section */}

      <div className="w-full h-[1160px]">
        <div className="text-center mt-[77px]">
          <h1 className="text-[40px] text-[#022956] font-black mb-[20px]">
            Query Form
          </h1>
          <p className="font-semibold text-[28px] text-[#F27329] mb-[66px]">
            Unlock key advantages that drive startup success through incubation
          </p>
        </div>

        <div className="flex  justify-center mx-[120px]">
          {/* left side */}
          <div className="flex flex-col flex-1 items-left ml-[100px]">
            <label
              htmlFor="name"
              className="block text-[#022956] text-[22px] font-semibold mb-[12px]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md mb-[33px]"
            />

            <label
              htmlFor="email"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md mb-[33px]"
            />

            <label
              htmlFor="college-name"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              College Name
            </label>
            <input
              type="text"
              id="college-name"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md mb-[33px]"
            />

            <label
              htmlFor="student-or-other"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              Student or Other
            </label>
            <input
              type="text"
              id="student-or-other"
              className="w-[440px] h-[52px] border border-[#022956] rounded-md  mb-[33px]"
            />

            <label
              htmlFor="message"
              className="block text-[#022956] text-[22px] font-semibold  mb-[12px]"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              className="w-[440px] h-[185px] border border-[#022956] rounded-md  mb-[33px]"
            />
            <div className=" flex justify-center">
              <button
                type="submit"
                className="w-[190px] h-[50px] text-white py-2 rounded-md bg-[#022956] mt-[20px] "
              >
                Submit
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={queryform}
              alt="Query Form"
              className="w-[455px] h-[711px]"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
