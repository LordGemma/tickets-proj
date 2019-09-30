import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Sorting.css';
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import {
  sortByPrice,
  sortByDuration,
} from '../store/actions/tikets';

const Sorting = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((store) => store.tickets.ticketsList);
  const sortTickets = (sortBy) => {
    if (sortBy === 'duration') {
      dispatch(sortByDuration(tickets));
    } else {
      dispatch(sortByPrice(tickets));
    }
  };

  return (
    <ButtonToolbar className="sorting">
      <ToggleButtonGroup type="radio" name="options" defaultValue="price" onChange={(e) => sortTickets(e)}>
        <ToggleButton value="price">Самый дешевый</ToggleButton>
        <ToggleButton value="duration">Самый быстрый</ToggleButton>
      </ToggleButtonGroup>
    </ButtonToolbar>
  );
};

export default Sorting;
