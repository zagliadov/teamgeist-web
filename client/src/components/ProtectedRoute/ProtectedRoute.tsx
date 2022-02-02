import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import AppLayout from '../AppLayout/AppLayout';



 const ProtectedRoute: FC = (props): any => {
    const [auth, ] = useContext(AuthContext);
    // const { role } = props;
    //if auth.role = role
    return auth ? <AppLayout /> : <Navigate to='/login' />;

};

export default ProtectedRoute;

