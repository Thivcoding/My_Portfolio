import React from 'react';

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div className={`w-[46%] lg:h-[120px] md:h-[100px] max-sm:h-[80px] flex items-center justify-center relative cursor-pointer `}
      data-aos-eseing="ease-in-out"
      data-aos="zoom-in"
    >
      <div className='absolute p-2 lg:w-[55px] lg:h-[55px] md:w-[50px] md:h-[50px] w-[45px] h-[45px] -left-3 -top-4 flex items-center justify-center border-2 rounded-md border-sky-600 bg-gray-900'>
        <img
          src={iconUrl}
          alt={title}
          className='border-2 rounded-md border-sky-400 w-full h-full object-contain'
        />
      </div>
      <div className={`w-full h-full flex items-center justify-center rounded-md border-2 border-sky-400  hover:bg-blue-600 transition duration-300 ease-in-out ${isActive ? 'bg-blue-600' : 'bg-indigo-950'}`}
        onClick={() => onClick()}
      >
        <h1 className='text-white lg:text-xl md:text-xl max-sm:text-base font-bold'>{title}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
