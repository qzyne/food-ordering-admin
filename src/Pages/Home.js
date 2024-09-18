import React from 'react';
import '../style/Home.css';
import homeImg from '../assets/images/home.png';
import MenuClient from './MenuClient';

const Home = () => {
    return (
        <>
            <div className='backgroundImg text-center'>
                <img src={homeImg} alt='BackgroundImg'/>
            </div>
        </>
    );
};

export default Home;