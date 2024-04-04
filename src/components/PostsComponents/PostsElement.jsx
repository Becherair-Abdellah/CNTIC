import React, { useEffect, useState } from "react";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./event.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGetUser } from "../../hooks/useGetUser";
import { IoMdSend } from "react-icons/io";
import { useGetToken } from "../../hooks/useGetToken";
import PostComment from "./PostComment";
import { useNavigate } from "react-router";
export default function PostsElement({Post}) {
  const {Profile} = useGetUser();
  const {headers} = useGetToken()
  const userPicture = "https://backend.cntic-club.com"+ Profile.picture
  const [CommentCounter, SetCommentCounter] = useState([Post.comments]);
  const [Comment, setComment] = useState([]);
  const [LikeCounter, SetLikeCounter] = useState([Post.likers]);
  const [DisLikeCounter, SetDisLikeCounter] = useState([Post.dislikers]);
  const [inputComment, setInputComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [images, setImages] = useState([Post.image]);
  const [text, setText] = useState(Post.content);
  const timestamp = Post.created_time;
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const [loading, setLoading] = useState(false);
  const formattedDate = `${year}-${month}-${day}`;
  const isAuthenticated = useSelector(({ show_and_hide_aside: { authenticated } }) => authenticated);
  const navigate = useNavigate();
  //TODO: Create the add comment function and the like and dislike functions
  
  const addLike = async () => {
    try {
      const response = await fetch(
        `https://backend.cntic-club.com/api/posts/Like_Post/${Post.id}/`,
        {
          method: "POST",
          headers: {
            ...headers,
          },
        }
      );
      console.log(response);
      
      if (!response.ok) {
        throw new Error('Failed to like the post.');
      }
  
      const data = await response.json();
      console.log('Post liked');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      // Fetch new data after liking the post
      getComments();
      // You can also fetch other data here if needed
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  //TODO: Create the add dislike function
  const addDislike = async () => {
    try {
      const response = await fetch(
        `https://backend.cntic-club.com/api/posts/dislike_Post/${Post.id}/`,
        {
          method: "POST",
          headers: {
            ...headers,
          },
        }
      );
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to dislike the post.');
      }

      const data = await response.json();
      console.log('Post disliked');
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  //TODO: Create the add comment function
  const addComment = async () => {
    const formData = new FormData();
    formData.append("content", inputComment);
    try {
      const response = await fetch(
        `https://backend.cntic-club.com/api/posts/comment/${Post.id}/`,
        {
          method: "POST",
          headers: {
            ...headers,
          },
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error('Failed to comment the post.');
      }
      const data = await response.json();
      console.log('Comment added');
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  //TODO: Create the show comment by id
  //TODO: Create the add like to a comment function
  const addLikeToComment = async () => {
    try {
      const response = await fetch(
        `https://backend.cntic-club.com/api/posts/Like_Comment/${Post.comments.id}/`,
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
  const handleLikeClick = () => {
    if (isDisliked) {
      SetDisLikeCounter((prevCounter) => prevCounter - 1);
      SetLikeCounter((prevCounter) => prevCounter + 1);
      setIsDisliked(false);
      setIsLiked(true);
    } else if (!isLiked) {
      SetLikeCounter((prevCounter) => prevCounter + 1);
      setIsLiked(true);
    }
  };

  const handleDislikeClick = () => {
    if (isLiked) {
      SetLikeCounter((prevCounter) => prevCounter - 1);
      SetDisLikeCounter((prevCounter) => prevCounter + 1);
      setIsLiked(false);
      setIsDisliked(true);
    } else if (!isDisliked) {
      SetDisLikeCounter((prevCounter) => prevCounter + 1);
      setIsDisliked(true);
    }
  };
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  //TODO : Create the get comments function
  const getComments = async () => {
    console.log(Post.id)
    try {
      const response = await fetch(
        `https://backend.cntic-club.com/api/posts/get_comment_by_post_id/${Post.id}/`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error('Failed to get the comments.');
      }
      const data = await response.json();
      setComment(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    getComments();
    // console.log(Post.likers)
  }
  , []);

  const checkIfLiked = () => {
    if(isAuthenticated){
      Post.likers.forEach((liker) => {
        if (liker.id === Profile.user) {
          setIsLiked(true);
        }
      });
    }
  }
  const checkIfDisliked = () => {
    if(isAuthenticated){
      Post.dislikers.forEach((disliker) => {
        if (disliker.id === Profile.user) {
          setIsDisliked(true);
        }
      });
    }
  }
  const checkIfCommented = () => {
    if(isAuthenticated){
      Post.comments.forEach((comment) => {
        if (comment.user === Profile.user) {
          setIsComment(true);
        }
      });
  }
  }
  useEffect(() => {
    checkIfLiked();
    checkIfDisliked();
    checkIfCommented();
  }, [isLiked, isDisliked, isComment]);
  if(!isAuthenticated){
    navigate('/login');
  }

  return (
    loading ? <div>Loading...</div> :
    <div className="duration-500 transition-all ease-in mt-10 w-[80%] max-md:w-full flex justify-center items-center">
      <div className="h-fit relative text-[#3f3f3f] font-bold w-[90%] p-4">
        <div className="flex justify-between items-center mb-1">
          <img src="../../public/logo.png" alt="" className=" w-[3.3rem]" />
          <div className="text-gray-400 text-lg">{formattedDate}</div>
        </div>
        <hr className=" border-gray-300 border-[1.5px] mb-4" />
        <div>
          {showMore ? (
            <span
              className="inline text-[14px] md:text-[16px]"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ) : (
            <span
              className="inline text-[14px] md:text-[16px]"
              dangerouslySetInnerHTML={{
                __html: text.slice(0, 150),
              }}
            />
          )}
          {text.length  && (
            <span
              className="text-primaryColor cursor-pointer text-[12px] md:text-[16px]"
              onClick={toggleShowMore}
            >
              {showMore ? " Read Less" : "...Read More"}
            </span>
          )}
        </div>
          {images.map((image, index) => (
              <img className="my-5 mx-auto" src={'https://backend.cntic-club.com'+Post.image} alt={`Slide ${index}`} key={index}/>
          ))}
        <div className="flex justify-around items-center select-none">
          <div
            className="text-gray-400 cursor-pointer"
            onClick={handleLikeClick}
          >
            <BiLike
              onClick={addLike}
              className={`text-2xl ${
                isLiked ? "text-primaryColor" : "text-gray-400"
              }`}
            />
            <span
              className={`text-[14px] flex justify-center items-center ${
                isLiked ? "text-primaryColor" : "text-gray-400"
              }`}
            >
              {Post.likers.length === 0 ? 0 : Post.likers.length}
            </span>
          </div>
          <div className=" text-gray-400 cursor-pointer">
            <BiComment
              onClick={() => {
                setIsComment(!isComment);
              }}
              className={`text-2xl 
             ${isComment ? "text-primaryColor" : "text-gray-400"}
              `}
            />
            <span
              className={`text-[14px] flex justify-center items-center ${isComment ? "text-primaryColor" : "text-gray-400"}`}
            >
              {Post.comments.length === 0 ? 0 : Post.comments.length}
            </span>
          </div>
          <div
            className="text-gray-400 cursor-pointer flex justify-center items-center flex-col"
            onClick={handleDislikeClick}
          >
            <BiDislike
              onClick={addDislike}
              className={`text-2xl ${
                isDisliked ? "text-primaryColor" : "text-gray-400"
              }`}
            />
            <span
              className={`text-[14px] ${
                isDisliked ? "text-primaryColor" : "text-gray-400"
              }`}
            >
              {Post.dislikers.length === 0 ? 0 : Post.dislikers.length}
            </span>
          </div>
        </div>
        <h2 className="text-gray-400 text-xl font-bold">Comments</h2>
        <div className="overflow-scroll h-20">
        {Comment.map((comment, index) => (
          <PostComment key={index} comment={comment} Profile={Profile}/>
          ))}
          </div>
        <div
          className={`comments-section ${
            isComment ? "comments-section-visible" : ""
          }`}
        >
          {isComment ? (
            <div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-start items-center gap-5">
          <img src={userPicture} alt="" className="w-12 h-12 rounded-full" />
          <input
          type="text"
            placeholder="your comment ..."
            className="h-fit resize-none  bg-[#E0E0E0] w-[80%] text-neutral-500 text-xl font-medium font-['Ubuntu'] leading-tight outline-none flex p-3 rounded-sm"
            onChange={(e) => {
              setInputComment(e.target.value);
            }}
          />
          <IoMdSend size={40} color="#0044AA" className="cursor-pointer" 
          onClick={addComment}/>
        </div>
        <span className="w-[30%] h-[4px] absolute -top-2 -right-2 bg-primaryColor"></span>
        <span className="w-[4px] h-[40%] absolute -top-2 -right-2 bg-primaryColor"></span>
        <span className="w-[40%] h-[4px] absolute -bottom-2 -left-2 bg-primaryColor"></span>
        <span className="w-[4px] h-[30%] absolute -bottom-2 -left-2 bg-primaryColor"></span>
      </div>
    </div>
  );
}