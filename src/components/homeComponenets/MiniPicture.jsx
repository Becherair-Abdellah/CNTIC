import React from "react";
// import img from '../../assets/pic.jpg'
function MiniPicture() {
  return (
    <div className=" w-[75px]  h-[70px] bg-primaryColor mt-[20px] relative ">
        {/* <img src={img} alt="" /> */}
      <span className="w-[40px] h-[3px] absolute top-[-.5rem] right-[-.5rem] bg-primaryColor"></span>
      <span className="w-[3px] h-[30px] absolute top-[-.5rem] right-[-.5rem] bg-primaryColor"></span>

      <span className="w-[40px] h-[3px] absolute bottom-[-.5rem] left-[-.5rem] bg-primaryColor"></span>
      <span className="w-[3px] h-[30px] absolute bottom-[-.5rem] left-[-.5rem] bg-primaryColor"></span>
    </div>
  );
}

export default MiniPicture;
