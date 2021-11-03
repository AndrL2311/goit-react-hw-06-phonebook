import { useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';

function App() {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const useLocalStoage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  };

  const [contacts, setContacts] = useLocalStoage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  // const formSubmitHandler = data => {
  //   // console.log(data);
  //   if (contacts.find(contact => contact.name === data.name)) {
  //     return alert(`${data.name} is alredy in contacts`);
  //   } else {
  //     data.id = uuidv4();
  //     setContacts(prevContacts => [...prevContacts, data]);
  //   }
  // };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const visibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    // console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [contacts, filter]);

  return (
    <div className={s.container}>
      <h1 className={s.titlePhonebook}>Phonebook</h1>
      <Form />
      <h2 className={s.titleContacts}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
