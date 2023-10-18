import React from "react";
import Section_header from "./Section_header";
import Card from "./Card";
export default function OurGoals() {
    return (
        <div className=" pt-5">
            <Section_header text="Our Goals" />
            <div className="my-5 flex flex-col gap-5">
                <Card title="Projects" nbr="10" subject="our Projects" description="Our goal for this year is to complete ten technology projects" />
                <Card title="Projects" nbr="10" subject="our Projects" description="Our goal for this year is to complete ten technology projects" />
                
            </div>
        </div>
    );
}
