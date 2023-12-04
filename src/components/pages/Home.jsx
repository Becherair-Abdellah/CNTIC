import OurGoals from "../homeComponenets/OurGoals";
import Members from "../homeComponenets/Members";
import Qoute from "../homeComponenets/Qoute";
import Footer from "..//PublicComponents/Footer";
import Navbar from "../PublicComponents/Navbar";
import Hero from "../homeComponenets/Hero";
import News from "../homeComponenets/News";
import React from "react";
function Home() {
    return (
        <div className="bg-bodyBg">
            <div className="w-[90%] mx-auto ">
                <Navbar />
                <Hero />
                <div>
                    <News />
                </div>
                <OurGoals />
                <Members />
            </div>
            <Qoute />
            <Footer />
        </div>
    );
}

export default Home;
