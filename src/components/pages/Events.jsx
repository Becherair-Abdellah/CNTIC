import React, { useState } from "react";
import Navbar from "../PublicComponents/Navbar";
import Footer from "../PublicComponents/Footer";
import EventsElement from "../EventsComponents/EventsElement";
import Loading from "../EventsComponents/Loading";
export default function Events() {
    const [loaded, setloaded] = useState(false);
    return (
        <div className=" bg-bodyBg">
            <Navbar />
            <EventsElement />
            <EventsElement />
            <EventsElement />
            <EventsElement />
            <div className=" mb-10"></div>
            <Footer />
        </div>
    );
}
