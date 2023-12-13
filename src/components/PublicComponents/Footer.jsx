import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-primaryColor">
            <div className="max-w-screen-xl px-4 mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex justify-center mx-auto mt-5 space-x-6 ">
                    <a href="#" className="text-gray-400 ">
                        <span className="sr-only">Facebook</span>
                        <BiLogoLinkedin size={25} color="white" />
                    </a>
                    <a href="#" className="text-gray-400  ">
                        <span className="sr-only">Instagram</span>
                        <MdAlternateEmail size={25} color="white" />
                    </a>
                    <a href="#" className="text-gray-400  ">
                        <span className="sr-only">Twitter</span>
                        <BsInstagram size={25} color="white" />
                    </a>
                </div>
                <p
                    id="copyright"
                    className=" text-base leading-6 text-center text-white"
                >
                    © <span id="current-year">{currentYear}</span>{" "}
                    <strong className="font-bold">CNTIC</strong>, Inc. All
                    rights reserved
                </p>
            </div>
        </section>
    );
}

export default Footer;
