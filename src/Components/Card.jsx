import React from 'react';

function Card({ image, title, description }) {
  return (
    <div className=" bg-white border-4 border-l-[#573EE8] border-b-[#573EE8] border-r-[#573EE8]  border-t-[#573EE8]  lg:w-[358px] lg:h-[366px] lg:mx-auto w-[304px] h-[297px] mx-[25px] rounded-[50px] transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex justify-center items-center p-4">
        <img
          className="w-[111px] h-[114px] lg:w-[143px] lg:h-[145px]"
          src={image}
          alt="Card"
        />
      </div>
      <div className="p-1 text-center">
        <h5 className="mb-1 lg:text-[22px] text-[11px] font-black font-Lato font-sans tracking-tight text-[#241443] dark:text-white">
          {title}
        </h5>
        <p className="mb-1 font-Regular text-Poppins lg:text-[16px] text-[11px] text-[#FF5C00] dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
