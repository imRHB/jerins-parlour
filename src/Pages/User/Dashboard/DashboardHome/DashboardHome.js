import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faPlus, faShoppingCart, faThLarge, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddService from '../AddService/AddService';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import './DashboardHome.css';

const bookIcon = <FontAwesomeIcon icon={faCartPlus} />;
const bookingIcon = <FontAwesomeIcon icon={faShoppingCart} />;
const reviewIcon = <FontAwesomeIcon icon={faCommentAlt} />;
const listIcon = <FontAwesomeIcon icon={faThList} />;
const plus = <FontAwesomeIcon icon={faPlus} />;
const userPlus = <FontAwesomeIcon icon={faUserPlus} />;
const serviceIcon = <FontAwesomeIcon icon={faThLarge} />;

const DashboardHome = () => {

    return (
        <div className="">
            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="book">
                    <Row className="">
                        <Col sm={3}>
                            <div className="bg-light rounded-3 py-3" style={{ minHeight: '80vh', position: 'sticky', top: '48px' }}>
                                <Nav variant="" className="flex-column dash-nav">
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="book"
                                        >
                                            <span className="me-3">{bookIcon}</span>Book</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="booking-list">
                                            <span className="me-3">{bookingIcon}</span>Booking List</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="review">
                                            <span className="me-3">{reviewIcon}</span>Review</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="order-list">
                                            <span className="me-3">{listIcon}</span>Order List</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="add-service">
                                            <span className="me-3">{plus}</span>Add Service</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="make-admin">
                                            <span className="me-2">{userPlus}</span>Make Admin</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="manage-services">
                                            <span className="me-3">{serviceIcon}</span>Manage Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>

                        <Col sm={9}>
                            <div className="bg-light rounded-3 p-3">
                                <Tab.Content>
                                    <Tab.Pane eventKey="book">
                                        <h3>Book Service</h3>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="booking-list">
                                        <BookingList></BookingList>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="review">
                                        <Review></Review>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="order-list">
                                        <OrderList></OrderList>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="add-service">
                                        <AddService></AddService>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="make-admin">
                                        <MakeAdmin></MakeAdmin>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="manage-services">
                                        <ManageServices></ManageServices>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default DashboardHome;