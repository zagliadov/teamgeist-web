import { createContext, FC, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const AppContext: any = createContext([]);

export const AppProvider: FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}