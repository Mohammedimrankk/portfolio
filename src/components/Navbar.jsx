import React, { useState } from 'react';
import Logo from '../assets/nameLogo.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [worksSubmenu, setWorksSubmenu] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => {
    setNav(false);
    setWorksSubmenu(false); // Ensure submenu closes when menu closes
  };

  const toggleWorksSubmenu = () => setWorksSubmenu(!worksSubmenu);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Name' style={{ width: '80px' }} />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500} className="underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="underline">
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="underline">
            Skills
          </Link>
        </li>
        <li className='relative'>
          <button onClick={toggleWorksSubmenu} className="underline">
            Mini Projects
          </button>
          {worksSubmenu && (
            <ul className='absolute top-full left-0 bg-[#0a192f] text-gray-300'>
              <li>
                <Link to="calculator" smooth={true} duration={500} onClick={() => setWorksSubmenu(false)} className="underline">
                  Calculator
                </Link>
              </li>
              <li>
                <Link to="quotes" smooth={true} duration={500} onClick={() => setWorksSubmenu(false)} className="underline">
                  Quotes
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="underline">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center ${nav ? 'flex' : 'hidden'}`}>
        <li className='py-6 text-4xl'>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu} className="underline">
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu} className="underline">
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="skills" smooth={true} duration={500} onClick={closeMenu} className="underline">
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <button onClick={toggleWorksSubmenu} className="underline">
            Mini Projects
          </button>
          {worksSubmenu && (
            <ul className='bg-[#0a192f] text-gray-300'>
              <li className='py-6 text-4xl'>
                <Link to="calculator" smooth={true} duration={500} onClick={closeMenu} className="underline">
                  Calculator
                </Link>
              </li>
              <li className='py-6 text-4xl'>
                <Link to="quotes" smooth={true} duration={500} onClick={closeMenu} className="underline">
                  Quotes
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className='py-6 text-4xl'>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu} className="underline">
            Contact
          </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.github.com'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:someone@example.com'>
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='resume.pdf'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
