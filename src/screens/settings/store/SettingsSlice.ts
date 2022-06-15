import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetail } from "../../../model";
import { RootState } from "../../../store/config/rootReducer";

interface StateSlice {
  userDetail: UserDetail;
}

const initialState: StateSlice = {
  userDetail: {
    firstName: "",
    lastName: "",
    url: "",
  },
};

const SettingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    setUserDetail: (state, action: PayloadAction<UserDetail>) => {
      return {
        ...state,
        userDetail: action.payload,
      };
    },
  },
});

export const { setUserDetail } = SettingsSlice.actions;

//Πρωτα φτιαχνω τους τυπους ενεργειων σε σειρες και τα εξαγω.
export const actionTypes = {
  USER_DETAILS_POST_REQUEST: "settings/USER_DETAILS_POST_REQUEST",
};

//Μετα φτιαχνω καθε λειτουργια ξεχωριστα, επιστρεφω την ενερεια που αντιστιχη και τις εξαγω.
export const userDetailPostRequest = () => {
  return {
    type: actionTypes.USER_DETAILS_POST_REQUEST,
  };
};

export const selectSettings = (state: RootState) => {
  return state.settings;
};

export const selectUserDetail = createSelector(
  [selectSettings],
  (value) => value.userDetail
);

export const settingsReducer = SettingsSlice.reducer;
