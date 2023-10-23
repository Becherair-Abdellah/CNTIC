import OurGoals from "../homeComponenets/OurGoals";
import Members from "../homeComponenets/Members";
import Qoute from "../homeComponenets/Qoute";
import Footer from "../homeComponenets/Footer";
import Navbar from "../homeComponenets/Navbar";
function Home() {
  return (

    <div className="bg-bodyBg">
    <div className="w-[90%] mx-auto ">  
    <Navbar/>
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
