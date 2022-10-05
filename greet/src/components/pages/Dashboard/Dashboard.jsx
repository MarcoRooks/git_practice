import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../pure/Copyright';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigation = useNavigate();
    const logout = () => {
        navigation('/login')
    }
    return (
        <div>
            <Button variant='contained' onClick={()=> logout()}>logout</Button>
            <Copyright/>
        </div>
    );
}

export default Dashboard;