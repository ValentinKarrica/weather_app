import { takeLatest, fork, select, call, put } from "redux-saga/effects";
import { selectUserAuth, setUserAuth } from "../../../store/auth/AuthSlice";
import { actionTypes, selectUserDetail } from "./SettingsSlice";
import { logger } from "../../../utils/logger";

const postRequest = (data: any) => {
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
    returnSecureToken: true,
  };
  try {
    logger("User Update details request");
    const response = yield call(postRequest, postData);
    if (response.ok) {
      const res = yield response.json();
      yield put(
        setUserAuth({
          ...userAuth,
          displayName: res.displayName,
          profilePicture: res.photoUrl,
        })
      );
      logger("Update details success");
    } else {
      const err = yield response.json();
      throw err.error.message;
    }
  } catch (error) {
    logger.error("User Update details failure\n", `Error: ${error}`);
  }
}

function* settingsWatcher() {
  yield takeLatest(actionTypes.USER_DETAILS_POST_REQUEST, postData);
}

export const settingsSagas = [fork(settingsWatcher)];
