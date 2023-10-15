import React from "react";
import Section_header from "./Section_header";
export default function OurGoals() {
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
        <div className=" pt-5">
            <Section_header text="Our Goals" />
            <div>
                <CardLefted title="test" description="desc" />
                <CardRighted title="test" description="desc" />
                <CardLefted title="test" description="desc" />
            </div>
        </div>
    );
}
