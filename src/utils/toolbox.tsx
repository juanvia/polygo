import { range } from 'ramda'

export const upperCases = range(65, 65 + 26).map(charCode => String.fromCharCode(charCode))

export const variableNames = "xyztuvw".split('')

export const degreeInWords = (degree: number): string => {
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

export const dimensionsInWords = (dimensions: number) => {
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