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
import ResetPassword from "./dashboard/ResetPassword";
// use redux toolkit for state managment
import store from "./dashboard/redux/store";
import { Provider } from "react-redux";
import Article from "./components/pages/Article";
import Blogs from "./components/pages/Blogs";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/dashboard/signin" element={<Signin />} />
          <Route exact path="/dashboard/Email" element={<Email />} />
          <Route
            exact
            path="/dashboard/reset_password"
            element={<ResetPassword />}
          />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Contact" element={<ContactUs />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/Blogs/Article" element={<Article />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
