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
  logInSuccess: boolean;
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
  logInSuccess: false,
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
    setLogInSuccess: (state, action: PayloadAction<boolean>)=>{
      return{
        ...state,
        logInSuccess: action.payload
      }
    }
  },
});

export const { setUserAuth, setLogInSuccess } = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;
