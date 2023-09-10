import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className=' bg-black text-white'>
            <div className='flex justify-between items-center flex-col  md:flex-row  lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
                <div>
                    <a className="btn btn-ghost normal-case text-2xl font-extrabold">Font Uploading</a>
                </div>

                <div className='mx-2' >
                    <Link to='/' className='mx-5'>Home</Link >
                    <Link to='#' className='mx-5'>About</Link>
                    <Link to='#' className='mx-5'>Blog</Link>
                    <Link to='#' className='mx-5'>Contact</Link>

                </div>





            </div>
        </div>
    );
};

export default Hero;