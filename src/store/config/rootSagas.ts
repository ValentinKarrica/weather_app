import { all } from 'redux-saga/effects'
import { signupSagas } from '../../screens/signUp/store/SignUpSagas'

export default function* rootSagas(){
    yield all([
        ...signupSagas
    ])
}