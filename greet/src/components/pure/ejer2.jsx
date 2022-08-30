import React from 'react'
import { useState } from 'react'

function ejer2() {
    const initialState = {
        fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
    }

    const [person, setPerson ]=useState(initialState)
    const tick = () => {
        setPerson(
            person.edad +1 
        )
    }
    

    return (
        <div>
            <h2>
            Hora Actual:
            {person.fecha.toLocaleTimeString()}
            </h2>
            <h3>{person.nombre} {person.apellidos}</h3>
            <h1>Edad: {person.edad}</h1>
        </div>
     )
}

export default ejer2