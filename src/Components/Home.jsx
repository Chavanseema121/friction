import React, { useRef, useState, useEffect } from "react";

import "../index.css";
// import Animation from "../Components/Animation";
// import Mainpage from "../Components/Mainpage";

import Navbar from "./Navbar";

import benefitslearn from "../assets/home/benefitslearn.png";

import imgone from "../assets/home/imgone.png";
import imgtwo from "../assets/home/imgtwo.png";
import imgthree from "../assets/home/imgthree.png";
import imgfour from "../assets/home/imgfour.png";
import imgfive from "../assets/home/imgfive.png";
import imgsix from "../assets/home/imgsix.png";
import imgseven from "../assets/home/imgseven.png";
import imgeight from "../assets/home/imgeight.png";
import imgnine from "../assets/home/imgnine.png";
import imgten from "../assets/home/imgten.png";
import imgeleven from "../assets/home/imgeleven.png";

import sthreegroup from "../assets/home/sthreegroup.png";
import sthreegroupone from "../assets/home/sthreegroupone.png";
import sthreegrouptwo from "../assets/home/sthreegrouptwo.png";
import sthreegroupthree from "../assets/home/sthreegroupthree.png";
import sthreegroupfour from "../assets/home/sthreegroupfour.png";
import sthreeone from "../assets/home/sthreeone.png";
import sthreetwo from "../assets/home/sthreetwo.png";
import sthreethree from "../assets/home/sthreethree.png";
import sthreefour from "../assets/home/sthreefour.png";
import sthreefive from "../assets/home/sthreefive.png";

import sfourgroupone from "../assets/home/sfourgroupone.png";
import sfourgrouptwo from "../assets/home/sfourgrouptwo.png";

import sfiveframe from "../assets/home/sfiveframe.png";
import sfivelineimg from "../assets/home/sfivelineimg.png";

import sfiveone from "../assets/home/sfiveone.png";
import sfivetwo from "../assets/home/sfivetwo.png";
import sfivethree from "../assets/home/sfivethree.png";
import sfivefour from "../assets/home/sfivefour.png";
import sfivefive from "../assets/home/sfivefive.png";
import sfiveline from "../assets/home/sfiveline.png";
import sfione from "../assets/home/sfione.png";
import sfitwo from "../assets/home/sfitwo.png";
import sfithree from "../assets/home/sfithree.png";
import sfifour from "../assets/home/sfifour.png";
import sfifive from "../assets/home/sfifive.png";

import ssiximg from "../assets/home/ssiximg.png";

import eightimgone from "../assets/home/eightimgone.png";
import eightimg from "../assets/home/eightimg.png";
import eightthree from "../assets/home/eightthree.png";
import eightfour from "../assets/home/eightfour.png";

import snineone from "../assets/home/snineone.png";
import sninetwo from "../assets/home/sninetwo.png";
import sninethree from "../assets/home/sninethree.png";
import sninefour from "../assets/home/sninefour.png";
import sninefive from "../assets/home/sninefive.png";

import stenone from "../assets/home/stenone.png";
import stentwo from "../assets/home/stentwo.png";
import stenthree from "../assets/home/stenthree.png";
import stenfour from "../assets/home/stenfour.png";
import stenfive from "../assets/home/stenfive.png";
import stensix from "../assets/home/stensix.png";

import twelveone from "../assets/home/twelveone.png";
import twelvetwo from "../assets/home/twelvetwo.png";
import twelvethree from "../assets/home/twelvethree.png";
import twelvefour from "../assets/home/twelvefour.png";
import twelvefive from "../assets/home/twelvefive.png";
import twelvesix from "../assets/home/twelvesix.png";

import lastone from "../assets/home/lastone.png";
import lasttwo from "../assets/home/lasttwo.png";
import lastthree from "../assets/home/lastthree.png";
import lastfour from "../assets/home/lastfour.png";
import lastfive from "../assets/home/lastfive.png";

import guidenceone from "../assets/home/guidenceone.png";
import guidencetwo from "../assets/home/guidencetwo.png";
import guidencethree from "../assets/home/guidencethree.png";
import guidencefour from "../assets/home/guidencefour.png";
import guidencefive from "../assets/home/guidencefive.png";
import guidencesix from "../assets/home/guidencesix.png";
import guidenceseven from "../assets/home/guidenceseven.png";

import "tailwindcss/tailwind.css";

import Footer from "./Footer";
import Section from "./Section";

const items = [
  {
    img: imgone,
    title: "1. College and Industry Collaboration",
    description:
      "Partnering with top colleges and leading industries to /> provide cutting-edge courses and real-world insights.",
  },
  {
    img: imgtwo,
    title: "2. AI-Powered Learning Support",
    description:
      "Enhance your education with AI-driven learning assistance for personalized support and improved outcomes.",
  },
  {
    img: imgthree,
    title: "3. Early Course Exploration",
    description:
      "Discover and explore courses early to make informed educational decisions.",
  },
  {
    img: imgfour,
    title: "4. Incubation for Idea Generators",
    description:
      "Offering dedicated support and resources to turn your innovative ideas into successful startups.",
  },
  {
    img: imgfive,
    title: "5. Certification with Gamified Learning Methods",
    description:
      "Earn your certification through engaging gamified learning methods.",
  },
  {
    img: imgsix,
    title: "6. Real-Time Freelance Projects",
    description:
      "Gain practical experience and generate income by working on live projects with our partner companies.",
  },
  {
    img: imgseven,
    title: "7. Community Knowledge Sharing",
    description:
      "Collaborative platform for exchanging insights and expertise within a community.",
  },
  {
    img: imgeight,
    title: "8. Club Creation and Collaboration",
    description:
      "Empower your community by creating and collaborating through dynamic clubs.",
  },
  {
    img: imgnine,
    title: "9. Community Connections",
    description:
      "Building relationships and fostering collaboration within a supportive community.",
  },
  {
    img: imgten,
    title: "10. Events with Industry Leaders",
    description:
      "Engage with industry leaders at exclusive events for insights and networking.",
  },
  {
    img: imgeleven,
    title: "11. Personalized learning paths",
    description:
      "Customized educational routes tailored to individual learning styles and goals.",
  },
];

const images = [
  sthreegroup,
  sthreegroupone,
  sthreegrouptwo,
  sthreegroupthree,
  sthreegroupfour,
];

const contents = [
  {
    title: "Practical Skill Development",
    description:
      "Gain real-world experience solving practical problems and building a portfolio.",
    img: sthreeone,
  },
  {
    title: "AI-Powered Learning Support",
    description:
      "Enhance your learning experience with personalized, AI-driven educational support.",
    img: sthreetwo,
  },
  {
    title: "Earn Your Certification with Gamification",
    description:
      "Earn certifications to showcase expertise and enhance your professional qualifications.",
    img: sthreethree,
  },
  {
    title: "Real-Time Progress Tracking",
    description:
      "Monitor your learning journey with instant updates on your course achievements and milestones.",
    img: sthreefour,
  },
  {
    title: "Events with Industry Leaders",
    description:
      "Network with peers, industry leaders, and mentors through vibrant clubs, communities, and engaging events.",
    img: sthreefive,
  },
];

const testimonials = [
  {
    name: "J.Rohith",
    role: "B.Tech(CSC) at Vignan College",
    text: "I'm so excited to finish my studies with FrictionLearn. The progressive ideas and real-world projects are exactly what I need to prepare for my career. I can't wait to get started!",
    image: lastone, 
  },
  {
    name: "Sowmya",
    role: "Degree (2nd year) at Tara College",
    text: "FrictionLearn's unique approach to education with progressive ideas and practical assessments is exactly what I was looking for. I'm ready to dive in and develop my skills further.",
    image: lasttwo,
  },
  {
    name: "Sanjana",
    role: "B.com (computers-2nd year) LNK college",
    text: "Joining FrictionLearn has been the best decision for my academic and career growth. The hands-on projects and guidance from experienced mentors are invaluable. I'm thrilled to start this journey!",
    image: lastthree,
  },
  {
    name: "Sravya",
    role: "B-tech(ECE) at MGIT",
    text: "I'm excited about the opportunity to study with FrictionLearn. The well-structured courses and emphasis on real-world applications will undoubtedly prepare me for a successful career. Ready to start this now!",
    image: lastfour,
  },
  {
    name: "k.Priya",
    role: "B Tech () at BVRIT",
    text: "FrictionLearn provides the perfect mix of education and practical experience. I'm excited to start the courses and take on the projects that will enhance my skills and prepare me for my future. Let's get started!",
    image: lastfive,
  },
];

const collaborators = [
  stenone,
  stentwo,
  stenthree,
  stenfour,
  stenfive,
  stensix,
];

export default function Home() {
  const scrollContainerRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);

  const [current, setCurrent] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const scrollY = window.scrollY;
      scrollContainer.style.transform = `translateY(${-scrollY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleMouseEnterIn = (index) => {
    setCurrent(index);
  };

  const [isInView, setIsInView] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      const firstElement = document.querySelector(".first-element");
      const secondElement = document.querySelector(".second-element");
      const thirdElement = document.querySelector(".third-element");
      const fourthElement = document.querySelector(".fourth-element");
      const fifthElement = document.querySelector(".fifth-element");
      const sixthElement = document.querySelector(".sixth-element");
      const seventhElement = document.querySelector(".seventh-element");

      if (firstElement && scrollPosition >= firstElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, first: true }));
      }
      if (secondElement && scrollPosition >= secondElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, second: true }));
      }
      if (thirdElement && scrollPosition >= thirdElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, third: true }));
      }
      if (fourthElement && scrollPosition >= fourthElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, fourth: true }));
      }
      if (fifthElement && scrollPosition >= fifthElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, fifth: true }));
      }
      if (sixthElement && scrollPosition >= sixthElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, sixth: true }));
      }
      if (seventhElement && scrollPosition >= seventhElement.offsetTop) {
        setIsInView((prevState) => ({ ...prevState, seventh: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full mx-auto">
      <Navbar />

      {/* section one */}

      <div className="w-full h-[856px]  second-section">
        <div className=" flex flex-col text-center justify-center">
          <h2
            className="text-[#022956] mt-[82px] text-[40px] font-semibold 
           
          "
          >
            {" "}
            What We Offers
          </h2>
          <p
            className="text-[15px] font-medium text-[#1D2228] mt-[20px] text-center px-1 
           sm:text-[12] sm:font-medium  lg:text-[18px] sm:text-center sm:px-10
           
           "
          >
            Friction Learn is your gateway to unparalleled growth, connecting
            you with courses that challenge you, clubs that foster creativity,
            and communities that<br></br> inspire collaboration. Our incubation
            program and dynamic student clubs offer hands-on experience,
            mentorship, and peer support, ensuring you're<br></br> equipped to
            turn your ambitions into reality.
          </p>
        </div>
        <div className="flex  justify-center align-middle ">
          <img
            src={benefitslearn}
            alt=""
            className="align-middle w-[771px] h-[487px] mt-[50px]  lg:w-[771px] lg:h-[481px]  
          sm:w-[388px] sm:h-[288px]
          
          "
          />
        </div>
      </div>

      {/* section two */}

      {/* <div className="w-full h-[2366px] flex  shadow-md bg-slate-200 ">
        <div className="sticky top-[100px] self-start w-[491px] h-[249px] text-start mb-[100px]  mt-[100px] ml-[104px] mr-[166px] ">
          <h2 className="text-[40px] font-bold text-[#022956] text-start">
            What Sets
            <br />
            FrictionLearn Apart
            <br />
            From Other Platforms
          </h2>
          <p className="text-lg text-start mt-4 mb-[40px]">
            Discover the unique features and benefits that make FrictionLearn
            the best platform for your learning needs.
          </p>
        </div>
        <div
          ref={scrollContainerRef}
          className="scroll-hidden overflow-y-scroll   my-[100px] mr-[50px] "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <div key={index} className="">
              <div className="flex flex-row items-center bg-white rounded-lg shadow-md  w-[654px] h-[189px]  mb-[50px]">
                <div className="mb-[101px]  mt-[36px]">
                  {" "}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[52px] h-[52px] object-cover ml-[20px]"
                  />
                </div>

                <div className=" relative mb-[40px] mx-[24px]">
                  <h3 className="text-[25px] text-[#F27329] font-semibold text-center mt-[40px]">
                    {item.title}
                  </h3>
                  <p className="mx-[10px] text-[20px] text-[#1D2228] font-normal text-center ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

<div className="w-full h-screen flex bg-white">
      {/* Left Side (Fixed) */}
      <div className="w-1/2 h-full sticky top-0 flex flex-col justify-center ml-10">
        <h2 className="text-[40px] font-bold text-[#022956] mb-4">
          What Sets FrictionLearn<br></br> Apart From Other<br></br> Platforms
        </h2>
        <p className="text-[24px]">
        Empowering students with real-world skills<br></br> through industry collaboration, practical<br></br> projects, and dynamic communities.
        </p>
      </div>

      {/* Right Side (Scrollable with Invisible Scrollbar) */}
      <div className="w-2/3 h-full overflow-y-scroll pr-10 scrollbar-hide py-4">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg shadow-md h-[189px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-[100px] h-[100px] object-cover ml-[20px] rounded-lg"
              />
              <div className="ml-6">
                <h3 className="text-[25px] text-[#F27329] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[20px] text-[#1D2228]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      

      {/* section three */}

      <div className="w-[full] h-[780px] mb-[20px] mx-[150px] mt-[40px]">
        <div className="mt-[82px]  flex justify-center text-center">
          <h2 className="text-[#022956]  text-[40px] font-semibold">
            Training designed to meet your goals.
          </h2>
        </div>
        <div className="mt-[49px] flex">
          <div className="left section">
            {contents.map((content, index) => (
              <div
                key={index}
                className={`w-[498px] h-[119px] shadow-lg flex cursor-pointer ${
                  index === hoveredImageIndex
                    ? "border-2 border-orange-500"
                    : ""
                } ${index > 0 ? "mt-[23px]" : ""}`}
                onMouseEnter={() => setHoveredImageIndex(index)}
              >
                <img
                  src={content.img}
                  alt=""
                  className="w-[48px] h-[48px] justify-center mt-[38px] ml-[32px]"
                />
                <div className="ml-[23px] text-start">
                  <h3 className="text-[#F27329] text-[18px] font-semibold mt-[15px] font-lato,sans">
                    {content.title}
                  </h3>
                  <p className="text-[#1D2228] text-[14px] font-normal mt-[8px]">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src={images[hoveredImageIndex]}
              alt="Selected"
              className="w-[707px] h-[707px] ml-[50px]"
            />
          </div>
        </div>
      </div>

      {/* section four */}

      <div className="w-[full] h-[2019px] ml-[100px] mr-[100px] mt-[82px]">
        <div className=" flex flex-col  justify-center  text-center ">
          <h2 className="text-[#022956] mt-[52px] text-[40px] font-semibold  text-center">
            {" "}
            Hear the Structure, Feel the Success
          </h2>
          <h3 className="text-[27px] text-[#F27329] font-semibold  mt-[10px]  text-center">
            Three Pillars of Success in One Place{" "}
            <span className="text-[#022956] text-[30px] font-semibold">
              {" "}
              “FrictionLearn”
            </span>
          </h3>
        </div>

        <div className="mr-[166px] ml-[104px]">
          <div className="w-[1108px] h-[304px]  flex  justify-evenly mt-[50px] mb-[160px]  space-x-9">
            <div className="leftside content flex flex-col justify-center  text-center">
              <h2 className="text-[#F27329] text-[40px] font-semibold font-sans font-lato  w-[616px]">
                {" "}
                1. Engaging Learning Experience
              </h2>
              <p className="text-[20px] font-medium text-[#1D2228] mt-[31px]">
                FrictionLearn” transforms traditional education into an{" "}
                <br></br>engaging, fun, and motivating gamified learning{" "}
                <br></br> journey.
              </p>
            </div>
            <div>
              {" "}
              <img
                src={sfourgroupone}
                alt=""
                className="w-[500px] h-[304px] ml-[50px] mt-[20px] "
              />
            </div>
          </div>

          <div className="w-[1108px] h-[304px] flex   justify-evenly mt-[50px]  mb-[160px]  space-x-9  ml-[50px]">
            <div>
              <img
                src={sfourgrouptwo}
                alt=""
                className="w-[500px] h-[304px] "
              />
            </div>

            <div className="content flex flex-col justify-center text-center mb-[150px]  mt-[130px] mr-[-110px] ">
              <h2 className="text-[#F27329] text-[40px] font-semibold font-sans-serif-[lato] w-[616px]">
                2. Structured Course Levels:
              </h2>
              <p className="text-[22px] font-medium text-[#1D2228] mt-[31px]">
                Our 24-level courses, spanning 1st to 3rd year, <br></br>guide
                students in exploring career paths<br></br> and offer welcome
                kits.
              </p>
            </div>
          </div>

          <div className="w-[1108px] h-[304px]  flex  justify-evenly mt-[50px] mb-[160px] ">
            <div className="leftside content flex flex-col justify-center  text-center ">
              <h2 className="text-[#F27329] text-[40px] font-semibold font-sans font-lato  w-[616px]">
                {" "}
                3. AI-Focused Learning Support:
              </h2>
              <p className="text-[20px] font-medium text-[#1D2228] mt-[31px]">
                FrictionLearn uses dedicated own AI to clarify doubts<br></br>{" "}
                and offer personalized support, enhancing students'<br></br>{" "}
                learning experience..
              </p>
            </div>
            <div>
              {" "}
              <img
                src={sfourgroupone}
                alt=""
                className="w-[500px] h-[304px] mt-[20px] ml-[80px] "
              />
            </div>
          </div>

          <div className="w-[1108px] h-[304px] flex   justify-evenly mt-[50px]    space-x-9">
            <div>
              <img
                src={sfourgrouptwo}
                alt=""
                className="w-[500px] h-[304px]  ml-[-20px]"
              />
            </div>

            <div className="content flex flex-col justify-center text-center ml-[200px] w-[572px] h-[219px] mt-[50px]">
              <h2 className="text-[#F27329] text-[40px] font-semibold font-sans w-[616px]">
                4. Incubation for Idea Generators:
              </h2>
              <p className="text-[20px] font-medium text-[#1D2228] mt-[31px]">
                Starting in the second year, our Incubation programs offer
                mentorship and resources to turn students' innovative ideas into
                reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section five */}

      <div className="parentdiv  w-[full] h-[1487px]">
        <div className=" flex flex-col  justify-center  text-center mt-[22px]">
          <h2 className="text-[#022956] text-[40px] font-semibold">
            {" "}
            Explore our Projects
          </h2>
        </div>

        <div className=" flex flex-row justify-evenly">
          <div className="divright  mt-[80px]">
            <img src={sfiveframe} alt="" className="w-[584px] h-[995px]" />
          </div>

          <div>
            <img src={sfivelineimg} alt="" className="w-[2px] h-[1100px]" />
          </div>

          <div className="divleft  grid grid-cols-2 gap-9  mt-[80px]">
            <div className="parentone w-[267px] h-[380px] border shadow-lg transform transition-transform duration-300 hover:scale-110 ">
              <img src={sfiveone} alt="" />
              <img
                src={sfiveline}
                alt=""
                className="h-[2px] w-[89px] ml-[80px]"
              />
              <h3 className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px] ">
                Courses
              </h3>
              <p className=" text-[#1D2228] text-center  font-medium text-[12px]">
                FrictionLearn offers interactive<br></br> courses with quizzes,
                flashcards, <br></br>simulations, and gamified <br></br>learning
                paths.
              </p>
              <img
                src={sfione}
                alt=""
                className="w-[66px] h-[66px] ml-[100px] mt-[10px]"
              />
            </div>

            <div className="parentone w-[267px] h-[380px] border shadow-lg   transform transition-transform duration-300 hover:scale-110">
              <img src={sfivetwo} alt="" />
              <img
                src={sfiveline}
                alt=""
                className="h-[2px] w-[89px] ml-[80px]"
              />
              <h3 className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px]">
                Projects
              </h3>
              <p className=" text-[#1D2228] text-center  font-medium text-[12px]">
                FrictionLearn provides hands-on <br></br>projects for practical
                experience <br></br>and skill application.
              </p>
              <img
                src={sfitwo}
                alt=""
                className="w-[66px] h-[66px] ml-[100px]  mt-[25px] "
              />
            </div>

            <div className="parentone w-[267px] h-[380px] border shadow-lg   transform transition-transform duration-300 hover:scale-110">
              <img src={sfivethree} alt="" />
              <img
                src={sfiveline}
                alt=""
                className="h-[2px] w-[89px] ml-[80px] "
              />
              <h3 className=" text-center text-[#1D2228] font-bold text-[18px]  mt-[16px] ">
                Incubation
              </h3>
              <p className=" text-[#1D2228] text-center  font-medium text-[12px]">
                The platform hosts clubs and <br></br>events for networking,
                collaboration,<br></br> and skill development..
              </p>
              <img
                src={sfithree}
                alt=""
                className="w-[66px] h-[66px] ml-[100px]  mt-[10px]"
              />
            </div>

            <div className="parentone w-[267px] h-[380px] border shadow-lg  transform transition-transform duration-300 hover:scale-110">
              <img src={sfivefour} alt="" />
              <img
                src={sfiveline}
                alt=""
                className="h-[2px] w-[89px] ml-[80px]"
              />
              <h3 className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px] ">
                Clubs and Events
              </h3>
              <p className=" text-[#1D2228] text-center  font-medium text-[12px]">
                FrictionLearn offers interactive <br></br>courses with quizzes,
                flashcards,<br></br> simulations, and gamified<br></br> learning
                paths.
              </p>
              <img
                src={sfifour}
                alt=""
                className="w-[66px] h-[66px] ml-[100px]  mt-[10px] "
              />
            </div>

            <div className="flex justify-center items-center col-span-2">
              <div className="w-[267px] h-[380px] border shadow-lg  transform transition-transform duration-300 hover:scale-110">
                <img src={sfivefive} alt="" />
                <img
                  src={sfiveline}
                  alt=""
                  className="h-[2px] w-[89px] ml-[80px] "
                />
                <h3 className=" text-center text-[#1D2228] font-bold text-[18px] mt-[16px] ">
                  Communities
                </h3>
                <p className=" text-[#1D2228] text-center  font-medium text-[12px]">
                  Vibrant groups fostering<br></br> networking, collaboration,
                  and shared <br></br>learning experiences..
                </p>
                <img
                  src={sfifive}
                  alt=""
                  className="w-[66px] h-[66px] ml-[100px]  mt-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section six  */}

      <div className="passport  w-[full] h-[800px] mx-[116px] ">
        <div className=" flex flex-col  justify-center  text-center mt-[22px]">
          <h2 className="text-[#022956] text-[40px] font-semibold">
            {" "}
            Professional Certification Passport
          </h2>
        </div>

        <div className="parentdiv flex flex-row justify-center gap-16 ">
          <div className="leftside-term w-[full]  justify-items-start align-middle mt-[268px] ">
            <h2 className=" text-[#F27329] text-[32px] font-medium font-sans-serif-[lato] text-center">
              Validate skills, earn recognized<br></br> credentials, unlock job
              <br></br> opportunities{" "}
            </h2>
            <button className="text-[#022956]  border border-zinc-950 px-5  items-center  ml-[150px] mt-[50px]   text-[16px] font-bold w-[190] h-[48px]">
              Get it Now
            </button>
          </div>

          <div className="rightside-item w-[580px] h-[580px]  mt-[80px]">
            <img src={ssiximg} alt="" className="" />
          </div>
        </div>
      </div>

      {/* section seven */}

      <div className="w-[full] h-[739px]">
        <div className=" flex flex-col  justify-center  text-center mt-[22px]">
          <h2 className="text-[#022956] text-[40px] font-semibold">
            {" "}
            What Are Clubs?
          </h2>
          <h3 className="text-[27px] text-[#F27329] font-semibold  mt-[2px]">
            Create your Club in just 5 Simple Steps
          </h3>
        </div>

        <div className="flex justify-center flex-row gap-[150px] ">
          <div className="w-[246px] h-[241px] flex flex-col items-center mt-[54px]">
            <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  text-center ">
              1
            </div>
            <div className="leftside content text-center mt-[10px]">
              <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">
                Create Your Club
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
                Register on FrictionLearn to <br></br>establish club
              </p>
            </div>
          </div>

          <div className="w-[246px] h-[241px]  flex flex-col  justify-center items-center mt-[36px]">
            <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold ">
              2
            </div>
            <div className="leftside content mt-[10px] text-center ">
              <h2 className="text-[#F27329] text-[22px] font-semibold font-sans font-lato mt-[5px] ">
                Name Your Club
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228]  mt-[15px] text-center ">
                {" "}
                Choose a meaningful club name<br></br>reflecting its purpose
              </p>{" "}
            </div>
          </div>

          <div className="w-[246px] h-[241px] flex flex-col items-center mt-[54px]">
            <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  ">
              3
            </div>
            <div className="leftside content text-center mt-[10px]">
              <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">
                Invite Peer Members
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px]  text-center">
                Invite friends and classmates<br></br>to join your club.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-[192px]  mt-[30px] ">
          <div className="w-[246px] h-[241px] flex flex-col items-center mt-[24px]">
            <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  ">
              4
            </div>
            <div className="leftside content text-center mt-[5px]">
              <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">
                Plan and Discuss
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
                Regularly meet to discuss,<br></br>share skills, and plan
              </p>
            </div>
          </div>

          <div className="w-[246px] h-[241px] flex flex-col items-center mt-[24px]">
            <div className="w-[38px] h-[88px] flex items-center justify-center text-[#022956] text-[70px] font-semibold  ">
              5
            </div>
            <div className="leftside content text-center mt-[5px]">
              <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[5px]">
                Create Your Club
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
                Organize events, workshops,<br></br>and study sessions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section eight */}

      <div className="w-[full] h-[583px]  mt-[50px]">
        <div className="text-center mb-[50px] ">
          <h2 className="text-[#022956] text-[40px] font-semibold">
            What Are Events?
          </h2>
          <h3 className="text-[27px] text-[#F27329] font-semibold mt-[10px] mb-[90px]">
            Organize Your Event in 4 Simple Steps
          </h3>
        </div>

        <div className="flex flex-row justify-evenly  relative  ">
          <div className="w-[246px] h-[241px] flex flex-col justify-center items-center">
            <div>
              <img
                src={eightimg}
                alt=""
                className="w-[127px] h-[136px] mt-[10px]"
              />
            </div>
            <div className="text-center mt-[10px]">
              <h2 className="text-[#F27329] text-[20px] font-semibold text-center">
                Join Event
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] w-[246px] h-[44px] text-center">
                Explore clubs,join events that
                <br />
                interest.
              </p>
            </div>
          </div>

          <div className="absolute left-[19%] top-[20%] transform -translate-y-1/2 w-[240px] h-[1px] border-t-2 outline-2 border-dotted  bg-gray-400"></div>

          <div className="w-[246px] h-[241px] flex flex-col justify-center items-center relative">
            <div>
              <img
                src={eightimgone}
                alt=""
                className="w-[127px] h-[136px]  mb-[20px]"
              />
            </div>
            <div className="text-center ">
              <h2 className="w-[294px]  text-[#F27329] text-[20px] font-semibold text-center ">
                Engage with Industry Leaders
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px]  w-[246px] h-[44px] text-center ml-[18px]">
                Connect with global leaders in
                <br />
                interactive sessions.
              </p>
            </div>
          </div>

          <div className="absolute left-[42%] top-[20%] transform -translate-y-1/2 w-[250px] h-[1px]   border-t-2 outline-2  border-dotted bg-gray-400"></div>

          <div className="w-[246px] h-[241px] flex flex-col justify-center items-center relative">
            <div>
              <img
                src={eightthree}
                alt=""
                className="w-[127px] h-[136px] mt-[15px]"
              />
            </div>
            <div className="text-center mt-[10px]">
              <h2 className="text-[#F27329] text-[20px] font-semibold text-center">
                Network with Peers
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] v">
                Discuss skills, insights, and
                <br />
                collaborate at events.
              </p>
            </div>
          </div>

          <div className="absolute left-[65%] top-[20%] transform -translate-y-1/2 w-[220px] h-[1px]  border-t-2 outline-2  border-dotted bg-gray-400"></div>

          <div className="w-[246px] h-[241px] flex flex-col justify-center items-center relative mt-[20px]">
            <div>
              <img
                src={eightfour}
                alt=""
                className="w-[127px] h-[136px] mb-[10px]"
              />
            </div>
            <div className="text-center mt-[10px]">
              <h2 className="text-[#F27329] text-[20px] font-semibold text-center">
                Host Your Event
              </h2>
              <p className="text-[16px] font-medium text-[#1D2228] mt-[15px]  text-center">
                Event: Learning and
                <br />
                Community Engagement
                <br />
                Showcase
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* animation section */}

      <Section />
      {/* <Mainpage/> */}

      {/* section nine */}

      <div className="w-full h-[703px]">
        <div className="flex flex-col justify-center text-center mt-[40px]">
          <h2 className="text-[#022956] text-[40px] font-semibold">
            Join Our Community Page
          </h2>
          <h3 className="text-[27px] text-[#F27329] font-semibold mt-[10px]">
            Discover Communities with 5 Key Steps
          </h3>
        </div>

        <div className="flex flex-wrap justify-evenly  space-x-4">
          <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
            <img
              src={snineone}
              alt=""
              className="w-[120px] h-[120px] mt-[20px]"
            />
            <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">
              Join Interest Groups
            </h2>
            <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
              Connect with communities for
              <br />
              tailored networking and career
              <br />
              growth
            </p>
          </div>

          <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
            <img
              src={sninetwo}
              alt=""
              className="w-[120px] h-[120px] mt-[20px]"
            />
            <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">
              Engage in Incubation Discussions
            </h2>
            <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
              Engage in Startup incubation
              <br />
              discussions for entrepreneurial
              <br />
              feedback
            </p>
          </div>

          <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
            <img
              src={sninethree}
              alt=""
              className="w-[120px] h-[120px] mt-[20px]"
            />
            <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">
              Explore Career Opportunities
            </h2>
            <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
              Career paths, community
              <br />
              opportunities, guided by
              <br />
              experienced mentors
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly   space-x-4">
          <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
            <img
              src={sninefour}
              alt=""
              className="w-[120px] h-[120px] mt-[25px]"
            />
            <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[37px]">
              Collaborate on Projects
            </h2>
            <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
              Collaborate on projects to
              <br />
              achieve shared goals together
            </p>
          </div>

          <div className="w-full sm:w-auto h-[241px] flex flex-col justify-center items-center mt-[54px]">
            <img
              src={sninefive}
              alt=""
              className="w-[120px] h-[120px] mt-[25px]"
            />
            <h2 className="text-[#F27329] text-[22px] font-semibold font-sans mt-[49px]">
              Attend Exclusive Events
            </h2>
            <p className="text-[16px] font-medium text-[#1D2228] mt-[15px] text-center">
              Participate in community
              <br />
              events to learn, connect, grow.
            </p>
          </div>
        </div>
      </div>

      {/* section ten */}

      <div className="w-full h-[293px]">
  <div className="flex flex-col justify-center text-center mt-[182px]">
    <h2 className="text-[#022956] text-[40px] font-semibold">
      Our Valued Collaborators
    </h2>
  </div>
  <div className="overflow-hidden mt-[100px] scroll-container">
    <div className="scroll-content">
      {collaborators.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`logo ${index + 1}`}
          className="inline-block mx-4"
          style={{ height: "80px", width: "auto", margin: "0 100px" }} // Adjust size as needed
        />
      ))}
      {/* Duplicate content to ensure continuous scrolling */}
      {collaborators.map((logo, index) => (
        <img
          key={`duplicate-${index}`}
          src={logo}
          alt={`logo ${index + 1}`}
          className="inline-block mx-4"
          style={{ height: "80px", width: "auto", margin: "0 100px" }} // Adjust size as needed
        />
      ))}
    </div>
  </div>
</div>


      {/* section guidence */}

      {/* <div className="eleventhsection  w-[full]">
        <div className="mt-[100px] mb-[62px] flex justify-center text-center">
          <h1 className="text-[#022956] text-[40px] font-medium  font-sans-serif-[lato]">
            Guidance from the Best
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`first-element flex items-center space-x-20 bg-[#E7F2FF]  h-[182px] p-6 mb-[85px] w-[1300px]  ${
              isInView.first ? "animate-fadeInLeft" : ""
            }`}
          >
            <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
              <img
                src={guidenceone}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
              />
            </div>

            <div className="ml-[227px] mb-[104px] mt-[104px]">
              <h2 className="text-[30px] font-bold text-[#022956]">Johnson</h2>
              <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
                Business Advisor
              </p>
              <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px] ">
                Guiding entrepreneurs with strategic insights
                <br /> and practical business solutions.
              </p>
            </div>
          </div>

          <div
            className={`second-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${
              isInView.second ? "animate-fadeInRight" : ""
            }`}
          >
            <div className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
              <h2 className="text-[30px] font-bold text-[#022956]">Rekha</h2>
              <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
                Web Design Professiona
              </p>
              <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato]  mt-[20px] ">
                Crafting visually appealing and user-friendly<br></br>websites
                for impactful online presence..
              </p>
            </div>

            <div className="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img
                src={guidencetwo}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%]  "
              />
            </div>
          </div>

          <div
            className={`third-element flex items-center space-x-20 bg-[#E7F2FF]  h-[182px] p-6 mb-[85px] w-[1333px] ${
              isInView.third ? "animate-fadeInLeft" : ""
            }`}
          >
            <div className="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img
                src={guidencethree}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%] "
              />
            </div>

            <div className=" ml-[227px] mb-[104px]  mt-[104px]">
              <h2 className="text-[30px] font-bold text-[#022956]">
                David Martinez
              </h2>
              <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
                Cybersecurity Specialist
              </p>
              <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
                Securing digital assets by identifying<br></br> vulnerabilities
                and implementing robust defenses..
              </p>
            </div>
          </div>

          <div
            className={`fourth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${
              isInView.fourth ? "animate-fadeInRight" : ""
            }`}
          >
            <div className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
              <h2 className="text-[30px] font-bold text-[#022956]">Spandana</h2>
              <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
                Marketing Strategist
              </p>
              <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px] ">
                Designing innovative marketing strategies to <br></br>drive
                brand growth and engagement..
              </p>
            </div>

            <div className="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img
                src={guidencefour}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%]  "
              />
            </div>
          </div>

          <div
            className={`fifth-element flex items-center space-x-20 bg-[#E7F2FF] h-[182px] p-6 mb-[85px] w-[1333px] ${
              isInView.fifth ? "animate-fadeInLeft" : ""
            }`}
          >
            <div className="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img
                src={guidencefive}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%] "
              />
            </div>

            <div className=" ml-[227px] mb-[104px]  mt-[104px]">
              <h2 className="text-[30px] font-bold text-[#022956]">
                Sara Singh
              </h2>
              <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
                Business Analytics Guru
              </p>
              <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
                Transforming data into actionable insights to<br></br> drive
                business decisions..
              </p>
            </div>
          </div>

          <div
            className={`sixth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${
              isInView.sixth ? "animate-fadeInRight" : ""
            }`}
          >
            <div className=" ml-[227px] mb-[104px]  mt-[104px] text-right">
              <h2 className="text-[30px] font-bold text-[#022956]">Radhika</h2>
              <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
                Graphic Design Professional
              </p>
              <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
                Creating compelling visual designs to enhance brand<br></br>{" "}
                identity and communication..
              </p>
            </div>

            <div className="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img
                src={guidencesix}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%]  "
              />
            </div>
          </div>

          <div
            className={`seventh-element flex items-center space-x-20 bg-blue-100 h-[182px] p-6 mb-[85px] w-[1333px] ${
              isInView.seventh ? "animate-fadeInLeft" : ""
            }`}
          >
            <div className="relative w-[283px]  h-[282px] transform rotate-90 overflow-hidden  rounded-[10%]">
              <img
                src={guidenceseven}
                alt="Mentor"
                className="w-full h-full object-cover transform -rotate-90 rounded-[10%] "
              />
            </div>

            <div className=" ml-[227px] mb-[104px]  mt-[104px]">
              <h2 className="text-[30px] font-bold text-[#022956]">
                Santhosh Ram
              </h2>
              <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
                Business Advisor
              </p>
              <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
                Providing strategic guidance and practical<br></br> solutions
                for business growth and success..
              </p>
            </div>
          </div>
        </div>
      </div> */}

<div className="eleventhsection w-full">
  <div className="mt-[100px] mb-[62px] flex justify-center text-center">
    <h1 className="text-[#022956] text-[40px] font-medium font-sans-serif-[lato]">
      Guidance from the Best
    </h1>
  </div>

  <div className="flex flex-col items-center">
    <div
      className={`first-element flex items-center space-x-20 bg-[#E7F2FF] h-[182px] p-6 mb-[85px] w-[1350px] ${
        isInView.first ? "animate-fadeInLeft" : ""
      }`}
    >
      <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
        <img
          src={guidenceone}
          alt="Mentor"
          className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
        />
      </div>

      <div className="ml-[227px] mb-[104px] mt-[104px]">
        <h2 className="text-[30px] font-bold text-[#022956]">Johnson</h2>
        <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
          Business Advisor
        </p>
        <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
          Guiding entrepreneurs with strategic insights
          <br /> and practical business solutions.
        </p>
      </div>
    </div>

    <div
      className={`second-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${
        isInView.second ? "animate-fadeInRight" : ""
      }`}
    >
      <div className="ml-[227px] mb-[104px] mt-[104px] text-right">
        <h2 className="text-[30px] font-bold text-[#022956]">Rekha</h2>
        <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
          Web Design Professional
        </p>
        <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
          Crafting visually appealing and user-friendly
          <br />
          websites for impactful online presence.
        </p>
      </div>

      <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
        <img
          src={guidencetwo}
          alt="Mentor"
          className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
        />
      </div>
    </div>

    {/* Repeat similar structure for the remaining elements */}
    {/* third-element */}
    <div
      className={`third-element flex items-center space-x-20 bg-[#E7F2FF] h-[182px] p-6 mb-[85px] w-[1333px] ${
        isInView.third ? "animate-fadeInLeft" : ""
      }`}
    >
      <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
        <img
          src={guidencethree}
          alt="Mentor"
          className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
        />
      </div>

      <div className="ml-[227px] mb-[104px] mt-[104px]">
        <h2 className="text-[30px] font-bold text-[#022956]">David Martinez</h2>
        <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
          Cybersecurity Specialist
        </p>
        <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
          Securing digital assets by identifying
          <br />
          vulnerabilities and implementing robust defenses.
        </p>
      </div>
    </div>

    {/* fourth-element */}
    <div
      className={`fourth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${
        isInView.fourth ? "animate-fadeInRight" : ""
      }`}
    >
      <div className="ml-[227px] mb-[104px] mt-[104px] text-right">
        <h2 className="text-[30px] font-bold text-[#022956]">Spandana</h2>
        <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
          Marketing Strategist
        </p>
        <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
          Designing innovative marketing strategies to
          <br />
          drive brand growth and engagement.
        </p>
      </div>

      <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
        <img
          src={guidencefour}
          alt="Mentor"
          className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
        />
      </div>
    </div>

    {/* fifth-element */}
    <div
      className={`fifth-element flex items-center space-x-20 bg-[#E7F2FF] h-[182px] p-6 mb-[85px] w-[1333px] ${
        isInView.fifth ? "animate-fadeInLeft" : ""
      }`}
    >
      <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
        <img
          src={guidencefive}
          alt="Mentor"
          className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
        />
      </div>

      <div className="ml-[227px] mb-[104px] mt-[104px]">
        <h2 className="text-[30px] font-bold text-[#022956]">Sara Singh</h2>
        <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
          Business Analytics Guru
        </p>
        <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
          Transforming data into actionable insights to
          <br />
          drive business decisions.
        </p>
      </div>
    </div>

    {/* sixth-element */}
    <div
      className={`sixth-element flex items-center justify-end space-x-20 bg-[#FBEBE1] h-[182px] p-6 mb-[85px] w-[1333px] ${
        isInView.sixth ? "animate-fadeInRight" : ""
      }`}
    >
      <div className="ml-[227px] mb-[104px] mt-[104px] text-right">
        <h2 className="text-[30px] font-bold text-[#022956]">Radhika</h2>
        <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
          Graphic Design Professional
        </p>
        <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
          Creating compelling visual designs to enhance brand
          <br />
          identity and communication.
        </p>
      </div>

      <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
        <img
          src={guidencesix}
          alt="Mentor"
          className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
        />
      </div>
    </div>

    {/* seventh-element */}
    <div
      className={`seventh-element flex items-center space-x-20 bg-blue-100 h-[182px] p-6 mb-[85px] w-[1333px] ${
        isInView.seventh ? "animate-fadeInLeft" : ""
      }`}
    >
      <div className="relative w-[283px] h-[282px] transform rotate-90 overflow-hidden rounded-[10%]">
        <img
          src={guidenceseven}
          alt="Mentor"
          className="w-full h-full object-cover transform -rotate-90 rounded-[10%]"
        />
      </div>

      <div className="ml-[227px] mb-[104px] mt-[104px]">
        <h2 className="text-[30px] font-bold text-[#022956]">Santhosh Ram</h2>
        <p className="text-[16px] text-[#1D2228] font-medium font-sans-serif-[lato]">
          Business Advisor
        </p>
        <p className="text-[14px] text-[#1D2228] font-medium font-sans-serif-[lato] mt-[20px]">
          Providing strategic guidance and practical
          <br />
          solutions for business growth and success.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* section eleventh */}

      <div className="w-full h-[377px]">
        <div className="flex flex-col justify-center text-center mt-[20px]">
          <h2 className="text-[#022956] text-[40px] font-semibold font-sans font-lato">
            Our Growth at a Glance
          </h2>
        </div>
        <div>
          <div className="flex flex-row justify-between mt-[102px] mx-[30px] gap-[37px]">
            <img
              src={twelveone}
              alt=""
              className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125"
            />
            <img
              src={twelvetwo}
              alt=""
              className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125"
            />
            <img
              src={twelvethree}
              alt=""
              className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125"
            />
            <img
              src={twelvefour}
              alt=""
              className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125"
            />
            <img
              src={twelvefive}
              alt=""
              className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125"
            />
            <img
              src={twelvesix}
              alt=""
              className="w-[165px] h-[174px] transform transition-transform duration-300 hover:scale-125"
            />
          </div>
        </div>
      </div>

      {/* section lastone */}

      <div className="relative w-[full] h-[798px]">
        <div className=" flex flex-col  justify-center  text-center mt-[80px]">
          <h2 className="text-[#022956] text-[40px] font-semibold font-sans font-lato">
            Experience Our Impact Through Their Words
          </h2>
        </div>
        <div className="flex overflow-hidden justify-center items-center  w-[full] h-[380px]  space-x-7">
          {testimonials.map((testimonial, index) => {
            const isActive = index === current;

            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out gap-[90px] ${
                  isActive ? "scale-110" : "scale-75 blur-sm"
                } ${isActive ? "opacity-100" : "opacity-50"}`}
                style={{
                  transform: isActive ? "scale(1.1)" : "scale(0.75)",
                  opacity: isActive ? 1 : 0.5,
                  width: isActive ? "186px" : "150px",
                  height: isActive ? "205px" : "150px",
                }}
                onMouseEnter={() => handleMouseEnterIn(index)}
              >
                <div className="rounded-lg gap-[50px] mx-2 flex flex-col items-center w-[195px] h-[205px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`${
                      isActive ? "filter-none" : "filter grayscale"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" text-center">
          <h3 className="text-[#1D2228] font-medium text-[20px]">
            {testimonials[current].name}
          </h3>
          <p className="text-[#1D2228] text-[16px] font-light">
            {testimonials[current].role}
          </p>
        </div>
        <div className="mt-[50px] mx-[20px] text-center  font-medium">
          <p className="text-[#1D2228] text-[36px] ml-[100px] mr-[100px] font-light">
            {testimonials[current].text}
          </p>
        </div>
      </div>

      {/* section footer */}

      <Footer />
    </div>
  );
}
