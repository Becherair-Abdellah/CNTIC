import React from "react";
import Section_header from "./Section_header";
import MiniPicture from "./MiniPicture";
export default function Members() {
  return (
    <div className="my-[4rem]">
      <Section_header text="Our Team" />
      <div className="my-7">
        <div className="text-gray-700 text-lg relative pl-3">
        Team CNTIC is the dynamic heart of our technology club, CNTIC. Committed to pushing the boundaries of innovation, our team comprises dedicated individuals who are passionate about technology and its transformative power. We are united by a common goal: to explore, create, and inspire through technology.
        <span className="w-[3px] h-[100%] absolute top-0 left-[-.5rem] bg-primaryColor"></span>
        </div>
        <div className="flex flex-wrap justify-between gap-4 my-8">
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          <MiniPicture />
          
        </div>
      </div>
    </div>
  );
}
