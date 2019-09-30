import {
  setTicketList,
  sortTicketsByDuration,
  sortTicketsByPrice,
} from './actionCreators';

import api from '../../services/api';

export const sortByPrice = (tickets) => (dispatch) => {
  const sortedList = tickets.sort((a, b) => a.price - b.price);
  dispatch(sortTicketsByPrice(sortedList));
};

export const sortByDuration = (tickets) => (dispatch) => {
  const newList = tickets.sort((a, b) => {
    const firstItem = a.segments.reduce((curr, next) => curr + next.duration, 0);
    const secondItem = b.segments.reduce((curr, next) => curr + next.duration, 0);
    return firstItem - secondItem;
  });
  dispatch(sortTicketsByDuration(newList));
};

export const getAllTickets = () => async (dispatch) => {
  const tickets = await api.getTickets();
  dispatch(sortByPrice(tickets));
};
