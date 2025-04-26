import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
const NavItem = [
  { label: "Home", href: "/" },
  { label: "Skill", href: "/skill" },
  { label: "Projects", href: "/project" },
  { label: "Contact Me", href: "/contact" },
];
const FooterItem = [
  { href: "https://web.facebook.com/thiv.slot.5/",
    icon:"bi bi-facebook" ,
  },
  { href: "https://www.tiktok.com/@thiv.coding" ,
    icon:"bi bi-tiktok" ,
  },

  { href: "https://github.com/Thivcoding",
    icon:"bi bi-github" ,
  },
  { href: "https://www.youtube.com/@VanThiv",
    icon:"bi bi-youtube" ,
  },
  { href: "https://t.me/ThivFx17",
    icon:"bi bi-telegram" ,
  },

]
const Footer = () => {
  return (
    <div className='w-full h-auto'>
        <div className='w-full h-auto bg-blue-700 lg:py-10 md:py-10 max-sm:py-8 lg:px-28 flex flex-col items-center justify-center'>
            <div className='text-white lg:text-3xl md:text-3xl max-sm:text-2xl font-bold uppercase'>Thiv Coding</div>
            <div className='w-full h-auto py-5'>
                <div className='w-full h-auto'>
                    <ul className='w-full h-full flex lg:gap-14 md:gap-12 max-sm:gap-5 justify-center items-center font-semibold'>
                        {NavItem.map((item, index) => (
                            <li key={index} className='text-white lg:text-base md:text-xl max-sm:text-base hover:text-sky-300 hover:scale-105 uppercase transition-transform duration-300'>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul> 
                </div>
                <div className='w-full h-auto flex justify-center items-center lg:gap-9 md:gap-7 max-sm:gap-6 lg:mt-7 md:mt-7 max-sm:mt-6 mb-1 max-sm:mb-0'>   
                    {FooterItem.map((item, index) => (
                      <div key={index} className='max-sm:w-10 max-sm:h-10 md:w-14 md:h-14 lg:w-12 lg:h-12 grid place-items-center rounded-md border-2 border-sky-300 '>
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            <i className={`${item.icon} text-2xl text-white hover:text-sky-300 transition-transform duration-300`}></i>
                            </a>
                      </div>
                    ))}
                </div>
            </div>
            <div className='text-white lg:text-base md:text-xl text-base  '>© 2025 Thiv Coding. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer