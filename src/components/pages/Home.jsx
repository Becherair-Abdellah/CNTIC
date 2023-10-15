import OurGoals from "../homeComponenets/OurGoals";
import Members from "../homeComponenets/Members";
import Qoute from "../homeComponenets/qoute/Qoute";
import Footer from "../homeComponenets/Footer/Footer";
function Home() {
  return (
    <div className="  bg-bodyBg">
      {/* navbar      */}
      {/* header */}
      {/* our golas */}
      <OurGoals />
      <Members />
      <Qoute />
      {/* members */}
      {/* quote */}
      {/* footer */}

      <Footer />
    </div>
  );
}

export default Home;
