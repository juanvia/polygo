import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { ActionCreator } from 'redux'
import {
  SET_EXPONENTS, SetExponentsAction,
  SET_COEFFICIENT_NOTATION, SetCoefficientNotationAction,
  SET_DEGREE, SetDegreeAction,
  SET_DIMENSIONS, SetDimensionsAction,
  SET_VARIABLES_NOTATION, SetVariablesNotationAction,
  TradicionalVsPedantic
} from "./actionTypes"

import { AppState } from './store'
import { exponentsArray } from '../lib/exponents-array'

export const setExponents: ActionCreator<SetExponentsAction> =
  (array: number[][]): SetExponentsAction => ({
    type: SET_EXPONENTS,
    payload: array,
  })

export const setCoefficientNotation: ActionCreator<SetCoefficientNotationAction> =
  (value: TradicionalVsPedantic): SetCoefficientNotationAction => ({
    type: SET_COEFFICIENT_NOTATION,
    payload: value,
  })

export const setVariablesNotation: ActionCreator<SetVariablesNotationAction> =
  (value: TradicionalVsPedantic): SetVariablesNotationAction => ({
    type: SET_VARIABLES_NOTATION,
    payload: value,
  })

export const setDimensions: ActionCreator<SetDimensionsAction> = (value: number): SetDimensionsAction => ({
  type: SET_DIMENSIONS,
  payload: value,
})

export const setDegree: ActionCreator<SetDegreeAction> = (value: number): SetDegreeAction => ({
  type: SET_DEGREE,
  payload: value,
})

type MustRecalculateFunction = typeof setDimensions | typeof setDegree

type MustRecalculateAction = SetDimensionsAction | SetDegreeAction

type ValidHereAction = MustRecalculateAction | SetExponentsAction

type ValidDispatch = ThunkDispatch<AppState, {}, ValidHereAction>

type Proactive = ActionCreator<ThunkAction<void, AppState, {}, MustRecalculateAction>>


export const computeExponentsOn: Proactive = (f: MustRecalculateFunction, x: number) =>

  (dispatch: ValidDispatch, getState: () => AppState) => {

    dispatch(f(x))

    let { dimensions, degree } = getState()
    dispatch(setExponents(exponentsArray(dimensions?dimensions:1, degree?degree:0)))

  }


