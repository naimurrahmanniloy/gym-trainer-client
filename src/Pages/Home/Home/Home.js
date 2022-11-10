import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import StoreSuppliment from '../StoreSuppliment/StoreSuppliment';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <StoreSuppliment></StoreSuppliment>
        </div>
    );
};

export default Home;