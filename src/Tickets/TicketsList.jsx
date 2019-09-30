import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Ticket from './Ticket';


const TicketsList = () => {
  const [list, setList] = useState([]);
  const tickets = useSelector((store) => store.tickets);
  const changedFilters = useSelector((store) => store.filters.changed);

  useEffect(() => {
    setList(tickets.ticketsList);
  }, [tickets.sortBy, changedFilters]);

  const ticketsList = list.length && [...list];
  if (ticketsList) ticketsList.length = 5;

  return (
    <div className="ticket-list">
      {ticketsList ? ticketsList.map((ticket) => (
        <Ticket key={`${ticket.carrier}_${ticket.price}`} data={ticket} />
      ))
        : (
          <section className='ticket'>
            <Jumbotron>
              <p className="text-center">
                Мы не смогли найти билетов, соответствующих вашему запросу.
              </p>
              <p className="text-center">
                Пожалуйста, попробуйте еще раз
              </p>
            </Jumbotron>
          </section>
        )}
    </div>
  );
};

export default TicketsList;
