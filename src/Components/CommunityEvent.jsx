import React from "react";
import eventone from "../assets/community/eventone.png";
import eventtwo from "../assets/community/eventtwo.png";
import eventthree from "../assets/community/eventthree.png";
import dream from "../assets/community/dream.png";
import abc from "../assets/community/abc.png";
import abcone from "../assets/community/abcone.png";
import abctwo from "../assets/community/abctwo.png";
import bc from "../assets/community/bc.png";
import backgroundImage from '../assets/community/backgroundImage.png';
import communityimgs from "../assets/community/communityimgs.png";
import logos from "../assets/community/logos.png";
import trofi from "../assets/community/trofi.png";
import backgroundImg from "../assets/community/communitytwobgimg.png";
import purpleimgone from "../assets/community/purpleimgone.png";
import purpleimgtwo from "../assets/community/purpleimgtwo.png";
import righticon from "../assets/community/righticon.png";
import arrow from '../assets/community/arrow.png';
import arr from "../assets/aboutus/arr.png";
import Footer from "../Components/Footer";


import sectionimg from "../assets/community/sectionimg.png";

export default function CommunityEvent() {
  return (
    <>
      {/* section one */}

      <div className="one w-[390px] sm:w-[390px] md:w-full md:h-[1362px] h-[501px] sm:h-[501px] bg-cover md:p-0 sm:p-10 p-4" 
        style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="  flex flex-row gap-2 lg:ml-5 ml-2 mb-3">
        <div className="  flex flex-row mt-0 lg:mt-4">
          <h2 className=" text-[#241443]  text-[15px] font-poppins font-semibold">
            Home
          </h2>
          <img
            src={arr}
            alt=""
            className="w-[9px] h-[10px] ml-[8px] mt-[8px]"
          />{" "}
        </div>
        <h2 className=" text-[#FF5C00]  text-[15px] font-poppins font-semibold lg:mt-4 mt-0">
        Community & Events
        </h2>
      </div>
        <div>
          <h1 className='text-[25px] sm:text-[25px] md:text-[85px] font-bold font-koh text-[#FF5C00] text-center '>
            <span className='text-[25px] sm:text-[50px] md:text-[85px] font-bold text-[#0E1D5F]'>Join India’s First </span><br />
            Builders Community &<br />
            Dive Into Epic Events!
          </h1>
          <p className='text-[8px] sm:text-[8px] lg:text-[23px] font-medium font-poppins text-[#241443] text-center mt-[10px] sm:mt-[14px] md:mt-[18px]'>
            We help individuals to grow by unleashing the potential of social media
          </p>

          <img src={communityimgs} alt="" className='w-[333px] sm:w-[600px] md:w-[894px] h-auto mx-auto mt-[20px] sm:mt-[30px] md:mt-[34px]' />
        </div>

        <div className="parent flex flex-row sm:flex-row md:flex-row justify-between md:-mt-10">
          <div className="child-left mx-auto sm:ml-0 ml-0 md:ml-[100px] mb-6 sm:mb-0">
            <h5 className='text-[10px] lg:text-[22px] md:text-[22px] font-semibold font-poppins text-[#000000]'>Trusted by</h5>
            <img src={logos} alt="" className='w-[71px] lg:w-[185px] lg:h-[70px] h-[23px] mt-[10px]' />
          </div>

          <div className="child-right flex flex-row sm:flex-row md:flex-row gap-4 mx-auto mr-0 sm:mr-0 md:mr-[40px]">
            <img src={trofi} alt="" className='w-[25px] h-[28px] md:w-[57px] md:h-[67px] mt-[14px] ' />
            <div className="sub-child mt-[10px]">
              <h4 className='text-[10px] lg:text-[20px] md:text-[22px]  text-[#000000] font-Regular font-poppins'>
                Best Community in <br /> <span className="text-[#000000] font-semibold font-poppins text-[10px] lg:text-[20px]">Edtech</span>
              </h4>
            </div>
          </div>
        </div>
{/* 
        <div className="sectiontwo w-[353px] sm:w-[390px] md:w-[1264px] md:h-[360px] sm:h-[344px] h-[78px] bg-cover md:ml-[100px] mt-[40px] sm:mt-[90px]" 
          style={{ backgroundImage: `url(${backgroundImg})` }}>
          <div className="parent flex flex-row md:flex-row sm:flex-row sm:gap-2 gap-2 md:gap-10 justify-center">
            <div className="childone flex flex-row md:flex-row sm:flex-row gap-4 mx-auto md:ml-[99px] ml-3 sm:ml-3">
              <img src={purpleimgone} alt="" className='w-[30px] sm:w-[30px] md:w-[98px] h-auto mt-[20px] sm:mt-[88px]' />
              <div>
                <h1 className='md:text-[40px] text-[12px] sm:text-[50px] text-[#FFFFFF] font-semibold mt-[20px] sm:mt-[88px]'>32000+</h1>
                <p className='text-[8px] sm:text-[8px] md:text-[15px] text-[#FFFFFF] font-normal'>Community members</p>
              </div>
            </div>

            <div className="childone flex flex-row md:flex-row sm:flex-row gap-4 mx-auto md:ml-[99px]">
              <img src={purpleimgtwo} alt="" className='w-[30px] sm:w-[98px] h-auto mt-[20px] sm:mt-[88px]' />
              <div>
                <h1 className='md:text-[40px] text-[12px] sm:text-[50px] text-[#FFFFFF] font-semibold mt-[20px] sm:mt-[88px]'>112+</h1>
                <p className='text-[8px] sm:text-[8px] md:text-[15px] text-[#FFFFFF] font-normal'>Events Made till now</p>
              </div>
            </div>

            <div className="childone flex flexflex-row md:flex-row sm:flex-row gap-4 mx-auto md:ml-[99px]">
              <img src={purpleimgone} alt="" className='w-[30px] sm:w-[98px] h-auto mt-[20px] sm:mt-[88px]' />
              <div>
                <h1 className='md:text-[40px] text-[12px] sm:text-[50px] text-[#FFFFFF] font-semibold mt-[20px] sm:mt-[88px]'>32000+</h1>
                <p className='text-[8px] sm:text-[8px] md:text-[15px] text-[#FFFFFF] font-normal'>Community members</p>
              </div>
            </div>
          </div>
        </div> */}

<div className="sectiontwo w-full sm:w-full md:w-[1264px] h-[360px] sm:h-[344px] bg-cover mx-auto mt-5 sm:mt-[40px]" 
  style={{ backgroundImage: `url(${backgroundImg})` }}>
  <div className="parent flex flex-row sm:flex-row gap-6 sm:gap-2 md:gap-10 justify-center">
    {/* First Item */}
    <div className="childone flex items-center sm:flex-row gap-4 mx-auto">
      <img src={purpleimgone} alt="" className='w-[30px] sm:w-[50px] lg:w-[98px] h-auto mt-[-20px] sm:mt-[40px] md:mt-[88px]' />
      <div>
        <h1 className='text-[20px] sm:text-[30px] md:text-[40px] font-semibold text-white mt-[10px] sm:mt-[40px] md:mt-[88px]'>32000+</h1>
        <p className='text-[10px] sm:text-[12px] md:text-[15px] text-white'>Community members</p>
      </div>
    </div>

    {/* Second Item */}
    <div className="childone flex items-center sm:flex-row gap-4 mx-auto">
      <img src={purpleimgtwo} alt="" className='w-[30px] sm:w-[50px] md:w-[98px] h-auto mt-[10px] sm:mt-[40px] md:mt-[88px]' />
      <div>
        <h1 className='text-[20px] sm:text-[30px] md:text-[40px] font-semibold text-white mt-[10px] sm:mt-[40px] md:mt-[88px]'>112+</h1>
        <p className='text-[10px] sm:text-[12px] md:text-[15px] text-white'>Events Made till now</p>
      </div>
    </div>

    {/* Third Item */}
    <div className="childone flex items-center sm:flex-row gap-4 mx-auto">
      <img src={purpleimgone} alt="" className='w-[30px] sm:w-[50px] md:w-[98px] h-auto mt-[10px] sm:mt-[40px] md:mt-[88px]' />
      <div>
        <h1 className='text-[20px] sm:text-[30px] md:text-[40px] font-semibold text-white mt-[10px] sm:mt-[40px] md:mt-[88px]'>32000+</h1>
        <p className='text-[10px] sm:text-[12px] md:text-[15px] text-white'>Community members</p>
      </div>
    </div>
  </div>
</div>

      </div>
    
  {/* section two */}

  <section className='bg-[hsl(260,54%,17%)] w-full h-auto sm:h-[905px] flex justify-center items-center  mt-[100px]'>
  <div className='w-full sm:w-[1228px] h-auto sm:h-[775px] bg-[#FFFFFF] rounded-3xl p-4 sm:p-2  mt-[40px]'>
    <div>
      <h3 className='flex justify-center text-[#FF5C00] text-[18px] sm:text-[30px] font-black font-lato mt-[20px] sm:mt-[40px]'>
        How <span className='text-[#241443]'>‘FL’</span> Community is useful!
      </h3>
    </div>

    <div className="parent flex flex-col sm:flex-row">
      <div className="cchild-left">
        <p className='w-full sm:w-[581px] text-[#241443] text-[12px] sm:text-[20px] font-medium font-lato mt-[30px] sm:mt-[115px] mx-auto sm:ml-[36px]'>
          "Join FrictionLearn, a gamified learning community connecting students with industry experts, offering dynamic tasks, career guidance, and rewarding growth for an engaging educational journey."
        </p>

        <div className="allpoints flex flex-col gap-4 mt-[30px] sm:mt-[69px] mx-auto sm:ml-[30px]">
          <div className="space-y-4">
            <div className="points flex flex-row gap-3">
              <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
              </div>
              <h4 className="text-[14px] sm:text-[22px] font-medium text-[#241443]">
                Gets New People Connections
              </h4>
            </div>

            <div className="points flex flex-row gap-3">
              <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
              </div>
              <h4 className="text-[14px] sm:text-[22px] font-medium text-[#241443]">
                Useful Community for Users
              </h4>
            </div>

            <div className="points flex flex-row gap-3">
              <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
              </div>
              <h4 className="text-[14px] sm:text-[22px] font-medium text-[#241443]">
                Easy communication with others
              </h4>
            </div>

            <div className="points flex flex-row gap-3">
              <div className="w-[24px] h-[24px] bg-[#FF5C00] rounded-full flex items-center justify-center">
                <img src={righticon} alt="Special Gamified Courses" className="w-[12px] h-[11px]" />
              </div>
              <h4 className="text-[14px] sm:text-[22px] font-medium text-[#241443]">
                Connect with across world
              </h4>
            </div>
          </div>
        </div>

        {/* <div className="mt-[20px] sm:mt-[30px] mx-auto sm:ml-[30px]">
          <button className="w-[180px] sm:w-[264px] h-[50px] sm:h-[62px] bg-[#241443] rounded-full text-white text-[16px] sm:text-[18px] font-medium flex justify-center items-center gap-2">
            <span>Join Community</span>
            <img src={arrow} alt="" className="w-[16px] sm:w-[26px] h-[10px] sm:h-[18px]" />
          </button>
        </div> */}
      </div>

      <div className="childright mx-auto sm:ml-[50px]">
        <img src={sectionimg} alt="" className='w-[300px] sm:w-[555px] h-auto mt-[30px] sm:mt-[88px]' />
      </div>
    </div>
    <div className="mt-[20px] sm:mt-[30px] mx-auto   md:mt-[-30px] ml-[100px] sm:ml-[30px]">
          <button className="w-[180px] sm:w-[264px] h-[50px] sm:h-[62px] bg-[#241443] rounded-full text-white text-[16px] sm:text-[18px] font-medium flex justify-center items-center gap-2">
            <span>Join Community</span>
            <img src={arrow} alt="" className="w-[16px] sm:w-[26px] h-[10px] sm:h-[18px]" />
          </button>
        </div>
  </div>
  
</section>

      <div className="flex flex-col items-center px-6 py-12 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#FF5C00] text-[15px] lg:text-[30px] font-black font-Lato font-sans">
            Looking for Inspiration? Discover the Power of Our Events!
          </h2>
          <h1 className="text-[20px] md:text-[40px] font-semibold mt-4 text-[#241443] text-Poppins">
            Unlock Practical Knowledge and Real-World Insights at
            ‘FrictionLearn’ Events!
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 border border-green-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <img
              src={eventone}
              alt="Meet Industry Experts"
              className="mb-4 w-[140px] h-1[72px]"
            />
            <h3 className="text-[14px] lg:text-[23px] font-semibold text-[#241443] mb-2 font-Poppins">
              Meet Industry Experts
            </h3>
            <p className="text-[#FF5C00] text-center text-[14px] lg:text-[16px] font-Poppins">
              "Learn directly from experts shaping the future."
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 border border-red-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <img
              src={eventtwo}
              alt="Share Idea with Others"
              className="mb-4 w-[97px] h-[97px]"
            />
            <h3 className="text-[14px] lg:text-[23px] font-semibold text-[#241443] mb-2 font-Poppins">
              Share Idea with Others
            </h3>
            <p className="text-[#FF5C00] text-center text-[14px] lg:text-[16px] font-Poppins">
              "Collaborate, grow, and share ideas with inspiring experts."
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 border border-yellow-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <img
              src={eventthree}
              alt="Get your Business Partner"
              className="mb-4 w-[132px] h-[91px]"
            />
            <h3 className="text-[14px] lg:text-[23px] font-semibold text-[#241443] mb-2 font-Poppins">
              Get your Business Partner
            </h3>
            <p className="text-[#FF5C00] text-center text-[14px] lg:text-[16px] font-Poppins">
              "Find the right partner to grow your business."
            </p>
          </div>
        </div>

        {/* Button Section */}
        <button className="mt-12 bg-[#FF5C00] text-white py-3 px-8 rounded-full hover:bg-orange-600 text-[18px] font-semibold">
          Explore Events &rarr;
        </button>
      </div>

      {/* section two */}

      <div className="flex flex-col items-center py-8 ">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-[30] lg:text-[75px] font-semibold mb-4 font-kalnia text-[#241443]">
            Present your Passion in a <br /> Unique Outstanding mind
          </h1>
          <p className="text-[#FF5C00] font-semibold text-[14px] lg:text-[20px] mb-6">
            A platform where you can find events according to your passion
          </p>
        </div>

        {/* Button on top of Green Section */}
      
        <div className="relative w-full bg-green-600 h-64 md:h-96 lg:h-128 rounded-lg mb-8">
  {/* Green Section (Placeholder for Image/Content) */}
  
  {/* Button */}
  <button className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#241443] text-white py-2 px-4 rounded-full hover:bg-indigo-900 font-poppins text-[12px] lg:text-[21px] font-semibold border-b-4 border-white">
    Search Events
  </button>
</div>
        {/* Powered By Logos */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          {/* Replace these with actual logos */}
          <img
            src={dream}
            alt="Logo 1"
            className="lg:w-[205px] lg:h-[55px] w-[100px] h-[25px]"
          />
          <img
            src={dream}
            alt="Logo 2"
            className="lg:w-[205px] lg:h-[55px] w-[100px] h-[25px]"
          />
          <img
            src={dream}
            alt="Logo 3"
            className="lg:w-[205px] lg:h-[55px] w-[100px] h-[25px]"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 ml-[60px]">
            <h2 className="text-[26px] lg:text-[46px] font-black font-Lato font-sans text-[#241443] mb-4 ml-auto">
              We Plan Event You <br></br>Can Celebrate
            </h2>
            <p className="text-[#FF5C00] mb-6 text-[15px] lg:text-[21px] font-poppins font-normal">
              FrictionLearn provides various kinds of events and<br></br> is
              attended by millions of people. <br />
              So you can start looking for<br></br> events according to your
              passion.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end  mr-[80px]">
            {/* Replace this section with an actual image */}
            <img
              src={abc}
              alt="Right Section Image"
              className="w-[292px] h-[137px]  object-cover  mt-16"
            />
            <div className="flex mr-auto mt-[100px]">
              <img src={abcone} alt="" className="w-[95px] h-[100px] "></img>
              <img
                src={bc}
                alt=""
                className="w-[107px] h-[114px] mt-[-100px]"
              ></img>

              <img src={abctwo} alt="" className="w-[90px] h-[95px]  "></img>
            </div>
          </div>
        </div>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
          Choose Passion
        </button>
      </div>
      <Footer/>
    </>
  );
}
