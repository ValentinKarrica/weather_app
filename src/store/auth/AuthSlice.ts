import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserAuth } from "../../model";

interface SliceState {
  userAuth: UserAuth;
  userConnected: boolean;
}

const initialState: SliceState = {
  userAuth: {
    displayName: "",
    email: "",
    expiresIn: "",
    idToken: "",
    kind: "",
    localId: "",
    refreshToken: "",
    registered: false,
  },
  userConnected: false,
};

const AuthSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    setUserAuth: (state, action: PayloadAction<UserAuth>) => {
      return {
        ...state,
        userAuth: action.payload,
      };
    },
    setUserConnected: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        userConnected: action.payload,
      };
    },
    setClearUserAuth: (state) => {
      return {
        ...state,
        userAuth: {
          displayName: "",
          email: "",
          expiresIn: "",
          idToken: "",
          kind: "",
          localId: "",
          refreshToken: "",
          registered: false,
        },
      };
    },
  },
});

export const { setUserAuth, setUserConnected, setClearUserAuth } =
  AuthSlice.actions;

export const authReducer = AuthSlice.reducer;
