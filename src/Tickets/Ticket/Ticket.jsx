import React, { useState, useEffect } from 'react';
import './Ticket.css';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import api from '../../services/api';

const Ticket = ({ data }) => {
  // const [ticketImg, setTicketImg] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const img = await api.getImage('S7@2x');

  //     setTicketImg(img);
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="ticket">
      <Row>
        <Col xs={4}>
          <p className="ticket-price">
            13 400 Р
          </p>
        </Col>
        <Col xs={{ span: 4, offset: 4 }}>
          <Image src={api.getImage('S7@2x')} />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <p className="trip-title">MOW – HKT</p>
          <p className="trip-value">10:45 – 08:00</p>
        </Col>
        <Col xs={4}>
          <p className="trip-title">В пути</p>
          <p className="trip-value">21ч 15м</p>
        </Col>
        <Col xs={4}>
          <p className="trip-title">2 пересадки</p>
          <p className="trip-value">HKG, JNB</p>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <p className="trip-title">MOW – HKT</p>
          <p className="trip-value">10:45 – 08:00</p>
        </Col>
        <Col xs={4}>
          <p className="trip-title">В пути</p>
          <p className="trip-value">21ч 15м</p>
        </Col>
        <Col xs={4}>
          <p className="trip-title">2 пересадки</p>
          <p className="trip-value">HKG, JNB</p>
        </Col>
      </Row>
    </section>
  );
};

export default Ticket;
