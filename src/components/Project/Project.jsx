import React from 'react'
import { PROJECTS } from '../data'
import { useLocation } from 'react-router-dom';
const Project = () => {
    const { pathname } = useLocation();

    // បង្កើត string class ថ្មី
    const wrapperClasses = pathname.toLowerCase() === '/project'
    ? 'lg:h-auto  lg:pt-20 md:pt-20 max-sm:pt-16'
    : 'lg:h-auto ';
  return (
    <div className={`w-full h-auto lg:px-28 md:px-12 ${wrapperClasses} md:h-auto   max-sm:px-6 bg-gradient-to-r from-indigo-900 to-indigo-950`}>
        <div className='w-full h-full'>
            <div className='w-full h-auto flex items-end justify-start'> 
                <h1 className='text-white lg:text-3xl md:text-3xl max-sm:text-2xl font-bold pt-10'
                    data-aos-eseing="ease-in-out"
                    data-aos="zoom-in"
                >My Projects</h1>
            </div>
            <div className='w-full lg:flex md:flex h-auto'>
                <div className="w-full lg:py-10 max-sm:py-6 md:py-6 flex-wrap flex justify-between">
                     {PROJECTS.map((item, index) => (
                        <div
                            key={index}
                            className="lg:w-[32%] max-sm:w-full md:w-[48%] my-5 lg:h-[450px] max-sm:h-[370px] md:h-[370px] bg-indigo-950 border-sky-400 border-2 rounded-xl lg:p-10 md:p-8 max-sm:p-8"
                            data-aos-eseing="ease-in-out"
                            data-aos="zoom-in"
                        >
                            <div className="w-full h-full overflow-hidden rounded-xl relative shadow-md shadow-white">
                            <img
                                src={item.image}
                                className="w-full absolute h-auto object-cover"
                                alt={`Project ${index + 1}`}
                            />
                            <div className="hover:scale-105 px-5 py-3 text-white  rounded-md absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out
                                 cursor-pointer hover:bg-red-700 hover:shadow-white shadow-md bg-blue-400">
                                <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                See More!
                                </a>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project