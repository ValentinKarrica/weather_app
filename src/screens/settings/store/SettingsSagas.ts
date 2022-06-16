import { takeLatest, fork, select, call } from "redux-saga/effects";
import { selectUserAuth } from "../../../store/auth/AuthSlice";
import { actionTypes, selectUserDetail } from "./SettingsSlice";

const postRequest = (data: any) => {
  console.log("Post sagas", data);

  return fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBcZH5ZGmvxnyC2FoB33L0N6d2yEb6273w",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

function* postData(): any {
  const state = yield select();
  const userDetail = selectUserDetail(state);
  const userAuth = selectUserAuth(state);
  const postData = {
    idToken: userAuth.idToken,
    displayName: `${userDetail.firstName}  ${userDetail.lastName}`,
    photoUrl: userDetail.url,
    // deleteAttribute: [""],
    returnSecureToken: true,
  };
  try {
    const response = yield call(postRequest, postData);
    if (response.ok) {
      const res = yield response.json();
      console.log(res);
    } else {
      const err = yield response.json();
      throw err.error.message;
    }
  } catch (error) {
    console.log(error);
  }
}

function* settingsWatcher() {
  yield takeLatest(actionTypes.USER_DETAILS_POST_REQUEST, postData);
}

export const settingsSagas = [fork(settingsWatcher)];
