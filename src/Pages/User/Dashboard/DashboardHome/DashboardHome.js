import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddService from '../AddService/AddService';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import './DashboardHome.css';

const DashboardHome = () => {
    return (
        <div className="">
            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="book">
                    <Row className="">
                        <Col sm={3}>
                            <div className="bg-light rounded-3" style={{ minHeight: '80vh', position: 'sticky', top: '48px' }}>
                                <Nav variant="" className="flex-column dash-nav">
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="book">Book</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="booking-list">Booking List</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="review">Review</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="order-list">Order List</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="add-service">Add Service</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="make-admin">Make Admin</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="manage-services">Manage Services</Nav.Link>
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