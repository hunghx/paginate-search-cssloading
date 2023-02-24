import { combineReducers } from "redux";
import { products } from "./products";
import { users } from "./users";
import { page } from "./page";
import { filter } from "./filter";

export const rootReducer = combineReducers({ filter, products, users, page });
