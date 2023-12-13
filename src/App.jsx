import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import ContactUs from "./components/pages/ContactUs";
import Articals from "./components/OurArticles/Articals";
import Dashboard from "./dashboard/components/Dashboard"
import Signin from "./dashboard/Signin";
function App() {
  return (
    <Router>
      <Routes>
        {/* this route for testing is just to test login page okey! */}
      <Route exact path="/signin" element={<Signin/>}/>
        {/* <Route exact path="/dashboard" element={<Dashboard/>}/> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Posts" element={<Events />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/Articals" element={<Articals />} />
      </Routes>
    </Router>
  );
}

export default App;
