import { combineReducers } from 'redux';
import tickets from './tickets';
import filters from './filters';

export default combineReducers({
  tickets,
  filters,
});
