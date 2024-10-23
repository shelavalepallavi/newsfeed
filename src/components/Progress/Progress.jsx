

import React, { useState } from "react";

const Progress = () => {
  const [progressOpen, setProgressOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const toggleProgress = () => {
    setProgressOpen(!progressOpen);
  };

  const progress = [
    { color: "bg-sky-200 dark:bg-sky-600", width: "50%", message: "Feeling productive today" },
    { color: "bg-green-300 dark:bg-green-700", width: "75%", message: "Completed most tasks" },
    { color: "bg-red-400 dark:bg-red-600", width: "20%", message: "Need more focus" },
    { color: "bg-yellow-500 dark:bg-yellow-700", width: "40%", message: "Halfway done" },
    { color: "bg-purple-600 dark:bg-purple-800", width: "90%", message: "Almost there!" },
    { color: "bg-pink-700 dark:bg-pink-900", width: "30%", message: "Starting a new project" },
    { color: "bg-indigo-800 dark:bg-indigo-900", width: "60%", message: "Making good progress" },
    { color: "bg-blue-500 dark:bg-blue-700", width: "35%", message: "Struggling with some tasks" },
    { color: "bg-teal-300 dark:bg-teal-600", width: "25%", message: "Slow start today" },
    { color: "bg-orange-400 dark:bg-orange-600", width: "85%", message: "On top of things" },
    { color: "bg-lime-500 dark:bg-lime-700", width: "45%", message: "Taking small steps" },
    { color: "bg-cyan-600 dark:bg-cyan-800", width: "70%", message: "Feeling confident" },
    { color: "bg-amber-700 dark:bg-amber-900", width: "10%", message: "Just getting started" },
    { color: "bg-fuchsia-500 dark:bg-fuchsia-700", width: "55%", message: "Steady pace" },
    { color: "bg-violet-400 dark:bg-violet-600", width: "15%", message: "Still need to plan" },
    { color: "bg-rose-600 dark:bg-rose-800", width: "65%", message: "Almost there" },
    { color: "bg-emerald-700 dark:bg-emerald-900", width: "80%", message: "Very productive" },
    { color: "bg-gray-300 dark:bg-gray-600", width: "95%", message: "Wrapping up the day" },
    { color: "bg-blue-900 dark:bg-blue-900", width: "50%", message: "Midway through" },
    { color: "bg-red-500 dark:bg-red-700", width: "35%", message: "Tough tasks ahead" },
  ];

  const progressToShow = showProgress ? progress : progress.slice(0, 4);

  return (
    <div className="mt-1 mb-2 bg-white dark:bg-gray-800 rounded-md p-2 transition-colors duration-300">
      <div
        className="p-2 flex justify-between items-center cursor-pointer"
        onClick={toggleProgress}
      >
        <p className="text-indigo-700 dark:text-indigo-300 text-lg font-medium">Personal progress</p>
        <button className="mt-2 text-sm text-sky-600 dark:text-sky-400 pl-1 pr-1 rounded-sm cursor-pointer">
          + Go to board
        </button>
      </div>

      {progressOpen && (
        <div>
          <hr className="pb-2 pt-1 dark:border-gray-600" />
          {progressToShow.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <div
                className={`w-10 h-10 mt-2 ${item.color} rounded-full mr-1`}
                style={{ borderRadius: "50%" }}
              ></div>

              <div className="flex flex-col gap-1 items-center">
                <p className="text-xs text-gray-800 dark:text-gray-300">{item.message}</p>
                <div className="w-52 mr-3 mb-2">
                  <div className="space-y-5">
                    <div
                      className="flex w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={parseInt(item.width)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className={`flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 ${item.color}`}
                        style={{ width: item.width }}
                      >
                        {item.width}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-violet-700 dark:bg-violet-500 pl-2 pr-2 rounded-full text-white">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {progressOpen && progress.length > 4 && (
        <div className="flex justify-end mr-4 text-blue-700 dark:text-blue-300 cursor-pointer">
          <button onClick={() => setShowProgress(!showProgress)}>
            {showProgress ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Progress;
