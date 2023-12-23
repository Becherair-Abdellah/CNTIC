import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

export default function EventComment({ text }) {
  const [Comment_LikeCounter, SetComment_LikeCounter] = useState(581);
  const [Comment_DisLikeCounter, SetComment_DisLikeCounter] = useState(581);
  const [Comment_isLiked, SetComment_isLiked] = useState(false);
  const [Comment_isDisliked, SetComment_isDisliked] = useState(false);

  const handleLikeClick = () => {
    SetComment_DisLikeCounter((prevCounter) => prevCounter - 1);
    SetComment_LikeCounter((prevCounter) => prevCounter + 1);

    SetComment_isLiked(!Comment_isLiked);
  };

  //   const handleDislikeClick = () => {
  //     if (Comment_isLiked) {
  //       SetComment_LikeCounter((prevCounter) => prevCounter - 1);
  //       SetComment_DisLikeCounter((prevCounter) => prevCounter + 1);
  //       SetComment_isLiked(false);
  //       SetComment_isDisliked(true);
  //     } else if (!Comment_isDisliked) {
  //       SetComment_DisLikeCounter((prevCounter) => prevCounter + 1);
  //       SetComment_isDisliked(true);
  //     }
  //   };
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className=" h-fit    ">
      <div className="w-[100%] m-auto   p-2 h-fit">
        <div className="  md:flex items-start relative">
          <span className="w-[3px] h-[100%] absolute left-0 bg-primaryColor"></span>
          <img src="../../../src/assets/avatar.png" alt="" className="w-14 " />

          <div className=" overscroll-contain w-[100%] flex justify-between bg-PostsBg rounded-md p-2 font-bold ml-2 md:ml-0">
            <div>
              {showMore ? (
                <p
                  className=" overscroll-contain  text-[14px]  md:text-[16px]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ) : (
                <p
                  className="    text-[14px] md:text-[16px]"
                  dangerouslySetInnerHTML={{
                    __html: text.slice(0, 50),
                  }}
                />
              )}
              {/* Show more|less btn */}
              {text.length > 100 && (
                <span
                  className="text-primaryColor cursor-pointer text-[12px] md:text-[16px]"
                  onClick={toggleShowMore}
                >
                  {showMore ? " Read Less" : "...Read More"}
                </span>
              )}
            </div>

            <div className="flex  justify-around items-center select-none ">
              <div
                className="text-gray-400  cursor-pointer  -bottom-12 -right-10"
                onClick={handleLikeClick}
              >
                <BiLike
                  className={`text-xl md:text-2xl  ${
                    Comment_isLiked ? "text-primaryColor" : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-[13px] md:text-[14px] font-bold  ${
                    Comment_isLiked ? "text-primaryColor" : "text-gray-400"
                  }`}
                >
                  {Comment_LikeCounter}
                </span>
              </div>
              {/* remove dislike  */}
              {/* <div
              className="text-gray-400 cursor-pointer absolute -bottom-20 right-10"
              onClick={handleDislikeClick}
            >
              <BiDislike
                className={`text-xl md:text-2xl ${
                  Comment_isDisliked ? "text-blue-500" : "text-gray-400"
                }`}
              />
              <span
                className={`text-[13px] md:text-[14px] font-bold  ${
                  Comment_isDisliked ? "text-blue-500" : "text-gray-400"
                }`}
              >
                {Comment_DisLikeCounter}
              </span>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
