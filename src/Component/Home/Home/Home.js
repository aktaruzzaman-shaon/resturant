import React from 'react';
import BreakfastMenu from '../../Meals/Breakfast/BreakfastMenu';
import Banner from '../Banner/Banner';
import Header from '../Shared/Header/Header';
import Menu from '../Shared/Menu/Menu';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Menu></Menu>
            <BreakfastMenu></BreakfastMenu>
        </div>
    );
};

export default Home;