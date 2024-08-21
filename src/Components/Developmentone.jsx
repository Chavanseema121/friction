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
      <div className="flex justify-between w-full h-[42px] mt-[50px] ">
        <div className="mb-8 max-w-lg inline-flex items-center w-[452px] h-[42px] border border-gray-600 rounded-full ml-[102px]">
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
        <div className="mr-[102px]">
          <button className="flex items-center bg-white border border-gray-600 px-4 py-2 rounded-full w-[159px] h-[42px] ">
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
      <div className="flex mt-[58px] ml-[96px]">
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
                <li className=" mb-2 text-[16px] font-medium font-Lato font-sans border-b-2 w-[150px] border-black">
                  Web Development
                </li>
                <li className=" mb-2 text-[16px] font-medium font-Lato font-sans">
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
        <div className="w-3/4 pl-[13px] mt-[76px]">
          <h2 className="text-[28px] font-semibold text-[#022956]">
            Start Your Skill-Building Path with{" "}
            <span className="text-[#F27329]">Development Courses</span>
          </h2>
          <div className="bg-white">
            <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[44px]">
              Web Development
            </h3>
            <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">
              Learn to build, maintain, and optimize websites and web
              applications.
            </p>
            <div className="grid grid-cols-3 gap-[32px]">
              {/* Example video thumbnails */}
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
                  Introduction to Web Development
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Overview of web development fundamentals,<br></br>  technologies, and
                  industry trends.
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
                  HTML and CSS
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Structuring web content and designing<br></br> styles with HTML and
                  CSS.
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
                  JavaScript and Frontend<br></br> Development
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Enhancing interactivity and functionality<br></br> using JavaScript and
                  frontend frameworks.
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
                  Backend Development
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Building server-side logic and managing<br></br> databases for dynamic
                  web applications.
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
                  APIs and Web Services
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Integrating third-party services and<br></br> connecting frontend to
                  backend systems.
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
                  Database Management
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Implementing and managing databases<br></br> for storing and retrieving
                  web application<br></br> data.
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
                  Web Security
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Best practices for securing web<br></br> applications and protecting
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
                  Testing and Debugging
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Techniques for ensuring functionality and<br></br> performance through
                  testing and<br></br> debugging.
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
                  Deployment and Maintenance
                </p>
                <p className="text-[14px] font-Regular font-Lato font-sans mb-2">
                  Deploying web applications, managing<br></br> updates, and ensuring
                  ongoing<br></br> maintenance.
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
