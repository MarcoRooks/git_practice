import React from 'react';

function AsyncExample() {
    
    async function saveSessionStorage(key,value){
        await sessionStorage.setItem(key, value);//notice difference SET
        return Promise.resolve(sessionStorage.getItem(key))//GET
    }

    function showStorage(){
        saveSessionStorage('name','Martin')
            .then((response) =>{
                let value = response;
                alert( `Saved values name : ${value}`)
            }).catch((error)=> {
                alert(`Something went wrong: ${error}`)
            }).finally(()=> {
                console.log('Name saved and retrieved successfully')
            });
    }

    async function generateNumber(){
        return 1;
    }

    async function obtainNumber(){
        generateNumber()
            .then((response) => alert(`Response is: ${response}`))
            .catch((error)=> alert(`Something went wrong${error}`)) 
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    async function obtainPromiseNumber(){
        generatePromiseNumber().then((response) => alert(`Response is: ${response}`))
    }

    async function obtainMessage(){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Whooooops'))
    }

    const consumeError = () =>{
        returnError()
            .then((response)=>{ alert(`Everything is ok: ${response}`)})
            .catch((error)=>{ alert(`Something went wrong: ${error}`)})
            .finally(() => {alert('Finally executed')})
    }

//try catch
    const urlNotFound = async () => {
        try {
            let response= await fetch('https://invalidURL');
            alert(`Response : ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong: ${error} (Check your console)`)
        }
    }

    const multiplePromises = async () => {
        let results = await Promise.all(
            [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URLS: ${error} (check console)`))
    }

    return (
        <div>
            <h1>Ejemplos de asincronia</h1>
            <button onClick={obtainNumber}> Obtain Number</button>
            <button onClick={obtainPromiseNumber}> Obtain Promise Number</button>
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}> Receive message 2 seconds later</button>
            <button onClick={consumeError}>force error</button>
            <button onClick={urlNotFound}>try/catch</button>
            <button onClick={multiplePromises}> multi-promises</button>
        </div>
    );
}

export default AsyncExample;