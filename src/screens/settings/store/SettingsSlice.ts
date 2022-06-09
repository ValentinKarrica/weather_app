import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDetail {
  firstName: string;
  lastName: string;
  picture: string;
}

interface StateSlice {
  userDetail: UserDetail;
}

const initialState: StateSlice = {
  userDetail: {
    firstName: "",
    lastName: "",
    picture: "",
  },
};

const SettingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    setUserDetail: (state, action: PayloadAction<UserDetail>) => {},
  },
});
