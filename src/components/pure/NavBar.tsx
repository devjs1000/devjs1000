import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-gray-800 relative font-mono">
      <a href="/" className="ml-8 font-bold text-xl  ">
        DEVJS1000
      </a>
      <div className="px-4 cursor-pointer sm:block hidden">
        <a href="/projects" className="hover:underline p-4">
          Projects
        </a>
        <a href="/skills" className="hover:underline p-4">
          Skills
        </a>
        <a href="/experience" className="hover:underline p-4">
          Experience
        </a>
        <a href="/contact" className="px-6 py-2 border-[1px] border-gray-800 rounded-full hover:bg-gray-800 hover:text-white ">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
