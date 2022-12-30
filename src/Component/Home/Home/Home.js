import React from 'react';
import BreakfastMenu from '../../Meals/Breakfast/BreakfastMenu';
import Banner from '../Banner/Banner';
import Service from '../Services/Services/Service';
import Header from '../Shared/Header/Header';
import Menu from '../Shared/Menu/Menu';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Menu></Menu>
            <BreakfastMenu></BreakfastMenu>
            <Service></Service>
        </div>
    );
};

export default Home;