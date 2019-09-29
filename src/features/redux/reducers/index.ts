import { combineReducers } from 'redux'
import { userAuthReducer } from './userAuth'
import { selectNumberReducer } from './dashboard'
export default combineReducers({
    userAuth: userAuthReducer,
    selectNumberDATA: selectNumberReducer
})