import React, { useState } from "react";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import EventComment from "./EventComment";
export default function EventsElement() {
    const [CommentCounter, SetCommentCounter] = useState(123);

    const [LikeCounter, SetLikeCounter] = useState(541);
    const [DisLikeCounter, SetDisLikeCounter] = useState(541);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

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
        <div>
            <div
                className="
            text-[#3f3f3f]
             font-bold
             m-auto
             w-[90%] md:w-[70%] 
             mt-10
             mb-[10px]
             p-4
             relative
             bg-PostsBg
             "
            >
                {/* Event Header */}
                <div className="flex justify-between items-center mb-1">
                    <img
                        src="../../public/logo.png"
                        alt=""
                        className=" w-[3.3rem]"
                    />
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
                <div>
                    <img
                        src="../../src/assets/hero.png"
                        alt=""
                        className=" w-[100%] md:w-[80%] m-auto"
                    />
                </div>
                <hr className=" border-gray-300 border-[1.5px] mt-4 mb-4" />
                {/* Like | Comment btns */}
                <div className="flex justify-around items-center select-none">
                    <div
                        className="text-gray-400 cursor-pointer"
                        onClick={handleLikeClick}
                    >
                        <BiLike
                            className={`text-2xl ${
                                isLiked ? "text-blue-500" : "text-gray-400"
                            }`}
                        />
                        <span
                            className={`text-[14px] ${
                                isLiked ? "text-blue-500" : "text-gray-400"
                            }`}
                        >
                            {LikeCounter}
                        </span>
                    </div>
                    <div className="text-gray-400 cursor-pointer">
                        <BiComment className=" text-2xl" />
                        <span className="text-[14px]">{CommentCounter}</span>
                    </div>
                    <div
                        className="text-gray-400 cursor-pointer"
                        onClick={handleDislikeClick}
                    >
                        <BiDislike
                            className={`text-2xl ${
                                isDisliked ? "text-blue-500" : "text-gray-400"
                            }`}
                        />
                        <span
                            className={`text-[14px] ${
                                isDisliked ? "text-blue-500" : "text-gray-400"
                            }`}
                        >
                            {DisLikeCounter}
                        </span>
                    </div>
                </div>
                <span className="w-[180px] h-[3px] absolute top-0 right-0 bg-primaryColor"></span>
                <span className="w-[3px] h-[180px] absolute top-0 right-0 bg-primaryColor"></span>
                <span className="w-[180px] h-[4px] absolute bottom-0 left-0 bg-primaryColor"></span>
                <span className="w-[3px] h-[180px] absolute bottom-0 left-0 bg-primaryColor"></span>
            </div>
            {/* Event Comments */}
            <EventComment
                text={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, blanditiis qui corrupti cum, sunt maiores vel, cumque voluptate tempora distinctio eius! Perferendis deserunt iste temporibus, quasi voluptatibus ab ut iusto!"
                }
            />
        </div>
    );
}
