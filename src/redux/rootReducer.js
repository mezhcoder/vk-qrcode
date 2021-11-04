import {combineReducers} from 'redux'
import {codesReducer} from "./codesReducer";
export const rootReducer = combineReducers({
    data: codesReducer
})