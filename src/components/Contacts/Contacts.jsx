import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import s from './Contacts.module.css';

import Contact from '../Contact/Contact';
import action from '../../redux/contacts/contacts-actions';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return { contacts: visibleContacts };
};

const mapDispachToProps = dispatch => ({
  onDeleteContact: dataId => dispatch(action.deleteContact(dataId)),
});

export default connect(mapStateToProps, mapDispachToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
