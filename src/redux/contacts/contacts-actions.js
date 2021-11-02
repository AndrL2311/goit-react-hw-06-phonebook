import actionTypes from './contacts-types';

export const addContact = value => {
  return {
    type: actionTypes.ADD,
    payload: value,
  };
};

export const deleteContact = value => {
  return {
    type: actionTypes.DELETE,
    payload: value,
  };
};
