// import React, { useState } from "react";
// import profile from "../../assets/profile.webp";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { IoIosSettings } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";

// const NewsItem = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleStory = () => {
//     setIsExpanded(!isExpanded); // Toggle between showing and hiding the story
//   };
//   return (
//     <div className="bg-white m-2 flex flex-col gap-5 relative p-2 rounded-md">
//       <div className="flex items-start">
//         <img src={profile} alt="" className="w-[50px] m-1 rounded-sm" />
//         <div className="m-1 flex flex-col gap-1">
//           <h1 className="text-xl text-blue-600">Yael Adamson-Brown</h1>
//           <p className="">Activity happened on 4th Dec 2023</p>
//           <p className="">First Posted at 16:02 on 11th Dec 2023</p>
//           <p className="">Last Edited at 16:02 on 11th Dec 2023</p>
//           <div className="inline-flex items-center bg-indigo-50 rounded-m w-max p-1 rounded-md cursor-pointer">
//             <IoDocumentTextOutline />
//             <p className="ml-1  whitespace-nowrap">file name</p>
//           </div>
//         </div>
//         <div className="flex absolute gap-3 items-center right-0">
//           <FaRegHeart />
//           <p className="text-gray-500 cursor-pointer">0 comments</p>
//           <p className="text-gray-500 cursor-pointer">0 Favourite</p>
//           <p className=" cursor-pointer">Edited 1 day ago</p>
//           <IoIosSettings className="mr-3  cursor-pointer" />
//         </div>
//       </div>
//       <div>
//         <p>
//           <span className="text-indigo-700">New update</span> by{" "}
//           <span className="text-indigo-700">Yael Adamson-Brown working</span> on
//           the{" "}
//           <span className="text-indigo-700">
//             Using football to teach life skills to children
//           </span>{" "}
//           for <span className="text-indigo-700">An Organisation Demo</span> with{" "}
//           <span className="text-indigo-700">Sofia</span>
//         </p>
//       </div>
//       <div className="flex flex-col">
//         <span
//           className={`transition-all duration-300 ease-in-out text-center ${
//             isExpanded
//               ? "line-clamp-none blur-none"
//               : "line-clamp-1 blur-sm overflow-hidden"
//           }`}
//           style={{
//             display: "-webkit-box",
//             WebkitBoxOrient: "vertical",
//             WebkitLineClamp: isExpanded ? "unset" : "1",
//             overflow: "hidden",
//           }}
//         >
//           {" "}
//           Yael Adamson-Brown's groundbreaking initiative is focused on
//           leveraging football not just as a sport, but as a transformative
//           educational tool for young people. By utilizing the universal appeal
//           and excitement of football, the project teaches essential life skills
//           that extend far beyond the field. It is rooted in the belief that the
//           principles learned in team sports can foster personal growth and
//           resilience in participants. The project is designed to impact children
//           from diverse backgrounds, especially those in underprivileged
//           communities. Through carefully structured football programs, children
//           are introduced to key values such as teamwork, which teaches them how
//           to collaborate with others and respect different perspectives;
//           discipline, where they learn the importance of self-control and
//           persistence; leadership, which empowers them to take initiative and
//           inspire others; and resilience, helping them cope with challenges and
//           setbacks, both in the game and in life. To support this holistic
//           development, the initiative also integrates mentoring sessions. These
//           sessions focus on emotional intelligence and conflict resolution,
//           preparing the young participants not only to be better players, but
//           also to be more emotionally balanced and capable individuals. The
//           football coaches involved in the program are trained to act as
//           mentors, guiding children in both sportsmanship and personal
//           development. A unique aspect of this project is the inclusion of
//           community engagement activities. Children are encouraged to
//           participate in local projects, using the teamwork skills learned on
//           the field to contribute positively to their communities. This
//           strengthens their sense of responsibility and pride in their
//           achievements. The project is a collaboration between An Organisation
//           Demo and other local partners, aiming to build sustainable programs
//           that can be replicated in different regions. Yael's leadership,
//           alongside key partners like Sofia, ensures that the initiative is
//           tailored to meet the specific needs of each community, ensuring
//           long-term success and profound social impact. By focusing on football
//           as a medium, Yael Adamson-Brown’s initiative helps young individuals
//           not only excel in the sport but also carry forward invaluable lessons
//           that apply to education, career, and everyday life.
//         </span>
//         <div
//           className={`${
//             isExpanded
//               ? "relative"
//               : "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           }`}
//         >
//           <button
//             className="bg-indigo-50 text-indigo-700 rounded-md p-2 pl-6 pr-6 font-medium hover:bg-indigo-100 transition-all duration-300 mt-28 mb-4" // Increased margin-top
//             onClick={toggleStory}
//           >
//             {isExpanded ? "Collapse" : "Expand"}
//           </button>
//         </div>
//       </div>

//       <div></div>
//       <div className="flex items-center">
//         <img src={profile} alt="" className="w-[50px] m-1 rounded-sm" />
//         <input
//           type="text"
//           placeholder="Write a comment..."
//           className="w-full outline-none border-collapse bg-gray-100  rounded-md ml-3 p-2"
//         />
//         <button className="hover:font-semibold m-2 bg-indigo-600 text-white p-2 rounded-md">
//           Post
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;

import React, { useState } from "react";
import profile from "../../assets/profile.webp";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const NewsItem = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleStory = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white dark:bg-gray-800 m-2 flex flex-col gap-5 relative p-2  transition-colors duration-300 rounded-md dark:border-b dark:rounded-none ">
      <div className="flex items-start">
        <div className="flex flex-row lg:flex-col sm:flex-col items-start">
          <img src={profile} alt="" className="w-[50px] m-1 rounded-sm" />
          <div className="m-1 flex flex-col gap-1">
            <h1 className="text-xl text-blue-600 dark:text-blue-400">
              Yael Adamson-Brown
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Activity happened on 4th Dec 2023
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              First Posted at 16:02 on 11th Dec 2023
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Last Edited at 16:02 on 11th Dec 2023
            </p>
            <div className="inline-flex items-center bg-indigo-50 dark:bg-gray-700 rounded-m w-max p-1 rounded-md cursor-pointer">
              <IoDocumentTextOutline className="text-gray-700 dark:text-gray-300" />
              <p className="ml-1 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                file name
              </p>
            </div>
          </div>
        </div>
        <div className="flex absolute gap-3 items-center right-0">
          <FaRegHeart className="text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400 cursor-pointer">
            0 comments
          </p>
          <p className="text-gray-500 dark:text-gray-400 cursor-pointer">
            0 Favourite
          </p>
          <p className="text-gray-500 dark:text-gray-400 cursor-pointer">
            Edited 1 day ago
          </p>
          <IoIosSettings className="text-gray-500 dark:text-gray-400 mr-3 cursor-pointer" />
        </div>
      </div>
      <div>
        <p className="text-gray-700 dark:text-gray-300">
          New update by Yael Adamson-Brown working on the Using football to
          teach life skills to children for An Organisation Demo with Sofia
        </p>
      </div>
      <div className="flex flex-col">
        <span
          className={`transition-all duration-300 ease-in-out text-center ${
            isExpanded
              ? "line-clamp-none blur-none"
              : "line-clamp-1 blur-sm overflow-hidden"
          } text-gray-700 dark:text-gray-300`}
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: isExpanded ? "unset" : "1",
            overflow: "hidden",
          }}
        >
          {" "}
          Yael Adamson-Brown's groundbreaking initiative is focused on
          leveraging football not just as a sport, but as a transformative
          educational tool for young peopleBy utilizing the universal appeal and
          excitement of football, the project teaches essential life skills that
          extend far beyond the field. It is rooted in the belief that the
          principles learned in team sports can foster personal growth and
          resilience in participants. The project is designed to impact children
          from diverse backgrounds, especially those in underprivileged
          communities. Through carefully structured football programs, children
          are introduced to key values such as teamwork, which teaches them how
          to collaborate with others and respect different perspectives;
          discipline, where they learn the importance of self-control and
          persistence; leadership, which empowers them to take initiative and
          inspire others; and resilience, helping them cope with challenges and
          setbacks, both in the game and in life. To support this holistic
          development, the initiative also integrates mentoring sessions. These
          sessions focus on emotional intelligence and conflict resolution,
          preparing the young participants not only to be better players, but
          also to be more emotionally balanced and capable individuals. The
          football coaches involved in the program are trained to act as
          mentors, guiding children in both sportsmanship and personal
          development. A unique aspect of this project is the inclusion of
          community engagement activities. Children are encouraged to
          participate in local projects, using the teamwork skills learned on
          the field to contribute positively to their communities. This
          strengthens their sense of responsibility and pride in their
          achievements. The project is a collaboration between An Organisation
          Demo and other local partners, aiming to build sustainable programs
          that can be replicated in different regions. Yael's leadership,
          alongside key partners like Sofia, ensures that the initiative is
          tailored to meet the specific needs of each community, ensuring
          long-term success and profound social impact. By focusing on football
          as a medium, Yael Adamson-Brown’s initiative helps young individuals
          not only excel in the sport but also carry forward invaluable lessons
          that apply to education, career, and everyday life.
        </span>
        <div
          className={`${
            isExpanded
              ? "relative"
              : "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }`}
        >
          <button
            className="bg-indigo-50 dark:bg-gray-700 text-indigo-700 dark:text-indigo-400 rounded-md p-2 pl-6 pr-6 font-medium hover:bg-indigo-100 dark:hover:bg-gray-600 transition-all duration-300 mt-48 mb-4" 
            onClick={toggleStory}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <img src={profile} alt="" className="w-[50px] m-1 rounded-sm" />
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full outline-none border-collapse bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md ml-3 p-2"
        />
        <button className="hover:font-semibold m-2 bg-indigo-600 dark:bg-indigo-500 text-white p-2 rounded-md">
          Post
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
