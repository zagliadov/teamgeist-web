import { FC, useContext, useEffect, useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { UserContext } from '../../../state/UserContext';
import { IUser } from '../../../interfaces/stateInterface/stateInterface';
import EditUserForm from './EditUserForm';
import { ColumnsType } from 'antd/es/table';
import { NavLink } from 'react-router-dom';

const UsersList: FC = () => {



    const [user, setUser] = useContext(UserContext);

    const [userFilterArray, setUserFilterArray] = useState<any>();
    const filterArray: any = [];

    const [letter, setLetter] = useState('');
    const [editUser, setEditUser] = useState<any>();

    const [visible, setVisible] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

    const showModal = () => {
        setVisible(true);
    }
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const makeNewArray = (arr: any, value: any) => {
        if (typeof value !== 'string') return
        arr.map((item: any) => {
            let name = `${item?.firstName} ${item?.lastName}`,
                nameReverse = ` ${item?.lastName} ${item?.firstName}`;
            if (name.toLowerCase().includes(value.toLowerCase()) ||
                nameReverse.toLowerCase().includes(value.toLowerCase())) {
                return filterArray.push(item)
            }
            return null
        });
    };

    useEffect(() => {
        makeNewArray(user, letter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [letter, filterArray, user])

    useEffect(() => {
        setUserFilterArray(filterArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [letter])




    const columns: ColumnsType<IUser> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',

        },
        {
            title: <Input
                placeholder='First and Last name'
                onChange={(e) => setLetter(e.target.value)}
            />,
            dataIndex: ['lastName', 'firstName', 'key'],
            key: 'lastName',
            render: (text, row) => {
                return (
                    <NavLink
                        style={{ color: '#000000' }}
                        to={`${row['key']}`}>
                        {row['firstName']} {row['lastName']}
                    </NavLink>
                )
            },
        },
        {
            title: 'Проекты',
            dataIndex: ['project', "projectType"],
            key: 'project',
            render: (text, row) => (
                <>
                    <span key="project"
                        style={{
                            color: (row["projectType"] === 'Внутренний') ? '#F4B700' : 'green'

                        }}>{row["project"]}</span>
                </>
            )
        },
        {
            title: 'Тип пользователя',
            dataIndex: 'userType',
            key: 'userType',
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            render: (value: boolean, record: IUser) => {
                return (
                    <>
                        <EditOutlined
                            style={{ padding: '0px 5px' }}
                            onClick={() => {
                                setEditUser(record);
                                showModal();
                            }}
                        />
                        <DeleteOutlined
                            style={{ padding: '0px 5px' }}
                            onClick={() => {
                                onDeleteUser(value, record)
                            }} />
                    </>
                )

            }
        },
    ];



    const onDeleteUser = (value: boolean, record: IUser) => {
        Modal.confirm({
            title: 'Are your sure, you want to delete this User record?',
            okText: 'Yes',
            okType: 'danger',
            maskClosable: false,
            onOk: () => {
                setUser((pre: IUser[]) => {
                    return pre.filter((item: IUser) => item.key !== record.key)
                })
            }
        })
    }

    return (
        <>

            <Table<IUser>
                dataSource={
                    (userFilterArray) ? userFilterArray : user
                }
                columns={columns}
            />


            <Modal
                title="Редактировать пользователя"
                visible={visible}
                onOk={handleOk}
                footer={null}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                maskClosable={false}
            >

                <EditUserForm setVisible={setVisible} editUser={editUser} setEditUser={setEditUser} />
            </Modal>
        </>

    );
};

export default UsersList;