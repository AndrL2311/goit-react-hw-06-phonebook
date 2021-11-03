import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = data => {
  return {
    type: actionTypes.ADD,
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
};
const deleteContact = dataId => {
  return {
    type: actionTypes.DELETE,
    payload: dataId,
  };
};

const filterContact = value => {
  return {
    type: actionTypes.FILTER,
    payload: value,
  };
};

const action = { addContact, deleteContact, filterContact };

export default action;
