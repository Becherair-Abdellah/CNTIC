import OurGoals from "../homeComponenets/OurGoals";
import Members from "../homeComponenets/Members";
import Qoute from "../homeComponenets/Qoute";
import Footer from "../homeComponenets/Footer";
import Navbar from "../PublicComponents/Navbar";
import Hero from "../homeComponenets/Hero";
import News from "../homeComponenets/News";
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
