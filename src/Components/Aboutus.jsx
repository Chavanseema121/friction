import React from "react";
import Card from "../Components/Card";

import star from "../assets/home/star.png";
import groupone from "../assets/aboutus/groupone.png";
import grouptwo from "../assets/aboutus/grouptwo.png";
import groupthree from "../assets/aboutus/groupthree.png";
import groupfour from "../assets/aboutus/groupfour.png";

import arrowone from "../assets/home/arrowone.png";
import joincom from "../assets/aboutus/joincom.png";

import fllogo from "../assets/aboutus/fllogo.png"; // Replace with your logo path
import query from "../assets/aboutus/query.png"; // Replace with your illustration path
import instructor from "../assets/aboutus/instructor.png";
import aboutskillimg from "../assets/home/aboutskillimg.png";
import arr from "../assets/aboutus/arr.png";
import arrow from "../assets/aboutus/arrow.png";
import clip from "../assets/aboutus/clip.png";
import goal from "../assets/aboutus/goal.png";

import mentoroneimg from "../assets/aboutus/mentoroneimg.png";
import mentortwoimg from "../assets/aboutus/mentortwoimg.png";
import mentorthreeimg from "../assets/aboutus/mentorthreeimg.png";

import Footer from "../Components/Footer";
import crossline from "../assets/home/crossline.png";

const cardData = [
  {
    image: groupone,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking to continuously improve our platform and educational experiences.",
  },
  {
    image: grouptwo,
    title: "Engagement",
    description:
      "We strive to make learning interactive and enjoyable through gamified elements and personalized content.",
  },
  {
    image: groupthree,
    title: "Collaboration",
    description:
      "We foster strong connections between learners and industry experts to enhance learning and professional growth.",
  },
  {
    image: groupfour,
    title: "Excellence",
    description:
      "We aim for excellence in everything we do, from content creation to user experience, ensuring the highest quality educational solutions..",
  },
  {
    image: groupfour,
    title: "Empowerment",
    description:
      "We are dedicated to providing tools and resources that help students achieve their fullest potential and succeed in their careers..",
  },
  {
    image: groupfour,
    title: "Integrity",
    description:
      "We are committed to maintaining transparency, fairness, and high standards in all aspects of our platform and interactions..",
  },
];

export default function Aboutus() {
  return (
    <div>
      {/* section one */}

      <div className="  flex flex-row gap-3 ml-5 mt-3">
        <div className="  flex flex-row">
          <h2 className=" text-[#241443]  text-[15px] font-poppins font-semibold">
            Home
          </h2>
          <img
            src={arr}
            alt=""
            className="w-[9px] h-[10px] ml-[8px] mt-[8px]"
          />{" "}
        </div>
        <h2 className=" text-[#FF5C00]  text-[15px] font-poppins font-semibold">
          About us
        </h2>
      </div>

      <section>
        <div>
          <div className="flex  flex-col justify-center items-center text-center mt-[30px]">
            <div className="flex items-center justify-center mb-4">
              <img
                src={star}
                alt="star"
                className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px]"
              />
              <h2 className="text-[#FF5C00] text-[18px] lg:text-[24px] font-black text-center font-poppins">
                About Us
              </h2>
            </div>
            <h2 className="text-[#241443] lg:text-[40px] sm:text-[23px] text-[20px] font-semibold text-center font-poppins">
              Empowering Minds, Shaping <br></br> FuturesMeet the FrictionLearn
              Plan
            </h2>
          </div>

          {/* this code is responsive and web also correct code */}
          <div className="parent flex flex-col lg:flex-row justify-around mx-[20px] md:mx-[40px] lg:mx-[85px] mt-[40px] md:mt-[80px] lg:mt-[120px] space-y-7 lg:space-y-0 lg:space-x-7">
            <div className="childleft w-full md:w-[90%] lg:w-[670px]">
              {/* <div>
              <h2 className="text-[#241443] text-[40px] md:text-[60px] lg:text-[75px] font-black text-start font-lato leading-[45px] md:leading-[75px] lg:leading-[90px]">
                About FrictionLearn
              </h2>
              <img src={crossline} alt="" className="w-[360px] h-[33px] lg:ml-[350px] lg:mt-[-60px]" />
              </div> */}

              <div className="">
                <h2 className="text-[#241443] text-[24px] sm:text-[24px] md:text-[60px] lg:text-[75px] font-Lato font-extrabold text-start font-sans leading-[45px] md:leading-[75px] lg:leading-[90px] relative">
                  About{" "}
                  <span
                    style={{
                      backgroundImage: `url(${crossline})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "180px",
                      backgroundSize: "contain",
                      paddingLeft:
                        "0px" /* Adjust this value based on your image width */,
                    }}
                  >
                    FrictionLearn
                  </span>
                </h2>
              </div>
              <h6 className="text-[#FF5C00] text-[11px] lg:text-[21px] font-medium font-poppins leading-[24px] md:leading-[32px] mt-4">
                Driven by the mission to make quality education accessible to
                all
              </h6>
              <p className="text-[#241443] text-[14px] md:text-[18px] lg:text-[20px] font-Regular font-poppins leading-[22px] md:leading-[28px] lg:leading-[32px] mt-[20px]">
                FrictionLearn is a gamified e-learning platform designed to
                bridge the gap between learners and industry experts. Through
                dynamic, personalized tasks, we provide an engaging and
                interactive learning journey aimed at enhancing skills and
                career growth. Our mission is to create a seamless learning
                experience that empowers users to achieve their goals with ease
                and innovation.
              </p>

              <div className="flex justify-center lg:justify-start mt-[40px] md:mt-[60px] lg:mt-[73px]">
                <button className="w-[180px] md:w-[214px] h-[50px] md:h-[62px] bg-[#FF5C00] rounded-full text-[#ffffff] text-[16px] md:text-[18px] font-medium font-poppines flex items-center justify-center">
                  <span>Learn More</span>
                  <img
                    src={arrowone}
                    alt=""
                    className="w-[20px] md:w-[26px] h-[14px] md:h-[18px] ml-2"
                  />
                </button>
              </div>
            </div>

            <div className="childright mt-[40px] md:mt-[55px] flex justify-center lg:justify-end">
              <img
                src={aboutskillimg}
                alt="About Skill"
                className="w-[300px] md:w-[500px] lg:w-[606px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section two */}

      <section className="w-full mt-[20px] lg:mt-[60px] p-2 lg:p-4">
        {/* Our Mission */}
        <div className="flex mb-4 lg:mb-2 lg:ml-[-20px] items-center justify-center lg:justify-start">
          <img
            src={star}
            alt="star"
            className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-2 lg:mr-[55px]"
          />
          <h1 className="text-[#FF5C00] text-[18px] lg:text-[50px] font-lato font-black">
            Our Mission
          </h1>
        </div>

        {/* Image and Paragraph Section */}
        <div className="w-full h-auto flex flex-col lg:flex-row gap-6 mb-7 items-center lg:items-start">
          {/* Image Section */}

          {/* Paragraph Section */}
          <div className="ml-4 lg:ml-[74px] mt-[10px] lg:mt-[30px] order-1 lg:order-1 text-center lg:text-left">
            <p className="text-[#241443] text-[15px] lg:text-[22px] font-poppins font-regular leading-normal lg:w-[805px]">
              "To revolutionize the learning experience by offering an engaging,
              gamified platform that connects learners with industry experts,
              promotes upskilling through personalized learning paths, and
              empowers students to achieve their fullest potential in their
              academic and professional careers."
            </p>
          </div>
          <div className="lg:ml-[126px] mt-[10px] lg:mt-[30px] order-2 lg:order-2">
            <img
              src={arrow}
              alt="Mission Image"
              className="w-[192px] lg:w-[305px] h-[141px] lg:h-[225px]"
            />
          </div>
        </div>
        <hr className="block sm:hidden border-t border-gray-300 mt-4" />

        {/* Our Vision */}
        <div className="w-full h-auto mt-8">
          {/* Star and Heading */}
          <div className="flex justify-center lg:justify-end items-center mb-8">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-2 lg:mr-[-15px]"
            />
            <h1 className="text-[#FF5C00] text-[18px] lg:text-[50px] font-lato font-black lg:mt-4 lg:mr-[120px]">
              Our Vision
            </h1>
          </div>

          {/* Image and Paragraph Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mt-4">
            {/* Image Section */}
            <div className="lg:ml-[100px]">
              <img
                src={clip}
                alt="Vision Image"
                className="w-[244px] lg:w-[405px] h-[162px] lg:h-[275px] object-cover"
              />
            </div>

            {/* Paragraph Section */}
            <div className="lg:ml-[20px] lg:mr-[74px] mt-4 lg:mt-0 text-center lg:text-left">
              <p className="text-[#241443] text-[15px] lg:text-[22px] font-poppins font-regular leading-normal lg:leading-relaxed lg:w-[905px]">
                "To become a global leader in EdTech innovation, transforming
                education by bridging the gap between academia and industry,
                fostering a culture of continuous learning, creativity, and
                growth, and creating a future where every learner is equipped
                with the skills and knowledge needed to thrive in a rapidly
                evolving world."
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="block sm:hidden border-t border-gray-300 mt-4" />

      {/* section three */}

      <section className="w-full h-auto bg-[#241443] pb-0 lg:pb-6">
        <div className="flex flex-col justify-center lg:p-0 mx-4 sm:mx-[20px] md:mx-[40px] lg:mx-[100px]">
          <div className="flex items-center justify-center">
            <img
              src={star}
              alt="star"
              className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px] mt-[30px]"
            />
            <h1 className="text-[#FF5C00] text-[18px] sm:text-[45px] lg:text-[50px] font-lato font-black text-center mt-[20px] lg:mt-[40px] md:mt-[50px]">
              Our Goal
            </h1>
          </div>
          <p className="w-full lg:w-[100%] md:w-[1122px] h-auto sm:h-auto text-[#FFFFFF] text-[15px] sm:text-[20px] md:text-[22px] font-Regular font-poppins mt-[20px] lg:mt-[30px] md:mt-[50px] text-center">
            To create a seamless, interactive, and rewarding educational journey
            that not only educates but also inspires students to pursue their
            passions, explore diverse career paths, and develop skills that are
            directly aligned with industry needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row justify-center gap-4 mt-[30px] sm:mt-[50px] md:mt-[74px] lg:space-x-8">
          {/* Image 1: Visible only on small screens */}
          <img
            src={goal}
            alt="Goal Image 1"
            className="w-[200px] sm:w-[226px] md:w-[266px] h-auto sm:h-[226px] md:h-[271px] block sm:block md:block ml-[90px] sm:ml-[30px]"
          />

          {/* Image 2: Visible only on medium screens */}
          <img
            src={goal}
            alt="Goal Image 2"
            className="w-[200px] sm:w-[226px] md:w-[266px] h-auto sm:h-[226px] md:h-[271px] hidden sm:hidden md:block"
          />

          {/* Image 3: Visible only on medium screens */}
          <img
            src={goal}
            alt="Goal Image 3"
            className="w-[200px] sm:w-[226px] md:w-[266px] h-auto sm:h-[226px] md:h-[271px] hidden sm:hidden md:block"
          />
        </div>
      </section>

      {/* section four */}

      <section className="w-full h-auto bg-[#9791FD] flex justify-center py-8 lg:py-6 lg:px-0">
        <div className=" lg:w-[1218px] w-[350px] h-auto bg-[#241443] mt-0 lg:mt-[20px] lg:p-4 p-2">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center text-center lg:mt-[42px] mt-0">
            <div className="flex items-center justify-center">
              <img
                src={star}
                alt="star"
                className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px] mt-[6px]"
              />
              <h2 className="text-[#FF5C00] text-[18px] sm:text-[28px] lg:text-[30px] font-black font-Lato">
                Meet Our Team
              </h2>
            </div>
            <h2 className="text-[#F6F1FF] text-[20px] sm:text-[20px] md:text-[23px] lg:text-[40px] lg:mt-[20px] mt-2 px-1 font-semibold font-poppins">
              "Introducing the Visionaries Behind FrictionLearn"
            </h2>
          </div>

          {/* Team Members Section */}
          <div className="flex lg:flex-row justify-center gap-6 lg:mt-[74px] mt-[20px]">
            <div className="flex flex-col items-center text-center">
              <img
                src={mentoroneimg}
                alt="Rohith Kumar"
                className="w-[80px] lg:w-[280px]  h-[142px] lg:h-[450px]"
              />
              <h3 className="text-[#F6F1FF] text-[10px]  lg:text-[25px] font-bold font-poppins lg:mt-[22px] mt-2">
                ROHITH KUMAR
              </h3>
              <p className="text-[#F6F1FF] text-[9px]  lg:text-[18px] font-medium font-poppins">
                Marketing Head
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={mentortwoimg}
                alt="Vikas Pawar"
                className="w-[200px] lg:w-[358px] md:w-[356px] h-[200px] sm:h-[500px] lg:h-[596px]"
              />
              <h3 className="text-[#F6F1FF] text-[10px] lg:text-[25px] font-bold font-poppins lg:mt-[22px] mt-4">
                VIKAS PAWAR
              </h3>
              <p className="text-[#F6F1FF] text-[6px]  lg:text-[18px] font-medium">
                MD & CEO
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={mentorthreeimg}
                alt="Seema Chavan"
                className="w-[80px] lg:w-[280px] md:w-[280px] h-[142px] sm:h-[400px] lg:h-[450px]"
              />
              <h3 className="text-[#F6F1FF] text-[10px]  lg:text-[25px] font-bold font-poppins lg:mt-[22px] mt-2">
                SEEMA CHAVAN
              </h3>
              <p className="text-[#F6F1FF] text-[6px] lg:text-[18px] font-medium">
                Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section five */}

      <div className="flex items-center justify-center lg:mt-[40px] mt-[30px]">
        <img
          src={star}
          alt="star"
          className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px] mt-[2px]"
        />
        <h1 className="mb-4 text-[18px] text-center text-[#FF5C00] font-black font-Lato font-sans  lg:text-[30px] mt-4 ">
          Our Value
        </h1>
      </div>
      <p className="mb-4 lg:mb-8 text-[20px] text-center font-semibold text-Poppins text-[#241443] lg:text-[40px] px-4 lg:px-[280px]">
        "Empowering growth through innovation, engagement, and collaboration".
      </p>

      <div className="container mx-auto px-4">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* section six */}

      {/* <div className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8">
    
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-[20px] font-semibold text-Poppins text-[#241443] lg:text-[45px]">
        Join Our Community
      </h1>
      <p className="mb-8 text-[15px] font-normal text-[#FF5C00] lg:text-[30px] dark:text-gray-400">
        "Be a part of our innovative journey in transforming education through technology. Collaborate, learn, and grow with like-minded EdTech enthusiasts at FrictionLearn!"
      </p>
      <div className="mt-6 md:mt-8 text-center md:text-left">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#F27329] text-white text-[16px] md:text-[18px] font-semibold rounded-full hover:bg-orange-400 transition-colors"
        >
          Become an Instructor
          <img src={arrowone} alt="Arrow" className="w-3 h-2 md:w-4 md:h-3 ml-3" />
        </a>
      </div>
    </div>

    
    <div className="flex justify-center lg:justify-end">
      <img src={joincom} alt="Join Community" className="w-full h-auto max-w-[540px] lg:max-h-[715px]" />
    </div>
  </div>
</div> */}

      <div className="bg-white">
        <div className="py-8 lg:px-4 px:2 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-12">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center h-full lg:mt-[50px] mt-0 px-4 lg:px-0 ">
            <h1 className="mb-4 text-[20px]  font-semibold font-poppins text-[#241443] lg:text-[45px]">
              Join Our Community
            </h1>
            <p className="mb-8 text-[15px] lg:text-[30px] font-Regular font-Poppins text-[#FF5C00]">
              Be a part of our innovative journey in transforming education
              through technology. Collaborate, learn, and grow with like-minded
              EdTech enthusiasts at FrictionLearn!
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end lg:mt-[50px] mt-[-80px] lg:order-none order-2">
            <img
              src={joincom}
              alt="Join Community"
              className="w-[300px] h-[400px] lg:w-[540px] lg:h-[600px]"
            />
          </div>
          {/* Button */}
          <div className="lg:mt-[0px] flex justify-center md:justify-start lg:mb-[0px] mb-[10px] lg:order-none order-3">
            <a
              href="#"
              className="inline-flex items-center px-2 py-1 lg::px-4 lg:py-3 bg-[#F27329] text-white text-[11px] lg:text-[20px] font-semibold rounded-full hover:bg-orange-400 transition-colors"
            >
              Become an Instructor
              <img
                src={arrowone}
                alt="Arrow"
                className="w-2 h-2 lg:w-4 lg:h-3 ml-3"
              />
            </a>
          </div>
        </div>
      </div>

      {/* section last one */}

      <div className=" w-full h-auto bg-[#251c46] md:p-4 text-white">
        <div className="container flex flex-col lg:flex-row justify-between lg:items-center">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0 lg:ml-0 lg:mb-[200px] mb-0">
            <img
              src={fllogo}
              alt="Logo"
              className="lg:w-[126px] lg:h-[94px] w-[58px] h-[42px]"
            />
          </div>

          {/* Center Section - Text */}
          <div className="flex-1 text-center lg:text-center lg:mt-4 lg:mb-[150px] mt-4">
            <h2 className="lg:text-[40px] text-[20px] font-semibold mb-4">
              Questions about our{" "}
              <span className="text-[#FF5C00]">‘Friction</span>
              <span className="text-[#FFFFFF]">Learn’</span>
            </h2>
            <p className="lg:text-[18px] text-[10px] font-Regular text-Poppins mb-2">
              "Curious about FrictionLearn? Ask us anything! We're here to
              discuss our gamified e-learning platform and how we're
              revolutionizing education."
            </p>
          </div>

          {/* Right Section - Illustration */}
          <div className="lg:ml-8 lg:mt-[100px] mt-4">
            <img
              src={query}
              alt="Illustration"
              className="lg:w-[370px] lg:h-[263px] w-[300px] h-[200px]"
            />
          </div>
        </div>

        {/* Bottom Section - Query Box */}
        <div className="flex justify-center lg:justify-start lg:mt-[-80px] mt-10 lg:ml-[200px] ">
          <input
            type="text"
            placeholder="Raise your Query....."
            className="w-[60%] lg:w-[638px] md:w-[400px] px-4 py-2 rounded-md text-black mb-4"
          />
          <button className="px-4 py-2 ml-0 bg-[#FF5C00] text-white font-semibold rounded-md hover:bg-orange-600 transition-colors mb-4">
            SEND
          </button>
        </div>
      </div>

      {/* section last */}

      <div className="flex flex-col justify-center items-center text-center mt-[40px] md:mt-[30px] lg:mt-[40px]">
        <div className="flex items-center justify-center mb-4">
          <img src={star} alt="star" className="w-[36px] h-[36px] mr-[-10px]" />
          <h2 className="text-[#FF5C00] text-[15px] sm:text-[30px] md:text-[30px] font-black text-center font-lato">
            Become an Instructor/Mentor
          </h2>
        </div>
      </div>

      <div className="parent flex flex-col lg:flex-row justify-around mx-[20px] md:mx-[40px] lg:mx-[85px] mt-[40px] md:mt-[60px] lg:mt-[80px] space-y-7 lg:space-y-0 lg:space-x-7">
        <div className="childleft w-full md:w-[90%] lg:w-[670px]">
          <h2 className="text-[#241443] text-[20px] sm:text-[24px] md:text-[40px] lg:text-[40px] font-semibold text-start font-lato ">
            Let’s Join Us & Spread Your Knowledge
          </h2>
          <h6 className="text-[#FF5C00] text-[14px] sm:text-[14px] md:text-[22px] font-medium font-poppins">
            Welcome to FrictionLearn’s Mentor Program!
          </h6>
          <p className="text-[#241443] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-medium font-poppins mt-[20px]">
            Empower the next generation by sharing your expertise.Guide learners
            through personalized insights and real-world experiences.Expand your
            network by connecting with ambitious students and professionals.Join
            us in shaping careers and making a meaningful impact on future
            talent
          </p>
        </div>

        <div className="childright mt-[30px] md:mt-[50px] flex justify-center lg:justify-end">
          <img
            src={instructor}
            alt="About Skill"
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[606px] h-auto"
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-start mt-[20px] md:mt-[50px] lg:mt-[0px] ml-[20px] md:ml-[40px] lg:ml-[50px] mb-10">
        <button className="w-[160px] sm:w-[180px] md:w-[280px] h-[45px] sm:h-[50px] md:h-[62px] bg-[#241443] rounded-full text-[#ffffff] text-[14px] sm:text-[16px] md:text-[18px] font-medium font-poppins flex items-center justify-center ml-[50px]">
          <span>Become an Instructor</span>
          <img
            src={arrowone}
            alt=""
            className="w-[18px] sm:w-[20px] md:w-[26px] h-[12px] sm:h-[14px] md:h-[18px] ml-2"
          />
        </button>
      </div>

  
      {/* section footer */}

      <Footer />
    </div>
  );
}
