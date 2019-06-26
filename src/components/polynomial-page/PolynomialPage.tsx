import React from 'react';
import { Form } from './Form';
import { Typography } from '@material-ui/core';
import { Polynomial } from './Polynomial';
import { Matrix } from './Matrix';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import exponents from '../../redux/reducers/exponents';

export const PolynomialPage = () => {
    const exponentsMatrix = useSelector((state:AppState) => state.exponents)
    return <div>

        <Typography variant="h3" gutterBottom>
            Get your polynomial
        </Typography>

        <Form />

        {(exponentsMatrix && exponentsMatrix.length > 0 && exponentsMatrix[0].length)
            ? <><Polynomial /><Matrix></Matrix></>
            : <div style={{marginTop:40}}>...press GO</div> 
        }
        

        

    </div>
}