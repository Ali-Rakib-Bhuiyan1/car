import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import About from '../About/About';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <HomeProducts></HomeProducts>
            
            <CustomerReviews></CustomerReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;