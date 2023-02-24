import { USER_SUCCESS } from "../constants/actionTypes";

const initialState = [];
export const users = (state = initialState, action) => {
    switch (action.tyle) {
        case USER_SUCCESS:
            return [...action.payload];

        default:
            return state;
    }
}