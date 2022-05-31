import { call, put, takeLatest, fork } from "redux-saga/effects";
import { setLoading,actionTypes } from "./SignUpSlice";

const postRequest = () => {
  return {
    name: "",
    email: "",
    password: "",
  };
};

function* handlerPostRequest(): any {
  
  try {
    yield put(setLoading(true))
    const response = yield call(postRequest);
    const { data } = response;
  } catch (error) {
    console.log(error);
  }
}

export function* watcherSaga() {
  yield takeLatest(actionTypes.FETCH_DATA_SAGA, handlerPostRequest);
}


export const signupSagas = [fork(watcherSaga)];