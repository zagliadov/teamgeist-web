import { FC } from 'react';
import UsersList from './components/UsersList';
import UsersListHeader from './components/UsersListHeader';



const Users: FC = () => {
    return (
        <div style={{boxSizing: 'border-box'}}>
            <UsersListHeader />
            <UsersList />
        </div>
    );
};

export default Users;