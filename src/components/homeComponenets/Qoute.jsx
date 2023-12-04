import React from "react";
function Qoute() {
  return (
  <div className=" text-gray-800 mb-12 p-3 ">
      <figure className="max-w-screen-md mx-auto text-center ">

      <svg
        className="w-10 h-10 mx-auto mb-3 text-[#025EBF]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote className="mt-5">
        <p className="text-xl italic font-bold text-[#025EBF] relative p-3">
        <span className="w-[50%] h-[1.7px] absolute top-[-.4rem] right-[0rem] bg-primaryColor"></span>
      <span className="w-[2px] h-[50%] absolute top-[-.4rem] right-[0rem] bg-primaryColor"></span>
      <span className="w-[50%] h-[1.7px] absolute bottom-[-.4rem] left-[0rem] bg-primaryColor"></span>
      <span className="w-[2px] h-[50%] absolute bottom-[-.4rem] left-[0rem] bg-primaryColor"></span>
          Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application
        </p>
      </blockquote>
    </figure>
  </div>
  );
}

export default Qoute;
