import { USERLOGIN, ERROR } from './actionTypes/actionTypes'
import * as userLogin from '../data/userLogin.json'
export const userAuth = () => {
    return {
        type: USERLOGIN,
        payload: userLogin
    }
}
