import React, { createContext, FC, useReducer } from 'react';
<<<<<<< HEAD
import { IInitialState } from '../interfaces/stateInterface/stateInterface';
=======
import { IInitialState, IAction } from '../interfaces/stateInterface/stateInterface';
>>>>>>> dev
import { reducer, initialState } from './reducer';


export const AppContext = createContext<any>([])


export const AppProvider: FC = ({children}) => {
<<<<<<< HEAD
    const [state, dispatch] = useReducer<React.Reducer<IInitialState, any>>(reducer, initialState as IInitialState);
=======
    const [state, dispatch] = useReducer<React.Reducer<IInitialState, IAction>>(reducer, initialState as IInitialState);
>>>>>>> dev

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}