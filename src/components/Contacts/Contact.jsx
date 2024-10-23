


import React, { useState } from 'react';
import maker_logo from '../../assets/makerble_logo.jpeg';
import { CiFilter } from "react-icons/ci";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  const ContactList = [
    { name: "John", image: maker_logo, msg: "Your last updated was 1 day ago" },
    { name: "Peter", image: maker_logo, msg: "Your last updated was 4 days ago" },
    { name: "Rony", image: maker_logo, msg: "Your last updated was 7 days ago" },
    { name: "Angelo", image: maker_logo, msg: "Your last updated was 3 days ago" },
    { name: "Mathew", image: maker_logo, msg: "Your last updated was 8 days ago" },
    { name: "Rocky", image: maker_logo, msg: "Your last updated was 9 days ago" },
    { name: "Sam", image: maker_logo, msg: "Your last updated was 11 days ago" },
    { name: "Roy", image: maker_logo, msg: "Your last updated was 14 days ago" },
  ];

  const ContactsToShow = showContact ? ContactList : ContactList.slice(0, 3);

  return (
    <div className='mt-1 mb-2 bg-gray-100 dark:bg-gray-800 rounded-md pt-1 pb-1 relative'>
      <div>
        <hr className='pb-2 pt-1 border-gray-300 dark:border-gray-600' />
        <div className='flex justify-between mb-3'>
          <button className="mr-2 text-xs bg-sky-200 hover:bg-sky-300 dark:bg-sky-700 dark:hover:bg-sky-600 pl-1 pr-1 rounded-sm cursor-pointer">
            + New Contact
          </button>
          <div className='flex items-center'>
            <CiFilter className='text-gray-600 dark:text-gray-300' />
            <BsFillQuestionCircleFill className='text-gray-600 dark:text-gray-300' />
          </div>
        </div>
        <div>
          {ContactsToShow.map((contact, i) => (
            <div className='flex items-start mb-3' key={i}>
              <img src={contact.image} alt="" className='w-10' />
              <div className='ml-2'>
                <p className='ml-2 text-sky-500 dark:text-sky-400'>{contact.name}</p>
                <p className='text-gray-700 dark:text-gray-300'>{contact.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {ContactList.length > 3 && (
        <div className='flex justify-end mr-4 text-blue-700 dark:text-blue-400 cursor-pointer'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowContact((prev) => !prev);
            }}
          >
            {showContact ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
