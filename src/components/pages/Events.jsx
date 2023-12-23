import React, { useState } from "react";
import EventsElement from "../EventsComponents/EventsElement";
import OurArticle from "../OurArticles/OurArticle";
import Header from "../PublicComponents/Header";
export default function Events() {
  return (
      <div className=" bg-white">
          <Header
              title="Experience the Future"
              text="CNTIC Club's Event Series"
          />
          <div className=" flex justify-around items-start mt-5">
              <div className=" sticky top-0  max-xl:hidden border-r-2 w-[40%]  h-fit">
                  <OurArticle />
              </div>
              <div className="md:w-[65%] w-[90%] m-auto flex flex-col justify-center items-center ">
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
