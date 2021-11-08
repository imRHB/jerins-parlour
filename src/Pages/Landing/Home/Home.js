import React from 'react';
import Banner from '../Banner/Banner';
import ProjectAbout from '../ProjectAbout/ProjectAbout';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ProjectAbout></ProjectAbout>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;