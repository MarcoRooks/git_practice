import React from 'react';
import { useLocation } from 'react-router-dom';

function StatePage() {
    const location = useLocation()
    console.log('Location state',location.state.online)
    console.log('Query param:',location.search.online)

    return (
        <div>
            <h1>State is: {location.state ? 'The User is online' : 'The user is offline' }</h1>
        </div>
    );
}

export default StatePage;