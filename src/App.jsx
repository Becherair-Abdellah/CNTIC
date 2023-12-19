import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import ContactUs from "./components/pages/ContactUs";
import Dashboard from "./dashboard/components/Dashboard";
import Signin from "./dashboard/Signin";
import Email from "./dashboard/Email";
import Signup from "./dashboard/Signup";
import Blogs from "./components/pages/Blogs";
import ResetPassword from "./dashboard/ResetPassword";
import Articals from "./components/pages/Articals";
import { Outlet } from "react-router-dom";
// use redux toolkit for state managment
import  store  from "./dashboard/redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />}>
          
          
        </Route>
        <Route exact path="/dashboard/signin" element={<Signin />} />
        <Route exact path="/dashboard/Email" element={<Email />} />
        <Route
          exact
          path="/dashboard/reset_password"
          element={<ResetPassword />}
        />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/blog/articles" element={<Articals />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
