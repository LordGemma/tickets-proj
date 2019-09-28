import React from 'react';
import Ticket from './Ticket';

const TicketsList = () => {
    return (
        <div className='ticket-list'>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    );
};

export default TicketsList;