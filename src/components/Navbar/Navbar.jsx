import React from "react";
import logo from "../../assets/logo.webp";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import profile from "../../assets/profile.webp";
import { IoMail } from "react-icons/io5";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div
      className={`flex items-center justify-between py-4 px-8  ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-indigo-700 text-white"
      }`}
    >
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 rounded-full">
          <img src={logo} alt="Logo" className="w-full h-full rounded-full" />
        </div>
        <div className="hidden custom764:flex items-center space-x-2 dark:bg-gray-800 p-1 rounded-lg border border-gray-400">
          <i className="fa-solid fa-magnifying-glass cursor-pointer text-gray-300"></i>
          <input
            type="text"
            placeholder="Search..."
            className="p-0 text-lg border-none outline-none bg-transparent text-gray-300 dark:text-white placeholder:text-gray-400 md:w-28 sm:w-28"
          />
        </div>
      </div>

      <div className="md:flex items-center space-x-8 md:space-x-24">
  <ul className="flex list-none custom764:space-x-10 space-x-8">
    <li className="cursor-pointer hover:text-gray-400 text-lg">MyApps</li>
    <li className="cursor-pointer hover:text-gray-400 text-lg">Home</li>
    <li className="cursor-pointer hover:text-gray-400 text-lg">Explore</li>
  </ul>
</div>


      <div className="flex items-center space-x-10 md:space-x-5">
        <div className="text-xl cursor-pointer hover:text-blue-500 relative">
          <i className="fas fa-bell mr-1 md:w-1"></i>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 absolute top-0 md:hidden">
            9
          </span>
        </div>
        <div className="text-xl cursor-pointer hover:text-blue-500">
          <IoMail />
        </div>
        <div className="text-xl cursor-pointer hover:text-blue-500 relative">
          <i className="fa-solid fa-bolt-lightning mr-1"></i>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 absolute top-0 md:hidden">
            9
          </span>
        </div>
        <div className="text-xl cursor-pointer w-10 h-10">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        <div onClick={toggleTheme} className="cursor-pointer">
          {theme === "light" ? (
            <IoMdMoon size={26} className="hover:text-blue-500 md:size-6" />
          ) : (
            <MdSunny size={26} className="hover:text-blue-500 md:size-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
