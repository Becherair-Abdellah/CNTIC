import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import ContactUs from "./components/pages/ContactUs";
import Dashboard from "./dashboard/components/Dashboard";
import Signin from "./dashboard/Signin";
import Email from "./dashboard/Email";
import Signup from "./dashboard/Signup";
import ResetPassword from "./dashboard/ResetPassword";
import Article from "./components/pages/Article";
import Blogs from "./components/pages/Blogs"
import Profile from "./components/ProfileComponent/profile";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Events", element: <Events /> },
            { path: "/Contact", element: <ContactUs /> },
            { path: "/Blogs", element: <Blogs /> },
            { path: "/Articles/:ArticleId", element: <Article /> },
            { path: "/Profile", element: <Profile /> },

        ],
    },
    {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
            // { index: true, element: <Dashboard /> },
            { path: "/Dashboard/Signin", element: <Signin /> },
            { path: "/Dashboard/Email", element: <Email /> },
            { path: "/Dashboard/reset_password", element: <ResetPassword /> },

        ],
    },

]);

export default routes;
