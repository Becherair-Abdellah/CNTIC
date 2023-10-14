import React from "react";
export default function OurGoals() {
    function OurGoal_Header() {
        return (
            <h1
                className="
            bg-secondaryColor
            text-[#3f3f3f]
             font-bold
             text-2xl
             w-80
             m-auto
             p-2
             rounded-md
            text-center"
            >
                Our Goals
            </h1>
        );
    }
    function CardLefted({ title, description }) {
        return (
            <div className=" flex max-w-[80%] m-auto mt-6  items-center mb-6 ">
                <div className=" bg-primaryColor max-w-[35%] w-[100%] h-[120px] rounded-md flex items-center justify-center">
                    {title}
                </div>
                <div className=" bg-[#fff] max-w-[65%] w-[100%] h-[80px] flex items-center justify-center rounded-md ">
                    <div className=" bg-secondaryColor w-[95%] h-[90%] rounded-md flex items-center justify-center">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
    function CardRighted({ title, description }) {
        return (
            <div className=" flex max-w-[80%] m-auto mt-6  items-center mb-6 ">
                <div className=" bg-[#fff] max-w-[65%] w-[100%] h-[80px] flex items-center justify-center rounded-md">
                    <div className=" bg-secondaryColor w-[95%] h-[90%] rounded-md flex items-center justify-center">
                        {description}
                    </div>
                </div>
                <div className=" bg-primaryColor max-w-[35%] w-[100%] h-[120px] rounded-md flex items-center justify-center">
                    {title}
                </div>
            </div>
        );
    }
    return (
        <div className=" bg-bodyBg pt-5">
            <OurGoal_Header />
            <div className=" ">
                <CardLefted title="test" description="desc" />
                <CardRighted title="test" description="desc" />
                <CardLefted title="test" description="desc" />
            </div>
        </div>
    );
}
