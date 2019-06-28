import { range } from "ramda"
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from "../../redux/store"
import { Typography } from "@material-ui/core"

// ----- makePolynomial ---------------------------------------------------
// Returns a string with a representation of the polynomial defined by the stacked matrix

export const upperCases = range(65, 65 + 26).map(charCode => String.fromCharCode(charCode))
export const variableNames = "xyztuvw".split('')


const VariableTraditionalNotation = ({ exponent, exponentIndex }: {
  exponent: number,
  exponentIndex: number,
}) => <>
    {/** Variable name*/}
    {exponent === 0 ? '' : variableNames[exponentIndex]}

    {/** exponent (superscripted) */}
    <sup>{exponent < 2 ? '' : exponent}</sup>

  </>

const VariablePedanticNotation = ({ exponent, exponentIndex }: {
  exponent: number,
  exponentIndex: number,
}) => <>
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

const Coefficient = ({ index }: {
  index: number,
}) => {

  const { coefficientNotation, exponents } = useSelector((state: AppState) => state)
  let effectiveNotation = exponents.length > upperCases.length
    ? 'pedantic'
    : coefficientNotation

  return <>
    {effectiveNotation === "traditional"
      ? upperCases[index % upperCases.length]
      : <>a<sub>{index + 1}</sub></>}
  </>

}

const Term = ({ exponents, index }: {
  exponents: number[],
  index: number,
}) => {
  return <span>
    <Coefficient index={index} />
    <Variables exponents={exponents} />
  </span>

}

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

const Terms = ({ exponentsMatrix }: { exponentsMatrix: number[][] }) => {

  return <>
    {exponentsMatrix.map((exponents, index, array) => <span key={index}>

      <Term
        exponents={exponents}
        index={index}
      />

      {/* if not last separate with plus sign */}
      {(index < array.length - 1 ? '  + ' : '')}

    </span>)}
  </>
}

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


export const Polynomial = () => {

  const {
    exponents: exponentsMatrix,
    dimensions,
    degree
  } = useSelector((state: AppState) => state)

  return <div>


    <Typography variant="h5" style={{ marginTop: 48 }}>
      Polynomial
    </Typography>

    <div>
      {dimensionsInWords(dimensions?dimensions:0)},<> </> 
      {degreeInWords(degree?degree:0)},<> </> 
      <b>{exponentsMatrix.length}</b> terms.
    </div>

    {/** #406eb7*/}

    <div style={{
      fontFamily: 'Shadows Into Light',
      lineHeight: 1,
      fontSize: '1.3rem',
      fontWeight: 'bolder',
      marginTop: 24,
      color: '#5078b7',
    }}>
      <Left />
      <Terms exponentsMatrix={exponentsMatrix} />
    </div>

  </div>
}
