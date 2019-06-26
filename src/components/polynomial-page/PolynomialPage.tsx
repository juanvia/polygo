import React from 'react';
import { Form } from './Form';
import { Typography } from '@material-ui/core';
import { Polynomial } from './Polynomial';
import { Matrix } from './Matrix';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';

export const PolynomialPage = () => {
    const exponentsMatrix = useSelector((state:AppState) => state.exponents)
    return <div>

        <Typography variant="h3" gutterBottom>
            Get your polynomial
        </Typography>

        <Form />

        {(exponentsMatrix && exponentsMatrix.length > 0 && exponentsMatrix[0].length > 0)
            ? <Polynomial />
            : <></> 
        }
        

        <Matrix />

    </div>
}