import React from "react";
import image from "../../assets/i1.jpg";
function OurArticleCard() {
  return (
    <div className=" relative w-[280px] h-fit mx-auto mt-5 ">
      <div></div>
      <img src={image} className=" w-[100%]  h-36 object-top " />

      <div className="pb-3 px-2 bg-zinc-100">
        <div className=" text-blue-800 text-[15px] font-bold font-['Ubuntu'] leading-3 pt-5 pb-2">
          OverView : Cntic Club
        </div>
        <div className=" text-neutral-600 text-[14px] font-medium font-['Ubuntu'] leading-tight">
          how are you my name is abdellah how are you my name{" "}
        </div>
      </div>

      <span className="w-[40px] h-[4px] absolute -top-1 right-0 bg-primaryColor"></span>
      <span className="w-[4px] h-[50px] absolute top-0 -right-0 bg-primaryColor"></span>
      <span className="w-[40px] h-[4px] absolute -bottom-1 -left-1 bg-primaryColor"></span>
      <span className="w-[4px] h-[50px] absolute -bottom-1 -left-1 bg-primaryColor"></span>
    </div>
  );
}

export default OurArticleCard;
