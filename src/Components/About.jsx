import React from "react";
import NewNavbar from "./NewNavbar";
import aboutskillimg from "../assets/aboutskillimg.png";
import arrow from "../assets/arrow.png";
import arr from "../assets/arr.png";
import goal from "../assets/goal.png";

// mission imgs
import missionimg from "../assets/missionimg.png";
import visionimg from "../assets/visionimg.png";

// mentorimages
import mentoroneimg from "../assets/mentoroneimg.png";
import mentortwoimg from "../assets/mentortwoimg.png";
import mentorthreeimg from "../assets/mentorthreeimg.png";

export default function Aboutus() {
  return (
    <div className="w-full">
      {/* navbar section */}
      <NewNavbar />

      {/* first section */}

      <div className="  flex flex-row gap-3 ml-5 mt-3">
        <div className="  flex flex-row">
          <h2 className=" text-[##241443]  text-[15px] font-poppins font-semibold">
            Home
          </h2>
          <img
            src={arr}
            alt=""
            className="w-[15px] h-[10px] ml-[8px] mt-[14px]"
          />{" "}
        </div>
        <h2 className=" text-[#FF5C00]  text-[15px] font-poppins font-semibold">
          About us
        </h2>
      </div>

      <section>
        <div>
          <div className="flex  flex-col justify-center items-center text-center mt-[42px]">
            <h2 className="text-[#FF5C00] text-[30px] font-black text-center font-poppines">
              About Us
            </h2>
            <h2 className="text-[#241443] lg:text-[40px] mt-[20px] px-1 sm:text-[23px] text-[22px] font-bold text-center font-poppines">
              Empowering Minds, Shaping <br></br> FuturesMeet the FrictionLearn
              Plan
            </h2>
          </div>

          {/* <div className="parent flex flex-row justify-around mx-[85px] mt-[120px] space-x-7">
              <div className="childleft   w-[670px] ">
                <h2 className="text-[#022956] text-[75px] font-black text-start font-poppines line-height-[90px]">
                  About
                  FrictionLearn
                </h2>
                <h6 className="text-[#022956] text-[21px] font-bold font-poppines line-height-[32px]">Driven by the mission to make quality education accessible to all</h6>
                <p className="text-[#241443] text-[20px] font-medium font-poppines line-height-[32px]  mt-[20px]"> FrictionLearn is a gamified e-learning platform designed to bridge the gap between learners and industry experts. Through dynamic, personalized tasks, we provide an engaging and interactive learning journey aimed at enhancing skills and career growth. Our mission is to create a seamless learning experience that empowers users to achieve their goals with ease and innovation.</p>

                <div className="flex flex-row items-center mt-[73px] ml-[220px]">
                  <button className="w-[214px] h-[62px] bg-[#F27329] rounded-full text-[#ffffff] text-[18px] font-medium font-poppines flex flex-row justify-center items-center">
                    <span>Learn More</span>
                    <img src={arrow} alt="" className="w-[26px] h-[18px] ml-2" />
                  </button>
                </div>


              </div>
              <div className="childright  mt-[55px]">
                <img src={aboutskillimg} alt=""  className=' w-[606px] h-[606px]' />
              </div>
            </div> */}

          {/* this code is responsive and web also correct code */}
          <div className="parent flex flex-col lg:flex-row justify-around mx-[20px] md:mx-[40px] lg:mx-[85px] mt-[40px] md:mt-[80px] lg:mt-[120px] space-y-7 lg:space-y-0 lg:space-x-7">
            <div className="childleft w-full md:w-[90%] lg:w-[670px]">
              <h2 className="text-[#241443] text-[40px] md:text-[60px] lg:text-[75px] font-black text-start font-lato leading-[45px] md:leading-[75px] lg:leading-[90px]">
                About FrictionLearn
              </h2>
              <h6 className="text-[#000000] text-[16px] md:text-[21px] font-bold font-poppines leading-[24px] md:leading-[32px]">
                Driven by the mission to make quality education accessible to
                all
              </h6>
              <p className="text-[#241443] text-[14px] md:text-[18px] lg:text-[20px] font-medium font-poppines leading-[22px] md:leading-[28px] lg:leading-[32px] mt-[20px]">
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
                    src={arrow}
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

      {/* our mission */}
      {/* 
        <section    className=' w-full mt-[82px] '>

 <div  className=' w-full h-[400px] flex flex-row gap-6'>  

    <div className='ml-[30px]'>
        <h1 className=' text-[#FF5C00]  text-[50px] font-lato font-black  ml-[35px]' > Our Mission</h1>
        <p className='      w-[805px] h-[131px] text-[#241443]  text-[22px] font-lato font-semibold ml-[74px]  mt-[40px]  '>"To revolutionize the learning experience by offering an engaging, gamified platform that connects learners with industry experts, promotes upskilling through personalized learning paths, and empowers students to achieve their fullest potential in their academic and professional careers."</p>
    </div>
<div   className='mt-[32px]  ml-[56px]'>
    <img src={missionimg} alt=""    className='w-[305px] h-[225px]'/>
</div>
    
     </div>



     <div  className=' w-full h-[400px] flex flex-row '>  
  <div   className='mt-[32px] ml-[100px]'>
<img src={visionimg} alt=""   className='w-[405px] h-[275px]'/>
</div>


<div  className='ml-[20px]'>
    <h1 className=' text-[#FF5C00]  text-[50px] font-lato font-black mr-[20px]  text-end' > Our Vision</h1>
    <p className='  w-[805px] h-[131px] text-[#241443]  text-[22px] font-lato font-semibold ml-[74px]  mt-[40px]  '>"To become a global leader in EdTech innovation, transforming education by bridging the gap between academia and industry, fostering a culture of continuous learning, creativity, and growth, and creating a future where every learner is equipped with the skills and knowledge needed to thrive in a rapidly evolving world."</p>
</div>

 </div>





        </section> */}

      <section className="w-full mt-[82px]  p-4 sm:p-8 lg:p-0">
        <h1 className="text-[#FF5C00] text-[30px] lg:text-[50px] font-lato font-black lg:ml-[35px] text-center lg:text-left lg:ml-[55px]">
          Our Mission
        </h1>
        {/* Our Mission */}
        <div className="w-full h-auto flex flex-col lg:flex-row gap-6  mb-7">
          <div className="order-2 sm:order-1 md:order-1 lg:order-2 mt-6 mx-auto lg:mt-[32px] lg:ml-[126px]">
            <img
              src={missionimg}
              alt="Mission Image"
              className="w-[200px] lg:w-[305px] h-[150px] lg:h-[225px]"
            />
          </div>
          <div className="order-2 sm:order-2 md:order-2 lg:order-1 ml-4 lg:ml-[74px]">
            <p className="w-full lg:w-[805px] h-auto lg:h-[131px] text-[#241443] text-[16px] lg:text-[22px] font-lato font-semibold text-center lg:text-left mt-[20px] lg:mt-[40px]">
              "To revolutionize the learning experience by offering an engaging,
              gamified platform that connects learners with industry experts,
              promotes upskilling through personalized learning paths, and
              empowers students to achieve their fullest potential in their
              academic and professional careers."
            </p>
          </div>
        </div>

        {/* Our Vision */}

        <h1 className="text-[#FF5C00] text-[30px] lg:text-[50px] font-lato font-black text-center lg:text-right lg:mt-7  lg:mr-[55px]">
          Our Vision
        </h1>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-4">
          <div className="order-1 sm:order-1 md:order-1 lg:order-1 mt-6 mx-auto lg:mt-[32px] lg:ml-[100px]">
            <img
              src={visionimg}
              alt="Vision Image"
              className="w-[250px] lg:w-[405px] h-[175px] lg:h-[275px]"
            />
          </div>
          <div className="order-1 sm:order-2 md:order-2 lg:order-2 ml-4 lg:ml-[20px] mt-4 lg:mt-0">
            <p className="w-full lg:w-[805px] h-auto lg:h-[131px] text-[#241443] text-[16px] lg:text-[22px] font-lato font-semibold text-center lg:text-left mt-[20px] lg:mt-[40px]   mr-[74px]">
              "To become a global leader in EdTech innovation, transforming
              education by bridging the gap between academia and industry,
              fostering a culture of continuous learning, creativity, and
              growth, and creating a future where every learner is equipped with
              the skills and knowledge needed to thrive in a rapidly evolving
              world."
            </p>
          </div>
        </div>
      </section>

      {/* our goal */}

      {/* <section  className='w-full h-[696px] bg-[#241443]'>

  <div className='flex flex-col justify-center p-4 mx-[100px]'>
        <h1 className=' text-[#FF5C00]  text-[50px] font-lato font-black  text-center  mt-[50px]' >Our Goal</h1>
        <p className='   w-[1122px] h-[99px]   text-[#FFFFFF]  text-[22px] font-lato font-semibold  ml-[20px] mt-[50px]  text-center '>"To create a seamless, interactive, and rewarding educational journey that not only educates but also inspires students to pursue their passions, explore diverse career paths, and develop skills that are directly aligned with industry needs."</p>
    </div>
<div className='flex flex-1 justify-evenly  mt-[74px]'>
    <img src={goal} alt=""  className='w-[266px] h-[271px]' /> 
    <img src={goal} alt=""  className='w-[266px] h-[271px]' />
    <img src={goal} alt=""  className='w-[266px] h-[271px]' />
    
    </div>
</section> */}
      <section className="w-full h-auto bg-[#241443]">
        <div className="flex flex-col justify-center lg:p-4 mx-4 sm:mx-[20px] md:mx-[40px] lg:mx-[100px]">
          <h1 className="text-[#FF5C00] text-[18px] sm:text-[45px] md:text-[50px] font-lato font-black text-center mt-[30px] sm:mt-[40px] md:mt-[50px]">
            Our Goal
          </h1>
          <p className="w-full sm:w-[90%] md:w-[1122px] h-auto sm:h-auto text-[#FFFFFF] text-[15px] sm:text-[20px] md:text-[22px] font-lato font-semibold mt-[20px] sm:mt-[30px] md:mt-[50px] text-center">
            "To create a seamless, interactive, and rewarding educational
            journey that not only educates but also inspires students to pursue
            their passions, explore diverse career paths, and develop skills
            that are directly aligned with industry needs."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row justify-center gap-4 mt-[30px] sm:mt-[50px] md:mt-[74px]">
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

      {/* mentors */}
      {/* <section className='w-full h-[1135px] bg-[#9791FD] flex justify-center'>
  <div className='w-[1218px] h-[1018px] bg-[#241443] mt-[60px]'>

  <div className="flex  flex-col justify-center items-center text-center mt-[42px]">
            <h2 className="text-[#FF5C00] text-[30px] font-black text-center font-poppines">
            Meet Our Team
            </h2>
            <h2 className="text-[#F6F1FF] lg:text-[40px] mt-[20px] px-1 sm:text-[23px] text-[22px] font-bold text-center font-poppines">
            "Introducing the Visionaries Behind FrictionLearn"
            </h2>
          </div>


          <div className='flex flex-1 justify-evenly  mt-[74px]'>

            <div className='mt-[71px]  ' >
            <img src={mentoroneimg} alt=""  className='w-[280px] h-[450px]' /> 
            <h3 className='text-[#F6F1FF]  text-[25px] font-bold  ml-[30px] mt-[22px]'>ROHITH KUMAR</h3>
            <p  className='text-[#F6F1FF] text-[18px] font-semibold  ml-[50px]'> Marketing Head</p>
            </div>
     <div>
     <img src={mentortwoimg} alt=""  className='w-[356px] h-[596px]' /> 
     <h3 className='text-[#F6F1FF]  text-[25px] font-bold  ml-[90px] mt-[22px]'>VIKAS PAWAR </h3>
     <p className='text-[#F6F1FF] text-[18px] font-semibold  ml-[130px]'> MD & CEO</p>

     </div>

     <div  className='mt-[71px]'>
<img src={mentorthreeimg} alt=""  className='w-[280px] h-[450px]' /> 
<h3 className='text-[#F6F1FF] text-[25px] font-bold  ml-[30px] mt-[22px]'>SEEMA CHAVAN </h3>
<p className='text-[#F6F1FF] text-[18px] font-semibold  ml-[80px]'>Developer</p>

    </div>

    
    </div>

  </div>
</section> */}

      <section className="w-full h-auto bg-[#9791FD] flex justify-center py-10">
        <div className="w-full max-w-[1218px] h-auto bg-[#241443] mt-[60px] p-4">
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center text-center mt-[42px]">
            <h2 className="text-[#FF5C00] text-[18px] sm:text-[28px] md:text-[30px] font-black font-poppines">
              Meet Our Team
            </h2>
            <h2 className="text-[#F6F1FF] text-[20px] sm:text-[20px] md:text-[23px] lg:text-[40px] mt-[20px] px-1 font-bold font-poppines">
              "Introducing the Visionaries Behind FrictionLearn"
            </h2>
          </div>

          {/* Team Members Section */}
          <div className="flex lg:flex-row justify-center gap-6 mt-[74px]">
            <div className="flex flex-col items-center text-center">
              <img
                src={mentoroneimg}
                alt="Rohith Kumar"
                className="w-[200px] sm:w-[280px] md:w-[280px] h-auto sm:h-[400px] md:h-[450px]"
              />
              <h3 className="text-[#F6F1FF] text-[10px] sm:text-[22px] md:text-[25px] font-bold mt-[22px]">
                ROHITH KUMAR
              </h3>
              <p className="text-[#F6F1FF] text-[6px] sm:text-[18px] md:text-[18px] font-semibold">
                Marketing Head
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={mentortwoimg}
                alt="Vikas Pawar"
                className="w-[200px] sm:w-[356px] md:w-[356px] h-auto sm:h-[500px] md:h-[596px]"
              />
              <h3 className="text-[#F6F1FF] text-[10px] sm:text-[22px] md:text-[25px] font-bold mt-[22px]">
                VIKAS PAWAR
              </h3>
              <p className="text-[#F6F1FF] text-[6px] sm:text-[18px] md:text-[18px] font-semibold">
                MD & CEO
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={mentorthreeimg}
                alt="Seema Chavan"
                className="w-[200px] sm:w-[280px] md:w-[280px] h-auto sm:h-[400px] md:h-[450px]"
              />
              <h3 className="text-[#F6F1FF] text-[10px] sm:text-[22px] md:text-[25px] font-bold mt-[22px]">
                SEEMA CHAVAN
              </h3>
              <p className="text-[#F6F1FF] text-[6px] sm:text-[18px] md:text-[18px] font-semibold">
                Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
