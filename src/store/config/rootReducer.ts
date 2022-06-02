import { combineReducers } from '@reduxjs/toolkit'
import { logInReducer } from '../../screens/login/store/LoginSlice';
import { signupReducer } from '../../screens/signUp/store/SignUpSlice';
import { authReducer } from '../auth/AuthSlice';

const rootReducer = combineReducers({
    signup: signupReducer,   
    login: logInReducer,
    auth: authReducer
})



export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
