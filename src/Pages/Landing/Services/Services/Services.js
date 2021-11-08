import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

import face from '../../../../images/icon/Group 1373.png';
import hair from '../../../../images/icon/Group 1372.png';
import skin from '../../../../images/icon/Group 1374.png';
import Service from '../Service/Service';

const services = [
    {
        name: 'Anti Age Face Treatment',
        img: face,
        price: 199,
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        name: 'Hair Color & Styleing',
        img: hair,
        price: 99,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        name: 'Skin Care Treatment',
        img: skin,
        price: 299,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const Services = () => {

    return (
        <Container className="my-5 text-center">
            <h3 className="fw-bold my-5">Our Awesome <span className="text-danger">Services</span></h3>

            <Row className="g-5">
                {
                    services.map((service, index) => <Service
                        key={index}
                        service={service}
                    ></Service>)
                }
            </Row>

            <div className="my-5">
                <Button variant="danger" className="btn-jer">Explore More</Button>
            </div>
        </Container>
    );
};

export default Services;