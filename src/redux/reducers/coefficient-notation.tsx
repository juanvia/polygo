import { SET_COEFFICIENT_NOTATION, TradicionalVsPedantic, SetCoefficientNotationAction } from "../actionTypes";
import { Reducer } from "react";


const initialState:TradicionalVsPedantic = "traditional";

export const coefficientNotation : Reducer<TradicionalVsPedantic,SetCoefficientNotationAction> = 
(state = initialState, action:SetCoefficientNotationAction) => {
  switch (action.type) {
    case SET_COEFFICIENT_NOTATION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
