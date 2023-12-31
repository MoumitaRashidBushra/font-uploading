import React from 'react';
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router-dom';
import FontUploadForm from '../FontUploadForm';

const Navber = () => {
    return (
        <div className='bg-black pt-2 pb-2'>
            <Hero></Hero>
            <FontUploadForm></FontUploadForm>
            <Outlet></Outlet>
        </div>
    );
};

export default Navber;