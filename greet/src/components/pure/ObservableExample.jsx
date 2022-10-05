import React, { useState } from 'react';
import {getNumbers} from '../../services/observableService.js';

function ObservableExample( ) {

    const [number, setNumber] = useState(0)

    const obtainNewNumber = () => {
        console.log('Subscription to Observable')
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('The new number is:', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong: ${error}`)
                    console.log(`errors`)
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log(`done with observable`)
                }
            }
        )

    }

    return (
        <div>
            <h2>Numebr:{number}</h2>
            <button onClick={obtainNewNumber}>obtain number</button>
        </div>
    );
}

export default ObservableExample;