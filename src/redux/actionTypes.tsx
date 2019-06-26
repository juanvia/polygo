import { AnyAction } from "redux";
export const SET_EXPONENTS = "SET_EXPONENTS";
export const SET_VARIABLES_NOTATION = "SET_VARIABLES_NOTATION";
export const SET_COEFFICIENT_NOTATION = "SET_COEFFICIENT_NOTATION";
export const SET_DIMENSIONS = "SET_DIMENSIONS";
export const SET_DEGREE = "SET_DEGREE";

export type TradicionalVsPedantic = "traditional" | "pedantic" | undefined

export interface SetExponentsAction {
    type: typeof SET_EXPONENTS
    payload: number[][]
}

export interface SetVariablesNotationAction extends AnyAction {
    type: typeof SET_VARIABLES_NOTATION
    payload: TradicionalVsPedantic
}

export interface SetCoefficientNotationAction extends AnyAction {
    type: typeof SET_COEFFICIENT_NOTATION
    payload: TradicionalVsPedantic
}
  
export interface SetDimensionsAction extends AnyAction {
    type: typeof SET_DIMENSIONS
    payload: number
}
  
export interface SetDegreeAction extends AnyAction {
    type: typeof SET_DEGREE
    payload: number
}
  
