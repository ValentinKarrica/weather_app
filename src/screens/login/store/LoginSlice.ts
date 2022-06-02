import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, FormFieldPayload } from "../../../model";
import { RootState } from "../../../store/config/rootReducer";

interface SliceState {
  loading: boolean;
  userFormLogIn: User;
  userFormLogInError: string;
  logInComplete: boolean;
}

const initialState: SliceState = {
  loading: false,
  userFormLogIn: {
    email: "",
    password: "",
  },
  userFormLogInError: "",
  logInComplete: false,
};

const LogIn = createSlice({
  initialState,
  name: "login",
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    updateUserFormLogIn: (
      state,
      action: PayloadAction<FormFieldPayload<keyof User>>
    ) => {
      return {
        ...state,
        userFormLogIn: {
          ...state.userFormLogIn,
          [action.payload.key]: action.payload.value,
        },
      };
    },
  },
});

export const { updateUserFormLogIn, setLoading } = LogIn.actions;

//export actions connect Sagas
export const actionTypes = {
  LOG_IN_REQUEST: "login/LOG_IN_REQUEST",
};
export const logInRequest = () => {
  return {
    type: actionTypes.LOG_IN_REQUEST,
  };
};

//export selected state
export const selectLogIn = (state: RootState) => {
  return state.login;
};
export const selectUserLogInForm = createSelector(
  [selectLogIn],
  (value) => value.userFormLogIn
);

export const logInReducer = LogIn.reducer;
