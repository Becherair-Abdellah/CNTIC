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
import Users from "./dashboard/components/Users";
import Eve from "./dashboard/components/Events";
import Overview from "./dashboard/components/Overview";
import Messages from "./dashboard/components/Messages";
import Blog from "./dashboard/components/Blog";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Events", element: <Events /> },
            { path: "/Contact", element: <ContactUs /> },
            { path: "/Blogs", element: <Blogs /> },
            { path: "/Articles/:id", element: <Article /> },
        ],
    },
    {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
            { index: true, element: <Overview /> },
            { path: "users", element: <Users/> },
            { path: "events", element: <Eve/>},
            { path: "messages", element: <Messages/> },
            { path: "blogs", element: <Blog/> },

        ],
    },
    { path: "/Dashboard/Signin", element: <Signin /> },
    { path: "/Dashboard/Email", element: <Email /> },

    { path: "/Dashboard/reset_password", element: <ResetPassword /> },
    { path: "/Dashboard/Email", element: <Email /> },
]);

export default routes;
