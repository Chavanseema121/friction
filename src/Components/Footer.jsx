// import React from "react";
// import footerlogo from '../assets/home/footerlogo.png';

// import icons from '../assets/home/icons.png';
// import footerone from "../assets/home/footerone.png"
// import footertwo from "../assets/home/footertwo.png"
// import footerthree from "../assets/home/footerthree.png"

// export default function Footer() {
//   return (
//     <div className="bg-[#022956] w-[full]   mr-[50px]container mx-auto ">
//       <div className="flex justify-between gap-8 items-start w-100% mx-auto px-[104px] py-8 h-[264px] ">
//         <div className="flex flex-col items-start">
//           <img src={footerlogo} alt="FrictionLearn Logo" className="mb-4  w-[150px] h-[79px]" />
//           <h5 className="text-white text-[14px] font-medium">Where Skills Meet Opportunity</h5>
//           <img src={icons} alt="Social Icons"  className="w-[236px] h-[26px] mt-[20px]"/>
//         </div>

//         <div className="text-white flex flex-col items-start">
//           <h4 className="mb-4 text-[24px] font-bold">Contact us</h4>
//           <div className="flex items-center mb-2">
//             <img src={footerone} alt="" className="mr-2 w-[19px] h-[15px]" />
//             <p className="text-[15px] font-normal ">contact@frictionlearn.com</p>
//           </div>
//           <div className="flex items-center mb-2">
//             <img src={footertwo} alt="" className="mr-2   w-[19px] h-[15px]" />
//             <p   className="text-[15px] font-norma">+91 93464 67553</p>
//           </div>
//           <div className="flex items-center">
//             <img src={footerthree} alt="" className="mr-2   w-[19px] h-[15px]" />
//             <p  className="text-[15px] font-normal">www.frictionlearn.com</p>
//           </div>
//         </div>

//         <div className="text-white flex flex-col items-start">
//           <h4 className="mb-4  text-[24px] font-bold">Office Address</h4>
//           <p  className="text-[15px] font-normal text-start">
//             H.no-3-11-368/Flat no; 401,<br />
//             4th Floor, above old Indusind<br />
//             Finance Bank, Back side of<br />
//             Axis Bank, L.B Nagar, <br />
//             Hyderabad, Telangana 500068
//           </p>
//         </div>

//         <div className="text-white flex flex-col items-start">
//           <h3 className="mb-4   text-[24px] font-bold ">Subscribe to our Newsletter</h3>
//           <div className="flex  w-[283px] h-[38px]">
//             <input
//               type="text"
//               placeholder="*Enter your email"
//               className=" placeholder:text-[#FFFFFF]  placeholder:text-[14px] font-normal p-2 rounded-l-md bg-[#022956] border-white border-solid border "
//             />
//             <button className="p-2 bg-white text-[#022956] rounded-r-md font-semibold text-[12px]">Subscribe</button>
//           </div>
//         </div>
//       </div>
//       <div className="text-center text-white  text-[12px]">
//        <p  className=" text-white  text-[12px] pb-[20px]"> © 2024 All rights reserved by DTR Technologies Private Limited</p>
//       </div>
//     </div>
//   );
// }


import React from "react";
import footerlogo from '../assets/home/footerlogo.png';
import icons from '../assets/home/icons.png';
import footerone from "../assets/home/footerone.png";
import footertwo from "../assets/home/footertwo.png";
import footerthree from "../assets/home/footerthree.png";

export default function Footer() {
  return (
    <div className="bg-[#241443] w-full px-4 py-4 md:px-[104px] md:py-8">
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-10 mx-auto w-full">
      
      {/* "Join our Newsletter" section will be at the top on mobile */}
      <div className="text-white flex flex-col items-left order-1 md:order-4">
        <h3 className="mb-4 text-[20px] md:text-[24px] font-bold text-center">Join our Newsletter</h3>
        <div className="flex flex-row w-full">
  <input
    type="text"
    placeholder="*Enter your email"
    className="placeholder:text-[#FFFFFF] placeholder:text-[12px] md:placeholder:text-[14px] font-normal rounded-l-md bg-[#241443] border-white border-solid border w-full"
  />
  <button className="p-2 bg-white text-[#241443] rounded-r-md font-semibold text-[12px] md:text-[14px] w-auto">Subscribe</button>
</div>


      </div>
  
      {/* "FrictionLearn Logo and slogan" section will be at the bottom on mobile */}
      <div className="flex flex-col items-center text-white order-4 md:order-none">
        <img src={footerlogo} alt="FrictionLearn Logo" className="mb-4 w-[120px] h-[63px] md:w-[150px] md:h-[79px]" />
        <h5 className="text-white text-[12px] md:text-[14px] font-medium text-center">Where Skills Meet Opportunity</h5>
        <img src={icons} alt="Social Icons" className="w-[200px] h-[22px] md:w-[236px] md:h-[26px] mt-4" />
      </div>
  
      {/* Contact Us section remains the same */}
      <div className="text-white flex flex-col items-center order-2 md:order-none">
        <h4 className="mb-4 text-[20px] md:text-[24px] font-bold text-left">Contact us</h4>
        <div className="flex items-center mb-2">
          <img src={footerone} alt="" className="mr-2 w-[16px] h-[12px] md:w-[19px] md:h-[15px]" />
          <p className="text-[12px] md:text-[15px] font-normal">contact@frictionlearn.com</p>
        </div>
        <div className="flex items-center mb-2">
          <img src={footertwo} alt="" className="mr-2 w-[16px] h-[12px] md:w-[19px] md:h-[15px]" />
          <p className="text-[12px] md:text-[15px] font-normal">+91 93464 67553</p>
        </div>
        <div className="flex items-center">
          <img src={footerthree} alt="" className="mr-2 w-[16px] h-[12px] md:w-[19px] md:h-[15px]" />
          <p className="text-[12px] md:text-[15px] font-normal">www.frictionlearn.com</p>
        </div>
      </div>
  
      {/* Office Address section remains the same */}
      <div className="text-white flex flex-col items-center order-3 md:order-none">
        <h4 className="mb-6 text-[20px] md:text-[24px] font-bold text-center">Office Address</h4>
        <p className="text-[12px] md:text-[15px] font-normal text-center mb-4">
          L.B Nagar, Hyderabad, <br />
          Telangana 500068
        </p>
      </div>
  
    </div>
  
    <div className="text-center text-white text-[12px] md:text-[14px] mt-4">
      <p>© 2024 All rights reserved by DTR Technologies Private Limited</p>
    </div>
  </div>
  
  );
}


