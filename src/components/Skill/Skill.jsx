import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SKILLS } from '../data'; // Import the SKILLS data from your data file
import SkillInfoCard from './SkillCardInfo/SkillInfoCard';
import SkillCard from './SkillCard/SkillCard';
import { useLocation } from 'react-router-dom';

const Skill = () => {
    const [selectedSkill, setSelectedSkill] = React.useState(SKILLS[0]);

    // ការជ្រើសរើសជំនាញ
    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    const { pathname } = useLocation();

    // បង្កើត string class ថ្មី
    const wrapperClasses = pathname.toLowerCase() === '/skill'
    ? 'lg:h-[100vh] md:h-[820px] lg:pt-20 md:pt-20 max-sm:pt-16'
    : 'lg:h-[90vh] ';
  

    return (
        <div className={`w-full h-auto lg:px-28 md:px-12 ${wrapperClasses} md:h-auto   max-sm:px-6 bg-gradient-to-r from-indigo-900 to-indigo-950`}>
            <div className='w-full h-full'>
                <div className='w-full h-[13%] flex items-end justify-start'  >
                    <h1 className='text-white lg:text-3xl md:text-3xl max-sm:text-2xl font-bold pt-10'
                    data-aos-eseing="ease-in-out"
                    data-aos="zoom-in"
                    >Technical Proficiency</h1>
                </div>
                <div className='w-full lg:flex md:flex h-[87%]'>
                    {/* ផ្នែកខាងឆ្វេង */}
                    <div className="lg:pe-10 md:pe-6 lg:w-1/2 md:w-1/2 max-sm:w-full lg:flex md:flex sm:hidden  lg:h-full md:h-[48%] max-sm:h-full  font-sans">
                        <div className='flex flex-wrap lg:gap-5 md:gap-6 max-sm:gap-6 w-full h-full lg:justify-between lg:items-center lg:py-10 lg:pb-40 md:py-14 md:pb-0 max-sm:py-10  max-sm:pb-0' >
                            {SKILLS.map((item) => (
                                <SkillCard
                                    key={item.title}
                                    iconUrl={item.icon}
                                    title={item.title}
                                    isActive={selectedSkill.title === item.title}
                                    onClick={() => handleSelectSkill(item)}
                                />                               
                            ))}
                        </div>
                    </div>
                    {/* ផ្នែកខាងស្តាំ */}
                    <div
                        className="lg:w-1/2 md:w-1/2 max-sm:w-full flex-col lg:h-full md:h-auto max-sm:h-full  md:py-14 max-sm:py-8 lg:py-16"
                            data-aos-eseing="ease-in-out"
                            data-aos="zoom-in"
                   >
                        <SkillInfoCard className='w-full h-full border-2 rounded-md border-sky-400 overflow-hidden'
                            // {/* ផ្នែកលើ */}
                            heading={selectedSkill.title}
                            // {/* ផ្នែកខាងក្រោម */}
                            skills={selectedSkill.skills}
                        />                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
