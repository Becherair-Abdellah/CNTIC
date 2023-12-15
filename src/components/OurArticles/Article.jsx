import React from "react";
import imgArt from "../../assets/i1.jpg";
const data = {
  title: "Coding Chronicles: Navigating the Web Development Odyssey🚀",
};
import "./ourArticleStyle.css";

function Article() {
  return (
    <div className=" relative max-lg:w-screen w-[1000px]  m-auto ">
      <div className=" max-lg:w-screen w-[1000px] max-lg:mt-5  mt-5 m-auto text-blue-800  text-center text-3xl max-lg:text-xl font-bold font-['Ubuntu'] leading-20 ">
        {data.title}
      </div>
      <div className=" max-lg:w-[98vw] w-[1000px]   h-10 flex justify-between m-auto mt-5">
        <div className=" h-10    text-neutral-400  lg:text-xl font-bold font-['Ubuntu'] leading-10">
          12 oct 2023
        </div>
        <div className=" h-10    text-neutral-500 lg:text-xl font-bold font-['Ubuntu'] leading-10">
          By Mohamed{" "}
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img className="w-[1000px] h-[400px] object-cover" src={imgArt} />
      </div>

      <div id="blorr" className="blorr"></div>
      <div className=" mb-5 max-lg:w-screen w-[1000px]  mt-10  mx-auto text-black text-3xl px-5 lg:text-2xl font-bold font-['Ubuntu'] leading-10">
        🌟 Embark on a Digital Odyssey with CodeExplorer91 🌟
      </div>

      <div className="max-lg:w-screen w-[1000px] px-5 mx-auto text-neutral-700 text-xl lg:text-lg font-medium font-['Ubuntu'] leading-8 mb-10">
        Dive into the enchanting world of web development with me,
        CodeExplorer91, as we unravel the secrets of the digital realm. 🕵️‍♂️ In
        this blog, Ill be your guide through insights, tips, and the occasional
        debugging escapade. 🚦 Join me on this thrilling adventure as we decode
        the language of the web and sculpt the future of digital landscapes.
        Dive into the enchanting world of web development with me,
        CodeExplorer91, as we unravel the secrets of the digital realm. 🕵️‍♂️ In
        this blog, Ill be your guide through insights, tips, and the occasional
        debugging escapade. 🚦 Join me on this thrilling adventure as we decode
        the language of the web and sculpt the future of digital landscapes.
        Dive into the enchanting world of web development with me,
        CodeExplorer91, as we unravel the secrets of the digital realm. 🕵️‍♂️ In
        this blog, Ill be your guide through insights, tips, and the occasional
        debugging escapade. 🚦 Join me on this thrilling adventure as we decode
        the language of the web and sculpt the future of digital landscapes.
        Dive into the enchanting world of web development with me,
        CodeExplorer91, as we unravel the secrets of the digital realm. 🕵️‍♂️ In
        this blog, Ill be your guide through insights, tips, and the occasional
        debugging escapade. 🚦 Join me on this thrilling adventure as we decode
        the language of the web and sculpt the future of digital landscapes.
        Dive into the enchanting world of web development with me,
        CodeExplorer91, as we unravel the secrets of the digital realm. 🕵️‍♂️ In
        this blog, Ill be your guide through insights, tips, and the occasional
        debugging escapade. 🚦 Join me on this thrilling adventure as we decode
        the language of the web and sculpt the future of digital landscapes.
      </div>
    </div>
  );
}

export default Article;
