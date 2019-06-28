import { ThunkAction} from 'redux-thunk'
import { ActionCreator} from 'redux';
import { 
  SET_EXPONENTS, SetExponentsAction,
  SET_COEFFICIENT_NOTATION, SetCoefficientNotationAction,
  SET_DEGREE, SetDegreeAction,
  SET_DIMENSIONS, SetDimensionsAction,
  SET_VARIABLES_NOTATION,  SetVariablesNotationAction,
  TradicionalVsPedantic 
} from "./actionTypes";
import { AppState } from './store';
import { exponents } from '../lib/exponents';

export const setExponents:ActionCreator<SetExponentsAction> = 
  (array:number[][]):SetExponentsAction => ({
    type: SET_EXPONENTS,
    payload: array,
  });

export const setCoefficientNotation:ActionCreator<SetCoefficientNotationAction> = 
  (value:TradicionalVsPedantic):SetCoefficientNotationAction => ({
    type: SET_COEFFICIENT_NOTATION,
    payload: value,
  });

export const setVariablesNotation:ActionCreator<SetVariablesNotationAction> = 
  (value:TradicionalVsPedantic):SetVariablesNotationAction => ({
    type: SET_VARIABLES_NOTATION,
    payload: value,
  });

export const setDimensions:ActionCreator<SetDimensionsAction> = (value:number):SetDimensionsAction => ({
  type: SET_DIMENSIONS,
  payload: value,
});

export const setDegree:ActionCreator<SetDegreeAction> = (value:number):SetDegreeAction => ({
  type: SET_DEGREE,
  payload: value,
});

type SuitableFunction = typeof setCoefficientNotation
  | typeof setVariablesNotation
  | typeof setDimensions
  | typeof setDegree
type SuitableAction = SetCoefficientNotationAction
  | SetDegreeAction
  | SetDimensionsAction
  | SetVariablesNotationAction

export const computeExponentsOn : ActionCreator<ThunkAction<SetExponentsAction, AppState, AppState, SetExponentsAction>> = 
  (f,value) => (dispatch, getState:()=>AppState) => {
      dispatch(f(value))
      const {dimensions, degree } = getState();
      return dispatch(setExponents(exponents(dimensions, degree)))
  }
 

