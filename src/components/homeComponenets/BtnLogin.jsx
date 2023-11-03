import React from "react";
function BtnLogin({ content }) {
    return (
        <button className="w-[30%] bg-primaryColor text-white rounded-tl-lg text-lg p-1 relative rounded-br-lg md:text-[15px] md:w-fit md:px-[20px] md:py-[3px]">
            {content}
            <span className="w-[40px] h-[3px] absolute top-[-.43rem] right-[-.43rem]  bg-primaryColor"></span>
            <span className="w-[3px] h-[30px] absolute top-[-.43rem] right-[-.43rem] bg-primaryColor"></span>

            <span className="w-[40px] h-[3px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor"></span>
            <span className="w-[3px] h-[30px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor"></span>
        </button>
    );
}

export default BtnLogin;
