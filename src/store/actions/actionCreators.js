// Tickets
export const SET_TICKETS_LIST = 'SET_TICKETS_LIST';
export const SET_INITIAL_LIST = 'SET_INITIAL_LIST';

export const setInitialList = (tickets) => ({
  type: SET_INITIAL_LIST,
  payload: { tickets },
});

export const setTicketList = (tickets) => ({
  type: SET_TICKETS_LIST,
  payload: { tickets },
});

// Filters
export const TICKETS_FILTER_BY_TRANSFER = 'TICKETS_FILTER_BY_TRANSFER';

export const filterTicketsByTransfer = (filters) => ({
  type: TICKETS_FILTER_BY_TRANSFER,
  payload: { filters },
});

// Sorting
export const TICKETS_SORT_BY_PRICE = 'TICKETS_SORT_BY_PRICE';
export const TICKETS_SORT_BY_DURATION = 'TICKETS_SORT_BY_DURATION';

export const sortTicketsByPrice = () => ({
  type: TICKETS_SORT_BY_PRICE,
});

export const sortTicketsByDuration = () => ({
  type: TICKETS_SORT_BY_DURATION,
});
