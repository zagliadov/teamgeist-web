
import {
    USER_ADDUSER,
    USER_GETALLUSER,
} from './actions';




export const initialState = {
    statistics: [],
    isLoading: true
}


export const reducer = (state: any, action: any) => {

    switch (action.type) {
        case USER_ADDUSER:
            return [...state, { ...action.payload }]
        case USER_GETALLUSER:
            return { ...state, statistics: action.payload }
        default:
            return state
    }
}