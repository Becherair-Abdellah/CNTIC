import React from "react";

function ContactMember() {
    return (
        <>
            <div className="mt-16">
                <h2 className="text-[#374151] font-medium text-center ">
                    Our support team is here to listen to our member's opinions
                    and ideas
                </h2>
                <form action="">
                    <div className=" py-8 lo:flex lo:flex-col lo:px-4 md:px-20 lg:px-36 xl:px-60">
                        <h3 className="text-left font-medium mb-1">Title <span className="text-red-500">*</span></h3>
                        <input
                            type="text"
                            className=" text-black border-2 border-[#dddddd] px-2 py-3 mb-5 focus:outline-none"
                            placeholder="write your theme"
                        />
                        <h3 className="text-left font-medium mb-1">Message <span className="text-red-500">*</span></h3>
                        <textarea
                            className=" text-black border-2 border-[#dddddd] px-3 py-3 resize-none lo:h-32 mb-5 focus:outline-none"
                            placeholder="write your message"
                        />
                        <input
                            type="submit"
                            className=" w-fit p-3 px-5 transition-all duration-500 hover:scale-105 ml-auto text-white bg-primaryColor py-2 rounded-md cursor-pointer font-semibold focus:outline-none"
                            value="SEND"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactMember;
