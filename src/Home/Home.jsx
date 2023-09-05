import React from 'react';
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>


        </div>
    );
};

export default Home;