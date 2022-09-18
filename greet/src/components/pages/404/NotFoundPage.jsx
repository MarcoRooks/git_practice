import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate()
    const navigation = (path) => {
        navigate(path)
    }
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={()=>navigation('/')} >Go back home</button>
        </div>
    );
}

export default NotFoundPage;