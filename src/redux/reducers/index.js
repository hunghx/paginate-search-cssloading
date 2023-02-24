import { combineReducers } from 'redux';
import { products } from './products';
import { users } from './users';
export const rootReducer = combineReducers({ products, users })