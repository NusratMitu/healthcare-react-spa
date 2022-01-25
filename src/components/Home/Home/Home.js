import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import HealthTips from '../HealthTips/HealthTips';
import ServicesHome from '../ServicesHome/ServicesHome';
import './Home.css'

const Home = () => {
    return (
        <div id="home" className="">
        <Header></Header>
            {/* banner */}
        <Banner></Banner>
        <ServicesHome></ServicesHome>
        <HealthTips></HealthTips>
        <Counter></Counter>
        <Footer></Footer>
    </div>
    );
};

export default Home;