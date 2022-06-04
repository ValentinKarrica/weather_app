import { call, put, takeLatest, fork, select } from "redux-saga/effects";
import { setUserAuth } from "../../../store/auth/AuthSlice";
import {
  actionTypes,
  clearUserFormLogin,
  selectUserLogInForm,
  setLoading,
} from "./LoginSlice";

const logInRequest = (form: any) => {
  return fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcZH5ZGmvxnyC2FoB33L0N6d2yEb6273w",
    {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

function* logIn(): any {
  const state = yield select();
  const userLogInForm = selectUserLogInForm(state);

  yield put(setLoading(true));

  try {
    const response = yield call(logInRequest, {
      ...userLogInForm,
      returnSecureToken: true,
    });
    if (response.ok) {
      const userAuth = yield response.json();
      console.log("Login Sagas Response:", userAuth);
      yield put(setUserAuth(userAuth));
      yield put(setLoading(true));
      yield put(clearUserFormLogin);
    } else {
      const err = yield response.json();
      console.log("Error", err.error.message);
      throw err.error.message;
    }
  } catch (error) {
    alert(error);
    yield put(setLoading(true));
  }
}

function* logInWatcher() {
  yield takeLatest(actionTypes.LOG_IN_REQUEST, logIn);
}

export const loginSagas = [fork(logInWatcher)];
