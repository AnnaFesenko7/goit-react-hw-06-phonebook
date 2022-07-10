import s from './App.module.css';

import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.items);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 18,
      }}
    >
      <h2 className={s.title}>Phonebook</h2>
      <div className={s.wrapper__phonebook}>
        <Form />
      </div>

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <div className={s.wrapper__contacts}>
        {contacts.length !== 0 ? <ContactsList /> : ''}
      </div>
    </div>
  );
}
// const mapStateToProps = state => ({
//   contacts: state.items,
// });
// export default connect(mapStateToProps, null)(App);
