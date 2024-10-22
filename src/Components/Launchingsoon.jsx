import React from "react";
import { useParams } from "react-router-dom"; // For accessing URL parameters
import Footer from "./Footer";
import backgroundImg from "../assets/commingsoon.png";

export default function LaunchingSoon() {
  const { page } = useParams(); // Get the page parameter from the URL

  // Define content based on the page parameter
  let pageTitle = "Launching Soon!";
  let pageSubtitle = "This Page is currently Under Construction";
  let specialMessage = "Be the first person to experience our Gamified e-Learning platform";
  
  if (page === "courses") {
    pageTitle = "Courses Launching Soon!...";
    specialMessage = "Be the first person to experience our exciting courses!";
  } else if (page === "contact") {
    pageTitle = "Contact Us Launching Soon!";
    specialMessage = "Stay tuned for a better way to reach out to us!";
  } else if (page === "projects") {
    pageTitle = "Projects & Clubs Launching Soon!";
    specialMessage = "Exciting projects and clubs are on their way!";
  }

  return (
    <div>
      {/* Coming soon section */}
      <section
        className="w-full bg-cover h-auto"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="parent flex flex-col justify-start h-auto lg:ml-[40px] ml-[20px]">
          <h2 className="text-[#FF5C00] lg:text-[46px] text-[25px] font-Medium lg:mt-[140px] mt-[80px] font-poppins">
            Website
          </h2>
          <h2 className="text-[#241443] lg:text-[46px] text-[25px] font-bold font-Lato font-sans">
            {pageTitle}
          </h2>
          <h4 className="text-[#241443] lg:text-[25px] text-[14px] font-Regular font-poppins">
            {pageSubtitle}
          </h4>

          <div className="sub-child lg:mt-[111px] mt-[50px]">
            <h4 className="text-[#FF5C00] lg:text-[18px] text-[11px] font-medium font-poppins">
              {specialMessage}
            </h4>
            <div className="relative w-[383px] mb-[40px] lg:mb-[60px]">
              <input
                type="text"
                placeholder="Enter your Mail Id"
                className="w-full lg:h-[62px] h-[50px] lg:pl-4 pl-6 lg:pr-[120px] pr-[40px] rounded-full border border-gray-300 placeholder:text-[#241443] lg:placeholder:text-[18px] placeholder:text-[11px] placeholder:font-regular"
              />
              <button className="absolute font-poppins top-0 lg:right-[0%] right-[8%] lg:h-[62px] h-[50px] lg:px-6 px-4 bg-[#241443] text-white lg:text-[18px] text-[8px] rounded-r-full rounded-l-none lg:w-[155px] w-[100px]">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
