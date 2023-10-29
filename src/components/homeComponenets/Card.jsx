import React from "react";

function Card({ title, nbr, description, subject }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-customXl sm:grid-cols-custom md:grid-cols-customMd bg-white rounded-tl-xl rounded-br-xl shadow-sm relative">
      {/* spans */}
      <span className="w-[90%] h-[1.7px] absolute top-0 right-0 bg-primaryColor"></span>
      <span className="w-[2px] h-[90%] absolute top-0 right-0 bg-primaryColor"></span>
      {/* big title  */}
      <div className=" bg-primaryColor  rounded-tl-xl rounded-br-xl p-4">
        <h1 className="text-white font-bold text-6xl">{nbr}+</h1>
        <h2 className="text-white text-2xl font-semibold my-2 text-start ">{title}</h2>
      </div>
      {/* info  */}
      <div className="p-4">
        <h3 className="font-bold text-primaryColor text-xl">{subject}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <div className="bg-primaryColor text-white  text-[12px] w-fit p-1 px-2 rounded-tl-lg rounded-br-lg cursor-pointer absolute right-0 bottom-0">
          <a href="">read more</a>
        </div>
      </div>

    </div>
  );
}

export default Card;
