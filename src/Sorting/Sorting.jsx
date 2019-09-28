import React from 'react';
import './Sorting.css';
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';

const Sorting = () => {
  return (
    <ButtonToolbar className="sorting">
      <ToggleButtonGroup type="radio" name="options" defaultValue="cheapest">
        <ToggleButton value="cheapest">Самый дешевый</ToggleButton>
        <ToggleButton value="fastest">Самый быстрый</ToggleButton>
      </ToggleButtonGroup>
    </ButtonToolbar>
  );
};

export default Sorting;
