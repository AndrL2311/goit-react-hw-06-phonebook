import actionTypes from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction(actionTypes.ADD, data => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
});
const deleteContact = createAction(actionTypes.DELETE);
const filterContact = createAction(actionTypes.FILTER);

const action = { addContact, deleteContact, filterContact };

export default action;
