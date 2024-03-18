import React from 'react';
import searchIcon from '../../assets/searchIcon.svg';
import Blog from '../BlogsComponents/Blog';
import '../BlogsComponents/Blog.css';
import button from '../../assets/Vector.svg';
import { useState } from 'react';
import Header from '../PublicComponents/Header';

function Blogs() {
    const [selected, setSelected] = useState(1);
    const Pagesnb = [1, 2, 3, 4, 5];

    const nextPage = () => {
        console.log('next');
    };

    const prevPage = () => {
        console.log('previous');
    };

    console.log(selected);

    return (
        <div className="pt-[64px]">
            <Header title="CNTIC Blogs" text="Gain Brain Power with us" />
            <div className="p-2 py-10 md:p-5 relative">
                <div></div>
                <div className="w-[95%] search relative md:w-[30%] mx-auto my-10 flex justify-start items-center gap-3 bg-zinc-100 rounded-md border border-blue-800 p-3">
                    <img src={searchIcon} alt="" className="w-9 h-9" />
                    <input
                        type="search"
                        placeholder="Any Article ... ?"
                        className="w-full bg-zinc-100 outline-none text-neutral-500 text-xl font-medium"
                    />
                </div>
                <div className="w-[95%] mx-auto flex flex-wrap justify-center items-center gap-16 mb-16">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
                <div className="flex justify-center items-center gap-8">
                    <img
                        src={button}
                        alt=""
                        className={`${selected === Pagesnb[0]
                            ? 'hidden'
                            : 'cursor-pointer hover:scale-105 duration-500 transition-all'
                            }`}
                        onClick={prevPage}
                    />
                    {Pagesnb.map((number, index) => (
                        <span
                            key={index}
                            onClick={() => setSelected(number)}
                            className={`w-10 h-10 flex justify-center items-center ${selected === number
                                ? 'bg-blue hover:scale-105 text-white rounded-lg transition-all duration-300 cursor-pointer'
                                : 'bg-white hover:scale-105 text-black rounded-sm transition-all duration-300 cursor-pointer'
                                }`}
                        >
                            {number}
                        </span>
                    ))}
                    <img
                        src={button}
                        alt=""
                        className={`${selected === Pagesnb[Pagesnb.length - 1]
                            ? 'hidden'
                            : 'rotate-180 cursor-pointer hover:scale-105 duration-500 transition-all'
                            }`}
                        onClick={nextPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Blogs;
