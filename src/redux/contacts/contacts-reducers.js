import actionTypes from './contacts-types';

const items = [
  {
    name: 'Anna Fesenko',
    number: '359-79-39',
    id: '2P2njwuGQH7Ii253QN4R6',
  },
  {
    name: 'Ivan Khorokhor',
    number: '123-85-97',
    id: '9JVdbo866LiW0sGNNHBRM',
  },
  {
    name: 'Nataly Shtukina',
    number: '785-269-79',
    id: 'sXQj5y5_iz8ZzJJdN94Xv',
  },
];
export const itemsReducer = (state = items, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [payload, ...state];

    case actionTypes.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};
export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
