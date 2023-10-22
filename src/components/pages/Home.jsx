import OurGoals from "../homeComponenets/OurGoals";
import Members from "../homeComponenets/Members";
import Qoute from "../homeComponenets/Qoute";
import Footer from "../homeComponenets/Footer";
function Home() {
  return (

    <div className="bg-bodyBg">
    <div className="w-[90%] mx-auto ">
  {/* navbar      */}
      {/* header */}
      {/* our golas */}
      <OurGoals />
      <Members />
    </div>
      <Qoute /> 
      <Footer /> 
    </div>

  );
}

export default Home;
