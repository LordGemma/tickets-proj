import React from 'react';
import { 
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import Header from './Header';
import SideBar from './SideBar';
import TicketsList from './Tickets';

const Layout = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col>
                    <SideBar />
                </Col>
                <Col xs={9}>
                    <TicketsList />
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;