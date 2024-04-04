import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import ContactUs from "./components/pages/ContactUs";
import Dashboard from "./dashboard/components/Dashboard";
import Signin from "./dashboard/Signin";
import Email from "./dashboard/Email";
import Signup from "./dashboard/Signup";
import ResetPassword_Dashboard from "./dashboard/ResetPassword";
import Article from "./components/pages/Article";
import Blogs from "./dashboard/components/Blogs"
import Blog from "./components/BlogsComponents/Blog";
import Users from "./dashboard/components/Users";
import Eve from "./dashboard/components/Events";
import Overview from "./dashboard/components/Overview";
import Messages from "./dashboard/components/Messages";
import Login from "./components/pages/Login";
import ResetPassword from "./components/pages/ResetPassword";
import Profile from "./components/ProfileComponent/Profile";
import Register from "./components/pages/Register";
import { useSelector } from 'react-redux';
import Posts from "./dashboard/components/Post";
import Bloges from "./components/pages/Blogs";
import ClientPosts from "./components/pages/ClientPosts";
import UpdatePassword from "./components/pages/UpdatePassword";
const ProtectedDashboardRoute = ({ element }) => {
    const isAdmin = useSelector(({ show_and_hide_aside: { authenticated, user } }) => authenticated && user.groups.includes("Admin"));
    if (!isAdmin) {
      return <Navigate to="/" />;
    }
    return element;
  };
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/ClientPosts", element: <ClientPosts /> },
            { path: "/Contact", element: <ContactUs /> },
            { path: "/Blogs", element: <Bloges /> },
            { path: "/Events", element: <Events />},
            { path: "/Articles/:id", element: <Article /> },
            { path: "/Login", element: <Login /> },
            { path: "/Signup", element: <Register /> },
            { path: "/ResetPassword", element: <ResetPassword /> },
            { path: "/UpdatePassword", element: <UpdatePassword /> },
            { path: "/Articles/:ArticleId", element: <Article /> },
            { path: "/Profile", element: <Profile /> },

        ],
    },
    {
        path: "/Dashboard",
        element: <ProtectedDashboardRoute element={<Dashboard />} />,
        children: [
            { index: true, element: <Overview /> },
            { path: "users", element: <Users /> },
            { path: "events", element: <Eve /> },
            { path: "messages", element: <Messages /> },
            { path: "blogs", element: <Blogs /> },
            { path: "posts", element: <Posts /> },
        ],
    },
    { path: "/Dashboard/Signin", element: <Signin /> },
    { path: "/Dashboard/Email", element: <Email /> },

    { path: "/Dashboard/reset_password", element: <ResetPassword_Dashboard /> },
    { path: "/Dashboard/Email", element: <Email /> },
]);

export default routes;
