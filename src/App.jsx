import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import ContactUs from "./components/pages/ContactUs";
import Articals from "./components/OurArticles/Articals";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Posts" element={<Events />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/Articals" element={<Articals />} />
      </Routes>
    </Router>
  );
}

export default App;
