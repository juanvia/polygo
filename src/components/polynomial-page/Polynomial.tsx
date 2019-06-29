import { range } from "ramda"
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from "../../redux/store"
import { upperCases, variableNames, dimensionsInWords, degreeInWords } from '../../utils/toolbox'
import SectionHeader from "./SectionHeader";

//#region My Types

interface NotationProps {
  exponent: number,
  exponentIndex: number,
}

//#endregion

export const Polynomial = () => {

  //#region Hooks

  const {
    exponentsArray,
    dimensions,
    degree
  } = useSelector((state: AppState) => state)

  //#endregion

  //#region Left

  const Left = () => {

    const variablesNotation = useSelector((state: AppState) => state.variablesNotation)
    const dimensions = useSelector((state: AppState) => state.dimensions)

    if (!dimensions) return <></>

    return <><span style={{ marginRight: 8 }}>
      {variablesNotation === 'pedantic' ? 'y' : variableNames[dimensions]}
    </span>
      <span style={{ marginRight: 8 }}>=</span>
      <span style={{ marginRight: 8 }}> <span style={{ marginRight: 4 }}>f(</span>
        <span>
          {
            variablesNotation !== 'pedantic'
              ? range(0, dimensions).map(d => variableNames[d]).join(', ')
              : range(0, dimensions).map((d, i, a) => <span key={i}>x<sub>{d + 1}</sub>{i < a.length - 1 ? ', ' : ''}</span>)
          }
        </span>
        <span style={{ marginLeft: 4 }}></span>)
    </span>

      <span style={{ marginRight: 8 }}>:</span>
      <span style={{ marginRight: 8 }}>&#x211D;{dimensions > 1
        ? <sup>{dimensions}</sup>
        : ''}&#xffeb;&#x211D;</span>
      <span style={{ marginRight: 8 }}>=</span>

    </>
  }

  //#endregion

  //#region Variables

  const VariableTraditionalNotation = ({ exponent, exponentIndex }: NotationProps) => <>

    {/** Variable name*/}
    {exponent === 0 ? '' : variableNames[exponentIndex]}

    {/** exponent (superscripted) */}
    <sup>{exponent < 2 ? '' : exponent}</sup>

  </>

  const VariablePedanticNotation = ({ exponent, exponentIndex }: NotationProps) => <>
    {/** x subindexed  */}
    {exponent === 0 ? '' : <>x<sub>{exponentIndex + 1}</sub></>}
    {/** exponent (superscripted) */}
    <sup>{exponent < 2 ? '' : exponent}</sup>
  </>

  const Variables = ({ exponents }: {
    exponents: number[],
  }) => {
    const variablesNotation = useSelector((state: AppState) => state.variablesNotation)
    return <>
      {exponents.map((exponent, exponentIndex) =>
        variablesNotation === 'traditional'
          ? <VariableTraditionalNotation key={exponentIndex} exponent={exponent} exponentIndex={exponentIndex} />
          : <VariablePedanticNotation key={exponentIndex} exponent={exponent} exponentIndex={exponentIndex} />
      )}
    </>
  }

  //#endregion

  //#region Coefficient

  const Coefficient = ({ index }: {
    index: number,
  }) => {

    const { coefficientNotation, exponentsArray } = useSelector((state: AppState) => state)
    let effectiveNotation = exponentsArray.length > upperCases.length
      ? 'pedantic'
      : coefficientNotation

    return <>
      {effectiveNotation === "traditional"
        ? upperCases[index % upperCases.length]
        : <>a<sub>{index + 1}</sub></>}
    </>

  }

  //#endregion

  //#region Terms

  const Term = ({ exponents, index }: {
    exponents: number[],
    index: number,
  }) => {
    return <span>
      <Coefficient index={index} />
      <Variables exponents={exponents} />
    </span>

  }

  const Terms = () => {

    return <>
      {exponentsArray.map((exponents, index, array) => <span key={index}>

        <Term
          exponents={exponents}
          index={index}
        />

        {/* if not last separate with plus sign */}
        {(index < array.length - 1 ? '  + ' : '')}

      </span>)}
    </>
  }

  //#endregion

  //#region Handwriting

  const HandWriting = () => <div>

    <div style={{
      fontFamily: 'Shadows Into Light',
      lineHeight: 1,
      fontSize: '1.3rem',
      fontWeight: 'bolder',
      marginTop: 24,
      color: '#5078b7',
    }}>
      <Left />
      <Terms />
    </div>

  </div>

  //#endregion

  //#region Title

  const Title = () => {

    const pompadour: string = ``
      + `${dimensionsInWords(dimensions ? dimensions : 0)}, `
      + `${degreeInWords(degree ? degree : 0)}, `
      + `${exponentsArray.length} terms.`
    return <div>

      <SectionHeader
        title="Polynomial"
        pompadour={pompadour}
      />

    </div>
  }

  //#endregion

  //#region Render

  return <div>

    <Title />

    <HandWriting />

  </div>

  //#endregion

}
