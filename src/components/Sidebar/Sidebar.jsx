import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import Events from "../Events/Events";
import Contact from "../Contacts/Contact";
import Projects from "../Projects/Projects";
import Albums from "../Albums/Albums";
import Organization from "../Organization/Organizatoin";
import Followers from "../Followers/Followers";
import YouFollow from "../YouFollow/YouFollow";
import { FaRegFolder } from "react-icons/fa";
import { IoAlbumsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RiUserStarLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";

const Sidebar = () => {
  const menus = [
    { name: "Events", icon: IoNewspaperOutline },
    { name: "Contact", icon: IoCallOutline },
    { name: "Projects", icon: FaRegFolder },
    { name: "Albums", icon: IoAlbumsOutline, margin: true },
    { name: "Organizations", icon: MdOutlineDashboard },
    { name: "Followers", icon: LuUsers },
    { name: "People you follow", icon: RiUserStarLine },
  ];

  const [openLeft, setOpenLeft] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
    setOpenLeft(true);
  };

  const renderComponent = (menuName) => {
    switch (menuName) {
      case "Events":
        return <Events />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      case "Albums":
        return <Albums />;
      case "Organizations":
        return <Organization />;
      case "Followers":
        return <Followers />;
      case "People you follow":
        return <YouFollow />;
      default:
        return null;
    }
  };

  return (
    <section className="flex gap-6">
      <div
        className={`bg-white dark:bg-gray-800 min-h-full ${
          openLeft ? "w-72" : "w-16"
        } duration-500 text-black dark:text-white px-4 flex flex-col rounded-md`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpenLeft(!openLeft)}
          />
        </div>

        <div className="box mt-4 flex flex-col gap-4 relative flex-1 w-full flex-grow ">
          {menus.map((menu, i) => (
           <div
           key={i}
           className={`${
             menu?.margin ? "mt-3" : ""
           } group flex flex-col items-start text-sm gap-3.5 font-medium rounded-md cursor-pointer p-2 w-full  ${
             openLeft
               ? "bg-gray-100 dark:bg-gray-800 "
               : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
           }`}
           onClick={() => handleMenuClick(menu.name)}
         >
         
              <div className="flex items-center">
                <div>
                  {React.createElement(menu.icon, {
                    size: "20",
                    className: "text-black dark:text-white",
                  })}
                </div>
                <h2
                  className={`whitespace-pre duration-100 text-base ml-3 ${
                    !openLeft && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`absolute left-48 bg-white dark:bg-gray-700 font-semibold whitespace-pre text-gray-900 dark:text-gray-300 rounded-md drop-shadow-lg px-2 py-1 w-fit opacity-0 group-hover:opacity-100 group-hover:left-14 group-hover:duration-300 transition-all z-10 ${
                    openLeft ? "hidden" : "block"
                  }`}
                >
                  {menu.name}
                </h2>
              </div>
              {openLeft && expandedMenu === menu.name && (
                <div className="w-full flex-grow">
                  {renderComponent(menu.name)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
