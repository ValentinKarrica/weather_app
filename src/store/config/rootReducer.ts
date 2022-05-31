import { combineReducers } from '@reduxjs/toolkit'
import { signupReducer } from '../../screens/signUp/store/SignUpSlice';

const rootReducer = combineReducers({
    signup: signupReducer   
})



export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
