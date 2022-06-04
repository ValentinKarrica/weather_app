import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";
import { User } from "../../../model";
import { RootState } from "../../../store/config/rootReducer";

interface SliceState {
  loading: boolean;
  userFormCreate: User;
  userFormCreateError: string;
  registerComplete: boolean;
}

interface FormFieldPayload<K = any, V = any> {
  key: K;
  value: V;
}

const initialState: SliceState = {
  loading: false,
  userFormCreate: {
    email: "",
    password: "",
  },
  userFormCreateError: "",
  registerComplete: false,
};

const SingUpSlice = createSlice({
  initialState,
  name: "singup",
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setRegisterComplete: (state, action:PayloadAction<boolean>)=>{
      return {
        ...state,
        registerComplete: action.payload,
      }
    },
    clearUserForm: (state) => {
      return {
        ...state,
        userFormCreate: {
          email: "",
          password: "",
        },
      };
    },
    updateUserFormCreate: (
      state,
      action: PayloadAction<FormFieldPayload<keyof User>>
    ) => {
      return {
        ...state,
        userFormCreate: {
          ...state.userFormCreate,
          [action.payload.key]: action.payload.value,
        },
      };
    },
  },
});

export const { setLoading, updateUserFormCreate, setRegisterComplete } = SingUpSlice.actions;

export const actionTypes = {
  SIGN_UP_REQUEST: "signup/SIGN_UP_REQUEST",
};

export const signUpRequest = () => {
  return {
    type: actionTypes.SIGN_UP_REQUEST,
  };
};

// Select state to use in Saga
export const selectSignUp = (state: RootState) => {
  return state.signup;
};
export const selectSignUpFormCreate = createSelector(
  [selectSignUp],
  (value) => value.userFormCreate
);

export const signupReducer = SingUpSlice.reducer;
