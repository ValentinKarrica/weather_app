import { fork, select, takeLatest, call, put } from "redux-saga/effects";
import {
  actionTypes,
  selectSearchLocation,
  selectUserLocation,
  setModalOpen,
  setSearchResLocation,
  setLocationDailyWeather,
} from "./DashboardSlice";
const apikey = "apikey=rGqBbzVwAykVJQNdYoViA0ZwPA1gx4wR&q";

const locRequest = (location: string) => {
  const url =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
  const query = `?${apikey}=${location}`;

  return fetch(url + query);
};

const dayRequest = (key: string) => {
  const url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";
  const query = `${key}?${apikey}&metric=true`;

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
      //search request success
    } else {
      const err = yield response.json();
      throw err.error.message;
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

function* dailyRequest(): any {
  const state = yield select();
  const userLocation = selectUserLocation(state);
  try {
    const response = yield call(dayRequest, userLocation.Key);
    if (response.ok) {
      const dataRes = yield response.json();
      yield put(setLocationDailyWeather(dataRes));
    }
  } catch (err) {
    console.log(err);
  }
}

function* dashboardWatcher() {
  yield takeLatest(actionTypes.LOCATION_REQUEST, locationRequest);
  yield takeLatest(actionTypes.DAILY_REQUEST, dailyRequest);
}

export const dashboardSagas = [fork(dashboardWatcher)];
