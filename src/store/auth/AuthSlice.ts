import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserAuth } from "../../model";

interface SliceState {
  userAuth: UserAuth;
  isAuthenticated: boolean;
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
  isAuthenticated: false,
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
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuthenticated: action.payload,
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

export const { setUserAuth, setIsAuthenticated, setClearUserAuth } =
  AuthSlice.actions;

//export actions connect Sagas
export const actionTypes = {
  REFRESH_USER_AUTH: "auth/UPDATE_USER_AUTH ",
};
export const localSortUpdate = () => {
  return {
    type: actionTypes.REFRESH_USER_AUTH,
  };
};

export const authReducer = AuthSlice.reducer;
