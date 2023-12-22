import React from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";
import { RiArticleLine,RiCalendarEventLine,RiMessageLine } from "react-icons/ri";
function Overview() {
  return (
    <div className=" py-4 w-full">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-5">
        <Card
          icon={<FaUsers size={50} />}
          color="bg-gradient-to-r from-red-500 to-[#0058ff]"
          title="Users"
          nbr="40K"
        />

        <Card
          icon={<RiCalendarEventLine size={50} />}
          color="bg-gradient-to-r from-[#0058ff] to-[#3195ff]"
          title="Events"
          nbr="30"
        />

        <Card
          icon={<RiArticleLine size={50} />}
          color="bg-gradient-to-r from-red-500 to-pink-500"
          title="Articles"
          nbr="7"
        />

<Card
          icon={<RiMessageLine size={50} />}
          color="bg-gradient-to-r from-red-500 to-[#0058ff]"
          title="Messages"
          nbr="4K"
        />
      </div>
      {/* chart js  */}
      <div>
      {/* <Chart/> */}
      </div>
    </div>
  );
}

export default Overview;
