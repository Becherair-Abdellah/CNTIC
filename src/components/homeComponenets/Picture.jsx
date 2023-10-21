import React from "react";
// import img from '../../assets/pic.jpg'
function Picture() {
  return (
    <div className=" w-[150px]  h-[140px] bg-primaryColor m-auto mt-[20px] relative ">
        {/* <img src={img} alt="" /> */}
      <span className="w-[40px] h-[3px] absolute top-[-.5rem] right-[-.5rem] bg-primaryColor"></span>
      <span className="w-[3px] h-[80px] absolute top-[-.5rem] right-[-.5rem] bg-primaryColor"></span>

      <span className="w-[40px] h-[3px] absolute bottom-[-.5rem] left-[-.5rem] bg-primaryColor"></span>
      <span className="w-[3px] h-[80px] absolute bottom-[-.5rem] left-[-.5rem] bg-primaryColor"></span>
    </div>
  );
}

export default Picture;
