import React from "react";
import footerlogo from '../assets/home/footerlogo.png';
// import icons from '../assets/home/icons.png';
import footerone from "../assets/home/footerone.png";
import footertwo from "../assets/home/footertwo.png";
import footerthree from "../assets/home/footerthree.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/lin.png";
import twitter from "../assets/twitter.png";
import crome from '../assets/browser.png';
// import browser from '../assets/browser.png';
import mails from '../assets/mail.png';


export default function Footer() {
  return (
//     <div className="bg-[#241443] w-full px-4 py-4 md:px-[104px] md:py-8">
//     <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-10 mx-auto w-full">
      
//       {/* "Join our Newsletter" section will be at the top on mobile */}
//       <div className="text-white flex flex-col items-left order-1 md:order-4">
//         <h3 className="mb-4 text-[20px] md:text-[24px] font-bold text-center">Join our Newsletter</h3>
//         <div className="flex flex-row w-full">
//   <input
//     type="text"
//     placeholder="*Enter your email"
//     className="placeholder:text-[#FFFFFF] placeholder:text-[12px] md:placeholder:text-[14px] font-normal rounded-l-md bg-[#241443] border-white border-solid border w-full"
//   />
//   <button className="p-2 bg-white text-[#241443] rounded-r-md font-semibold text-[12px] md:text-[14px] w-auto">Subscribe</button>
// </div>


//       </div>
  
//       {/* "FrictionLearn Logo and slogan" section will be at the bottom on mobile */}
//       <div className="flex flex-col items-center text-white order-4 md:order-none">
//         <img src={footerlogo} alt="FrictionLearn Logo" className="mb-4 w-[120px] h-[63px] md:w-[150px] md:h-[79px]" />
//         <h5 className="text-white text-[12px] md:text-[14px] font-medium text-center">Where Skills Meet Opportunity</h5>
//         <img src={icons} alt="Social Icons" className="w-[200px] h-[22px] md:w-[236px] md:h-[26px] mt-4" />
//       </div>
  
//       {/* Contact Us section remains the same */}
//       <div className="text-white flex flex-col items-center order-2 md:order-none">
//         <h4 className="mb-4 text-[20px] md:text-[24px] font-bold text-left">Contact us</h4>
//         <div className="flex items-center mb-2">
//           <img src={footerone} alt="" className="mr-2 w-[16px] h-[12px] md:w-[19px] md:h-[15px]" />
//           <p className="text-[12px] md:text-[15px] font-normal">contact@frictionlearn.com</p>
//         </div>
//         <div className="flex items-center mb-2">
//           <img src={footertwo} alt="" className="mr-2 w-[16px] h-[12px] md:w-[19px] md:h-[15px]" />
//           <p className="text-[12px] md:text-[15px] font-normal">+91 93464 67553</p>
//         </div>
//         <div className="flex items-center">
//           <img src={footerthree} alt="" className="mr-2 w-[16px] h-[12px] md:w-[19px] md:h-[15px]" />
//           <p className="text-[12px] md:text-[15px] font-normal">www.frictionlearn.com</p>
//         </div>
//       </div>
  
//       {/* Office Address section remains the same */}
//       <div className="text-white flex flex-col items-center order-3 md:order-none">
//         <h4 className="mb-6 text-[20px] md:text-[24px] font-bold text-center">Office Address</h4>
//         <p className="text-[12px] md:text-[15px] font-normal text-center mb-4">
//           L.B Nagar, Hyderabad, <br />
//           Telangana 500068
//         </p>
//       </div>
  
//     </div>
  
//     <div className="text-center text-white text-[12px] md:text-[14px] mt-4">
//       <p>© 2024 All rights reserved by DTR Technologies Private Limited</p>
//     </div>
//   </div>






// correct responsive and web also
<div className="bg-[#241443] w-full h-auto mx-auto">
<div className="flex flex-col  md:flex-row sm:flex-col md:justify-center sm:justify-center lg:justify-around gap-6 items-center lg:items-start w-full lg:mx-auto lg:px-8 py-4 h-auto md:h-auto">
  
  {/* Logo Section - First on lg and xl, Last on sm and md */}
  <div className="flex flex-col lg:items-start order-4 sm:order-4 md:order-4 lg:order-1 ml-0 sm:ml-36 lg:ml-0 sm:items-center">
  <div className="flex flex-col ">
 
  <img src={footerlogo} alt="FrictionLearn Logo" className="mb-2 w-[184px] h-[88px] lg:w-[136px] lg:h-[66px] sm:w-[100px] sm:h-[70px] ml-[10px] md:ml-[100px] lg:ml-[20px]" />
  <h5 className="text-white text-[16px] sm:text-[30px] lg:text-[12px] font-medium font-Lato font-sans">
  “Key to Unlock your Future”
    </h5>
</div>


  
    <div className="flex flex-row justify-between lg:gap-[10px] mt-[20px]">
      {/* Social Media Icons */}
      <a href="https://www.FrictionLearn.com" target="_blank">
          <img src={fb} alt="Facebook Icon" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px]" />
        </a>
        <a href="https://www.linkedin.com/company/frictionlearn/" target="_blank">
          <img src={linkedin} alt="LinkedIn Icon" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px]" />
        </a>
        <a href="https://www.instagram.com/frictionlearn/?utm_source=qr&igsh=MTB1eHdrdGVlc3hieg%3D%3D" target="_blank">
          <img src={insta} alt="Instagram Icon" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px]" />
        </a>
        <a href="https://www.google.com/chrome" target="_blank">
          <img src={crome} alt="Chrome Icon" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px]" />
        </a>
        <a href="mailto:frictionlearn@gmail.com">
          <img src={mails} alt="Mail Icon" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px]" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src={twitter} alt="Twitter Icon" className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px]" />
        </a>
      {/* Other Social Icons */}

    </div>
  </div>

  {/* Contact Us Section */}
  <div className="text-white flex flex-col items-start sm:items-center md:items-center lg:items-start mt-2 md:mt-0 order-2 sm:order-2 md:order-2 ">
    <h4 className="mb-2 text-[17px] sm:text-[30px] lg:text-[22px] font-Lato font-sans font-extrabold  text-center lg:text-left  lg:ml-0 ml-[50px] sm:ml-[20px]">Contact us</h4>
    <div className="flex items-center mb-2">
      <img src={footerone} alt="" className="mr-2 w-[16px] h-[12px] sm:w-[19px] sm:h-[15px]" />
      <p className="text-[12px] sm:text-[30px] lg:text-[15px] font-light font-poppins">frictionlearn@gmail.com</p>
    </div>
    <div className="flex items-center mb-2">
        <img src={footertwo} alt="" className="mr-2 w-[16px] h-[12px] sm:w-[19px] sm:h-[15px]" />
        <p className="   text-[12px] sm:text-[30px] lg:text-[15px] font-light font-poppins">+91 93464 67553</p>
      </div>
      <div className="flex items-center">
        <img src={footerthree} alt="" className="mr-2 w-[16px] h-[12px] sm:w-[19px] sm:h-[15px]" />
        <p className="text-[12px] sm:text-[30px] lg:text-[15px] font-light font-poppins">www.frictionlearn.com</p>
      </div>
    {/* Other Contact Items */}
  </div>

  {/* Office Address Section */}
  <div className="text-white flex flex-col items-start sm:items-center md:items-center lg:items-start mt-2 md:mt-0 order-3 sm:order-3 md:order-3">
    <h4 className="mb-2 text-[17px] sm:text-[30px] lg:text-[22px] font-extrabold font-Lato font-sans lg:text-left  ml-[30px] lg:ml-[-5px]">Office Address</h4>
    <p className="text-[12px] sm:text-[30px] lg:text-[15px] font-light font-poppins text-center lg:text-left">
    L.b Nagar, Hyderabad,<br></br> Telangana Ranga reddy <br></br>Dist. 500068
    </p>
  </div>

  {/* Input Section - Last on lg and xl, First on sm and md */}
  <div className="text-white flex flex-col items-start sm:items-center lg:items-start mt-2 md:mt-0 order-1 lg:order-4">
  {/* Heading */}
  <h3 className="mb-2 text-[17px] sm:text-[25px] lg:text-[22px] font-bold font-Lato ml-[10px] sm:ml-[0] lg:ml-0 text-center lg:text-left">
    Join our Newsletter
  </h3>

  {/* Input and Button Container */}
  <div className="flex w-full max-w-[319px] sm:max-w-[400px] lg:max-w-full mx-auto lg:ml-0">
    <input
      type="text"
      placeholder="*Enter your email"
      className="w-[200px] sm:w-[250px] lg:w-full placeholder:text-[#FFFFFF] placeholder:text-[11px] sm:placeholder:text-[14px] lg:placeholder:text-[12px] font-normal p-2 rounded-l-md bg-[#241443] border-white border-solid border"
    />
    <button className="bg-white text-[#241443] p-2 rounded-r-md font-semibold text-[12px] sm:text-[16px] lg:text-[12px]">
      Subscribe
    </button>
  </div>
</div>


</div>


  <div className="text-center text-white text-[10px] sm:text-[30px] lg:text-[10px] mt-2 font-medium font-Lato font-sans">
    <p className="text-white pb-[20px]">© 2024 All right reserved by DTR Technologies Private Limited</p>
  </div>
</div>



  
  );
}


