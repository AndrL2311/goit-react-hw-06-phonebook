import contactsReducer from './contacts/contacts-reduser';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
