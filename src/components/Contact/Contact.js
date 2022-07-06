import s from './Contact.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

function Contact({ contact, onDeleteContact }) {
  const { id } = contact;
  return (
    <li className={s.contactsListItem}>
      <p className={s.contactsListName}>{contact.name}</p>
      <p className={s.contactsListName}>{contact.number}</p>
      <button className={s.contactsListBtn} onClick={() => onDeleteContact(id)}>
        Удалить
      </button>
    </li>
  );
}
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);
