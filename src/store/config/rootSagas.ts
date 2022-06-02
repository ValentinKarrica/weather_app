import { all } from 'redux-saga/effects'
import { loginSagas } from '../../screens/login/store/LogInSagas'

import { signupSagas } from '../../screens/signUp/store/SignUpSagas'

export default function* rootSagas(){
    yield all([
        ...signupSagas,
        ...loginSagas,
    ])
}