import React from "react";
import {IoMdCall, IoIosPlayCircle} from 'react-icons/io'
const Hero = () => {
  return (
    <div className="mx-8 h-[500px] flex items-center">
      <div>
        <h1 className="text-6xl">Full Stack Developer</h1>
        <h2 className="text-2xl">with a passion for building beautiful.</h2>
        <div className="mt-6">
          <a
            href="/contact"
            className="px-6 py-2 border-[1px] bg-gray-800 text-white rounded-full hover:bg-gray-100 hover:text-gray-900"
          >
            Book a call <IoMdCall className="inline-block ml-2" />
          </a>
          <a
            href="/projects"
            className="px-6 py-2 border-[1px] border-gray-800 rounded-full  ml-4"
          >
            See my work <IoIosPlayCircle className="inline-block ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
