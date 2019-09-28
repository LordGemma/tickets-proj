import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Header from './Header';
import SideBar from './SideBar';
import Sorting from './Sorting';
import TicketsList from './Tickets';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={8}>
          <Sorting />
          <TicketsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
