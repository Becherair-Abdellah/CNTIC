import React from "react";
import afterTitle from "../../assets/afterTitleItem.svg";
import OurArticleCard from "./OurArticleCard";
import "./ourArticleStyle.css";
function OurArticle() {
  return (
    <div className={` parkpark fixed h-screen overflow-scroll  px-2 pb-20`}>
      {" "}
      <div className="w-[100%]  pt-10 text-center text-primaryColor text-[29px] font-bold font-['Ubuntu'] leading-[10px]">
        Our Articles
      </div>
      <div className="flex mt-5 justify-center items-center ">
        <img src={afterTitle} alt="" className="h-10 " />
        <img src={afterTitle} alt="" className="h-10" />
        <img src={afterTitle} alt="" className="h-10" />
        <img src={afterTitle} alt="" className="h-10" />
        <img src={afterTitle} alt="" className="h-10" />
        <img src={afterTitle} alt="" className="h-10" />
        <img src={afterTitle} alt="" className="h-10" />
        <img src={afterTitle} alt="" className="h-10" />
      </div>
      <OurArticleCard />
      <OurArticleCard />
      <OurArticleCard />
      <OurArticleCard />
      <OurArticleCard />
    </div>
  );
}

export default OurArticle;
