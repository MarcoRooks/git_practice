import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AboutPage() {
    const location = useLocation();
    const history = useNavigate();
    console.log('we are in ROute:', location.pathname);

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1);
    }
//not the best one
    const goForward = () => {
        history(1)
    }


    return (
        <div>
            <h1>About Page</h1>
            <div>
                <button onClick={()=>navigate('/')}>Go Home</button>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
        </div>
    );
}

export default AboutPage;