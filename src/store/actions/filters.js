import { useSelector } from 'react-redux';
import {
  filterTicketsByTransfer,
  setTicketList,
} from './actionCreators';

function getStopsCount(ticket) {
  const stopsList = ticket.segmets;
  console.log(ticket, stopsList);
  // return stopsList.map((item) => item.stops.length);
}

function filterStops(array, filterBy) {
  return array.filter((ticket) => {
    // console.log(ticket, getStopsCount(ticket))
    return getStopsCount(ticket);
  })
}

export const filterTickets = (stops) => (dispatch, getState) => {
  const tickets = getState().tickets.ticketsList;
  // const filteredList = filterStops(tickets, 1);
  console.log(tickets);

  dispatch(filterTicketsByTransfer(stops));
  // dispatch(setTicketList(filteredList));
};