import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { degreeInWords, dimensionsInWords } from '../../utils/toolbox'
import SectionHeader from './SectionHeader';


export const Matrix = () => {

    //#region Hooks

    const {
        exponentsArray,
        dimensions,
        degree
    } = useSelector((state: AppState) => state)

    //#endregion

    const pompadour: string = ``
        + `${dimensionsInWords(dimensions ? dimensions : 0)}, `
        + `${degreeInWords(degree ? degree : 0)}, `
        + `${exponentsArray.length} rows.`

    //#region Render

    return <div>

        <SectionHeader
            title="Exponents array"
            pompadour={pompadour}
        />

        <div style={{ fontFamily: 'Roboto Mono', fontSize: 14, fontWeight: 'bolder', marginTop: 24 }}>
            {JSON.stringify(exponentsArray)}
        </div>

    </div>

    //#endregion
}
