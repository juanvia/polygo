import { SET_EXPONENTS, SetExponentsAction } from "../actionTypes"
import { Reducer } from "react";


const initialState:number[][] = [[]]

export const exponentsArray:Reducer<number[][]|undefined,SetExponentsAction>  = (state = initialState, action:SetExponentsAction) => {
  switch (action.type) {
    case SET_EXPONENTS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default exponentsArray