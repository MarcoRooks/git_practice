import React from 'react';
import { useNavigate } from 'react-router-dom';

function PleaseLogin() {
    const navigate = useNavigate()
    const navigateTo =(path) => {
        navigate(path)
    }
    return (
        <div>
            <h1>You are not logged in, please login</h1>
            <button onClick={()=> navigateTo('/login')}>Login</button>
        </div>
    );
}

export default PleaseLogin;