import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import FilterItem from './FilterItem';
import { filterTickets } from '../../store/actions/filters';

const Filters = () => {
  const [filterList, setFilterList] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.filters.filterList);
  const filtersChanged = useSelector((store) => store.filters.changed);

  useEffect(() => {
    setFilterList(filters);
  }, [filtersChanged]);

  const chengedFilters = filterList;

  const updateFilters = (e) => {
    const val = e.target.value;
    const index = chengedFilters.findIndex((item) => item.value == val);
    chengedFilters[index].checked = e.target.checked;
    if (e.target.value === 'all' && e.target.checked) {
      chengedFilters.forEach((el) => { el.checked = true });
    }
    dispatch(filterTickets(chengedFilters));
  }

  return (
    <Form className="filters">
      {
        filters.length && filters.map(item => (
          item.visibility && (
            <Form.Group
              key={`filter-${item.value}`}
              controlId={`filter-${item.value}`}
            >
              <FilterItem
                label={item.label}
                value={item.value}
                isChecked={item.checked}
                changed={(e) => updateFilters(e)}
              />
            </Form.Group>
          )
        ))
      }
    </Form>
  );
};

export default Filters;
