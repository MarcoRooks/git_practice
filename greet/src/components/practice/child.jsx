import React from 'react'
import { useRef } from 'react';

function Child({ name, send, update }) {

    const messageRef = useRef('');
    const nameRef = useRef('')

    function pressedbutton(){
        let text = messageRef.current.value
        alert(`This is the new text input: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }
    
    function submitName(e){
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div>
            <p onMouseOver={() => console.log('mouse wentover')}>Child Component: {name}</p>
            <button onClick={() => console.log('clicked')}>Button 1</button>
            <button onClick={pressedbutton}>Button 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Button 3</button>
            <input 
                placeholder='Insert a text' 
                onFocus={() => console.log('highlight')}
                onChange={(e)=> console.log('Targeted changes', e.target.value)}
                ref={messageRef}
                />
            <button onClick={() => send(messageRef.current.value)}> send</button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input type="text" ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    )
}

export default Child