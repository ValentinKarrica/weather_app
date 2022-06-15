import { all } from 'redux-saga/effects'
import { loginSagas } from '../../screens/login/store/LogInSagas'
import { settingsSagas } from "../../screens/settings/store/SettingsSagas";
import { signupSagas } from "../../screens/signUp/store/SignUpSagas";
import { authSagas } from "../auth/AuthSagas";

export default function* rootSagas() {
  yield all([...signupSagas, ...loginSagas, ...authSagas, ...settingsSagas]);
}