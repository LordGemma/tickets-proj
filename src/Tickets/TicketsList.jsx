import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ticket from './Ticket';

const TicketsList = () => {
  const [list, setList] = useState([]);
  const tickets = useSelector((store) => store.tickets.ticketsList);
  const changedSorting = useSelector((store) => store.tickets.sortBy);

  useEffect(() => {
    setList(tickets);
  }, [changedSorting]);

  const ticketsList = list.length && [...list];
  if (ticketsList) ticketsList.length = 5;

  return (
    <div className="ticket-list">
      {ticketsList ? ticketsList.map((ticket) => (
        <Ticket key={`${ticket.carrier}_${ticket.price}`} data={ticket} />
      ))
        : 'Not found'}
    </div>
  );
};

export default TicketsList;
