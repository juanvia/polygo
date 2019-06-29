import { combineReducers } from "redux";
import { exponentsArray } from './exponentsArray'
import { coefficientNotation } from './coefficient-notation'
import { variablesNotation } from './variables-notation'
import { dimensions } from './dimensions'
import { degree } from './degree'
export default combineReducers({ 
    exponentsArray: exponentsArray, 
    variablesNotation: variablesNotation, 
    coefficientNotation: coefficientNotation,
    dimensions: dimensions,
    degree: degree
 })
