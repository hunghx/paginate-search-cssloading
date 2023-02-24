import { PRO_SUCCESS } from "../constants/actionTypes";

export const page = (state = 0, action) => {
  switch (action.type) {
    case PRO_SUCCESS:
      state = Math.ceil(action.payload.length / 5);
      return state;
    default:
      return state;
  }
};
