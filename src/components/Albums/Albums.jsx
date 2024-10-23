import React, { useState } from 'react';
import maker_logo from '../../assets/makerble_logo.jpeg';
import { IoIosSettings } from "react-icons/io";

const Albums = () => {
  const [showAlbum, setShowAlbum] = useState(false);

  const albums = [
    { image: maker_logo, name: "All Hubs" },
    { image: maker_logo, name: "Broadfods" },
    { image: maker_logo, name: "Funders" },
    { image: maker_logo, name: "Creators Hub" },
    { image: maker_logo, name: "Marketing Team" },
    { image: maker_logo, name: "Development Studio" },
    { image: maker_logo, name: "Investors Group" },
    { image: maker_logo, name: "Design Thinkers" },
    { image: maker_logo, name: "Innovators Lab" },
    { image: maker_logo, name: "Project Managers" },
  ];

  const albumsToShow = showAlbum ? albums : albums.slice(0, 3);

  return (
    <div className='mt-1 mb-2 bg-gray-100 dark:bg-gray-800 rounded-md pt-1 pb-1 relative'>
      <div>
        <hr className='pb-2 pt-1 border-gray-300 dark:border-gray-600' />
        <div className='flex justify-between mb-3'>
          <button className="mr-2 text-xs bg-sky-200 hover:bg-sky-300 dark:bg-sky-900 dark:hover:bg-sky-800 text-black dark:text-white pl-1 pr-1 rounded-sm cursor-pointer">
            + New Project
          </button>
        </div>
        <div>
          {albumsToShow.map((album, i) => (
            <div className='flex items-start justify-between mb-3' key={i}>
              <div className='flex'>
                <img src={album.image} alt="" className='w-10 rounded' />
                <p className='ml-2 text-gray-700 dark:text-gray-300'>{album.name}</p>
              </div>
              <IoIosSettings className="text-gray-600 dark:text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {albums.length > 3 && (
        <div className='flex justify-end mr-4 text-blue-700 dark:text-blue-400 cursor-pointer'>
          <button onClick={(e) => {
            e.stopPropagation();
            setShowAlbum(prev => !prev);
          }}>
            {showAlbum ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Albums;
