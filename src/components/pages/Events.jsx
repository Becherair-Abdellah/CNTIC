import React, { useState } from "react";
import EventsElement from "../EventsComponents/EventsElement";
import OurArticle from "../OurArticles/OurArticle";
import Header from "../PublicComponents/Header";
export default function Events() {
  return (
    <div className=" bg-white">
      <Header/>
      <div className=" flex justify-around items-start mt-5">
        <div className=" max-xl:hidden border-r-2  border-solid border-purple-300 h-fit">
          <OurArticle />
        </div>
        <div className="w-[70%]">
          <EventsElement />
          <EventsElement />
          <EventsElement />
          <EventsElement />
        </div>
      </div>

      <div className=" mb-10"></div>
    </div>
  );
}
