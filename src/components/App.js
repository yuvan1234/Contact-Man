import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
 
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
// import AContact from './AContact';

// const { uuid } = require('uuid');
// console.log(uuidv4)

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuidv4(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList)
  }

  // const addHandler = (name, email) => {
  //   console.log(name, email);
  //   setContacts([...contacts, {id: uuidv4(), name, email}])
  // }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts) setContacts(retrieveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      {/* <AContact onAcontact={addHandler}/> */}
      <ContactList contacts={ contacts } getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
