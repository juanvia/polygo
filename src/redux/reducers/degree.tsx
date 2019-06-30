import { SET_DEGREE, SetDegreeAction } from "../actionTypes"
import { Reducer } from "react"


const initialState:number = 3

export const degree : Reducer<number|undefined,SetDegreeAction> = 
(state = initialState, action:SetDegreeAction) => {
  switch (action.type) {
    case SET_DEGREE: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
