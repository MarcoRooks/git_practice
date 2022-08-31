import React, { useState } from 'react'
import { Contact } from '../models/contact_class'
import ContactItem from './contact'
import { LEVELS } from '../models/levels_num'
import ContactForm from './contactForm'

function ContactList() {

    const defaultContact = new Contact('User', 'lastName', 'email1@gmail.com', false, LEVELS.NORMAL)
    const defaultContact1 = new Contact('maria', 'alvarez', 'email2@gmail.com', false, LEVELS.NORMAL)
    const defaultContact2 = new Contact('marco', 'rooks', 'email3@gmail.com', false, LEVELS.NORMAL)
    const defaultContact3 = new Contact('eusebio', 'diaz', 'email4@gmail.com', false, LEVELS.NORMAL)

    const [users, setUser] = useState([defaultContact , defaultContact1, defaultContact2, defaultContact3] )

    function connected(user){
        console.log('Check whether they are connected', user);
        const index = users.indexOf(user)
        let tempUser = [...users]
        tempUser[index].connected = !tempUser[index].connected
        setUser(tempUser)
    }

    function addContact(user){
        console.log('Add user', user);
        const index = users.indexOf(user)
        let tempUser = [...users]
        tempUser.push(user)
        setUser(tempUser)
    }

    function deleteContact(user){
        console.log('Delete user', user);
        const index = users.indexOf(user)
        let tempUser = [...users]
        tempUser.splice(index, 1)
        setUser(tempUser)
    }

    return (
        <div>
            {users.map( (user, index)=>{
                return ( <ContactItem key={index} user ={user} connected={connected} remove={deleteContact}/> )
            })}
            <ContactForm  add={addContact}/>
        </div>
    )
}

export default ContactList