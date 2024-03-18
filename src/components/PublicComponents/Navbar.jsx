import React, { useEffect, useState } from "react";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import BtnLogin from "../homeComponenets/BtnLogin";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, setUserData } from "../../dashboard/redux/Reducers";
import { useCookies } from "react-cookie";
import axios from "axios";
function Navbar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [cookies, setCookies] = useCookies(["access_token"])
  const location = useLocation();
  const isLinkActive = (url) => location.pathname === url;
  const isAuthenticated = useSelector(({ show_and_hide_aside: { authenticated } }) => authenticated);
  const Logout = () => {
    localStorage.clear();
    setCookies('access_token', null)
    dispatch(logout());
  };
  useEffect(() => {
    if (cookies.access_token) {
      dispatch(login())
    }
  }, []);

  const Links = [
    {
      url: '/',
      link: 'Home'
    },
    {
      url: '/Events',
      link: 'Events'
    },
    {
      url: '/Blogs',
      link: 'Blog'
    },
    {
      url: '/Contact',
      link: 'Contact Us'
    }
  ]
  const classes = `fixed left-0 top-0 bg-white w-[100%] h-full z-[111] flex justify-center items-center flex-col md:relative duration-300 md:bg-bodyBg md:flex-row ${show ? "left-[-100%]" : ""
    } md:left-0`;
  return (
    isAuthenticated ? (
      <div>
        <div className="w-full flex justify-between items-center  fixed bg-[#e9e9e9] top-0 left-0 shadow-xl z-20 px-2 md:px-10 py-2">
          <div className="w-[65px] h-[65px] rounded-bl-full bg-primaryColor right-[-1rem] top-0 fixed md:hidden z-10"></div >
          <Link
            to="/"
            className="text-gray-600 font-semibold text-2xl font-Playpen  flex justify-center items-center"
          >
            <strong className="text-5xl font-bold text-primaryColor">C</strong>
            NTIC
          </Link>
          {/* LINKS  */}
          <div className={classes}>
            <BsFillExclamationSquareFill
              size={25}
              color="white"
              className="absolute right-[1rem] bottom-[2rem] z-[11] cursor-pointer md:hidden"
            // style={{ position: "fixed" }}
            />
            <div className="w-[120px] h-[120px] rounded-br-full bg-primaryColor left-0 top-0 absolute md:hidden"></div>
            <div className="w-[150px] h-[150px] rounded-tl-full bg-primaryColor right-0 bottom-0 absolute md:hidden"></div>
            <button
              className="text-lg absolute right-[1em] top-[1rem] bg-primaryColor font-bold text-white px-2 rounded-tl-lg rounded-br-lg md:hidden"
              onClick={() => {
                setShow(true);
                document.body.classList.remove("overflow-hidden");
              }}
            >
              X
            </button>
            <ul className="flex justify-center items-center gap-4 flex-col w-full mb-8 font-bold text-lg text-gray-600 md:flex-row md:mb-0">
              {Links.map((link, index) => (
                <Link to={link.url} key={index}
                  className={`hover:text-primaryColor cursor-pointer ${isLinkActive(link.url) ? 'text-primaryColor' : ''}`}              >
                  {link.link}
                </Link>
              ))}
            </ul>
            {/* buttons and profile */}
            <div className="flex justify-center items-center gap-5">
              {/* display the user info here */}
              <Link to='/Profile'>
                <BtnLogin content="Profile" />
              </Link>
              <Link to='/login' onClick={Logout}>
                <BtnLogin content="Logout" />
              </Link>
            </div>
          </div>
          <VscThreeBars
            size={30}
            color="white"
            className="fixed right-1 top-3 cursor-pointer z-[11] md:hidden"
            onClick={() => {
              setShow(false);
              document.body.classList.add("overflow-hidden");
            }}
          />
        </div >
      </div >
    ) : (
      <div>
        <div className="w-full flex justify-between items-center  fixed bg-[#e9e9e9] top-0 left-0 shadow-xl z-20 px-2 md:px-10 py-2">
          <div className="w-[65px] h-[65px] rounded-bl-full bg-primaryColor right-[-1rem] top-0 fixed md:hidden z-10"></div >
          <Link
            to="/"
            className="text-gray-600 font-semibold text-2xl font-Playpen  flex justify-center items-center"
          >
            <strong className="text-5xl font-bold text-primaryColor">C</strong>
            NTIC
          </Link>
          {/* LINKS  */}
          <div className={classes}>
            <BsFillExclamationSquareFill
              size={25}
              color="white"
              className="absolute right-[1rem] bottom-[2rem] z-[11] cursor-pointer md:hidden"
            // style={{ position: "fixed" }}
            />
            <div className="w-[120px] h-[120px] rounded-br-full bg-primaryColor left-0 top-0 absolute md:hidden"></div>
            <div className="w-[150px] h-[150px] rounded-tl-full bg-primaryColor right-0 bottom-0 absolute md:hidden"></div>
            <button
              className="text-lg absolute right-[1em] top-[1rem] bg-primaryColor font-bold text-white px-2 rounded-tl-lg rounded-br-lg md:hidden"
              onClick={() => {
                setShow(true);
                document.body.classList.remove("overflow-hidden");
              }}
            >
              X
            </button>
            <ul className="flex justify-center items-center gap-4 flex-col w-full mb-8 font-bold text-lg text-gray-600 md:flex-row md:mb-0">
              {Links.map((link, index) => (
                <Link to={link.url} key={index}
                  className={`hover:text-primaryColor cursor-pointer ${isLinkActive(link.url) ? 'text-primaryColor' : ''}`}              >
                  {link.link}
                </Link>
              ))}
            </ul>
            {/* buttons and profile */}
            <div className="flex justify-center items-center gap-5">

              <Link to="/Login" className="flex items-center gap-6 flex-col w-full md:flex-row md:w-fit">
                <BtnLogin content="Login" />
              </Link>
              <Link to='/SignUp'>
                <BtnLogin content="SignUp" />
              </Link>
            </div>
          </div>
          <VscThreeBars
            size={30}
            color="white"
            className="fixed right-1 top-3 cursor-pointer z-[11] md:hidden"
            onClick={() => {
              setShow(false);
              document.body.classList.add("overflow-hidden");
            }}
          />
        </div >
      </div >
    )
  );
}

export default Navbar;
