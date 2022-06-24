import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { ActionPattern } from "redux-saga/effects";
import { UserLocation } from "../../../model";
import { RootState } from "../../../store/config/rootReducer";

interface SliceState {
  searchLocation: string;
  searchResLocation: Array<UserLocation>;
  userLocation: UserLocation;
  modalOpen: boolean;
}

const initialState: SliceState = {
  searchLocation: "",
  searchResLocation: [],
  userLocation: {
    Version: 0,
    Key: "",
    Type: "",
    Rank: 0,
    LocalizedName: "",
    Country: { ID: "", LocalizedName: "" },
    AdministrativeArea: { ID: "", LocalizedName: "" },
  },
  modalOpen: false,
};

const DashboardSlice = createSlice({
  initialState,
  name: "dashboard",
  reducers: {
    setSearchLocation: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchLocation: action.payload,
      };
    },
    setSearchResLocation: (
      state,
      action: PayloadAction<Array<UserLocation>>
    ) => {
      return {
        ...state,
        searchResLocation: action.payload,
      };
    },
    setUserLocation: (state, action: PayloadAction<UserLocation>) => {
      return {
        ...state,
        userLocation: action.payload,
      };
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, modalOpen: action.payload };
    },
  },
});

export const {
  setSearchLocation,
  setSearchResLocation,
  setUserLocation,
  setModalOpen,
} = DashboardSlice.actions;

export const actionTypes = {
  LOCATION_REQUEST: "dashboard/LOCATION_REQUEST",
};

export const locationRequest = () => {
  return {
    type: actionTypes.LOCATION_REQUEST,
  };
};

export const selectDashboard = (state: RootState) => {
  return state.dashboard;
};

export const selectSearchResLocation = createSelector(
  [selectDashboard],
  (value) => value.searchResLocation
);

export const selectSearchLocation = createSelector(
  [selectDashboard],
  (value) => value.searchLocation
);

export const dashboardReducer = DashboardSlice.reducer;
