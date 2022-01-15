import { IAction, IInitialState } from '../interfaces/stateInterface/stateInterface';
import { ActionType } from './actions';


export const initialState = {
    statistics: [],
    isLoading: true
};

export const reducer = (state: IInitialState, action: IAction): IInitialState => {

    switch (action.type) {
        case ActionType.STATISTICS_GET_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_DELETE_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_UPDATE_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_TEST:
            return { ...state, statistics: action.payload }
        default:
            return state
    }
}