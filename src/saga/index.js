import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as proSaga from "./proSaga";
import * as userSaga from "./userSaga";

export const rootSaga = function* () {
    yield all([
        takeLatest(actionTypes.PRO_GET, proSaga.PRO_SAGA_GET),
        takeLatest(actionTypes.PRO_POST, proSaga.PRO_SAGA_POST),
        takeLatest(actionTypes.USER_GET, userSaga.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST, userSaga.USER_SAGA_POST),
    ])
}