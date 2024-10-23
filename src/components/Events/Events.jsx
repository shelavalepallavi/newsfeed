


import { useState } from "react";
import { IoIosSettings } from "react-icons/io";

const Events = () => {
  const [showEvents, setShowEvents] = useState(false);

  const Cricket = [
    {
      name: "Indoor Cricket",
      time: "10:00 21/11/23 - 13:00 22/11/23",
      Worker: "1 Manager, 2 Workers, 2 Guests",
    },
    {
      name: "Indoor Cricket",
      time: "10:00 21/11/23 - 13:00 22/11/23",
      Worker: "1 Manager, 2 Workers, 2 Guests",
    },
    {
      name: "Indoor Cricket",
      time: "10:00 21/11/23 - 13:00 22/11/23",
      Worker: "1 Manager, 2 Workers, 2 Guests",
    },
    {
      name: "Indoor Cricket",
      time: "10:00 21/11/23 - 13:00 22/11/23",
      Worker: "1 Manager, 2 Workers, 2 Guests",
    },
    {
      name: "Indoor Cricket",
      time: "10:00 21/11/23 - 13:00 22/11/23",
      Worker: "1 Manager, 2 Workers, 2 Guests",
    },
    {
      name: "Indoor Cricket",
      time: "10:00 21/11/23 - 13:00 22/11/23",
      Worker: "1 Manager, 2 Workers, 2 Guests",
    },
  ];

  const eventsToShow = showEvents ? Cricket : Cricket.slice(0, 3);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 w-full flex-grow p-4 rounded-lg">
      <hr className="w-full mb-2 border-gray-300 dark:border-gray-600" />
      <div className="flex flex-col w-full">
        {eventsToShow.map((item, i) => (
          <div className="flex flex-col mt-3" key={i}>
            <div className="flex justify-between text-sky-600 dark:text-sky-400 mb-1">
              <p className="text-base font-semibold">{item.name}</p>
              <IoIosSettings className="text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="font-normal text-gray-700 dark:text-gray-300">{item.time}</p>
              <p className="font-normal text-gray-700 dark:text-gray-300">{item.Worker}</p>
            </div>
          </div>
        ))}

        {Cricket.length > 3 && (
          <div className="flex justify-end mr-4 text-blue-700 dark:text-blue-400 cursor-pointer">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowEvents((prev) => !prev);
              }}
            >
              {showEvents ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
