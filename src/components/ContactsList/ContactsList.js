import s from './ContactsList.module.css';

import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
// import * as contactsActions from '../../redux/contacts/contacts-actions';

export default function ContactsList() {
  const contacts = useSelector(({ items, filter }) =>
    getVisibleContacts(items, filter)
  );
  return (
    <ul className={s.contactsList}>
      {contacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return items.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

// const mapStateToProps = ({ items, filter }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// export default connect(mapStateToProps, null)(ContactsList);
