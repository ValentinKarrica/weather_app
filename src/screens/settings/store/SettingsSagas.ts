import { takeLatest, fork, select, call } from "redux-saga/effects";
import { actionTypes, selectUserDetail } from "./SettingsSlice";

const postRequest = (data: any) => {
  console.log("Post sagas", data);
};

function* postData(): any {
  const state = yield select();
  const userDetail = selectUserDetail(state);
  try {
    yield call(postRequest, userDetail);
  } catch {}
}

function* settingsWatcher() {
  yield takeLatest(actionTypes.USER_DETAILS_POST_REQUEST, postData);
}

export const settingsSagas = [fork(settingsWatcher)];
