import {POST_DATA} from "./types";
import {CLEAR_DATA} from "./types";

const initialState = {
    data: {
        repository: '',
        command: '',
        branch: '',
        syncTime: 1
    }
}

export const codesReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_DATA:
            return { ...state, data: action.payload }
        case CLEAR_DATA:
            console.log('OK');
            return {...state, data: initialState.data}
        default: return state;
    }
}