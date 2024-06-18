import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JAVASCRIPT from '../assets/javascript.png';
import NODEJS from '../assets/nodejs.png';
import REACTJS from '../assets/reactjs.png';
import MONGODB from '../assets/mongodb.png';
import TAILWINDCSS from '../assets/tailwindcss.png';
import GITHUB from '../assets/github.png';
import AZURE from '../assets/azure (1).png';

const Skills = () => {
    return (
        <div name="skills" className=' bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies I have worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt='JAVASCRIPT icon'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NODEJS} alt='NODEJS icon'/>
                    <p className='my-4'>NODEJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACTJS} alt='REACTJS icon'/>
                    <p className='my-4'>REACTJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MONGODB} alt='MONGODB icon'/>
                    <p className='my-4'>MONGODB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TAILWINDCSS} alt='TAILWINDCSS icon'/>
                    <p className='my-4'>TAILWINDCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GITHUB} alt='GITHUB icon'/>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AZURE} alt='AZURE icon'/>
                    <p className='my-4'>AZURE</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
