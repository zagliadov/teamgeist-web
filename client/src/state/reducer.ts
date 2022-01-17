import { IInitialState } from '../interfaces/stateInterface/stateInterface';
import { ActionType } from './actions';


export const initialState = {
    statistics: [],
    user: [],
    isLoading: true
};

export const reducer = (state: IInitialState, action: any): IInitialState => {

    switch (action.type) {
        case ActionType.STATISTICS_GET_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_DELETE_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_UPDATE_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_GET_ONE_USER_ANALITICS_BY_ID:
            return { ...state, user: action.payload }
        default:
            return state
    }
}