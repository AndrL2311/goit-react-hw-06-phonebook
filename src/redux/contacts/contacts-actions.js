import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/Add', data => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
});
const deleteContact = createAction('contacts/Delete');
const filterContact = createAction('contacts/Filter');

const action = { addContact, deleteContact, filterContact };

export default action;
