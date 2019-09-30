import {
  sortTicketsByDuration,
  sortTicketsByPrice,
  setTicketList,
  setInitialList,
} from './actionCreators';

import api from '../../services/api';

export const sortByPrice = (tickets) => (dispatch) => {
  const sortedList = tickets.sort((a, b) => a.price - b.price);
  dispatch(setTicketList(sortedList));
  dispatch(setInitialList(sortedList));
  dispatch(sortTicketsByPrice());
};

export const sortByDuration = (tickets) => (dispatch) => {
  const sortedList = tickets.sort((a, b) => {
    const firstItem = a.segments.reduce((curr, next) => curr + next.duration, 0);
    const secondItem = b.segments.reduce((curr, next) => curr + next.duration, 0);
    return firstItem - secondItem;
  });
  dispatch(setTicketList(sortedList));
  dispatch(setInitialList(sortedList));
  dispatch(sortTicketsByDuration());
};

export const getAllTickets = () => async (dispatch) => {
  const tickets = await api.getTickets();
  if (tickets) {
    dispatch(sortByPrice(tickets));
  } else { dispatch(setTicketList([])); }
};
