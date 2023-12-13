import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

export default function EventComment({text}) {
    const [Comment_LikeCounter, SetComment_LikeCounter] = useState(541);
    const [Comment_DisLikeCounter, SetComment_DisLikeCounter] = useState(541);
    const [Comment_isLiked, SetComment_isLiked] = useState(false);
    const [Comment_isDisliked, SetComment_isDisliked] = useState(false);

    const handleLikeClick = () => {
        if (Comment_isDisliked) {
            SetComment_DisLikeCounter((prevCounter) => prevCounter - 1);
            SetComment_LikeCounter((prevCounter) => prevCounter + 1);
            SetComment_isDisliked(false);
            SetComment_isLiked(true);
        } else if (!Comment_isLiked) {
            SetComment_LikeCounter((prevCounter) => prevCounter + 1);
            SetComment_isLiked(true);
        }
    };

    const handleDislikeClick = () => {
        if (Comment_isLiked) {
            SetComment_LikeCounter((prevCounter) => prevCounter - 1);
            SetComment_DisLikeCounter((prevCounter) => prevCounter + 1);
            SetComment_isLiked(false);
            SetComment_isDisliked(true);
        } else if (!Comment_isDisliked) {
            SetComment_DisLikeCounter((prevCounter) => prevCounter + 1);
            SetComment_isDisliked(true);
        }
    };
const [showMore, setShowMore] = useState(false);
const toggleShowMore = () => {
    setShowMore(!showMore);
};
    return (
        <div>
            <div className="w-[90%] md:w-[70%] m-auto bg-PostsBg p-2">
                <h2 className="text-gray-400 text-xl font-bold">Comments</h2>
                <div className="md:flex items-start relative">
                    <span className="w-[3px] h-[100%] absolute left-0 bg-primaryColor"></span>
                    <img
                        src="../../../src/assets/avatar.png"
                        alt=""
                        className="w-14"
                    />

                    <div className="bg-gray-300 p-2 font-bold ml-2 md:ml-0">
                        {showMore ? (
                            <span
                                className="inline text-[14px] md:text-[16px]"
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        ) : (
                            <span
                                className="inline text-[14px] md:text-[16px]"
                                dangerouslySetInnerHTML={{
                                    __html: text.slice(0, 100),
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
                    <div className="flex justify-around items-center select-none">
                        <div
                            className="text-gray-400 cursor-pointer absolute bottom-[-35px] right-10"
                            onClick={handleLikeClick}
                        >
                            <BiLike
                                className={`text-xl md:text-2xl ${
                                    Comment_isLiked
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                }`}
                            />
                            <span
                                className={`text-[13px] md:text-[14px] font-bold  ${
                                    Comment_isLiked
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                }`}
                            >
                                {Comment_LikeCounter}
                            </span>
                        </div>
                        <div
                            className="text-gray-400 cursor-pointer absolute bottom-[-35px] right-2"
                            onClick={handleDislikeClick}
                        >
                            <BiDislike
                                className={`text-xl md:text-2xl ${
                                    Comment_isDisliked
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                }`}
                            />
                            <span
                                className={`text-[13px] md:text-[14px] font-bold  ${
                                    Comment_isDisliked
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                }`}
                            >
                                {Comment_DisLikeCounter}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
