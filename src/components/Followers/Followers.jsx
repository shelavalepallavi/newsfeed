import React,{useState} from 'react'
import follow1 from '../../assets/follo1.webp'
import follow2 from '../../assets/follo2.webp'
import follow3 from '../../assets/follo3.webp'
import follow4 from '../../assets/follo4.jpg'
import follow5 from '../../assets/follo5.webp'
import follow6 from '../../assets/follo6.webp'
import follow7 from '../../assets/follo7.webp'
import follow8 from '../../assets/follo8.webp'
import follow9 from '../../assets/follo3.webp'
import follow10 from '../../assets/follo4.jpg'
import follow11 from '../../assets/follo5.webp'
import follow12 from '../../assets/follo6.webp'
import follow13 from '../../assets/follo7.webp'
import follow14 from '../../assets/follo8.webp'


const Followers = () => {
  const [showFollow, setShowFollow] = useState(false);


  const follow = [
    {
      image: follow1
    },
    {
      image: follow2
    },
    {
      image: follow3
    },
    {
      image: follow4
    },
    {
      image: follow5
    },
    {
      image: follow6
    },
    {
      image: follow7
    },
    {
      image: follow8
    },
    {
      image: follow9
    },
    {
      image: follow10
    },
    {
      image: follow11
    },
    {
      image: follow12
    },
    {
      image: follow13
    },
    {
      image: follow14
    }
  ];

  const followToShow = showFollow ? follow : follow.slice(0, 4);
  return (
    <div className='mt-1 mb-2 bg-gray-100 dark:bg-gray-800 rounded-md pt-1 pb-1 relative'>
      <div>
        <hr className='pb-2 pt-1 border-gray-300 dark:border-gray-600' />
        <div className='flex flex-wrap'>
          {followToShow.map((fol, i) => (
            <div className='flex items-start mb-3' key={i}>
              <img src={fol.image} alt="" className='w-10 h-10 rounded-full mr-2 ml-2 object-cover' />
            </div>
          ))}
        </div>
      </div>

      {follow.length > 4 && (
        <div className='flex justify-end mr-4 text-blue-700 dark:text-blue-400 cursor-pointer'>
          <button onClick={(e) => {
            e.stopPropagation();
            setShowFollow((prev) => !prev);
          }}>
            {showFollow ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Followers
