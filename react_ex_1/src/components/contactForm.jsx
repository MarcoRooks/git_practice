import React, { useRef } from 'react'
import { Contact } from '../models/contact_class'

function ContactForm({add}) {
  let userRef = useRef('')
  let surnameRef = useRef('')
  let emailRef = useRef('')

  function uploadNew(e){
    e.preventDefault()
    const newUser = new Contact(
      userRef.current.value,
      surnameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newUser)
  }


  return (
    <form onSubmit={uploadNew}>
        <div>
            <input type="text" placeholder='first name' ref={userRef}/>
            <input type="text" placeholder='last name' ref={surnameRef}/>
            <input type="text" placeholder='email' ref={emailRef}/>
            <button type='submit' className='btn btn-success btn-lg ms-3'>add contact</button>
        </div>

    </form>
  )
}

export default ContactForm