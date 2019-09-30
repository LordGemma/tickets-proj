import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import Header from './Header';
import SideBar from './SideBar';
import Sorting from './Sorting';
import TicketsList from './Tickets';
import { getAllTickets } from './store/actions/tikets';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tickets = () => dispatch(getAllTickets());
    tickets();
  }, []);

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
