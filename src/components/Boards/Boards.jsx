import React, { useState } from 'react';
import maker_logo from '../../assets/makerble_logo.jpeg';

const Boards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const toggleBoard = () => {
    setIsOpen(!isOpen);
  };

  const boards = [
    { name: "Angolo Production", image: maker_logo },
    { name: "Attendance Reporting", image: maker_logo },
    { name: "CHVA RYH", image: maker_logo },
    { name: "Stars Production", image: maker_logo },
    { name: "Making designs", image: maker_logo },
    { name: "Create Report", image: maker_logo },
    { name: "Production Makers", image: maker_logo },
    { name: "HIE IHIE", image: maker_logo },
  ];

  const boardsToShow = showAll ? boards : boards.slice(0, 3);

  return (
    <div className='mt-1 mb-2 bg-white dark:bg-gray-800 rounded-md pt-1 pb-1 transition-all duration-300'>
      <div className='relative p-2 flex justify-between items-center cursor-pointer' onClick={toggleBoard}>
        <p className="text-indigo-700 dark:text-indigo-400 text-lg font-medium">Boards</p>
        <button className="absolute right-0 top-0 mr-2 text-xs bg-sky-200 dark:bg-sky-700 text-gray-800 dark:text-gray-200 pl-1 pr-1 rounded-sm cursor-pointer hover:bg-sky-300 dark:hover:bg-sky-600">
          + New Board
        </button>
      </div>
      {isOpen && (
        <div>
          <hr className='pb-2 pt-1 border-gray-300 dark:border-gray-600' />
          <div>
            {boardsToShow.map((board, i) => (
              <div className='flex mb-3' key={i}>
                <img src={board.image} alt="" className='w-10' />
                <p className='ml-2 text-blue-500 dark:text-blue-300'>{board.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {isOpen && boards.length > 3 && (
        <div className='flex justify-end mr-4 text-blue-700 dark:text-blue-400 cursor-pointer'>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Boards;
