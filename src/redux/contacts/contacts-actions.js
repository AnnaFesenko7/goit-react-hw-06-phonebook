import actionTypes from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

// export const saveContact = contact => ({
//   type: actionTypes.ADD,
//   payload: contact,
// });

export const saveContact = createAction(actionTypes.ADD);
export const deleteContact = createAction(actionTypes.DELETE);
export const changeFilter = createAction(actionTypes.CHANGE_FILTER);

// export const deleteContact = contactId => ({
//   type: actionTypes.DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });
