import { combineReducers } from '@reduxjs/toolkit'
import { dashboardReducer } from "../../screens/dashboard/store/DashboardSlice";
import { logInReducer } from '../../screens/login/store/LoginSlice';
import { settingsReducer } from "../../screens/settings/store/SettingsSlice";
import { signupReducer } from "../../screens/signUp/store/SignUpSlice";
import { authReducer } from "../auth/AuthSlice";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: logInReducer,
  auth: authReducer,
  settings: settingsReducer,
  dashboard: dashboardReducer,
});



export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
