import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";

export interface UserFormCreate {
  name: string;
  email: string;
  password: string;
}

interface SliceState {
  loading: boolean;
  userFormCreate: UserFormCreate;
  userFormCreateError: string;
  registerComplete: boolean;
}

const initialState: SliceState = {
  loading: false,
  userFormCreate: {
    name: "",
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
  },
});

export const {setLoading} = SingUpSlice.actions

export const signupReducer = SingUpSlice.reducer


export const  actionTypes = {
    FETCH_DATA_SAGA: "FETCH_DATA_SAGA",
}



export const sagaActions = () => {
    return{
        type: actionTypes.FETCH_DATA_SAGA,
    }
  };