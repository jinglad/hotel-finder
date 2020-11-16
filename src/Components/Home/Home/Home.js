import React from 'react';
import Navbar from '../../Reused/Navbar/Navbar';
import Header from '../Header/Header';
import HouseRent from '../HouseRent/HouseRent';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HouseRent></HouseRent>
        </div>
    );
};

export default Home;