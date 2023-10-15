import OurGoals from "../homeComponenets/OurGoals";
import Qoute from "../homeComponenets/qoute/Qoute";
import Footer from "../homeComponenets/Footer/Footer";
function Home() {
  return (
    <div className="  bg-bodyBg">
      {/* navbar */}
      {/* header */}
      {/* our golas */}
      <OurGoals />
      {/* members */}
      {/* quote */}
      <Qoute />
      {/* footer */}

      <Footer />
    </div>
  );
}

export default Home;
