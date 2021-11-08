import React from 'react';
import { Container, Row } from 'react-bootstrap';

import nash from '../../../../images/img/Ellipse 90.png';
import miriam from '../../../../images/img/Ellipse 91.png';
import bria from '../../../../images/img/Ellipse 92.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonials = [
    {
        name: 'Nash Patrik',
        img: nash,
        designation: 'CEO',
        company: 'Manpol',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        rating: 5
    },
    {
        name: 'Miriam Barron',
        img: miriam,
        designation: 'CTO',
        company: 'Manpol',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        rating: 5
    },
    {
        name: 'Bria Malone',
        img: bria,
        designation: 'CFO',
        company: 'Manpol',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        rating: 5
    }
]

const Testimonials = () => {
    return (
        <div className="my-5">
            <Container>
                <h1 className="text-center fw-bold">Testimonials</h1>
                <Row className="my-3 g-5">
                    {
                        testimonials.map((testimonial, index) => <Testimonial
                            key={index}
                            testimonial={testimonial}
                        ></Testimonial>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;