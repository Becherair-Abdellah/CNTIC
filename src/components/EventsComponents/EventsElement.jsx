import React, { useState } from "react";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import EventComment from "./EventComment";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./event.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function EventsElement() {
  const [CommentCounter, SetCommentCounter] = useState(123);

  const [LikeCounter, SetLikeCounter] = useState(541);
  const [DisLikeCounter, SetDisLikeCounter] = useState(541);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isComment, setIsComment] = useState(false);

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
  const images = [
    "../../src/assets/hero.png",
    "../../src/assets/hero.png",
    "../../src/assets/hero.png",
    "../../src/assets/hero.png",
    "../../src/assets/hero.png",
  ];
  const EventText = `Hello, We are conducting a test of our website to ensure
                everything is running smoothly. Your feedback is important to
                us! Please visit our website at : <br />
                <span className="text-primaryColor">
                    www.cntic-club.com/Contact
                </span>
                <br />
                and let us know if you encounter any issues or have any
                suggestions for improvement. Your input will help us enhance the
                user experience. Thank you for your assistance in making our
                website better.
                <br />
                <br /> Best regards, <br />
                Cntic Club`;
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="duration-500 transition-all ease-in mt-10 w-[80%] max-md:w-full flex justify-center items-center">
      <div
        className="
        h-fit
        relative
            text-[#3f3f3f]
             font-bold
           
             w-[90%] 
         
          p-4
             
             
             "
      >
        {/* Event Header */}
        <div className="flex justify-between items-center mb-1">
          <img src="../../public/logo.png" alt="" className=" w-[3.3rem]" />
          <div className="text-gray-400 text-lg">26 Sep 2023</div>
        </div>
        <hr className=" border-gray-300 border-[1.5px] mb-4" />
        {/* Event Text */}
        <div>
          {showMore ? (
            <span
              className="inline text-[14px] md:text-[16px]"
              dangerouslySetInnerHTML={{ __html: EventText }}
            />
          ) : (
            <span
              className="inline text-[14px] md:text-[16px]"
              dangerouslySetInnerHTML={{
                __html: EventText.slice(0, 150),
              }}
            />
          )}
          {/* Show more|less btn */}
          {EventText.length > 150 && (
            <span
              className="text-primaryColor cursor-pointer text-[12px] md:text-[16px]"
              onClick={toggleShowMore}
            >
              {showMore ? " Read Less" : "...Read More"}
            </span>
          )}
        </div>
        {/* Event Image */}

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className="my-5" src={image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Like | Comment btns */}
        <div className="flex justify-around items-center select-none">
          <div
            className="text-gray-400 cursor-pointer"
            onClick={handleLikeClick}
          >
            <BiLike
              className={`text-2xl ${
                isLiked ? "text-primaryColor" : "text-gray-400"
              }`}
            />
            <span
              className={`text-[14px] ${
                isLiked ? "text-primaryColor" : "text-gray-400"
              }`}
            >
              {LikeCounter}
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
              className={`text-[14px]
            
              ${isComment ? "text-primaryColor" : "text-gray-400"}`}
            >
              {CommentCounter}
            </span>
          </div>
          <div
            className="text-gray-400 cursor-pointer"
            onClick={handleDislikeClick}
          >
            <BiDislike
              className={`text-2xl ${
                isDisliked ? "text-primaryColor" : "text-gray-400"
              }`}
            />
            <span
              className={`text-[14px] ${
                isDisliked ? "text-primaryColor" : "text-gray-400"
              }`}
            >
              {DisLikeCounter}
            </span>
          </div>
        </div>
        {/* Event Comments */}
        <h2 className="text-gray-400 text-xl font-bold">Comments</h2>
        <EventComment
          text={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, blanditiis qui corrupti cum, sunt maiores vel, cumque voluptate tempora distinctio eius! Perferendis deserunt iste temporibus, quasi voluptatibus ab ut iusto!"
          }
        />
        <div
          className={`comments-section ${
            isComment ? "comments-section-visible" : ""
          }`}
        >
          {isComment ? (
            <div>
              <EventComment
                text={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, blanditiis qui corrupti cum, sunt maiores vel, cumque voluptate tempora distinctio eius! Perferendis deserunt iste temporibus, quasi voluptatibus ab ut iusto!"
                }
              />
              <EventComment
                text={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, blanditiis qui corrupti cum, sunt maiores vel, cumque voluptate tempora distinctio eius! Perferendis deserunt iste temporibus, quasi voluptatibus ab ut iusto!"
                }
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <span className="w-[30%] h-[4px] absolute -top-2 -right-2 bg-primaryColor"></span>
        <span className="w-[4px] h-[40%] absolute -top-2 -right-2 bg-primaryColor"></span>
        <span className="w-[40%] h-[4px] absolute -bottom-2 -left-2 bg-primaryColor"></span>
        <span className="w-[4px] h-[30%] absolute -bottom-2 -left-2 bg-primaryColor"></span>
      </div>
    </div>
  );
}
