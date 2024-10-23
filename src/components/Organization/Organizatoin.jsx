import React, { useState } from 'react';
import { IoIosSettings } from "react-icons/io";
import org1 from '../../assets/organize1.jpg';
import org2 from '../../assets/organize2.jpg';
import org3 from '../../assets/organize3.jpg';
import org4 from '../../assets/organize4.jpg';
import org5 from '../../assets/organize5.jpg';
import org6 from '../../assets/organize6.jpg';
import org7 from '../../assets/organize7.jpg';
import org8 from '../../assets/organize8.jpg';

const Organization = () => {
  const [showOrg, setShowOrg] = useState(false);

  const organization = [
    { image: org1, orgName: "An Organizational Demo", member: "Admin" },
    { image: org2, orgName: "An Educational Charity", member: "Member" },
    { image: org3, orgName: "Health Awareness Group", member: "Volunteer" },
    { image: org4, orgName: "The Techies Innovators", member: "Admin" },
    { image: org5, orgName: "Environmental Advocates", member: "Member" },
    { image: org6, orgName: "The Social Justice League", member: "Supporter" },
    { image: org7, orgName: "The Creative Designers", member: "Collaborator" },
    { image: org8, orgName: "Youth Empowerment Group", member: "Mentor" }
  ];

  const orgToshow = showOrg ? organization : organization.slice(0, 3);
  
  return (
    <div className='mt-1 mb-2 bg-gray-100 dark:bg-gray-800 rounded-md pt-1 pb-1 relative'>
      <div>
        <hr className='pb-2 pt-1 border-gray-300 dark:border-gray-600' />
        <div className='flex justify-between mb-3'>
          <button className="mr-2 text-xs bg-sky-200 dark:bg-sky-600 pl-1 pr-1 rounded-sm cursor-pointer hover:bg-sky-300 dark:hover:bg-sky-500">
            + New Project
          </button>
        </div>
        <div>
          {orgToshow.map((org, i) => (
            <div className='flex items-start justify-between mb-3' key={i}>
              <img src={org.image} alt="" className='w-10' />
              <div className=''>
                <p className='text-sky-500 dark:text-sky-400'>{org.orgName}</p>
                <p className='text-gray-700 dark:text-gray-300'>{org.member}</p>
              </div>
              <IoIosSettings className="text-gray-600 dark:text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {organization.length > 3 && (
        <div className='flex justify-end mr-4 text-blue-700 dark:text-blue-400 cursor-pointer'>
          <button onClick={(e) => {
            e.stopPropagation();
            setShowOrg((prev) => !prev);
          }}>
            {showOrg ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Organization;
