

import React, { useState, useEffect } from "react";
import { IoIosSettings } from "react-icons/io";

const Tasks = () => {
  const [openTask, setOpenTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleTask = () => {
    setOpenTask(!openTask); 
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("You must write something!");
    } else {
      setTasks([...tasks, { text: inputValue, isChecked: false }]);
      setInputValue("");
    }
  };

  return (
    <div className="mt-1 mb-2 bg-white dark:bg-gray-800 rounded-md p-2">
      <div
        className="p-2 flex justify-between items-center cursor-pointer"
        onClick={toggleTask}
      >
        <p className="text-indigo-700 dark:text-indigo-300 text-lg font-medium">Tasks</p>
        <div>
          <button className="mt-2 mr-2 text-xs bg-lime-200 dark:bg-lime-600 pl-1 pr-1 cursor-pointer hover:bg-lime-300 dark:hover:bg-lime-500 p-1 rounded-md">
            To Do
          </button>
          <button className="mt-2 mr-2 text-xs bg-cyan-200 dark:bg-cyan-600 pl-1 pr-1 cursor-pointer hover:bg-cyan-300 dark:hover:bg-cyan-500 p-1 rounded-md">
            0 Done
          </button>
          <button className="mt-2 mr-2 text-xs bg-pink-300 dark:bg-pink-600 pl-1 pr-1 cursor-pointer hover:bg-pink-400 dark:hover:bg-pink-500 p-1 rounded-md">
            Filters
          </button>
        </div>
      </div>
      {openTask && (
        <div>
          <hr className="mt-2 mb-2" />
          <div className="p-1 pt-5">
            <div className="bg-gray-100 dark:bg-gray-700 flex rounded-full mb-6">
              <input
                type="text"
                placeholder="Add your text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-transparent border-0 outline-none flex-1 pt-2 pb-2 pl-2 text-gray-900 dark:text-gray-200"
              />
              <button onClick={addTask} className="bg-purple-800 dark:bg-purple-600 text-white rounded-full w-full text-sm pt-1 pb-1 hover:bg-purple-900 dark:hover:bg-purple-500">
                Save Task
              </button>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center p-2 border border-purple-300 dark:border-purple-600 mb-2 rounded-md ${
                    task.isChecked ? "checked" : ""
                  }`}
                >
                  <div className="flex-1 text-gray-900 dark:text-gray-200">{task.text}</div>
                  <input type="checkbox" className="mr-2" />
                  <IoIosSettings className="cursor-pointer" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;

