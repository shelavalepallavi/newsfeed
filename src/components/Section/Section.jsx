import React from "react";
import Boards from "../Boards/Boards";
import Progress from "../Progress/Progress";
import Tasks from "../Tasks/Tasks";
import Create from "../Create/Create";

const Section = () => {
  return (
   
    <div className="min-h-20 w-full custom925:w-80">
      <div
        className={`bg-white dark:bg-gray-800 text-black dark:text-white 
                w-full custom925:w-80 p-1 
                flex flex-col rounded-md 
                transition-colors duration-300 ease-in-out custom925:flex custom925:justify-between`}
      >
        <div className="flex-col justify-between  w-full lg:items-center ">
          <Create />
          <Boards />
          <Progress />
          <Tasks />
        </div>
      </div>
    </div>

  )

};

export default Section;
