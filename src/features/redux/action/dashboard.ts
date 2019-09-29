import { SELECTNUMBER, SELECTEDNUMBER, SELECTVALUE, OPENDIALOGBOX } from './actionTypes/actionTypes'
import * as selectNumber from '../data/selectNumber.json'
export const selectNumberAction = () => {
    return {
        type: SELECTNUMBER,
        payload: selectNumber
    }
}
export const selectValueAction = (value) => {
    return {
        type: SELECTVALUE,
        payload: value
    }
}
export const selectedNumberAction = (a) => {
    return {
        type: SELECTEDNUMBER,
        payload: a
    }
}
export const openDialogBoxAction = (value) => {
    return {
        type: OPENDIALOGBOX,
        payload: value
    }
}