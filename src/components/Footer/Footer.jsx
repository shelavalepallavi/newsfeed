import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 bg-zinc-900 pt-10 text-white">
      <div className="flex justify-around pb-10">
        <div>
          <p className="text-4xl  font-medium cursor-pointer">Makerble</p>
        </div>
        <div>
          <p className="text-lg font-medium mb-2 cursor-pointer">ORGANIZATIONS</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Control panel</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Discover the Marketplace</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Create organization Account</p>
        </div>
        <div>
          <p className="text-lg font-medium mb-2 cursor-pointer">YOUR ACCOUNT</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Library</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Profile</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Projects</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Help</p>
        </div>
        <div>
          <p className="text-lg font-medium mb-2 cursor-pointer">EXPLORE</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Metrics</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Networks</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Strategies</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Projects</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Studies</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Surveys</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Tips</p>
          <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Vouchers</p>
        </div>
        <div>
          <div className="mb-6">
            <p className="text-lg font-medium mb-2 cursor-pointer">ABOUT US</p>
            <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Terms & Conditions</p>
            <p className="font-light text-sm mb-1 cursor-pointer text-gray-300">Privacy & Policy</p>
          </div>
          <div>
            <p className="text-lg font-medium mb-2 cursor-pointer">CONTACT US</p>
            <p className="flex items-center font-light text-sm mb-1 cursor-pointer text-gray-300"><CiMail/>contact@makerble.com</p>
            <p className="flex items-center font-light text-sm mb-1 cursor-pointer text-gray-300"><IoIosCall/>012 897 3456</p>
          </div>
        </div>
      </div>

      <hr className="bg-white w-[95%] m-auto mb-6"/>
      <div className="w-[80%] m-auto flex justify-between pb-5">
        <p>&copy; makerble2023</p>
        <div className="flex">
          <FaLinkedin className="m-2 text-2xl hover:text-cyan-500 cursor-pointer"/>
          <FaYoutube className="m-2 text-2xl hover:text-red-600 cursor-pointer"/>
          <FaFacebook className="m-2 text-2xl hover:text-sky-500 cursor-pointer"/>
          <RiInstagramFill className="m-2 text-2xl hover:text-fuchsia-700 cursor-pointer"/>
          <AiFillTwitterCircle className="m-2 text-2xl hover:text-blue-400 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
