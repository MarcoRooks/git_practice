import React, { useEffect, useState } from 'react';
import getData from '../../services/axios-service';

const AxiosExample = () => {

    const [user, setUser] = useState(null)
    useEffect(()=>{
        obtainNewUser()
    }, [])

    const obtainNewUser = () => {
        getData()
            .then((response) => {
                console.log('This what you asked for', response)
                setUser(response.data.results[0])
            })
            .catch((error) =>{
                alert(`What is the matttaaa ${error}`)
            })
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {
                user != null ?
                (
                    <div>
                        <h2>{user.name.title} {user.name.first} {user.name.last} </h2>
                        <h3>{user.email} </h3>
                    </div>
                ) 
                : null}
                <div>
                    <h2>random user generator:</h2>
                    <button onClick={()=>obtainNewUser()}>generate new user</button>
                </div>
        </div>
    );
};

export default AxiosExample;