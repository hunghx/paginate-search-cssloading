import * as userService from "../api/userService";
import { call, put } from "redux-saga/effects";
import { act_success_user } from "../redux/action";
import { USER_SUCCESS } from "../redux/constants/actionTypes";
//user
export const USER_SAGA_GET = function* () {
  try {
    let listUser = yield call(userService.USER_GET_SERVICE);
    yield put(act_success_user(USER_SUCCESS, listUser));
  } catch (err) {
    console.log("errorSaga--->", err);
  }
};
export const USER_SAGA_POST = function* (action) {
  try {
    yield call(userService.USER_POST_SERVICE, action.payload);
  } catch (err) {
    console.log("errorSaga--->", err);
  }
};
