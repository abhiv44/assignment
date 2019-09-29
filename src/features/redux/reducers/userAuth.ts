import {USERLOGIN, ERROR} from '../action/actionTypes/actionTypes'
import {UserAuth} from '../state/userAuth'
export function userAuthReducer (state :UserAuth,action){
    switch (action.type){
      case USERLOGIN:
      return {...state,user:action.payload}
      case ERROR:
      return {...state, err :action.payload}
      default :
         return  {...state}
  }
   }