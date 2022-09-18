import React from 'react';
import {useNavigate} from 'react-router-dom';

function ProfilePage({user}) {
    const navigate = useNavigate()
    const goBack = ()=> {
        navigate(-1)
    }
    const navigateTo = (path) => {
        navigate(path)
    }
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={()=> navigateTo('/tasks')}>Your Tasks</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default ProfilePage;