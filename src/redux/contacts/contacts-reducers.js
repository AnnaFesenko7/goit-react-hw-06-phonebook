// import actionTypes from './contacts-types';
import { createReducer } from '@reduxjs/toolkit';
import { saveContact, deleteContact, changeFilter } from './contacts-actions';

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

const showAlert = name => {
  const message = `${name} is already in contacts`;
  alert(message);
};
// export const itemsReducer = (state = items, { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [payload, ...state];

//     case actionTypes.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
export const itemsReducer = createReducer(items, {
  [saveContact]: (state, { payload }) => {
    return state.find(
      contact =>
        contact.name === payload.name || contact.number === payload.number
    )
      ? showAlert(payload.name)
      : [payload, ...state];
  },

  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

// export const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
