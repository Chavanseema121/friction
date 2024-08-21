import React from "react";
import homeicon from "../assets/homeicon.png";
import searchicon from "../assets/searchicon.png";
import arr from "../assets/arr.png";
import development from "../assets/development.png";

function ExploreCourses() {
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
      <div className="flex justify-between w-full h-[42px] mt-[50px] ml-[96px]">
        <div className="mb-8 max-w-lg inline-flex items-center w-[452px] h-[42px] border border-gray-600 rounded-full">
          <img
            src={searchicon}
            alt="Search Icon"
            className="w-[20px] h-[20px] ml-[10px]"
          />
          <input
            type="text"
            placeholder="Search here"
            className="border-none outline-none w-[300px] h-[19px] rounded-lg shadow-2xl mr-[20px] ml-[20px]"
          />
        </div>
        <div className="mr-[104px] ">
          <button className="flex items-center bg-white border border-gray-600 px-4 py-2  mr-[102px] rounded-full w-[159px] h-[42px]">
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
        <div className="w-1/4 pr-4 mt-[70px]">
          <div className="bg-white p-4  border-r border-0 border-orange-500">
            <h2 className="text-[30px] font-semibold text-[#F27329] font-Lato font-sans mb-2">
              Code Career
            </h2>
            <ul className="list-none text-[#1D2228] pl-4">
              <li className=" mb-2 text-[22px] font-semibold font-Lato font-sans text-[#F27329] ">
                Development
              </li>
              <div className="list-disc  pl-4 ">
                <li className=" mb-2 text-[16px] font-medium font-Lato font-sans ">
                  Mobile Development
                </li>
                <li className=" mb-2 text-[16px] font-medium font-Lato font-sans ">
                  Web Development
                </li>
                <li className=" mb-2 text-[16px] font-medium font-Lato font-sans border-b-2 w-[40px] border-black">
                  PHP
                </li>
                <li className=" mb-2 text-[16px] font-medium font-Lato font-sans">
                  Game Development
                </li>
                <li className=" mb-2 text-[16px] font-medium font-Lato font-sans">
                  UI Development
                </li>
              </div>
            </ul>
          </div>
          <ul className="list-none text-[#1D2228] mt-2  border-r border-orange-500 pl-4">
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
              Design
            </li>
            <li className=" mb-2 text-[22px] font-semibold font-Lato font-sans">
              Data Science & Analytics
            </li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
              AI & ML
            </li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
              Cybersecurity
            </li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
              DevOps
            </li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
              Cloud Computing
            </li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">
              Blockchain Development
            </li>
            <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">
              Business Career
            </li>
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
        <div className="w-3/4 mt-[76px]">
          <h2 className="text-[28px] font-semibold text-[#022956]">
            Start Your Skill-Building Path with{" "}
            <span className="text-[#F27329]">Development Courses</span>
          </h2>
          <div className="bg-white">
            <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[44px]">
              PHP
            </h3>
            <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">
              Master server-side scripting for creating dynamic and interactive
              web applications.{" "}
            </p>
            <div className="grid grid-cols-3 gap-[32px]">
              {/* Example video thumbnails */}
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className=" w-[300px] h-[181px] rounded-lg mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <div className="text-left">
                  <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-1 ">
                    Introduction to PHP
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-1">
                    Basics of PHP, its syntax, and how it
                    <br></br>works.
                  </p>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className=" w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div>
                <div className="ml-[10px]">
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-1 ml-2">
                    PHP Programming Fundamentals
                  </p>
                  <p className="text-[14px] font-Regular font-Lato font-sans mb-1 m1-2">
                    Core programming concepts, variables,
                    <br></br>and control structures in PHP
                  </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className="w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Working with Databases
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Connecting to and manipulating<br></br> databases using PHP and SQL.
                </p>
                </div>
              </div>
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className="w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Form Handling and User Input
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Collecting and processing user input<br></br> through web forms in PHP.
                </p>
                </div>
              </div>
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className="w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  PHP and Web Development
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Integrating PHP with HTML, CSS, and<br></br> JavaScript for dynamic
                  websites.
                </p>
                </div>
              </div>
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className="w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Object-Oriented Programming (OOP)<br></br> in PHP
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Implementing OOP principles to structure<br></br> and manage PHP code
                  efficiently.
                </p>
                </div>
              </div>
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className="w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Security in PHP
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Best practices for securing PHP<br></br> applications and protecting
                  user data.
                </p>
                </div>
              </div>
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className="w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  PHP Frameworks
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Using frameworks like Laravel and<br></br> Symfony for efficient PHP
                  development.
                </p>
                </div>
              </div>
              <div className="w-full">
                <div>
                <img
                  src={development}
                  alt="Mobile Development"
                  className="w-[300px] h-[181px] rounded-sm mb-2"
                />
                </div>
                <div className="ml-[10px]">
                <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">
                  Testing and Debugging PHP<br></br>Applications
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Techniques for testing and debugging<br></br> PHP code to ensure
                  functionality.
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

export default ExploreCourses;
