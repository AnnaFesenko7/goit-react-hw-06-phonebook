import actionTypes from './contacts-types';

export const saveContact = contact => ({
  type: actionTypes.ADD,
  payload: contact,
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
