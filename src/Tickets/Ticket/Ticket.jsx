import React from 'react';
import moment from 'moment';
import './Ticket.css';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import api from '../../services/api';
import {
  numberWithThousands,
  parseTime,
} from '../../utils';

const Ticket = ({ data }) => {
  const {
    price,
    carrier: companyId,
    segments,
  } = data;

  const transferStr = (transfers) => transfers.join(', ');

  const transferNumber = (transfers) => {
    const transferCount = transfers.length > 1
      ? `${transfers.length} пересадки`
      : transfers.length === 1
      ? '1 пересадка'
      : 'прямой рейс';
    return transferCount;
  };

  return (
    <section className="ticket">
      <Row>
        <Col xs={4}>
          <p className="ticket-price">
            { `${numberWithThousands(price)} P` }
          </p>
        </Col>
        <Col xs={{ span: 4, offset: 4 }}>
          <Image src={api.getImage(companyId)} />
        </Col>
      </Row>
      {
        segments.map((trip) => (
          <Row key={`${trip.origin}_${trip.duration}`}>
            <Col xs={4}>
              <p className="trip-title">{`${trip.origin} - ${trip.destination}`}</p>
              <p className="trip-value">
                {`${moment(trip.date).format('HH:mm')} – ${moment(trip.date).add(trip.duration, 'minutes').format('HH:mm')}`}
              </p>
            </Col>
            <Col xs={4}>
              <p className="trip-title">В пути</p>
              <p className="trip-value" style={{ textTransform: 'lowercase' }}>
                {parseTime(trip.duration)}
              </p>
            </Col>
            <Col xs={4}>
              <p className="trip-title">{transferNumber(trip.stops)}</p>
              <p className="trip-value">{transferStr(trip.stops)}</p>
            </Col>
          </Row>
        ))
      }
    </section>
  );
};

export default Ticket;
