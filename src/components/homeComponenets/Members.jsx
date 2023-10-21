import React from "react";
import Section_header from "./Section_header";
import Picture from "./Picture";
import MiniPicture from "./MiniPicture";
export default function Members() {
  return (
    <div className=" mt-10">
      <Section_header text="Members" />
      <div className="my-7 flex">
        <div>
            
        </div>
        <div>
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
