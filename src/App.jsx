import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import ContactUs from "./components/pages/ContactUs";
import Articals from "./components/OurArticles/Articals";
import Dashboard from "./dashboard/components/Dashboard"
import Signin from "./dashboard/Signin";
import Email from "./dashboard/Email";
import Signup from "./dashboard/Signup";
import Blogs from "./components/pages/Blogs";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/dashboard/signin" element={<Signin/>}/>
      <Route exact path="/dashboard/Email" element={<Email/>}/>
      <Route exact path="/events" element={<Events/>}/>
      <Route exact path="/contact" element={<ContactUs/>}/>
      <Route exact path="/blog" element={<Blogs/>}/>
      <Route exact path="/blog/articles/*" element={<Articals/>}/>
    </Routes>
  </Router>
  );
}

export default App;
