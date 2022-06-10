import { takeLatest, fork } from "redux-saga/effects";
import { actionTypes } from "./AuthSlice";

function* refreshUserAuth(): any {}

function* authWatcher() {
  yield takeLatest(actionTypes.REFRESH_USER_AUTH, refreshUserAuth);
}

export const authSagas = [fork(authWatcher)];
