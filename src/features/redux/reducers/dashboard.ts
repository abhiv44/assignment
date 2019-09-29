import { SELECTNUMBER, SELECTEDNUMBER, SELECTVALUE, OPENDIALOGBOX } from '../action/actionTypes/actionTypes'
import { DashBoard } from '../state/dashboard'
export function selectNumberReducer(state: DashBoard, action) {
  switch (action.type) {
    case SELECTNUMBER:
      return { ...state, selectNumber: action.payload }
    case SELECTVALUE:
      return { ...state, selectValue: action.payload }
    case SELECTEDNUMBER:
      return { ...state, selected: (state.selected || []).concat(action.payload) }
    case OPENDIALOGBOX:
      return { ...state, openDialogBox: action.payload }
    default:
      return { ...state }
  }
}