import { combineReducers } from "redux";
import { exponents } from './exponents'
import { coefficientNotation } from './coefficient-notation'
import { variablesNotation } from './variables-notation'
import { dimensions } from './dimensions'
import { degree } from './degree'
export default combineReducers({ 
    exponents, 
    variablesNotation: variablesNotation, 
    coefficientNotation: coefficientNotation,
    dimensions: dimensions,
    degree: degree
 });
