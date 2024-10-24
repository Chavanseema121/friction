import React from 'react'

function Card({ image, title, description }) {
  return (
    <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
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

    // <div className="animated_card hover:h-[508px] hover:w-[357px] cursor-pointer overflow-hidden rounded-[16px] group">
    //     <div className="animated-card-before w-[50%] h-[180%] rounded-[12px] z-[1] rotate-45 bg-white group-hover:animate-rotate360" />

    //     <div
    //       className="h-[500px] w-[350px] rounded-[16px] z-[10] flex items-center justify-center bg-center bg-cover"
    //       style={{ backgroundImage: `url(${OrangeCity4})` }}
    //     >
    //       <h2 className="text-[20px] font-bold text-cyan-200">My Projects</h2>
    //     </div>
    //   </div>
    
  );
}

export default Card;
