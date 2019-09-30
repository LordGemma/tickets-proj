import {
  SET_TICKETS_LIST,
  TICKETS_SORT_BY_PRICE,
  TICKETS_SORT_BY_DURATION,
} from '../actions/actionCreators';

const initialState = {
  ticketsList: [],
  sortBy: '',
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS_LIST:
      return {
        ...state,
        ticketsList: action.payload.tickets,
      };
    case TICKETS_SORT_BY_PRICE:
      return {
        ...state,
        sortBy: 'price',
        ticketsList: action.payload.tickets,
      };
    case TICKETS_SORT_BY_DURATION:
      return {
        ...state,
        sortBy: 'duration',
        ticketsList: action.payload.tickets,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
