import React from 'react';
//Material UI components
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

function Copyright() {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyright (C)'}
            <Link href='https://www.linkedin.com/in/marco-rooks-peralta-5b3a90135/'>Marco Rooks</Link>
            {''}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;