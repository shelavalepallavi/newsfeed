// import React from "react";
// import { IoList } from "react-icons/io5";
// import { FaCirclePlus } from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa";

// const Create = () => {
//   return (
//     <div className="mt-1 mb-2 bg-white dark:bg-gray-800 rounded-md">
//       <div className="flex justify-between items-center cursor-pointer p-2">
//         <div>
//           <button className="bg-transparent hover:bg-blue-500 dark:hover:bg-blue-600 text-blue-700 dark:text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 dark:border-blue-400 hover:border-transparent rounded flex items-center">
//             <FaCirclePlus className="mr-1" />
//             Create
//           </button>
//         </div>
//         <div className="flex">
//           <FaRegStar className="m-1 text-xl text-blue-600 dark:text-blue-400" />
//           <IoList className="m-1 text-xl text-blue-600 dark:text-blue-400" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;



import React from "react";
import { IoList } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -translate-x-1/2 left-1/2 z-10">
        {text}
      </div>
    </div>
  );
};

const Create = () => {
  return (
    <div className="mt-1 mb-2 bg-white dark:bg-gray-800 rounded-md hidden custom925:block">
      <div className="flex justify-between items-center cursor-pointer p-2">
        <div>
          <button className="bg-transparent hover:bg-blue-500 dark:hover:bg-blue-600 text-blue-700 dark:text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 dark:border-blue-400 hover:border-transparent rounded flex items-center">
            <FaCirclePlus className="mr-1" />
            Create
          </button>
        </div>
        <div className="flex">
          <Tooltip text="Favorite">
            <FaRegStar className="m-1 text-xl text-blue-600 dark:text-blue-400" />
          </Tooltip>
          <Tooltip text="List">
            <IoList className="m-1 text-xl text-blue-600 dark:text-blue-400" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Create;
