import { filterTicketsByTransfer, setTicketList } from "./actionCreators";

export function filterStops(array, filterBy) {
  return array.filter(ticket => {
    const { stops } = ticket.segments[0];
    return stops.length === filterBy;
  });
}

export const filterTickets = stops => (dispatch, getState) => {
  const tickets = getState().tickets.initialList;
  const filters = [...stops];
  filters.shift();
  const activeFilters = filters.filter((stop) => stop.checked);
  const filteredList = activeFilters.map((filter) => filterStops(tickets, filter.value)).flat(2);
  dispatch(filterTicketsByTransfer(stops));
  dispatch(setTicketList(filteredList));
};
