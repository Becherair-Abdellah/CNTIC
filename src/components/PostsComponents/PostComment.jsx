import React, { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { useGetToken } from "../../hooks/useGetToken";

export default function PostComment({ comment,Profile }) {
  const {headers} = useGetToken();
  const [Comment_LikeCounter, SetComment_LikeCounter] = useState(comment.likers.length);
  const [Comment_DisLikeCounter, SetComment_DisLikeCounter] = useState(comment.dislikers.length);
  const [Comment_isLiked, SetComment_isLiked] = useState(false);
  const [Comment_isDisliked, SetComment_isDisliked] = useState(false);
  const [Comment, setComment] = useState([comment]);
  //TODO: Create the add like to a comment function
  const addLikeToComment = async () => {
    try {
      const response = await fetch(
        `https://backend.cntic-club.com/api/posts/like_comment/${comment.id}/`,
        {
          method: "POST",
          headers: {
            ...headers,
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to like the comment.');
      }
      const data = await response.json();
      console.log(data); // Log the message from the API response
      console.log('Comment liked');
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  //TODO: Create the add dislike to a comment function
  const addDislikeToComment = async () => {
    try {
      const response = await fetch(
        `https://backend.cntic-club.com/api/posts/dislike_comment/${comment.id}/`,
        {
          method: "POST",
          headers: {
            ...headers,
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to dislike the comment.');
      }
      const data = await response.json();
      console.log(data); // Log the message from the API response
      console.log('Comment disliked');
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  const handleLikeClick = () => {
    // SetComment_DisLikeCounter((prevCounter) => prevCounter - 1);
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
          {/* <span className="w-[3px] h-[100%] absolute left-0 bg-primaryColor"></span> */}
          <img src={`https://backend.cntic-club.com`+Profile.picture} alt="" className="w-12 h-12 rounded-full mr-3" />

          <div className=" overscroll-contain w-[100%] flex justify-between bg-PostsBg rounded-md p-2 font-bold ml-2 md:ml-0">
            <div>
              {showMore ? (
                Comment.map((comment, index) => (
                  <p
                    key={index}
                    className=" overscroll-contain  text-[14px]  md:text-[16px]"
                    dangerouslySetInnerHTML={{ __html: comment }}
                  />
                ))
                // {Comme}
                // <p
                //   className=" overscroll-contain  text-[14px]  md:text-[16px]"
                //   dangerouslySetInnerHTML={{ __html: Comment }}
                // />
              ) : (
                Comment.map((comment, index) => (
                  <p
                  key={index}
                    className="    text-[14px] md:text-[16px]"
                    dangerouslySetInnerHTML={{
                      __html: comment.content.slice(0, 50),
                    }}
                  />
                ))
              )}
              {/* Show more|less btn */}
              {Comment.length > 100 && (
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
                className="text-gray-400  cursor-pointer  -bottom-12 -right-10 flex justify-center items-center flex-col"
                onClick={handleLikeClick}
              >
                <BiLike
                onClick={addLikeToComment}
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
              <div
                className="text-gray-400  cursor-pointer  -bottom-12 -right-10 flex justify-center items-center flex-col"
                onClick={handleLikeClick}
              >
                <BiDislike
                onClick={addDislikeToComment}
                  className={`text-xl md:text-2xl  ${
                    Comment_isDisliked ? "text-primaryColor" : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-[13px] md:text-[14px] font-bold  ${
                    Comment_isDisliked ? "text-primaryColor" : "text-gray-400"
                  }`}
                >
                  {Comment_DisLikeCounter}
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
