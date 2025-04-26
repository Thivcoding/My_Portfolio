import React, { useEffect, useState } from 'react';

const SkillInfoCard = ({ heading, skills }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
        <div className='w-full  px-8 flex items-center justify-start border-2 rounded-md rounded-b-none border-sky-400'
        >
            <h1 className='text-white lg:text-xl md:text-xl max-sm:text-base font-bold my-4'>{heading}</h1>
        </div>
      <div className='w-full px-8 py-3 pb-6 flex flex-col gap-4 rounded-md rounded-t-none border-2 border-sky-400'>
        {skills.map((item, index) => (
          <div key={`skills${index}`} className='w-full'>
            <div className='flex justify-between mb-1'>
              <h2 className='text-white lg:text-xl md:text-base max-sm:text-sm font-semibold'>{item.skill}</h2>
              <p className='text-white lg:text-xl md:text-base max-sm:text-sm'>{item.percentage}</p>
            </div>
            <div className='w-full bg-gray-700 rounded-md h-2 overflow-hidden '>
              <div
                className='bg-sky-500 h-full rounded-md transition-all duration-1000 ease-in-out'
                style={{ width: loaded ? item.percentage : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillInfoCard;
