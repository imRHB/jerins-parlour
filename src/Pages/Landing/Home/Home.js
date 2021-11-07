import React from 'react';
import Banner from '../Banner/Banner';
import ProjectAbout from '../ProjectAbout/ProjectAbout';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ProjectAbout></ProjectAbout>
        </div>
    );
};

export default Home;