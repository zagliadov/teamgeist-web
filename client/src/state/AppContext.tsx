import React, { createContext, FC, useReducer } from 'react';
import { IInitialState, IAction } from '../interfaces/stateInterface/stateInterface';
import { reducer, initialState } from './reducer';


export const AppContext = createContext<any>([])


export const AppProvider: FC = ({children}) => {
    const [state, dispatch] = useReducer<React.Reducer<IInitialState, IAction>>(reducer, initialState as IInitialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}