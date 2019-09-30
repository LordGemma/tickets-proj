import {
  TICKETS_FILTER_BY_TRANSFER,
} from '../actions/actionCreators';

const initialState = {
  changed: false,
  filterList: [
    {
        label: 'Все',
        value: 'all',
        visibility: true,
        checked: true,
    },
    {
        label: 'Без пересадок',
        value: 0,
        visibility: true,
        checked: true,
    },
    {
        label: '1 пересадка',
        value: 1,
        visibility: true,
        checked: true,
    },
    {
        label: '2 пересадки',
        value: 2,
        visibility: true,
        checked: true,
    },
    {
        label: '3 пересадки',
        value: 3,
        visibility: true,
        checked: true,
    },
  ]
};

const filtersReducer = (state=initialState, action) => {
  switch (action.type) {
    case TICKETS_FILTER_BY_TRANSFER:
      const filters = action.payload.filters;
      const isAllChecked = filters.findIndex((item) => !item.checked && Number.isInteger(item.value));
      if (isAllChecked !== -1) {
        filters[0].checked = false;
      } else {
        filters[0].checked = true;
      }
      return {
        ...state,
        filterList: filters,
        changed: !state.changed
      };
    default:
      return state;
  }
};

export default filtersReducer;