import { FC } from 'react';
import UsersList from './components/UsersList';
import UsersListHeader from './components/UsersListHeader';



const Users: FC = () => {
    return (
        <>
            <UsersListHeader />
            <UsersList />
        </>
    );
};

export default Users;