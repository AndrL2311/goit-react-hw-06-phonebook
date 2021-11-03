import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = data => {
  return {
    type: actionTypes.ADD,
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
};
export const deleteContact = data => {
  return {
    type: actionTypes.DELETE,
    payload: data,
  };
};