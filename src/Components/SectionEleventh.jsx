import React from 'react';
import sectioneleventhone from "../assets/home/sectioneleventhone.png";
import sectioneleventhtwo from "../assets/home/sectioneleventhtwo.png";
import sectionelevenththree from "../assets/home/sectionelevenththree.png";
import sectioneleventhfour from "../assets/home/sectioneleventhfour.png";
import star from "../assets/home/star.png"

function CommunitySection() {
  return (
    <div className="bg-white p-4 lg:p-8">
  <div className="flex items-center justify-center">
  <img src={star} alt="star" className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px] mb-2 lg:mt-[-14px]" />
  <h1 className="text-[18px] lg:text-[30px] font-black text-center mb-2 sm:mb-6 font-Lato font-sans text-[#FF5C00]">
    Our Community
  </h1>
  </div>
  <p className="text-[20px] sm:text-[28px] lg:text-[40px] text-center font-semibold text-Poppins mb-2 sm:mb-4 lg:mb-6 text-[#241443]">
    Join India's Smartest Student Community
  </p>
  <p className="text-center mb-6 sm:mb-8 text-[14px] sm:text-[18px] lg:text-[20px] font-Pegular text-Poppins text-[#6C6A6F]">
    Join niche clubs, connect with industry experts, explore opportunities, network with ambitious peers, secure internships, and become part of India’s largest learning community—all for free! Start your journey with FrictionLearn today!
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
      <img src={sectioneleventhone} alt="Exclusive Events" className="w-full max-w-[400px] sm:max-w-[521px] h-auto mx-auto mt-2" />
      <h2 className="text-[20px] sm:text-[22px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
        Exclusive Events
      </h2>
      <p className="text-center text-[#FF5C00] text-[16px] sm:text-[18px] text-Poppins font-normal">
        Access LIVE events to explore your favorite fields and elevate your growth to the next level.
      </p>
    </div>

    <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
      <img src={sectioneleventhtwo} alt="Find Mentors" className="w-full max-w-[400px] sm:max-w-[521px] h-auto mx-auto mt-2" />
      <h2 className="text-[20px] sm:text-[22px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
        Find Mentors
      </h2>
      <p className="text-center text-[#FF5C00] text-[16px] sm:text-[18px] text-Poppins font-normal">
        Accelerate your learning journey with a mentor who guides you every step of the way in your career.
      </p>
    </div>

    <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
      <img src={sectionelevenththree} alt="Community Meetups" className="w-full max-w-[400px] sm:max-w-[521px] h-auto mx-auto mt-2" />
      <h2 className="text-[20px] sm:text-[22px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
        Community Meetups
      </h2>
      <p className="text-center text-[#FF5C00] text-[16px] sm:text-[18px] text-Poppins font-normal">
        Surround yourself with tech-driven minds, connect with like-minded innovators, and amplify your growth.
      </p>
    </div>

    <div className="bg-[#E0E1E6] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
      <img src={sectioneleventhfour} alt="Find Your Business Partner" className="w-full max-w-[400px] sm:max-w-[521px] h-auto mx-auto mt-2" />
      <h2 className="text-[20px] sm:text-[22px] font-black mb-2 text-center text-[#241443] font-Lato font-sans mt-2">
        Find Your Business Partner
      </h2>
      <p className="text-center text-[#FF5C00] text-[16px] sm:text-[18px] text-Poppins font-normal">
        Access to your Co-Tech Business Minded to gear up your Idea.
      </p>
    </div>
  </div>

  <div className="text-center mt-8 sm:mt-10 lg:mt-12">
    <button className="bg-[#241443] text-[18px] font-semibold text-white px-2 py-1 sm:px-6 sm:py-3 lg:px-4 lg:py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
      Join Community
    </button>
  </div>
</div>

  );
}

export default CommunitySection;
