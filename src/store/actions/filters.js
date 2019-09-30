import { filterTicketsByTransfer, setTicketList } from "./actionCreators";
import { sortByDuration, sortByPrice } from './tikets';

export function filterStops(array, filterBy) {
  return array.filter(ticket => {
    const { stops } = ticket.segments[0];
    return stops.length === filterBy;
  });
}

export const filterTickets = stops => (dispatch, getState) => {
  const { sortBy, initialList } = getState().tickets;
  const filters = [...stops];
  filters.shift();
  const activeFilters = filters.filter((stop) => stop.checked);
  const filteredList = activeFilters.map((filter) => filterStops(initialList, filter.value)).flat(2);
  if (sortBy === 'price') dispatch(sortByPrice(filteredList));
  else dispatch(sortByDuration(filteredList));
  dispatch(filterTicketsByTransfer(stops));
};
