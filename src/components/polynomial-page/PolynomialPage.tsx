import React from 'react';
import { Form } from './Form';
import { Typography } from '@material-ui/core';
import { Polynomial } from './Polynomial';
import { Matrix } from './Matrix';

export const PolynomialPage = () => {

    return <div>

        <Typography variant="h3" gutterBottom>
            Get your polynomial
        </Typography>

        <Form />

        <Polynomial />
        
        <Matrix/>
        
    </div>
}