import React from "react";
import bannerImg from "../../assets/banner.png";
import { MdOutlineSearch } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex justify-center items-center sm:pt-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="text-center sm:mt-10 md:space-y-8">
        <h1 className="text-2xl md:text-6xl lg:leading-tight leading-snug sm:mt-5  md:-mt-60">
          Make Your Interior More
          <br /> Minimalistic & Mordern
        </h1>
        <p className="text-[16px] md:text-2xl font-normal md:-mt-5 lg:w-1/2 mx-auto">
          Trun with room panto into a lot more minimalistic and mordern with
          easy.
        </p>
        {/* search feild */}
        <div className="relative inline-block  -mt-4">
          <input
            type="text"
            className="w-80 bg-white/25 px-6 py-2 rounded-full focus:outline-none border border-gray-300 mt-6 placeholder:text-white"
            placeholder="Search Furniture"
          />
          <span className="absolute bg-amber-500 rounded-full right-3 top-1/2 cursor-pointer w-6 h-6 flex justify-center items-center">
            <MdOutlineSearch></MdOutlineSearch>
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent shadow-sm"></div>
      {/* hover button for displaying tooltip box */}
      <div className="absolute bottom-40 left-24 group">
        <button className="relative p-4 bg-white/25 border-white rounded-full border text-xl">
          <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/25 shadow-mg group-hover:flex space-x-2">
            <div className="size-6 bg-red-700 border-white rounded-full"></div>
            <div className="size-6 bg-green-700 border-white rounded-full"></div>
            <div className="size-6 bg-blue-700 border-white rounded-full"></div>
            {/* tooltip arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-left-transfarent border-right-8 border-right-transfarent border-t-8 border-t-white/35"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
