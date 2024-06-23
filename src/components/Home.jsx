import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';
import profilePic from '../assets/profile.png'; // Adjust the path as necessary

const Home = () => {
    return (
        <div>
            <div name="home" className='w-full h-screen bg-[#0a192f]'>
                <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-center items-center h-full px-4">
                    <div className="flex flex-col justify-center items-center md:items-start md:mr-8">
                        <p className="text-pink-600">Hi, my name is</p>
                        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Mohammed IMRAN</h1>
                        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a full stack developer.</h2>
                        <p className="text-[#8892b0] py-4 max-w-[700px] text-center md:text-left">
                            I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
                        </p>
                        <div>
                            <Link to="works" smooth={true} duration={500}>
                                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                                    View Works
                                    <span className="group-hover:rotate-90 duration-300">
                                        <HiArrowNarrowRight className="ml-3" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <img src={profilePic} alt="Profile" className="w-40 h-40 rounded-full border-4 border-pink-600" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;
