import React from 'react';
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router-dom';
import FontUploadForm from '../FontUploadForm';
import FontManagement from '../FontManagement';
import FontGroupModal from '../FontGroupModal';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <FontUploadForm></FontUploadForm>
            <FontManagement></FontManagement>
            <FontGroupModal></FontGroupModal>


        </div>
    );
};

export default Home;