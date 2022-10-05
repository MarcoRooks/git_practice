import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home=()=>{
    const location = useLocation();
    const navigation = useNavigate();
   

    const navigate = (path) => {
        navigation(path)
    } 

    const navigateProps = (path) => {
        navigation(
            path,
            {state:{
                online: true
            }
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigateProps('/online-state')}> Go to Status Page</button>
            <button onClick={() => navigate('/profile')}> Go to Profile</button>
            <h2>Dashboard</h2>
        </div>
    );
}

export default Home;