import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAuth {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

interface SliceState {
  userAuth: UserAuth;
}

const initialState:SliceState = {
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

const AuthSlice = createSlice({
  initialState,
  name: "authslice",
  reducers: {
    setUserAuth: (state, action: PayloadAction<UserAuth>) => {
      return {
        ...state,
        userAuth: action.payload,
      };
    },
  },
});

export const { setUserAuth } = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;
