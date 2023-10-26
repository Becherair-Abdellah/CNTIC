import React from "react";
import img from "../../assets/i1.jpg";
import img2 from "../../assets/i3.jpg";
function News() {
  return (
    <div>
        <h1 className="text-5xl leading-[4rem] font-bold text-TextredColor my-[3rem] text-primaryColor">What's The New In Our Club _____</h1>
        <div className="md:flex md:gap-8">
      <div className="my-5">
      <h1 className="text-3xl font-bold text-TextredColor text-primaryColor">
        Interviews On Cntic Club
      </h1>
      <p className="my-[1rem] text-gray-700">
        we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy. we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy 
        <span className="text-blue-500 text-sm ml-1 cursor-pointer my-2">
          read more...
        </span>
      </p>
      <div className="imgs">
        <img src={img} alt="" />
      </div>
      </div>

      <div className="my-5">
      <h1 className="text-3xl font-bold text-TextredColor text-primaryColor">
        Frontend And Backend Engineer
      </h1>
      <p className="my-[1rem] text-gray-700">
        we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy. we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy we make a many Interviews for more people they can improve skills with
        many question to choose a good people in technolgy 
        <span className="text-blue-500 text-sm ml-1 cursor-pointer my-2">
          read more...
        </span>
      </p>
      <div className="imgs">
        <img src={img2} alt="" />
      </div>
      </div>
    </div>


    </div>
  );
}

export default News;
