import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import About from './About/About';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <About />
            <AppointmentBanner />
            <Testimonial />

        </div>
    );
};

export default Home;