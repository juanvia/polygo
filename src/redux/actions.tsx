import { SET_EXPONENTS,SET_COEFFICIENT_NOTATION, SET_DEGREE, SET_DIMENSIONS, SET_VARIABLES_NOTATION, TradicionalVsPedantic } from "./actionTypes";

export const setExponents = (array:number[][]) => ({
  type: SET_EXPONENTS,
  payload: array,
});

export const setCoefficientNotation = (value:TradicionalVsPedantic) => ({
  type: SET_COEFFICIENT_NOTATION,
  payload: value,
});

export const setVariablesNotation = (value:TradicionalVsPedantic) => ({
  type: SET_VARIABLES_NOTATION,
  payload: value,
});

export const setDimensions = (value:number) => ({
  type: SET_DIMENSIONS,
  payload: value,
});

export const setDegree = (value:number) => ({
  type: SET_DEGREE,
  payload: value,
});

