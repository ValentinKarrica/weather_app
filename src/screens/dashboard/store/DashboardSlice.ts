import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { LocationDailyWeather, UserLocation } from "../../../model";
import { RootState } from "../../../store/config/rootReducer";

interface SliceState {
  searchLocation: string;
  searchResLocation: Array<UserLocation>;
  userLocation: UserLocation;
  modalOpen: boolean;
  locationDailyWeather: LocationDailyWeather;
}

const initialState: SliceState = {
  searchLocation: "",
  searchResLocation: [],
  modalOpen: false,
  userLocation: {
    Version: 0,
    Key: "",
    Type: "",
    Rank: 0,
    LocalizedName: "",
    Country: { ID: "", LocalizedName: "" },
    AdministrativeArea: { ID: "", LocalizedName: "" },
  },
  locationDailyWeather: {
    Headline: {
      EffectiveDate: "",
      EffectiveEpochDate: 0,
      Severity: 0,
      Text: "",
      Category: "",
      EndDate: "",
      EndEpochDate: 0,
      MobileLink: "",
      Link: "",
    },
    DailyForecasts: [
      {
        Date: "",
        EpochDate: 0,
        Temperature: {
          Minimum: {
            Value: 0,
            Unit: "",
            UnitType: 0,
          },
          Maximum: {
            Value: 0,
            Unit: "",
            UnitType: 0,
          },
        },
        Day: {
          Icon: 0,
          IconPhrase: "",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 0,
          IconPhrase: "",
          HasPrecipitation: true,
          PrecipitationType: "",
          PrecipitationIntensity: "",
        },
        Sources: [""],
        MobileLink: "",
        Link: "",
      },
    ],
  },
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
    setLocationDailyWeather: (
      state,
      action: PayloadAction<LocationDailyWeather>
    ) => {
      return {
        ...state,
        locationDailyWeather: action.payload,
      };
    },
  },
});

export const {
  setSearchLocation,
  setSearchResLocation,
  setUserLocation,
  setModalOpen,
  setLocationDailyWeather,
} = DashboardSlice.actions;

export const actionTypes = {
  LOCATION_REQUEST: "dashboard/LOCATION_REQUEST",
  DAILY_REQUEST: "dashboard/DAILY_REQUEST",
};

export const locationRequest = () => {
  return {
    type: actionTypes.LOCATION_REQUEST,
  };
};
export const dailyRequest = () => {
  return {
    type: actionTypes.DAILY_REQUEST,
  };
};

export const selectDashboard = (state: RootState) => {
  return state.dashboard;
};

export const selectUserLocation = createSelector(
  [selectDashboard],
  (value) => value.userLocation
);

export const selectSearchLocation = createSelector(
  [selectDashboard],
  (value) => value.searchLocation
);

export const dashboardReducer = DashboardSlice.reducer;
