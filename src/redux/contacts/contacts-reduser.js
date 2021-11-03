import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const useLocalStoage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });
//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };

// const [contacts, setContacts] = useLocalStoage('contacts', defaultContacts);

const itemsReducer = (state = defaultContacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      if (state.find(contact => contact.name === payload.name)) {
        alert(`${payload.name} is alredy in contacts`);
        return state;
      } else {
        return [...state, payload];
      }

    case actionTypes.DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER: {
      return payload;
    }

    default:
      return state;
  }
};

const counterReducer = combineReducers({
  items: itemsReducer,
  filter: filterReduser,
});

export default counterReducer;
