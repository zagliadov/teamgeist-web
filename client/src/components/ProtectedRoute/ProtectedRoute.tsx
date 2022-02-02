import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../state/AppContext';
import AppLayout from '../AppLayout/AppLayout';



 const ProtectedRoute: FC = (props): any => {
    const [state, ] = useContext(AppContext)
    // const { role } = props;
    //if auth.role = role
    return state.auth.role ? <AppLayout /> : <Navigate to='/login' />;

};

export default ProtectedRoute;

