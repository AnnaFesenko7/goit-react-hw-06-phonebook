import s from './App.module.css';
// import { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { connect } from 'react-redux';
// import * as contactsActions from '../redux/contacts/contacts-actions';

function App(contacts) {
  //  const [contacts, setContacts] = useState(
  //    () =>
  //      JSON.parse(window.localStorage.getItem('contacts')) ??
  //      [
  //        // {
  //        //   name: 'Anna Fesenko',
  //        //   number: '359-79-39',
  //        //   id: '2P2njwuGQH7Ii253QN4R6',
  //        // },
  //        // {
  //        //   name: 'Ivan Khorokhor',
  //        //   number: '123-85-97',
  //        //   id: '9JVdbo866LiW0sGNNHBRM',
  //        // },
  //        // {
  //        //   name: 'Nataly Shtukina',
  //        //   number: '785-269-79',
  //        //   id: 'sXQj5y5_iz8ZzJJdN94Xv',
  //        // },
  //      ]
  //  );
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const saveContact = newContact => {
  //   contacts.find(
  //     contact =>
  //       contact.name === newContact.name || contact.number === newContact.number
  //   )
  //     ? showAlert(newContact.name)
  //     : setContacts(prevState => [newContact, ...prevState]);
  // };

  // const showAlert = name => {
  //   const message = `${name} is already in contacts`;
  //   alert(message);
  // };

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
const mapStateToProps = state => ({
  contacts: state.items,
});
export default connect(mapStateToProps, null)(App);
