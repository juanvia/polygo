import { SET_EXPONENTS, SetExponentsAction } from "../actionTypes";


const initialState:number[][] = [[]];

export const exponents = (state = initialState, action:SetExponentsAction) => {
  switch (action.type) {
    case SET_EXPONENTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default exponents;