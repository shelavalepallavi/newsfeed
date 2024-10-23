import React from 'react';
import SearchFeed from '../SearchFeed/SearchFeed';
import NewsItem from '../NewsItem/NewsItem';

const NewsFeed = () => {
  return (
    <div className='w-[70%] bg-gray-100 dark:bg-gray-800 flex-grow ml-2 mr-2 rounded-md flex-col p-4'>
      <SearchFeed />
      <NewsItem />
      
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default NewsFeed;
