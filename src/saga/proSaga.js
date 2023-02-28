import * as proService from "../api/proService";
import { call, put } from "redux-saga/effects";
import { act_success_pro } from "../redux/action";
import { PRO_SUCCESS } from "../redux/constants/actionTypes";
//product
export const PRO_SAGA_GET = function* () {
  try {
    let listPro = yield call(proService.PRO_GET_SERVICE);
    yield put(act_success_pro(PRO_SUCCESS, listPro));
  } catch (err) {
    console.log("errorSaga--->", err);
  }
};
export const PRO_SAGA_POST = function* (action) {
  try {
    yield call(proService.PRO_POST_SERVICE, action.payload);
    yield PRO_SAGA_GET();
  } catch (err) {
    console.log("errorSaga--->", err);
  }
};
export const PRO_SAGA_DELETE = function* (action) {
  try {
    yield call(proService.PRO_SAGA_DELETE, action.payload);
    yield PRO_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
};
export const PRO_SAGA_UPDATE = function* (action) {
  try {
    yield call(proService.PRO_SAGA_UPDATE, action.payload);
    yield PRO_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
};
