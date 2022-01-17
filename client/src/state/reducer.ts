<<<<<<< HEAD
import { IInitialState } from '../interfaces/stateInterface/stateInterface';
=======
import { IAction, IInitialState } from '../interfaces/stateInterface/stateInterface';
>>>>>>> dev
import { ActionType } from './actions';


export const initialState = {
    statistics: [],
<<<<<<< HEAD
    user: [],
    isLoading: true
};

export const reducer = (state: IInitialState, action: any): IInitialState => {
=======
    isLoading: true
};

export const reducer = (state: IInitialState, action: IAction): IInitialState => {
>>>>>>> dev

    switch (action.type) {
        case ActionType.STATISTICS_GET_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_DELETE_STATISTICS:
            return { ...state, statistics: action.payload }
        case ActionType.STATISTICS_UPDATE_STATISTICS:
            return { ...state, statistics: action.payload }
<<<<<<< HEAD
        case ActionType.STATISTICS_GET_ONE_USER_ANALITICS_BY_ID:
            return { ...state, user: action.payload }
=======
        case ActionType.STATISTICS_TEST:
            return { ...state, statistics: action.payload }
>>>>>>> dev
        default:
            return state
    }
}