import React from "react";
import homeicon from "../assets/homeicon.png";
import searchicon from "../assets/searchicon.png";
import arr from "../assets/arr.png";
import development from "../assets/development.png";

function Blockchain() {
  return (
    <div className="w-full h-auto bg-white p-8">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-2 ml-[102px]">
          <div className="bg-gray-200 p-2 rounded-full">
            <img src={homeicon} alt="Home" className="w-6 h-6" />
          </div>
          <span className="text-[24px]  font-bold">Home</span>
        </div>
        <button className="text-white px-4 py-2 rounded bg-[#022956] text-[16px] font-bold w-[236px] h-[42px] mr-[102px]">
          Get Started
        </button>
      </header>
      {/* Title and Description */}

      <div className="">
        <h1 className="text-[40px] font-black font-Lato font-sans text-center mb-[25px] text-[#022956]">
          Explore Courses
        </h1>
        <p className="text-center text-[#F27329] text-[30px] font-semibold mb-8">
          Discover a variety of courses to advance your skills and knowledge.
        </p>
      </div>
      {/* Search and Sort */}
      <div className="flex justify-between w-full h-[42px] mt-[50px]">
        <div className="mb-8 max-w-lg inline-flex items-center w-[452px] h-[42px] border border-gray-600 rounded-full ml-[102px]">
          <img
            src={searchicon}
            alt="Search Icon"
            className="w-[20px] h-[20px] ml-[10px]"
          />
          <input
            type="text"
            placeholder="Search here"
            className="border-none outline-none w-[300px] h-[19px] rounded-lg shadow-2xl mr-[102px] ml-[20px]"
          />
        </div>
        <div className="mr-[102px]">
          <button className="flex items-center bg-white border border-gray-600 px-4 py-2 rounded-full w-[159px] h-[42px]">
            <span>Sort</span>
            <img
              src={arr}
              alt="Arrow Icon"
              className="w-[11.13px] h-[7.13px] ml-[50px] "
            />
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex mt-[58px]  ml-[96px]">
        {/* Left Sidebar */}
        <div className="w-1/4  mt-[70px]">
          <div className="bg-white  border-r border-0 border-orange-500">
            <h2 className="text-[30px] font-semibold font-Lato font-sans mb-2">
              Code Career
            </h2>
            <h2 className="mb-2 text-[30px] font-semibold font-Lato font-sans  text-[#F27329]">
              Business Career
            </h2>
            <p className="mb-2 text-[22px] font-semibold font-Lato font-sans  text-[#F27329] ">
              Entrepreneurship
            </p>

            <div className="list-disc  pl-6 ">
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans ">
                Startup Fundamentals
              </li>
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans Saas   ">
                Business Plan Development
              </li>
              <li className="  mb-2 text-[16px] font-medium font-Lato font-sans ">
                Learn Startup Methodology
              </li>
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans border-b border-black w-[150px]">
                Fundraising & Pitching
              </li>
            </div>
            <ul className="list-none text-[#1D2228] ">
              <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
                Digital Marketing
              </li>
              <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
                Finance & Accounting
              </li>
              <li className=" mb-2 text-[22px] font-semibold font-Lato font-sans">
                Project Management
              </li>
              <li className=" mb-2 text-[22px] font-semibold font-Lato font-sans">
                Human Resources
              </li>
              <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
                Personal Development
              </li>
            </ul>
          </div>
          <ul className="list-none text-[#1D2228] mt-2  border-r border-orange-500 ">
            <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">
              Non-IT Career
            </li>
            <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">
              Lifestyle Career
            </li>
            <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">
              Nature Career
            </li>
            <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">
              Competitive Exams
            </li>
            <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">
              Other
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-3/4 pl-[13px] mt-[76px]">
          <h2 className="text-[28px] font-semibold text-[#022956]">
            Start Your Skill-Building Path with{" "}
            <span className="text-[#F27329]">
            Entrepreneurship Courses
            </span>
          </h2>
          <div className="bg-white ">
            <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[44px] mb-[19px]">
            Fundraising & Pitching
            </h3>
            <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">
            Master essential strategies to secure funding and impress investors.
            </p>
            <div className="grid grid-cols-3 gap-[32px]">
              {/* Example video thumbnails */}
              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Introduction to Fundraising
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Understanding different types of funding sources<br></br> and their implications.
                  </p>
                </div>
              </div>

              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Creating a Pitch Deck
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Crafting a compelling pitch deck to<br></br> capture investor interest.
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Investor Relations
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Building and maintaining relationships with<br></br> potential investors.
                  </p>
                </div>
              </div>

              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Pitching Techniques
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Effective techniques for delivering<br></br> persuasive and engaging pitches.
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Financial Projections for Investors
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Preparing accurate financial projections <br></br> present to investors.
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Negotiating Terms
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Strategies for negotiating favorable<br></br> investment terms and agreements.
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Legal Aspects of Fundraising
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Understanding the legal considerations<br></br> and documentation required.
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div>
                  {" "}
                  <img
                    src={development}
                    alt="Mobile Development"
                    className="w-[284px] h-[181px] rounded-sm mb-2"
                  />
                </div>
                <div className="ml-[10px]">
                  {" "}
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Successful Case Studies
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Analyzing successful fundraising stories<br></br> to learn best practices.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blockchain;
