import React from "react";

function ContactNewUser() {
    return (
        <>
            <div className="mt-16">
                <h2 className="text-[#374151] font-medium lo:px-4 text-center ">
                    Our support team is here to listen to all opinions and ideas
                </h2>
                <form action="">
                    <div className="lg:flex items-center justify-center lg:w-full lg:px-4 lg:gap-2 xl:gap-1">
                        <div className=" pt-8 pb-1 lg:pt-6  lo:flex lo:flex-col lo:px-4 md:px-20 lg:px-2 lg:w-full xl:px-6">
                            <h3 className="text-left font-medium mb-1">
                                First Name*
                            </h3>
                            <input
                                type="text"
                                className=" text-black border-2 border-[#dddddd] lg:w-full  px-2 py-3 mb-5 focus:outline-none"
                                placeholder="write your first name"
                            />
                            <h3 className="text-left font-medium mb-1">
                                Email*
                            </h3>
                            <input
                                type="email"
                                className=" text-black border-2 border-[#dddddd] lg:w-full  px-2 py-3 mb-5 focus:outline-none"
                                placeholder="write your Email"
                            />
                        </div>
                        <div className=" pt-1 lo:pb-2 lg:pb-1 lg:pt-6 lo:flex lo:flex-col lo:px-4 md:px-20 lg:px-2 lg:w-full xl:px-6">
                            <h3 className="text-left font-medium mb-1">
                                Last Name*
                            </h3>
                            <input
                                type="text"
                                className=" text-black border-2 border-[#dddddd] lg:w-full  px-2 py-3 mb-5 focus:outline-none"
                                placeholder="write your last name"
                            />
                            <h3 className="text-left font-medium mb-1">
                                Title*
                            </h3>
                            <input
                                type="text"
                                className=" text-black border-2 border-[#dddddd] lg:w-full  px-2 py-3 mb-5 focus:outline-none"
                                placeholder="write your theme"
                            />
                        </div>
                    </div>
                    <div className=" pb-8 pt-0 lo:flex lo:flex-col lo:px-4 md:px-20 lg:px-36 xl:px-60">
                        <h3 className="text-left font-medium mb-1">Message*</h3>
                        <textarea
                            className=" text-black border-2 border-[#dddddd] px-3 py-3 resize-none lo:h-32 mb-5 focus:outline-none"
                            placeholder="write your message"
                        />
                        <input
                            type="submit"
                            className="text-white bg-primaryColor py-2 rounded-md cursor-pointer font-semibold focus:outline-none"
                            value="SEND"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactNewUser;
