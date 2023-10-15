import React from "react";
import OurGoals from "../homeComponenets/OurGoals";
import Members from "../homeComponenets/Members";
import Qoute from "../homeComponenets/qoute/Qoute";
function Home() {
  return (
    <div className="  bg-bodyBg">
      {/* navbar */}
      {/* header */}
      {/* our golas */}
      <OurGoals />
      <Members/>
      <Qoute/>
      {/* members */}
      {/* quote */}
      {/* footer */}
    </div>
  );
}

export default Home;
