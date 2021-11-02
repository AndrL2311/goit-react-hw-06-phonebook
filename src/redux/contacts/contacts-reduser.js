import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = defaultContacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];
    case actionTypes.DELETE:
      return state(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filterReduser = (state = '', action) => state;

const counterReducer = combineReducers({
  items: itemsReducer,
  filter: filterReduser,
});

export default counterReducer;
