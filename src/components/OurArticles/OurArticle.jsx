import React, { useEffect, useState } from "react";
import afterTitle from "../../assets/afterTitleItem.svg";
import OurArticleCard from "./OurArticleCard";
import "./ourArticleStyle.css";
import { Link } from "react-router-dom";
function OurArticle() {
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const threshold = 50; // Adjust this value as needed

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearEnd =
        scrollTop + window.innerHeight >= documentHeight - threshold;
      setScrolledToEnd(isNearEnd);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);
  return (
    <Link to="/blog/articles">
      <div
        className={` parkpark fixed ${
          scrolledToEnd ? "h-[70vh]" : "h-screen"
        } overflow-scroll  px-2 pb-20`}
      >
        {" "}
        <div className="w-[100%]  pt-5 text-center text-primaryColor text-[29px] font-bold font-['Ubuntu'] leading-[10px]">
          Our Articles
        </div>
        <div className="flex mt-5 justify-center items-center pr-5 ">
          <img src={afterTitle} alt="" className="h-7 " />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
          <img src={afterTitle} alt="" className="h-7" />
        </div>
        <OurArticleCard />
        <OurArticleCard />
        <OurArticleCard />
        <OurArticleCard />
        <OurArticleCard />
      </div>
    </Link>
  );
}

export default OurArticle;
