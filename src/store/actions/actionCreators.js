export const SET_TICKETS_LIST = 'SET_TICKETS_LIST';
export const TICKETS_SORT_BY_PRICE = 'TICKETS_SORT_BY_PRICE';
export const TICKETS_SORT_BY_DURATION = 'TICKETS_SORT_BY_DURATION';

// Tickets
export const setTicketList = (tickets) => ({
  type: SET_TICKETS_LIST,
  payload: { tickets },
});

// Filters

// Sorting
export const sortTicketsByPrice = (tickets) => ({
  type: TICKETS_SORT_BY_PRICE,
  payload: { tickets },
});

export const sortTicketsByDuration = (tickets) => ({
  type: TICKETS_SORT_BY_DURATION,
  payload: { tickets },
});
