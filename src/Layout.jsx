import React from 'react';
import { 
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import { Header } from './Header';
import SideBar from './SideBar';

const Layout = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col>
                    <SideBar />
                </Col>
                <Col xs={9}>Main</Col>
            </Row>
        </Container>
    );
};

export default Layout;