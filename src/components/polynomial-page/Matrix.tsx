import { Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import {degreeInWords, dimensionsInWords} from '../../utils/toolbox'


export const Matrix = () => {

    //#region Hooks

    const {
        exponentsArray,
        dimensions,
        degree
    } = useSelector((state: AppState) => state)
    
    //#endregion
    
    //#region Render

    return <div>

        <Typography variant="h5" style={{ marginTop: 48 }}>
            Terms exponents
        </Typography>

        <div>
            {dimensionsInWords(dimensions ? dimensions : 0)},<> </>
            {degreeInWords(degree ? degree : 0)},<>  </>
            <b>{exponentsArray.length}</b> rows. That's for programmers, ignore it.
        </div>


        <div style={{ fontFamily: 'Roboto Mono', fontSize: 14, fontWeight: 'bolder', marginTop: 24 }}>
            {JSON.stringify(exponentsArray)}
        </div>
    </div>

    //#endregion
}
