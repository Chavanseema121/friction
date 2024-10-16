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
    pageTitle = "Courses Launching Soon!";
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
        className="w-full bg-cover h-[760px]"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="parent flex flex-col justify-start h-full ml-[40px]">
          <h2 className="text-[#FF5C00] text-[46px] font-medium mt-[221px] font-poppins">
            Website
          </h2>
          <h2 className="text-[#241443] text-[46px] font-bold font-poppins">
            {pageTitle}
          </h2>
          <h4 className="text-[#241443] text-[25px] font-medium font-poppins">
            {pageSubtitle}
          </h4>

          <div className="sub-child mt-[111px]">
            <h4 className="text-[#FF5C00] text-[18px] font-medium font-poppins">
              {specialMessage}
            </h4>
            <div className="relative w-[383px]">
              <input
                type="text"
                placeholder="Enter your Mail Id"
                className="w-full h-[62px] pl-4 pr-[120px] rounded-full border border-gray-300 placeholder:text-[#241443] placeholder:text-[18px] placeholder:font-regular"
              />
              <button className="absolute font-poppins top-0 right-[1%] h-[62px] px-6 bg-[#241443] text-white text-[18px] rounded-r-full rounded-l-none w-[155px]">
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
