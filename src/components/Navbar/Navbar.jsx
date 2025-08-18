import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

const NavItem = [
  { label: "Home", href: "/" },
  { label: "Skill", href: "/skill" },
  { label: "Projects", href: "/project" },
  { label: "Contact Me", href: "/contact" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // 🔥 get current path

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='w-full fixed top-0 z-50 backdrop-blur-xl bg-black/30 shadow-sm shadow-white lg:py-6 md:py-7 max-sm:py-6 lg:px-28 md:px-12 max-sm:px-6'>
      <div className='flex justify-between items-center font-sans'>
        <div className='text-white text-2xl md:text-3xl uppercase font-bold'>
          HOK VANTHIV
        </div>

        {/* Desktop menu */}
        <ul className='hidden lg:flex gap-14 items-center uppercase font-semibold'>
          {NavItem.map((item, index) => (
            <li
              key={index}
              className={`hover:scale-125 transition-transform duration-300 ${
                location.pathname === item.href
                  ? 'text-yellow-400 underline underline-offset-4'
                  : 'text-white'
              }`}
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          <li className='text-white px-5 py-2 rounded-md bg-blue-600 border hover:bg-transparent hover:scale-105 transition-all'>
            <a href="mailto:youremail@example.com">Hire Me</a>
          </li>
        </ul>

        {/* Mobile toggle button */}
        <div className='lg:hidden cursor-pointer' onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`transition-all duration-300 absolute md:top-[92px] max-sm:top-[80px] max-sm:w-[75%] md:w-1/2 h-screen backdrop-blur-[1000px] bg-black/70 shadow-md shadow-white p-4 
            ${isMenuOpen ? 'left-0 opacity-100 visible' : '-left-[450px] opacity-0 invisible'}`}
          onClick={closeMenu}
        >
          <ul className='flex flex-col items-center space-y-4'>
            {NavItem.map((item, index) => (
              <li
                key={index}
                className={`w-full text-center uppercase font-semibold py-3 px-2 rounded-lg hover:bg-yellow-600 transition-colors ${
                  location.pathname === item.href
                    ? 'bg-yellow-500 text-black'
                    : 'text-white'
                }`}
              >
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            <li className='w-full text-center text-white px-8 py-3 rounded-md bg-blue-600 border hover:bg-transparent hover:scale-105 transition-all'>
              <a href="mailto:youremail@example.com">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
