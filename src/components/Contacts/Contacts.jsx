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

const getVisibleContacts = (allContact, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContact.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispachToProps = dispatch => ({
  onDeleteContact: dataId => dispatch(action.deleteContact(dataId)),
});

export default connect(mapStateToProps, mapDispachToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
