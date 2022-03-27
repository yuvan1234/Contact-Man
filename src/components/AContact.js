import React, { useState } from 'react'

const AContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const addHandler = (e) => {
    e.preventDefault();
    if(name === "" && email === ""){
      alert("All the fields are mandatory!");
      return
    }
    
    props.onAcontact(name, email)
    setName('')
    setEmail('')
    }
 
    const nameChangeHandler = (event) => {
      setName(event.target.value)
    }

    const emailChangeHandler = (event) => {
      setEmail(event.target.value)
    }
 
    return (
      <div className='ui main'>
        <h2>AddContact</h2>
          <form className="ui form" onSubmit={addHandler}>

            <div className="field">
              <label htmlFor="">Name</label>
              <input type="text" 
                name="name" 
                placeholder='Name' 
                value={name}
                onChange={nameChangeHandler} />
            </div>

            <div className="field">
              <label htmlFor="">Email</label>
              <input type="text" 
                name="email" 
                placeholder='Email'
                value={email}
                onChange={emailChangeHandler} />
            </div>

            <button className="ui button blue">Add</button>

          </form>
      </div>
    )
  }
 

export default AContact