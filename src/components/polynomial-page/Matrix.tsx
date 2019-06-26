import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';

export const Matrix = () => {

    const exponents: number[][] | undefined = useSelector((state: AppState) => state.exponents)

    return <div>
        <Typography variant="h5" gutterBottom  style={{marginTop: 48}}>
            Terms exponents
        </Typography>
        <div>{JSON.stringify(exponents)}</div>
    </div>
}
