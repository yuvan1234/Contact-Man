Steps:
<ul>
  <li>
    Create Multiple components
    - Header
    - AddContact 
    - ContactList 
    - ContactCard
  </li>
</ul> 


 
/* ======  AddContact.js   ====== */
- Create component 

class AddContact extends React.Component { render() { return ( <div></div>) }}

- Create a form 
- Create input name and email 
- Create a button 


 
/* ====== ContactList.js ====== */
const  = () => { return (  ); } export default;



 
/* ====== App.js ====== */
/* Rendering List */
- Create a list of contacts as array (id, name, email)
<Header />
<AddContact />
<ContactList />
 
/* Props - Pass data from parent to child   */
<ContactList contacts={contacts}/>
 
 
 /* ====== ContactList.js ====== */
const ContactList = (props) => {
  console.log(props);
}

- Create a function and render the list

const renderContactList = props.contacts.map((contact) => {
  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div><i className="trash alternate outline icon"></i></div>
    </div>
  )
})

- Reference variable in jsx (Note: no parenthesis)

return <div>{renderContactList}</div>

 
/* ====== ContactCard.js ====== */
- Move the contents of contactList here and add the props

const ContactCard = (props) => {
  return (
      <div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div><i className="trash alternate outline icon"></i></div>
    </div>
  )
}

 /* ====== ContactList.js ====== */
 - Import the ContactCard
import ContactCard from './ContactCard'

const renderContactList = props.contacts.map((contact) => {
  return (
    <ContactCard contact={contact}/>
  )
})

return <div>{renderContactList}</div>


/* ====== ContactCard.js ====== */
- Use destructuring
- import image

import user from '../images/user.png'

const ContactCard = (props) => {
  const {id, name, email} = props.contact;
  return (
    <div>
      <img src={user} alt="user" className="ui avatar image" />
      <div>{name}</div>
      <div>{email}</div>
      <div><i className="trash alternate outline icon"></i></div>
    </div>
  )
}


/* ====== App.js ====== */
- Build the functionality
- Remove the contact list array 
- Add useState Hook

import React, { useSate } from 'react';

function App() {
const [contacts, setContacts] = useState([]);
 
  return (

  )
}

 
/* ====== AddContacts.js ====== */
- Create a state
- State in class component
- Create event onChange on input name and input email 
- Add onSubmit on Form
- Create function add
- Add the objects to App.js (App component will add the contacts to contacts array) 
- Note: If we want to pass data from parent to child we use Props, But if we want to pass something to child to parent we use function as prop

- Passing values from a parent component to a child component is simple; we only have to pass the values as props of the child element.
- Child-to-Parent: The simple, straightforward (and rather popular) approach for doing this is by passing a function that will behave as a callback. The method needs to receive the information that the child needs to pass to the parent as arguments.


state = {
    name: "",
    email: "",
  }

add = (e) => {
  e.preventDefault();
  if(this.state.name === "" && this.state.email === ""){
    alert("All the fields are mandatory!");
    return
  }
  this.props.addContactHandler(this.state); //*** Parent to child ***//
  this.setState({name: "", email: ""})
  // console.log(this.state);
}

value={this.state.name}
onChange={ (e) => this.setState({name: e.target.value})}

<form className="ui form" onSubmit={this.add}></form>


/* ====== App.js ====== */
- Child-to-Parent
- Create addContactHandler function 
- Update the state using setState()
- Take all the previous state using rest operator ... 


const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }

<AddContact addContactHandler={addContactHandler}/> //** Child to parent **//


/* ====== App.js ====== */
- In order to process data use Local storage. 
- useEffect Hook 
- Check if the data stores in local storage by going to "Application => LS" or "Storage => LS"


import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = "contacts";

useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])



/* ====== App.js ====== */
- Add another useEffect to see graph of LS


useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retrieveContacts) setContacts(retrieveContacts)
}, [])


/* ====== App.js ====== */
Warning: Each child in a list should have a unique "key" prop.
- install uuid package to generate unique key 
- Add delete function removeContactHandler
- create a copy of contact (newContactList)
- set a state of new contacts
- pass the removeContactHandler by adding to ContactList component
-  

import { v4 as uuidv4 } from 'uuid';

setContacts([...contacts, {id: uuidv4(), ...contact}])

const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList)
  }

 <ContactList contacts={ contacts } getContactId={removeContactHandler}/>



/* ====== ContactList.js ====== */
- Create delete function deleteContactHandler
- In order to get the ID, go to ContactCard

const deleteContactHandler = (id) => {
    props.getContactId(id);
  };


 
/* ====== ContactCard.js ====== */
- Add clickHandler 
<i className="trash alternate outline icon" 
style={{
  color:"red", 
  marginTop: "7px",
  display: "flex",
}}
onClick={() => props.clickHandler(id)}
></i>  


/* ====== ContactList.js ====== */
- pass the clickHandler to ContactCard component


 <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>

 
/* ====== */
/* Router */
/* ====== */