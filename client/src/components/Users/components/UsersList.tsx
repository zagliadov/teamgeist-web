import { FC, useContext } from 'react';
import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { UserContext } from '../../../state/UserContext';
import { IUser } from '../../../interfaces/stateInterface/stateInterface';

const UsersList: FC = () => {

    const [user, setUser] = useContext(UserContext);

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Имя',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Проекты',
            dataIndex: 'projects',
            key: 'projects',
        },
        {
            title: 'Тип пользователя',
            dataIndex: 'userType',
            key: 'userType',
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            render: (value: undefined, record: IUser) => {
                return (
                    <>
                        <EditOutlined style={{ padding: '0px 5px' }} />
                        <DeleteOutlined
                            style={{ padding: '0px 5px' }}
                            onClick={() => {
                                onDeleteUser(value, record)
                            }} />
                    </>
                )

            }
        },
    ]

    const onDeleteUser = (value: undefined, record: IUser) => {
        setUser((previos: IUser[]) => {
            return previos.filter((item: IUser) => item.key !== record.key)
        })
    }



    return (
        <Table dataSource={user} columns={columns}>

        </Table>
    );
};

export default UsersList;