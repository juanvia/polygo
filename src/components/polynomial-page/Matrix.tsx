import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';


const degreeInWords = (degree: number): string => {
  if (degree === undefined) return '?'
  switch (degree) {
        case 0: return 'constant'
        case 1: return 'linear or monic'
        case 2: return 'quadratic'
        case 3: return 'cubic'
        case 4: return 'quartic o bi-cuadratic'
        case 5: return 'quintic'
        case 6: return 'sextic or hexic'
        case 7: return 'septic or heptic'
        case 8: return 'octic'
        case 9: return 'nonic'
        default: return `${degree}th degree`
    }
}

const dimensionsInWords = (dimensions: number) => {
    if (dimensions === undefined) return '?'
    switch (dimensions) {
        case 0: return 'Constant'
        case 1: return 'Unidimensional'
        case 2: return 'Bidimensional'
        case 3: return 'Tridimensional'
        case 4: return 'Four-dimensional'
        case 5: return 'Five-dimensional'
        case 6: return 'Six-dimensional'
        default: return `${dimensions}-dimensional`
    }
}


export const Matrix = () => {

    const {
        exponents: exponentsMatrix,
        dimensions,
        degree
    } = useSelector((state: AppState) => state)

    return <div>
        <Typography variant="h5" style={{ marginTop: 48 }}>
            Terms exponents
        </Typography>

        <div>
            {dimensionsInWords(dimensions ? dimensions : 0)},<> </>
            {degreeInWords(degree ? degree : 0)},<>  </>
            <b>{exponentsMatrix.length}</b> rows. That's for programmers, ignore it.
      </div>


        <div style={{ fontFamily: 'Roboto Mono', fontSize: 14, fontWeight: 'bolder', marginTop: 24 }}>
            {JSON.stringify(exponentsMatrix)}
        </div>
    </div>
}
