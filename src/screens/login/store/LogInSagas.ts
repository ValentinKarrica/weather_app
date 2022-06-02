import { call, put, takeLatest, fork, select } from "redux-saga/effects";
import { setUserAuth } from "../../../store/auth/AuthSlice";
import { actionTypes, selectUserLogInForm } from "./LoginSlice";

export const getError = (data: any) => {
  const keys: any = Object.keys(data);

  if (typeof data === "object" && keys[0]) {
    return `${data[keys[0]]}`;
  } else if (typeof data === "string") {
    return data;
  } else {
    return "Something went wrong";
  }
};

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
  )
};

function* logIn(): any {
  const state = yield select();
  const userLogInForm = selectUserLogInForm(state);

  try {
    console.log("logIn");
    const response = yield call(logInRequest, {
      ...userLogInForm,
      returnSecureToken: true,
    });
    console.log("Response:", response.json().then((data:any)=>{
        return data
    }));
    yield put(setUserAuth(response.json()))

  } catch (error) {
    console.log("error", getError(error));
  }
  console.log("Test");
}

function* logInWatcher() {
  yield takeLatest(actionTypes.LOG_IN_REQUEST, logIn);
}

export const loginSagas = [fork(logInWatcher)];
