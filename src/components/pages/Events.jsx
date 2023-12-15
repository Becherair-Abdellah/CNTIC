import React, { useState } from "react";
import Navbar from "../PublicComponents/Navbar";
import Footer from "../PublicComponents/Footer";
import EventsElement from "../EventsComponents/EventsElement";
import OurArticle from "../OurArticles/OurArticle";
export default function Events() {
  return (
    <div className=" bg-white">
      <Navbar />
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
      <Footer />
    </div>
  );
}
