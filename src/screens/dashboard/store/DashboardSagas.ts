import { fork, select, takeLatest, call, put } from "redux-saga/effects";
import {
  actionTypes,
  selectSearchLocation,
  setModalOpen,
  setSearchResLocation,
} from "./DashboardSlice";

const locRequest = (location: string) => {
  const url =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
  const query = `?apikey=rGqBbzVwAykVJQNdYoViA0ZwPA1gx4wR&q=${location}`;

  return fetch(url + query);
};

function* locationRequest(): any {
  const state = yield select();
  const searchLocation = selectSearchLocation(state);
  console.log("Location: ", searchLocation);
  try {
    const response = yield call(locRequest, searchLocation);
    if (response.ok) {
      const locRes = yield response.json();
      yield put(setSearchResLocation(locRes));
      if (locRes.length > 1) {
        yield put(setModalOpen(true));
      }
      console.log(locRes);

      //search request success
    } else {
      const err = yield response.json();
      throw err.error.message;
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

function* dashboardWatcher() {
  yield takeLatest(actionTypes.LOCATION_REQUEST, locationRequest);
}

export const dashboardSagas = [fork(dashboardWatcher)];
