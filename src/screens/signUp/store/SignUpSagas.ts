import { call, put, takeLatest, fork, select } from "redux-saga/effects";
import {
  setLoading,
  actionTypes,
  selectSignUpFormCreate,
  setRegisterComplete,
  setErrorMessage,
} from "./SignUpSlice";
import { logger } from "../../../utils/logger";

const signUpRequest = (form: any) => {
  return fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcZH5ZGmvxnyC2FoB33L0N6d2yEb6273w",
    {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

function* signUp(): any {
  // Select state from Redux
  const state = yield select();
  const userCreateForm = selectSignUpFormCreate(state);

  try {
    yield put(setLoading(true));
    logger("User signUp failure");

    const response = yield call(signUpRequest, {
      ...userCreateForm,
      returnSecureToken: true,
    });
    if (response.ok) {
      const dataRes = yield response.json();
      yield put(setRegisterComplete(true));
      logger("User signUp success");
      yield put(setErrorMessage(""));
    } else {
      const dataRes = yield response.json();
      throw dataRes.error.message;
    }
  } catch (error) {
    yield put(setErrorMessage(`${error}`));
    logger.error(`User signUp failure: ${error}`);
  }

  yield put(setLoading(false));
}

function* signUpWatcher() {
  yield takeLatest(actionTypes.SIGN_UP_REQUEST, signUp);
}

export const signupSagas = [fork(signUpWatcher)];
