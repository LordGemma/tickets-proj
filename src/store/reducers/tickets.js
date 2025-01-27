import {
  SET_TICKETS_LIST,
  SET_INITIAL_LIST,
  TICKETS_SORT_BY_PRICE,
  TICKETS_SORT_BY_DURATION,
} from '../actions/actionCreators';

const initialState = {
  ticketsList: [],
  initialList: [],
  sortBy: '',
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS_LIST:
      return {
        ...state,
        ticketsList: action.payload.tickets,
      };
    case SET_INITIAL_LIST:
      return {
        ...state,
        initialList: action.payload.tickets,
      };
    case TICKETS_SORT_BY_PRICE:
      return {
        ...state,
        sortBy: 'price',
      };
    case TICKETS_SORT_BY_DURATION:
      return {
        ...state,
        sortBy: 'duration',
      };
    default:
      return state;
  }
};

export default ticketsReducer;
