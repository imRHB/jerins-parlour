import React from 'react';
import { Container, Table } from 'react-bootstrap';

const BookingList = () => {
    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Booking List</h3>
                </div>

                <Table responsive bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Elon Mask</td>
                            <td>elon@mask.com</td>
                            <td>Hair Cut</td>
                            <td>Credit Card</td>
                            <td>Done</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default BookingList;