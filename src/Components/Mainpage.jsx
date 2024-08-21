import React from "react";
import imgfivefive from "../assets/home/imgfivefive.png";
import imgsixsix from "../assets/home/imgsixsix.png";
import imgsevenseven from "../assets/home/imgsevenseven.png";
import imgeighteight from "../assets/home/imgeighteight.png";

import contentImgone from "../assets/home/contentImgone.png";
import contentImgtwo from "../assets/home/contentImgtwo.png";
import contentImgthree from "../assets/home/contentImgthree.png";
import contentImgfour from "../assets/home/contentImgfour.png";
import contentImgfive from "../assets/home/contentImgfive.png";

const IncubationProgram = () => {
  return (
    <div className="flex flex-col items-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#022956]">
        What is Incubation Program?
      </h1>
      <p className="text-lg text-[#F27329] mt-2">
        Find out what incubation entails and how it can help you
      </p>

      <div className="mt-10 w-full max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

        {/* Step 1 */}
        <div className="flex items-center mb-16">
          <div className="flex-1 flex justify-end pr-8 text-right">
            
           
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#022956] rounded-full shadow-lg">
            <span className="text-white text-lg font-bold">1</span>
          </div>
          <div className="flex-1 pl-8">
          <h3 className="text-xl font-semibold text-[#F27329] mb-2">
              Introduction to Incubation
            </h3>
          <img
              src={contentImgone}
              alt="Introduction to Incubation"
              className="rounded-lg shadow-lg w-[302px] h-[254px] mb-2"
            />
             <p className="text-[#1D2228] mt-2">
              Incubation offers various supports to<br></br> transform your idea into
              reality.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center mb-16">
          <div className="flex-1 pr-8">
          <h3 className="text-xl font-semibold text-[#F27329]">Advantages of Incubation</h3>
            <img
              src={contentImgtwo}
              alt="Advantages of Incubation"
              className="rounded-lg shadow-lg w-[302px] h-[254px]"
            />
             <p className="text-[#1D2228] mt-2">
              Gain access to mentors, resources,<br></br> and a collaborative
              environment.
            </p>
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#022956] rounded-full shadow-lg">
            <span className="text-white text-lg font-bold">2</span>
          </div>
          <div className="flex-1 flex justify-start pl-8 text-left">
            
           
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center mb-16">
          <div className="flex-1 flex justify-end pr-8 text-right">
            
            
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#022956] rounded-full shadow-lg">
            <span className="text-white text-lg font-bold">3</span>
          </div>
          <div className="flex-1 pl-8">
          <h3 className="text-xl font-semibold text-[#F27329]">Operational Incubation</h3>
            <img
              src={contentImgthree}
              alt="Operational Incubation"
              className="rounded-lg shadow-lg w-[302px] h-[254px]"
            />
            <p className="text-[#1D2228] mt-2">
              Support for daily operations, helping<br></br> you focus on your growth.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-center mb-16">
          <div className="flex-1 pr-8">
          <h3 className="text-xl font-semibold text-[#F27329]">How Will You Benefit?</h3>
            <img
              src={contentImgfour}
              alt="How Will You Benefit?"
              className="rounded-lg shadow-lg w-[302px] h-[254px]"
            />
             <p className="text-[#1D2228] mt-2">
              Incubation offers structured support,<br></br> access to networks, and
              funding opportunities.
            </p>
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#022956] rounded-full shadow-lg">
            <span className="text-white text-lg font-bold">4</span>
          </div>
          <div className="flex-1 flex justify-start pl-8 text-left">
            
           
          </div>
        </div>

        {/* Step 4a */}
        <div className="flex items-center mb-16">
          <div className="flex-1 flex justify-end pr-8 text-right">
            <h4 className="text-lg font-semibold text-[#F27329]">Structured Process</h4>
            <p className="text-[#1D2228] mt-2">Organized steps to guide you.</p>
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-lg">
            <img src={imgfivefive} alt="" className="w-8 h-8"></img>
          </div>
          <div className="flex-1 pl-8"></div>
        </div>

        {/* Step 4b */}
        <div className="flex items-center mb-16">
          <div className="flex-1 flex justify-end pr-8 text-right">
            <h4 className="text-lg font-semibold text-[#F27329]">Mentors & Networks</h4>
            <p className="text-[#1D2228] mt-2">
              Connect with industry experts and peers.
            </p>
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-lg">
            <img src={imgsixsix} alt="" className="w-8 h-8"></img>
          </div>
          <div className="flex-1 pl-8"></div>
        </div>

        {/* Step 4c */}
        <div className="flex items-center mb-16">
          <div className="flex-1 flex justify-end pr-8 text-right">
            <h4 className="text-lg font-semibold text-[#F27329]">Funding</h4>
            <p className="text-[#1D2228] mt-2">
              Access to capital and financial advice.
            </p>
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-lg">
            <img src={imgsevenseven} alt="" className="w-8 h-8"></img>
          </div>
          <div className="flex-1 pl-8"></div>
        </div>

        {/* Step 4d */}
        <div className="flex items-center mb-16">
          <div className="flex-1 flex justify-end pr-8 text-right">
            <h4 className="text-lg font-semibold text-[#F27329]">Incubation Period</h4>
            <p className="text-[#1D2228] mt-2">
              Support throughout the growth phase.
            </p>
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#FFFFFF] rounded-full shadow-lg">
            <img src={imgeighteight} alt="" className="w-8 h-8"></img>
          </div>
          <div className="flex-1 pl-8"></div>
        </div>

        {/* Step 5 */}
        <div className="flex items-center mt-16">
          <div className="flex-1 flex justify-end pr-8 text-right">
            
            
          </div>
          <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#022956] rounded-full shadow-lg">
            <span className="text-white text-lg font-bold">5</span>
          </div>
          <div className="flex-1 pl-8">
          <h3 className="text-xl font-semibold text-[#F27329]">Incubation Insights</h3>
            <img
              src={contentImgfive}
              alt="Incubation Insights"
              className="rounded-lg shadow-lg w-[302px] h-[254px]"
            />
            <p className="text-[#1D2228] mt-2">
              Get valuable insights and analytics <br></br>to refine your approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncubationProgram;
