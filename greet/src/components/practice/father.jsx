import React from 'react'
import { useState } from 'react';
import Child from './child'

function Father() {

    const [name, setName] =useState('Martin')

    function showMessage(text){
        alert(`Message received: ${text}`);
    }

    function updateName(newName){
        setName(newName)
    }

    return (
        <div>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    )
}

export default Father