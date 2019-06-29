import { SET_VARIABLES_NOTATION, TradicionalVsPedantic, SetVariablesNotationAction } from "../actionTypes"
import { Reducer } from "react"


const initialState:TradicionalVsPedantic = "traditional"

export const variablesNotation : Reducer<TradicionalVsPedantic,SetVariablesNotationAction> = 
(state = initialState, action:SetVariablesNotationAction) => {
  switch (action.type) {
    case SET_VARIABLES_NOTATION: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

