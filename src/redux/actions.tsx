import { SET_EXPONENTS } from "./actionTypes";

export const setExponents = (array:number[]) => ({
  type: SET_EXPONENTS,
  payload: array,
});

