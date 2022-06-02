import { call, put, takeLatest, fork, select } from "redux-saga/effects";
import { setLoading, actionTypes, selectSignUpFormCreate } from "./SignUpSlice";

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

  console.log("FORM IN SAGA ", userCreateForm);

  try {
    console.log("SING UP");

    yield put(setLoading(true));

    const response = yield call(signUpRequest, {
      ...userCreateForm,
      returnSecureToken: true,
    });

    console.log("RESPONSE ", response.json());
  } catch (error) {
    console.log(error);
  }

  yield put(setLoading(false));
}

function* signUpWatcher() {
  yield takeLatest(actionTypes.SIGN_UP_REQUEST, signUp);
}

export const signupSagas = [fork(signUpWatcher)];
