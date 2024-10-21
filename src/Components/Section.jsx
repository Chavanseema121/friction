import React, { useEffect } from "react";
// import '../index.css';

import imgoneone from "../assets/home/imgoneone.png";
import imgtwotwo from "../assets/home/imgtwotwo.png";
import imgthreethree from "../assets/home/imgthreethree.png";
import imgfourfour from "../assets/home/imgfourfour.png";
import imgfivefive from "../assets/home/imgfivefive.png";
import imgsixsix from "../assets/home/imgsixsix.png";
import imgsevenseven from "../assets/home/imgsevenseven.png";
import imgeighteight from "../assets/home/imgeighteight.png";
import imgninenine from "../assets/home/imgninenine.png";
import imgtenten from "../assets/home/imgtenten.png";

import contentImgone from "../assets/home/contentImgone.png";
import contentImgtwo from "../assets/home/contentImgtwo.png";
import contentImgthree from "../assets/home/contentImgthree.png";
import contentImgfour from "../assets/home/contentImgfour.png";
import contentImgfive from "../assets/home/contentImgfive.png";
import line from "../assets/home/line.png";
// import linetwo from '../assets/linetwo.png';
// import hori from '../assets/hori.png';
// import vertical from '../assets/vertical line.png';

import star from "../assets/home/star.png";

import "../Components/Style.css";

const images = {
  imgoneone,
  imgtwotwo,
  imgthreethree,
  imgfourfour,
  imgfivefive,
  imgsixsix,
  imgsevenseven,
  imgeighteight,
  imgninenine,
  imgtenten,
  contentImgone,
  contentImgtwo,
  contentImgthree,
  contentImgfour,
  contentImgfive,
};

export default function Section() {
  useEffect(() => {
    const handleAnimationEnd = () => {
      const button = document.getElementById("apply-button");
      if (button) {
        button.style.backgroundColor = "#FFFFFF"; // White background
        button.style.color = "#022956"; // Blue text
      }
    };

    const animationEndTrigger = document.querySelector(".animate-endanimation");
    if (animationEndTrigger) {
      animationEndTrigger.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (animationEndTrigger) {
        animationEndTrigger.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    };
  }, []);

  return (
    // <div className="w-full flex flex-col h-auto  mb-[50px]">
    //   <div className=" flex flex-col justify-center text-center mb-[50px]">
    //   <div  className="flex items-center justify-center">
    //   <img src={star} alt="star" className="w-[36px] h-[36px] mr-[-10px] mb-[-80px]" />
    //     <h2 className="text-[#FF5C00] mt-[82px] text-[30px] font-black font-Lato font-sans ">
    //       What is Incubation Program?
    //     </h2>
    //   </div>
    //     <p className="text-[40px] text-[#241443] font-semibold mt-[10px] text-Poppins">
    //     Find Your Idea to get Life in Real World with Our <span className="text-[#FF5C00]">Friction</span>Learn <br></br>
    //     Dynamic Incubation Program
    //     </p>
    //   </div>

    //   <div className="flex justify-center"></div>

    //   <div className="timeline relative mx-auto after:content-[''] after:absolute after:w-[3px] after:h-[3400px] after:bg-gray-300 after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:z-[-1]   after:animate-moveline">

    //     <div className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0 delay-[0s]">
    //       <div className="img absolute left-[-90px] top-[0px] z-10 ">
    //         <img
    //           src={images.imgoneone}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px]"
    //         />
    //       </div>
    //       <div className="text-box  ml-[10px]  ">
    //         <div className="content">
    //           <h3 className=" text-[#241443] text-[30px] font-black ml-[65px]">
    //             Introduction to Incubation
    //           </h3>
    //           <img
    //             src={images.contentImgone}
    //             className="content-imag w-[302px] h-[254px] ml-[100px] mt-[10px]"
    //             alt="Content"
    //           />
    //           <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //             Incubation programs offer the support and mentorship <br></br>to
    //             unlock your startup potential.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 delay-[1s]">
    //       <div className="img absolute right-[40px] top-[32px] z-10">
    //         <img
    //           src={images.imgtwotwo}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px] mr-[60px] "
    //         />
    //       </div>
    //       <div className="text-box mr-[150px] mt-[35px] ">
    //         <div className="content">
    //           <h3 className=" text-[#241443] text-[30px] font-black ml-[10px]">
    //             Advantages of Incubation
    //           </h3>
    //           <img
    //             src={images.contentImgtwo}
    //             className="content-imag w-[302px] h-[254px] ml-[50px] mt-[10px] "
    //             alt="Content"
    //           />
    //           <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //             It sharpens your business ideas, offers expert guidance,
    //             <br></br> and provides resources to accelerate startup growth..
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0 delay-[2s]">
    //       <div className="img absolute left-[-90px] top-[32px] z-10">
    //         <img
    //           src={images.imgthreethree}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px]"
    //         />
    //       </div>
    //       <div className="text-box  ml-[10px] mt-[35px] ">
    //         <div className="content">
    //           <h3 className=" text-[#241443] text-[30px] font-black ml-[65px]">
    //             Operational Mechanism
    //           </h3>
    //           <img
    //             src={images.contentImgthree}
    //             className="content-imag w-[302px] h-[254px] ml-[100px] mt-[10px] "
    //             alt="Content"
    //           />
    //           <p className="text-center  text-[#FF5C00] text-[18px]   mt-[20px]">
    //             Validate ideas, build prototypes, and prepare for market{" "}
    //             <br></br>entry through structured mentorship.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 delay-[3s]">
    //       <div className="img absolute right-[40px] top-[32px] z-10">
    //         <img
    //           src={images.imgfourfour}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px] mr-[60px] "
    //         />
    //       </div>
    //       <div className="text-box mr-[150px] mt-[35px]   ">
    //         <div className="content">
    //           <h3 className=" text-[#241443] text-[30px] font-black ml-[50px]">
    //             How Will You Benefit?
    //           </h3>
    //           <img
    //             src={images.contentImgfour}
    //             className="content-imag w-[302px] h-[254px] ml-[60px] mt-[10px] text-center"
    //             alt="Content"
    //           />
    //           <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //             Navigate the incubation process with these steps.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex felx-col  ml-[200px]">
    //       <img src={line} alt="" className="h-[94px] w-[12px] text-center" />
    //     </div>

    //     <div className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 delay-[4s]  ">
    //       <div className="img absolute right-[40px] top-[32px] z-10">
    //         <img
    //           src={images.imgfivefive}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px] mr-[60px] "
    //         />
    //       </div>
    //       <div className="text-box mr-[150px] align-middle  ">
    //         <div className="content">
    //           <h3 className="  text-[22px] font-semibold  text-center">Join</h3>

    //           <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //             Join the incubation program to start your<br></br>{" "}
    //             entrepreneurial journey.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex felx-col  ml-[200px] mt-[-10px]">
    //       <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
    //     </div>
    //     <div className="flex felx-row  ml-[300px] mt-[-100px]">
    //       <img
    //         src={line}
    //         alt=""
    //         className="h-[192px] w-[8px] text-center -rotate-90 "
    //       />
    //     </div>

    //     <div
    //       className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0  mt-[-150px]   "
    //       style={{ animationDelay: "5s" }}
    //     >
    //       <div className="img absolute left-[-90px]  z-10">
    //         <img
    //           src={images.imgsixsix}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px]"
    //         />
    //       </div>
    //       <div className="text-box  ml-[10px]  ">
    //         <div className="content">
    //           <h3 className="  text-[22px] font-semibold   text-center">
    //             Interview by Mentors
    //           </h3>

    //           <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //             Engage in one-on-one sessions with<br></br> industry mentors to
    //             refine your<br></br> business model..
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex felx-col  ml-[850px] mt-[20px]">
    //       <img src={line} alt="" className="h-[140px] w-[13px] text-center" />
    //     </div>
    //     <div className="flex felx-row  ml-[730px] mt-[-120px]">
    //       <img
    //         src={line}
    //         alt=""
    //         className="h-[252px] w-[8px] text-center rotate-90 "
    //       />
    //     </div>

    //     <div
    //       className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 mt-[-210px]  "
    //       style={{ animationDelay: "6s" }}
    //     >
    //       <div className="img absolute right-[40px] top-[32px] z-10">
    //         <img
    //           src={images.imgsevenseven}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px] mr-[60px] "
    //         />
    //       </div>
    //       <div className="text-box mr-[150px]   ">
    //         <div className="content">
    //           <h3 className="text-[22px] font-semibold ml-[10px] text-center">
    //             Evaluation Process
    //           </h3>

    //           <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //             Receive feedback and guidance during <br></br>the evaluation of
    //             your business idea.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex felx-col  ml-[200px] mt-[20px] ">
    //       <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
    //     </div>
    //     <div className="flex felx-row  ml-[300px] mt-[-100px]">
    //       <img
    //         src={line}
    //         alt=""
    //         className="h-[192px] w-[8px] text-center -rotate-90 "
    //       />
    //     </div>

    //     <div
    //       className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0   mb-[100px]  mt-[-170px]"
    //       style={{ animationDelay: "7s" }}
    //     >
    //       <div className="img absolute left-[-90px] top-[32px] z-10">
    //         <img
    //           src={images.imgeighteight}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px]"
    //         />
    //       </div>
    //       <div className="text-box  ml-[20px]  ">
    //         <div className="content">
    //           <h3 className=" text-[22px] font-semibold  text-center ">
    //             Finalizing
    //           </h3>

    //           <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //             Finalize your business plan and prepare<br></br> for
    //             presentation.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex felx-col  ml-[850px] mt-[-10px]">
    //       <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
    //     </div>
    //     <div className="flex felx-row  ml-[760px] mt-[-100px]">
    //       <img
    //         src={line}
    //         alt=""
    //         className="h-[192px] w-[8px] text-center rotate-90 "
    //       />
    //     </div>

    //     <div
    //       className="container two right-0 relative py-[10px] pr-[50px] w-[650px] mr-[350px] animate-movedown opacity-0 mb-[100px] mt-[-200px]"
    //       style={{ animationDelay: "8s" }}
    //     >
    //       <div className="img absolute right-[40px] top-[32px] z-10">
    //         <img
    //           src={images.imgninenine}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px] mr-[60px] "
    //         />
    //       </div>
    //       <div className="text-box mr-[150px]   ">
    //         <div className="content">
    //           <h3 className=" text-[22px] font-semibold ml-[10px]  text-center">
    //             Selection
    //           </h3>

    //           <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //             Selected startups receive incubation<br></br> support based on
    //             potential and<br></br> feasibility.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div
    //       className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown  opacity-0 "
    //       style={{ animationDelay: "9s" }}
    //     >
    //       <div className="img absolute left-[-90px] top-[32px] z-10">
    //         <img
    //           src={images.imgtenten}
    //           alt="Operational Mechanism"
    //           className="w-[100px] h-[100px]"
    //         />
    //       </div>
    //       <div className="text-box  ml-[10px]  ">
    //         <div className="content">
    //           <h3 className=" text-[#241443] text-[30px] font-black ml-[105px]">
    //             Incubation Insights
    //           </h3>
    //           <img
    //             src={images.contentImgfive}
    //             className="content-imag w-[302px] h-[254px] ml-[100px] "
    //             alt="Content"
    //           />
    //           <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //             Validate ideas, build prototypes, and prepare for market
    //             <br></br> entry through structured mentorship. <br></br>to
    //             unlock your startup's potential.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="button w-[190px] h-[48px] flex text-center justify-center align-middle ml-[400px] animate-endanimation">
    //       <button
    //         id="apply-button"
    //         className="w-[190px] h-[48px] text-[16px] text-[#FFFFFF] font-bold bg-[#241443]  transform transition-transform duration-300  rounded-md hover:text-[#022956] hover:bg-white hover:border border-[#022956]"
    //       >
    //         Apply Now
    //       </button>
    //     </div>
    //     <div id="animation-end-trigger"></div>
    //   </div>
    // </div>

    //     <div className="w-full flex flex-col h-auto  mb-[50px]">
    //       <div className=" flex flex-col justify-center text-center mb-[50px]">
    //         <h2 className="text-[#FF5C00] mt-[82px] text-[30px] font-bold ">
    //           Our Instructor/Mentors
    //         </h2>
    //         <p className="px-1 sm:px-4 text-[22px] sm:text-[30px] lg:text-[40px]  text-[#241443] font-bold mt-[40px]">
    //           Find Your Idea to get Life in Real World with Our
    //           <span className="px-1 sm:px-4 text-[25px] sm:text-[30px] lg:text-[40px]  font-bold  text-[#FF5C00]  ">
    //             {" "}
    //             Friction
    //           </span>
    //           Learn
    //           <br></br>Dynamic Incubation Program
    //         </p>
    //       </div>

    //       <div className="flex justify-center"></div>

    //       <div
    //         className="timeline relative
    //   after:content-[''] after:absolute after:w-[3px] after:h-[3890px] after:bg-gray-300 after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:z-[-1] after:animate-moveline

    //   my-0 mx-auto

    // "
    //       >
    //         {/* one right img */}
    //         {/* First timeline item - Right aligned */}
    //         <div className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0 delay-[0s]">
    //           <div className="img absolute left-[-90px] top-[0px] z-10 ">
    //             <img
    //               src={images.img1}
    //               alt="Operational Mechanism"
    //               className="  right w-[100px] h-[100px]"
    //             />
    //           </div>
    //           <div className="text-box  ml-[10px]  ">
    //             <div className="content">
    //               <h3 className=" text-[#241443] text-[30px] font-black ml-[65px]">
    //                 Introduction to Incubation
    //               </h3>
    //               <img
    //                 src={images.contentImg1}
    //                 className="content-imag w-[302px] h-[254px] ml-[100px] mt-[10px]"
    //                 alt="Content"
    //               />
    //               <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //                 Incubation programs offer the support and mentorship <br></br>to
    //                 unlock your startup's potential.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* two left img */}
    //         {/* Second timeline item - Left aligned */}
    //         <div className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 delay-[1s]">
    //           <div className="img absolute right-[40px] top-[32px] z-10">
    //             <img
    //               src={images.img2}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px] mr-[60px] "
    //             />
    //           </div>
    //           <div className="text-box mr-[150px] mt-[35px] ">
    //             <div className="content">
    //               <h3 className="  text-[#241443] text-[30px] font-black ml-[10px]">
    //                 Advantages of Incubation
    //               </h3>
    //               <img
    //                 src={images.contentImg2}
    //                 className="content-imag  w-[302px] h-[254px] ml-[50px] mt-[10px] "
    //                 alt="Content"
    //               />
    //               <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //                 It sharpens your business ideas, offers expert guidance,
    //                 <br></br> and provides resources to accelerate startup growth..
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* three right img */}
    //         {/* First timeline item - Right aligned */}

    //         <div className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0 delay-[2s]">
    //           <div className="img absolute left-[-90px] top-[32px] z-10">
    //             <img
    //               src={images.img3}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px]"
    //             />
    //           </div>
    //           <div className="text-box  ml-[10px] mt-[35px] ">
    //             <div className="content">
    //               <h3 className="  text-[#241443] text-[30px] font-black ml-[65px]">
    //                 Operational Mechanism
    //               </h3>
    //               <img
    //                 src={images.contentImg3}
    //                 className="content-imag w-[302px] h-[254px] ml-[100px] mt-[10px] "
    //                 alt="Content"
    //               />
    //               <p className="text-center  text-[#FF5C00] text-[18px]   mt-[20px]">
    //                 Validate ideas, build prototypes, and prepare for market{" "}
    //                 <br></br>entry through structured mentorship.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* four left img */}
    //         {/* Second timeline item - Left aligned */}

    //         <div className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]  animate-movedown  opacity-0 delay-[3s]">
    //           <div className="img absolute right-[40px] top-[32px] z-10">
    //             <img
    //               src={images.img4}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px] mr-[60px] "
    //             />
    //           </div>
    //           <div className="text-box mr-[150px] mt-[35px]   ">
    //             <div className="content">
    //               <h3 className="  text-[#241443] text-[30px] font-black ml-[50px]">
    //                 How Will You Benefit?
    //               </h3>
    //               <img
    //                 src={images.contentImg4}
    //                 className="content-imag w-[302px] h-[254px] ml-[60px] mt-[10px] text-center"
    //                 alt="Content"
    //               />
    //               <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //                 Navigate the incubation process with these steps.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-col ml-[200px]    hidden sm:hidden  lg:block">
    //           <img src={line} alt="" className="h-[94px] w-[12px] text-center" />
    //         </div>

    //         {/* middle content one  */}

    //         {/* one left */}
    //         <div className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 delay-[4s]  ">
    //           <div className="img absolute right-[40px] top-[32px] z-10">
    //             <img
    //               src={images.img5}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px] mr-[60px] "
    //             />
    //           </div>
    //           <div className="text-box mr-[150px] align-middle  ">
    //             <div className="content">
    //               <h3 className=" middle-content text-[22px] font-semibold  text-center  text-[#241443]">
    //                 Join
    //               </h3>

    //               <p className=" text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //                 Join the incubation program to start your<br></br>{" "}
    //                 entrepreneurial journey.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex felx-col  ml-[200px] mt-[-10px]   hide-on-mobile   ">
    //           <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
    //         </div>
    //         <div className="flex felx-row  ml-[300px] mt-[-100px]  hide-on-mobile   ">
    //           <img
    //             src={line}
    //             alt=""
    //             className="h-[192px] w-[8px] text-center -rotate-90 "
    //           />
    //         </div>

    //         {/* one right */}

    //         <div
    //           className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0  mt-[-150px]   "
    //           style={{ animationDelay: "5s" }}
    //         >
    //           <div className="img absolute left-[-90px]  z-10">
    //             <img
    //               src={images.img6}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px]"
    //             />
    //           </div>
    //           <div className="text-box  ml-[10px]  ">
    //             <div className="content">
    //               <h3 className=" middle-content  text-[22px] font-semibold text-[#241443]  text-center">
    //                 Interview by Mentors
    //               </h3>

    //               <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //                 Engage in one-on-one sessions with<br></br> industry mentors to
    //                 refine your<br></br> business model..
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-col ml-[850px] mt-[20px]">
    //           <img
    //             src={line}
    //             alt=""
    //             className="h-[140px] w-[13px] text-center  hidden sm:hidden lg:block"
    //           />
    //         </div>

    //         <div className="flex flex-row ml-[730px] mt-[-120px] ">
    //           <img
    //             src={line}
    //             alt=""
    //             className="h-[252px] w-[8px] text-center rotate-90 hidden sm:hidden lg:block"
    //           />
    //         </div>

    //         {/* two left */}

    //         <div
    //           className="container two right-0 relative py-[10px] pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 mt-[-210px]  "
    //           style={{ animationDelay: "6s" }}
    //         >
    //           <div className="img absolute right-[40px] top-[32px] z-10">
    //             <img
    //               src={images.img7}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px] mr-[60px] "
    //             />
    //           </div>
    //           <div className="text-box mr-[150px]   ">
    //             <div className="content">
    //               <h3 className="     middle-content    text-[22px] font-semibold ml-[10px] text-center   text-[#241443]">
    //                 Evaluation Process
    //               </h3>

    //               <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //                 Receive feedback and guidance during <br></br>the evaluation of
    //                 your business idea.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex felx-col  ml-[200px] mt-[20px]  hide-on-mobile    hidden sm:hidden  lg:block">
    //           <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
    //         </div>
    //         <div className="flex felx-row  ml-[300px] mt-[-100px]   hide-on-mobile   hidden sm:hidden  lg:block">
    //           <img
    //             src={line}
    //             alt=""
    //             className="h-[192px] w-[8px] text-center -rotate-90 "
    //           />
    //         </div>

    //         {/* two right */}
    //         <div
    //           className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0   mb-[100px]  mt-[-170px]"
    //           style={{ animationDelay: "7s" }}
    //         >
    //           <div className="img absolute left-[-90px] top-[32px] z-10">
    //             <img
    //               src={images.img8}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px]"
    //             />
    //           </div>
    //           <div className="text-box  ml-[20px]  ">
    //             <div className="content">
    //               <h3 className="  middle-content    text-[22px] font-semibold  text-center  text-[#241443] ">
    //                 Finalizing
    //               </h3>

    //               <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //                 Finalize your business plan and prepare<br></br> for
    //                 presentation.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-col  ml-[850px] mt-[-10px]   hide-on-mobile   hidden sm:hidden  lg:block">
    //           <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
    //         </div>
    //         <div className="flex flex-row  ml-[760px] mt-[-100px]    hide-on-mobile  ">
    //           <img
    //             src={line}
    //             alt=""
    //             className="h-[192px] w-[8px] text-center rotate-90 "
    //           />
    //         </div>

    //         {/* three left */}

    //         <div
    //           className="container two right-0 relative py-[10px] pr-[50px] w-[650px] mr-[350px] animate-movedown opacity-0 mb-[100px] mt-[-200px]"
    //           style={{ animationDelay: "8s" }}
    //         >
    //           <div className="img absolute right-[40px] top-[32px] z-10">
    //             <img
    //               src={images.img9}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px] mr-[60px] "
    //             />
    //           </div>
    //           <div className="text-box mr-[150px]   ">
    //             <div className="content">
    //               <h3 className="  middle-content text-[22px] font-semibold ml-[10px] text-[#241443] text-center">
    //                 Selection
    //               </h3>

    //               <p className="text-center  text-[#FF5C00] text-[18px]  mt-[20px]">
    //                 Selected startups receive incubation<br></br> support based on
    //                 potential and<br></br> feasibility.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* five right img */}
    //         {/* First timeline item - Right aligned */}
    //         <div
    //           className="container one left-1/2 relative py-[10px] px-[50px] ml-[40px] w-[650px]  animate-movedown  opacity-0 "
    //           style={{ animationDelay: "9s" }}
    //         >
    //           <div className="img absolute left-[-90px] top-[32px] z-10">
    //             <img
    //               src={images.img10}
    //               alt="Operational Mechanism"
    //               className="w-[100px] h-[100px]"
    //             />
    //           </div>
    //           <div className="text-box  ml-[10px]  ">
    //             <div className="content">
    //               <h3 className=" text-[#241443] text-[30px] font-black ml-[105px]">
    //                 Incubation Insights
    //               </h3>
    //               <img
    //                 src={images.contentImg5}
    //                 className="content-imag w-[302px] h-[254px] ml-[100px] "
    //                 alt="Content"
    //               />
    //               <p className="text-center  text-[#FF5C00] text-[18px] mt-[20px]">
    //                 Validate ideas, build prototypes, and prepare for market
    //                 <br></br> entry through structured mentorship. <br></br>to
    //                 unlock your startup's potential.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="button w-[190px] h-[48px] flex text-center justify-center align-middle ml-[400px] animate-endanimation">
    //           <button
    //             id="apply-button"
    //             className="w-[190px] h-[48px] text-[16px] text-[#FFFFFF] font-bold bg-[#022956]  transform transition-transform duration-300  rounded-md hover:text-[#022956] hover:bg-white hover:border border-[#022956]"
    //           >
    //             Apply Now
    //           </button>
    //         </div>
    //         <div id="animation-end-trigger"></div>
    //       </div>
    //     </div>

    <div className="w-full flex flex-col h-auto mt-[40px] lg:mt-[50px] lg:mb-[50px]">
      <div className=" flex flex-col justify-center text-center">
      <div className="flex items-center justify-center">
      <img
                src={star}
                alt="star"
                className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] mr-[-10px] mb-[0px]"
              />
        <h2 className="text-[#FF5C00] lg:text-[30px] text-[18px] font-bold font-Lato ">
          How the Process?
        </h2>
      </div>
        <p className="px-1 sm:px-4 text-[20px] sm:text-[30px] lg:text-[40px]  text-[#241443] font-semibold mt-[20px] font-poppins">
          Find Your Idea to get Life in Real World with Our
          <span className="px-1 sm:px-4 text-[25px] sm:text-[30px] lg:text-[40px]  font-bold  text-[#FF5C00]  ">
            {" "}
            Friction
          </span>
          Learn
          <br></br>Dynamic Incubation Program
        </p>
      </div>

      <div className="flex justify-center"></div>

      <div
        className=" lg:mt-[80px] mt-[40px] timeline relative 
after:content-[''] after:absolute after:w-[3px] after:h-[3890px] after:bg-gray-300 after:top-0 
sm:after:left-[31px] after:left-[3/10]
md:after:left-1/2 after:transform after:-translate-x-1/2 after:z-[-1] after:animate-moveline

my-0 mx-auto

"
      >
        {/* one right img */}
        {/* First timeline item - Right aligned */}
        <div className="container one left-1/2 relative py-6 px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0 delay-[0s]">
          <div className="img absolute left-[-90px] top-[0px] z-10 ">
            <img
              src={images.imgoneone}
              alt="Operational Mechanism"
              className="  right w-[100px] h-[100px]"
            />
          </div>
          <div className="text-box ml-[10px]  ">
            <div className="content">
              <h3 className=" text-[#241443] lg:text-[30px] text-[18px] font-black font-Lato ml-[65px]">
                Introduction to Incubation
              </h3>
              <img
                src={images.contentImgone}
                className="content-imag w-[302px] h-[254px] ml-[100px] mt-[10px]"
                alt="Content"
              />
              <p className="text-center text-[#FF5C00] text-[18px] mt-[20px] font-medium">
                Incubation programs offer the support and mentorship to
                unlock your startup's potential.
              </p>
            </div>
          </div>
        </div>

        {/* two left img */}
        {/* Second timeline item - Left aligned */}
        <div className="container two right-0 relative py-6 pr-[50px]  w-[650px] mr-[350px]  animate-movedown opacity-0 delay-[1s]">
          <div className="img absolute right-[40px] top-[32px] z-10">
            <img
              src={images.imgtwotwo}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px] mr-[60px] "
            />
          </div>
          <div className="text-box mr-[150px] mt-[35px] ">
            <div className="content">
              <h3 className="  text-[#241443] lg:text-[30px] text-[18px] font-black font-Lato ml-[10px]">
                Advantages of Incubation
              </h3>
              <img
                src={images.contentImgtwo}
                className="content-imag  w-[302px] h-[254px] ml-[50px] mt-[20px] "
                alt="Content"
              />
              <p className="text-center text-[#FF5C00] text-[18px] mt-[20px] font-medium">
                It sharpens your business ideas, offers expert guidance,
                and provides resources to accelerate startup growth..
              </p>
            </div>
          </div>
        </div>

        {/* three right img */}
        {/* First timeline item - Right aligned */}

        <div className="container one left-1/2 relative py-6 px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0 delay-[2s]">
          <div className="img absolute left-[-90px] top-[32px] z-10">
            <img
              src={images.imgthreethree}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="text-box  ml-[10px] mt-[35px] ">
            <div className="content">
              <h3 className="text-[#241443] lg:text-[30px] text-[18px] font-black font-Lato ml-[65px]">
                Operational Mechanism
              </h3>
              <img
                src={images.contentImgthree}
                className="content-imag w-[302px] h-[254px] ml-[100px] mt-[10px] "
                alt="Content"
              />
              <p className="text-center  text-[#FF5C00] text-[18px] font-medium mt-[20px]">
                Validate ideas, build prototypes, and prepare for market entry through structured mentorship.
              </p>
            </div>
          </div>
        </div>

        {/* four left img */}
        {/* Second timeline item - Left aligned */}

        <div className="container two right-0 relative py-6 pr-[50px]  w-[650px] mr-[350px]  animate-movedown  opacity-0 delay-[3s]">
          <div className="img absolute right-[40px] top-[32px] z-10">
            <img
              src={images.imgfourfour}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px] mr-[60px] "
            />
          </div>
          <div className="text-box mr-[150px] mt-[35px]   ">
            <div className="content">
              <h3 className="text-[#241443] lg:text-[30px] text-[18px] font-black font-Lato ml-[50px]">
                How Will You Benefit?
              </h3>
              <img
                src={images.contentImgfour}
                className="content-imag w-[302px] h-[254px] ml-[60px] mt-[10px] text-center"
                alt="Content"
              />
              <p className="text-center text-[#FF5C00] text-[18px] font-medium mt-[20px]">
                Navigate the incubation process with these steps.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-[200px]  hidden sm:hidden  md:block">
          <img src={line} alt="" className="h-[94px] w-[12px] text-center" />
        </div>

        {/* middle content one  */}

        {/* one left */}
        <div className="container two right-0 relative py-6 pr-[80px] w-[650px] mr-[350px] animate-movedown  opacity-0 delay-[4s] mx-auto ">
          <div className="img absolute right-[40px] top-[32px] z-10">
            <img
              src={images.imgfivefive}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px] mr-[60px] "
            />
          </div>
          <div className="text-box mr-[150px] md:align-middle">
            <div className="content">
              <h3 className="middle-content md:text-[22px] text-[20px] sm:text-[20px] font-semibold font-lato text-center text-[#241443] sm:ml-0 lg:ml-[-20px]">
                Join
              </h3>

              <p className="text-center text-[#FF5C00] sm:text-[#FF5C00] md:text-[#FF5C00] md:text-[18px] sm:text-[14px] text-[14px] font-Regular font-Lato mt-[20px]">
                Join the incubation program to start your
                entrepreneurial journey.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex flex-col ml-[200px] mt-[-10px] sm:hidden  hidden">
          <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
        </div>
        <div className="md:flex flex-row ml-[300px] mt-[-100px] sm:hidden hidden ">
          <img
            src={line}
            alt=""
            className="h-[192px] w-[8px] text-center -rotate-90"
          />
        </div>

        {/* one right */}

        <div
          className="container one left-1/2 relative py-6 px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0  md:mt-[-150px]   mt-[100px] sm:mt-[100px] "
          style={{ animationDelay: "5s" }}
        >
          <div className="img absolute left-[-90px]  z-10">
            <img
              src={images.imgsixsix}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="text-box  ml-[10px]  ">
            <div className="content">
              <h3 className=" middle-content  md:text-[22px] text-[20px] sm:text-[20px]  font-lato font-semibold text-[#241443]  text-center">
                Interview by Mentors
              </h3>

              <p className="text-center   text-[#1D2228] sm:text-[#1D2228] md:text-[#FF5C00] md:text-[18px]  sm:text-[14px] text-[14px]  font-medium mt-[20px]">
                Engage in one-on-one sessions with industry mentors to
                refine your business model..
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex flex-col ml-[850px] mt-[20px]  sm:hidden  hidden ">
          <img src={line} alt="" className="h-[140px] w-[13px] text-center  " />
        </div>

        <div className="md:flex flex-row ml-[730px] mt-[-120px]   sm:hidden  hidden ">
          <img
            src={line}
            alt=""
            className="h-[252px] w-[8px] text-center rotate-90 "
          />
        </div>

        {/* two left */}

        <div
          className="container two right-0 relative py-6 pr-[50px]  w-[650px] mr-[350px]   animate-movedown  opacity-0 md:mt-[-210px]   mt-[100px] sm:mt-[100px]"
          style={{ animationDelay: "6s" }}
        >
          <div className="img absolute right-[40px] top-[32px] z-10">
            <img
              src={images.imgsevenseven}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px] mr-[60px] "
            />
          </div>
          <div className="text-box mr-[150px]   ">
            <div className="content">
              <h3 className="     middle-content   md:text-[22px] text-[20px] sm:text-[20px]  font-lato font-semibold ml-[10px] text-center   text-[#241443]">
                Evaluation Process
              </h3>

              <p className="text-center   text-[#1D2228] sm:text-[#1D2228] md:text-[#FF5C00] md:text-[18px]  sm:text-[14px] text-[14px]  font-medium  mt-[20px]">
                Receive feedback and guidance during the evaluation of
                your business idea.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex felx-col  ml-[200px] mt-[20px]  hide-on-mobile  sm:hidden  hidden  ">
          <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
        </div>
        <div className="md:flex felx-row  ml-[300px] mt-[-100px]   hide-on-mobile sm:hidden  hidden">
          <img
            src={line}
            alt=""
            className="h-[192px] w-[8px] text-center -rotate-90 "
          />
        </div>

        {/* two right */}
        <div
          className="container one left-1/2 relative py-6 px-[50px] ml-[40px] w-[650px]  animate-movedown opacity-0   mb-[100px]  md:mt-[-170px]   mt-[100px] sm:mt-[100px]"
          style={{ animationDelay: "7s" }}
        >
          <div className="img absolute left-[-90px] top-[32px] z-10">
            <img
              src={images.imgeighteight}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="text-box  ml-[20px]  ">
            <div className="content">
              <h3 className="  middle-content  md:text-[22px] text-[20px] sm:text-[20px]  font-lato font-semibold  text-center  text-[#241443] ">
                Finalizing
              </h3>

              <p className="text-center   text-[#1D2228] sm:text-[#1D2228] md:text-[#FF5C00] md:text-[18px]  sm:text-[14px] text-[14px]  font-medium mt-[20px]">
                Finalize your business plan and prepare for
                presentation.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  ml-[850px] mt-[-10px]   hide-on-mobile  ">
          <img src={line} alt="" className="h-[150px] w-[13px] text-center" />
        </div>
        <div className="flex flex-row  ml-[760px] mt-[-100px]    hide-on-mobile  ">
          <img
            src={line}
            alt=""
            className="h-[192px] w-[8px] text-center rotate-90 "
          />
        </div>

        {/* three left */}

        <div
          className="container two right-0 relative py-6 pr-[50px] w-[650px] mr-[350px] animate-movedown opacity-0 mb-[100px] mt-[-200px]"
          style={{ animationDelay: "8s" }}
        >
          <div className="img absolute right-[40px] top-[32px] z-10">
            <img
              src={images.imgninenine}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px] mr-[60px] "
            />
          </div>
          <div className="text-box mr-[150px]   ">
            <div className="content">
              <h3 className="  middle-content md:text-[22px] text-[20px] sm:text-[20px]  font-lato font-semibold ml-[10px] text-[#241443] text-center">
                Selection
              </h3>

              <p className="text-center text-[#FF5C00] sm:text-[#1D2228] md:text-[#FF5C00] md:text-[18px]  sm:text-[14px] text-[14px]  font-medium  mt-[20px]">
                Selected startups receive incubation support based on
                potential and feasibility.
              </p>
            </div>
          </div>
        </div>

        {/* five right img */}
        {/* First timeline item - Right aligned */}
        <div
          className="container one left-1/2 relative py-6 px-[50px] ml-[40px] w-[650px] animate-movedown opacity-0 "
          style={{ animationDelay: "9s" }}
        >
          <div className="img absolute left-[-90px] top-[32px] z-10">
            <img
              src={images.imgtenten}
              alt="Operational Mechanism"
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="text-box ml-[10px] ">
            <div className="content">
              <h3 className=" text-[#241443] lg:text-[30px] text-[18px] font-black font-Lato ml-[105px]">
                Incubation Insights
              </h3>
              <img
                src={images.contentImgfive}
                className="content-imag w-[302px] h-[254px] ml-[100px] "
                alt="Content"
              />
              <p className="text-center text-[#FF5C00] text-[18px] mt-[20px] font-medium">
                Validate ideas, build prototypes, and prepare for market
                 entry through structured mentorship to
                unlock your startup's potential.
              </p>
            </div>
          </div>
        </div>

        <div className=" hidden button md:w-[190px] h-[48px]  sm:w-[260px]  w-[260px]  lg:flex text-center justify-center align-middle md:ml-[400px] sm:mt-8  mt-18 md:mt-0  sm:ml-9 ml-20 animate-endanimation">
          <button
            id="apply-button"
            className="w-[190px] h-[48px] text-[16px] text-[#FFFFFF] font-bold bg-[#022956]  transform transition-transform duration-300  rounded-md hover:text-[#022956] hover:bg-white hover:border border-[#022956]"
          >
            Apply Now
          </button>
        </div>
        <div id="animation-end-trigger"></div>
      </div>
    </div>
  );
}
