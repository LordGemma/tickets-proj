import { connect } from 'react-redux';
import TicketsList from './TicketsList';

function mapStateToProps(state) {
  const { ticketsList: tickets } = state.tickets;
  return {
    tickets,
  };
}

export const TicketsListContainer = connect(
  mapStateToProps,
)(TicketsList);
