import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact_class'

function ContactItem({user, connected, add, remove}) {

  function connected(){
    if(user.status){
      return (<i className='bi-toggle-on'  onClick={() => connected(user)}  style ={{color: 'green', fontWeight: 'bold'}}>completed</i>)
    } else {
      return (<i className='bi-toggle-off'  onClick={() => connected(user)} style ={{color: 'grey', fontWeight: 'bold'}}>pending</i>)
    }
  }
  return (
    <div>
        <h1> name: {user.name}</h1>
        <h2> last name: {user.lastName}</h2>
        <h3>email: {user.email}</h3>
        <h3>status: {connected()}</h3>

    </div>
  )
}

ContactItem.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    connected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactItem
