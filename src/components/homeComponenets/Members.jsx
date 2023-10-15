import React from "react";
import Section_header from "./Section_header";
export default function Members() {
    
    function BlockOne() {
        return (
            <div className=" w-[100px]  h-[100px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
        );
    }
    function BlockTwo() {
        return (
            <div className=" flex m-auto gap-1 w-fit">
                <div className=" w-[65px]  h-[65px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
                <div className=" w-[65px]  h-[65px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
                <div className=" w-[65px]  h-[65px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
                <div className=" w-[65px]  h-[65px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
            </div>
        );

    }
    function BlockThree() {
        return (
            <div className=" flex items-center justify-center w-fit m-auto gap-2">
                <div className=" w-[50px]  h-[50px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
                <div className=" w-[50px]  h-[50px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
                <div className=" w-[50px]  h-[50px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
                <div className=" w-[50px]  h-[50px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
                <div className=" w-[50px]  h-[50px] bg-primaryColor  rounded-full m-auto mt-[20px] "></div>
            </div>
        );
    }
    return (
        <div className=" mt-10">
            <Section_header text="Members" />
            <BlockOne />
            <BlockTwo />
            <BlockThree />
        </div>
    );
}
