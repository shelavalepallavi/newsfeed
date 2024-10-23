import React,{useState} from 'react'
import maker_logo from '../../assets/makerble_logo.jpeg'
import { IoIosSettings } from "react-icons/io";


const Projects = () => {
  const [showProject, setShowProject] = useState(false);


  const projects = [
    {
      image: maker_logo,
      project: "A Company Management",
    },
    {
      image: maker_logo,
      project: "Software Development",
    },
    {
      image: maker_logo,
      project: "Website Redesign",
    },
    {
      image: maker_logo,
      project: "Mobile Application",
    },
    {
      image: maker_logo,
      project: "Data Analytics",
    },
    {
      image: maker_logo,
      project: "Social Media Campaign",
    },
    {
      image: maker_logo,
      project: "E-commerce Platform",
    },
  ];
  

  const projectToShow = showProject ? projects : projects.slice(0, 3);
  return (
      <div className="mt-1 mb-2 bg-gray-100 dark:bg-gray-800 rounded-md pt-1 pb-1 relative">
        <div>
          <hr className="pb-2 pt-1 border-gray-300 dark:border-gray-600" />
          <div className="flex justify-between mb-3">
            <button className="mr-2 text-xs bg-sky-200 dark:bg-sky-700 text-gray-800 dark:text-gray-200 pl-1 pr-1 rounded-sm cursor-pointer hover:bg-sky-300 dark:hover:bg-sky-600">
              + New Project
            </button>
          </div>
          <div>
            {projectToShow.map((project, i) => (
              <div className="flex items-start justify-between mb-3" key={i}>
                <div className="flex">
                  <img src={project.image} alt="" className="w-10" />
                  <p className="ml-1 text-gray-800 dark:text-gray-300">{project.project}</p>
                </div>
                <IoIosSettings className="text-gray-600 dark:text-gray-400" />
              </div>
            ))}
          </div>
        </div>
  
        {projects.length > 3 && (
          <div className="flex justify-end mr-4 text-blue-700 dark:text-blue-400 cursor-pointer">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowProject((prev) => !prev);
              }}
            >
              {showProject ? 'Show Less' : 'Show All'}
            </button>
          </div>
        )}
      </div>
    );
}

export default Projects
