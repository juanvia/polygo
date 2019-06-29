import { SET_DIMENSIONS, SetDimensionsAction } from "../actionTypes"
import { Reducer } from "react"

const initialState:number = 3

export const dimensions : Reducer<number | undefined ,SetDimensionsAction> = 
(state = initialState, action:SetDimensionsAction) => {
  switch (action.type) {
    case SET_DIMENSIONS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
