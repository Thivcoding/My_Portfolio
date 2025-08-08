import React, { useEffect } from "react";

import Profile from "../assets/image/Profile.jpg";

import Html from "../assets/icon/html.png";
import Css from "../assets/icon/css.png";
import Js from "../assets/icon/js.png";
import ReactLogo from "../assets/icon/React.webp";
import Tailwind from "../assets/icon/tailwind.png";

import Typewriter from "../Typewriter.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import Skill from "../Skill/Skill.jsx";
import Project from "../Project/Project.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
const Image = [
  { image: Html, alt: "HTML" },
  { image: Css, alt: "CSS" },
  { image: Js, alt: "JavaScript" },
  { image: Tailwind, alt: "Tailwind CSS" },
];

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* Hero */}
      <div className="w-full h-auto lg:px-28 md:px-12  md:pt-[70px] pt-28 max-sm:px-6 bg-gradient-to-r from-indigo-900 to-indigo-950">
        <div className="w-full lg:flex md:flex lg:h-[91vh] md:h-[600px] h-auto overflow-hidden">
          <div className="lg:pe-10 lg:w-[55%] md:w-1/2 sm:w-full lg:flex md:flex sm:hidden lg:h-full md:h-full sm:h-1/2 flex-col justify-center uppercase font-sans lg:gap-8 md:gap-5  md:pe-3">
            <h1
              className="text-white flex lg:text-6xl max-sm:py-2 font-Dangrek md:text-4xl max-sm:text-3xl font-bold m-0 gap-4"
              data-aos-eseing="ease-in-out"
              data-aos="zoom-out-down"
            >
              <Typewriter />
            </h1>
            <p
              className="text-white max-sm:my-4 lg:mt-4 text-xl max-sm:text-base font-Siemreap "
              data-aos-eseing="ease-in-out"
              data-aos="zoom-out-right"
            >
              ខ្ញុំបាទឈ្មោះ ហុក វ៉ាន់ធីវ ជានិស្សិតឆ្នាំទី ៣
              នៃសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ និងជាគ្រូបង្រៀនផ្នែក អាយធី (Website
              Development) នៅមជ្ឈមណ្ឌល Etec Center ។ 
  
            </p>
            <p
              className="text-white max-sm:my-4 text-xl max-sm:text-base font-Siemreap"
              data-aos-eseing="ease-in-out"
              data-aos="zoom-out-right"
            >
              ហើយក្ដីស្រមៃរបស់ខ្ញុំគឺចង់ក្លាយជា
              Full Stack Web Developer មួយរូបដែលមានជំនាញល្អ
              និងមានសមត្ថភាពក្នុងការអភិវឌ្ឍគេហទំព័រជាផ្នែកទាំងមូល។
  
            </p>
            <div
              data-aos-eseing="ease-in-out"
              data-aos="zoom-out-up"
              className="lg:w-[35%] md:w-[63%] max-sm:w-[65%]  hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer active:shadow-md active:shadow-yellow-400 active::translate-x-1 active:translate-y-1 shadow-md hover:shadow-pink-700 rounded-md text-white px-5 py-3 bg-blue-700 flex items-center justify-between"
            >
              <a href="#" className="uppercase">
                Getting Started
              </a>
              <div className="p-2 bg-white rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-blue-800 bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* image  */}
          <div className="lg:w-[45%] md:w-1/2 sm:w-full flex-col  lg:h-full md:h-auto sm:h-1/2  md:py-14 max-sm:my-8 lg:pe-0 lg:p-10">
            <div className="w-full h-[82%] flex items-end lg:gap-4 md:gap-5 max-sm:gap-5">
              <div
                data-aos-eseing="ease-in-out"
                data-aos="zoom-in"
                className="lg:w-[88px] lg:h-[75px] md:w-[90px] md:h-[70px] max-sm:w-[70px] max-sm:h-[60px]  cursor-pointer p-2 border-2 border-sky-500 rounded-[10px]"
              >
                <img
                  src={ReactLogo}
                  alt="Profile"
                  className=" rounded-[10px] object-cover w-full h-full hover:translate-y-1  transition-all duration-500"
                />
              </div>
              <div className="w-full h-full hover:translate-y-2  transition-all duration-500 ease-in-out cursor-pointer lg:px-5">
                <img
                  data-aos-eseing="ease-in-out"
                  data-aos="zoom-in"
                  src={Profile}
                  alt="Profile"
                  className="shadow-md shadow-white rounded-[50px] object-cover w-full h-[100%] "
                />
              </div>
            </div>
            {/* icon */}
            <div
              data-aos-eseing="ease-in-out"
              data-aos="zoom-in"
              className="w-full h-[18%] flex items-end justify-end lg:gap-10 md:gap-5 max-sm:gap-4 lg:mt-0 md:mt-2 max-sm:mt-6 lg:px-5"
            >
              {Image.map((item, index) => (
                <div
                  key={index}
                  className="lg:w-[75px] max-sm:-[60px] md:w-[70px] lg:h-[75px] max-sm:h-[60px] md:h-[70px]  cursor-pointer p-2 border-2 border-sky-500 rounded-[10px]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className=" rounded-[10px] object-cover w-full h-full hover:translate-y-1  transition-all duration-500 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default Hero;
