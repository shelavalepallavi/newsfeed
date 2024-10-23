import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import makerble_logo from "../../assets/makerble_logo.jpeg";

const SearchFeed = () => {
  const [postOpen, setPostOpen] = useState(false);

  const postToggle = () => {
    setPostOpen(!postOpen);
  };
  const closePostForm = () => {
    setPostOpen(false);
  };

  return (
    <>
      {!postOpen && (
        <div className=" m-2 flex items-center justify-between p-1 bg-white dark:bg-gray-800 pl-2 mb-3 rounded-md dark:border-b dark:rounded-none">
          <div>
            <p className="text-2xl text-zinc-800 dark:text-gray-200 font-medium pt-1 ">NewsFeed</p>
          </div>
          <div className="flex align-middle">
            <input
              type="text"
              placeholder="search..."
              className="outline-none m-2 p-2 rounded-md bg-gray-100 dark:bg-gray-600 dark:text-gray-200"
            />
            <button
              className="hover:font-semibold m-2 bg-indigo-600 dark:bg-indigo-500 text-white pt-1 pb-1 pl-3 pr-3 rounded-md"
              onClick={postToggle}
            >
              Post
            </button>
            <FaFilter className="m-2 mt-4 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </div>
        </div>
      )}
      {postOpen && (
        <div className="m-2 p-2 bg-white dark:bg-gray-800 mb-3 rounded-md flex flex-col flex-grow transition-all duration-300 ease-in-out">
          <div className="flex justify-between mb-4 ">
            <div>
              <p className="text-2xl text-sky-700 dark:text-sky-400">Post an update</p>
            </div>
            <div>
              <button className="bg-cyan-50 dark:bg-cyan-700 ml-2 mr-2 text-blue-500 dark:text-blue-300 rounded-md p-2 pl-4 pr-4 hover:bg-sky-100 dark:hover:bg-sky-600" onClick={closePostForm}>
                Cancel
              </button>
              <button className="bg-cyan-50 dark:bg-cyan-700 ml-2 mr-2 text-blue-500 dark:text-blue-300 rounded-md p-2 pl-4 pr-4 hover:bg-sky-100 dark:hover:bg-sky-600" onClick={closePostForm}>
                Post
              </button>
            </div>
          </div>

          <div className="flex justify-between mr-4">
            <div>
              <img src={makerble_logo} alt="" className="mt-4" />
            </div>
            <div className="flex flex-col mt-4 ml-2">
              <textarea
                placeholder="Post an update..."
                rows={5}
                cols={100}
                className="outline-none border border-sky-500 dark:border-sky-400 rounded-md p-1 resize-none bg-gray-100 dark:bg-gray-600 dark:text-gray-200"
              ></textarea>
              <div className="flex mt-4 items-center">
                <label htmlFor="projects" className="block mr-2 font-medium text-gray-700 dark:text-gray-300">
                  Projects
                </label>
                <select
                  id="projects"
                  className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full outline-none bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                >
                  <option value="">Projects Organization</option>
                  <option value="project1">Project Report</option>
                  <option value="project2">Design Models</option>
                  <option value="project3">Creating Board</option>
                  <option value="project4">Task Manager</option>
                  <option value="project5">Organizational data</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-around mt-2">
            <button className="bg-sky-500 dark:bg-sky-400 text-white p-2 pr-8 pl-8 rounded-md hover:bg-sky-400 dark:hover:bg-sky-300">Add Program</button>
            <button className="bg-sky-500 dark:bg-sky-400 text-white p-2 pr-8 pl-8 rounded-md hover:bg-sky-400 dark:hover:bg-sky-300">Attach</button>
            <button className="bg-sky-500 dark:bg-sky-400 text-white p-2 pr-8 pl-8 rounded-md hover:bg-sky-400 dark:hover:bg-sky-300">Location</button>
            <button className="bg-sky-500 dark:bg-sky-400 text-white p-2 pr-8 pl-8 rounded-md hover:bg-sky-400 dark:hover:bg-sky-300">Date</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFeed;



