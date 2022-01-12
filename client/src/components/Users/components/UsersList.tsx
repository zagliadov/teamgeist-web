import { FC, useContext, useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { UserContext } from '../../../state/UserContext';
import { IUser } from '../../../interfaces/stateInterface/stateInterface';
import EditUserForm from './EditUserForm';
import { ColumnsType } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import { NavLink } from 'react-router-dom';

const UsersList: FC = () => {



    const [user, setUser] = useContext(UserContext);

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


    const columns: ColumnsType<IUser> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',

        },
        {
            title: 'Имя Фамилия',
            dataIndex: ['lastName', 'firstName', 'key'],
            key: 'lastName',
            render: (text, row) => {
                return (
                    <NavLink to={`${row['key']}`}>{row['firstName']} {row['lastName']}</NavLink>
                )
            },
            filterDropdown: ({
                setSelectedKeys, selectedKeys, confirm
            }: FilterDropdownProps) => {
                return (
                    <div style={{
                        width: '230px',
                        position: 'relative'
                    }}>
                        <Input
                            value={selectedKeys[0]}
                            onPressEnter={() => {
                                confirm();
                            }}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        />
                    </div>
                )

            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value: string | number | boolean, record: IUser): boolean => {
                if (typeof value !== 'string') return false
                
                return record?.lastName.toLowerCase().includes(value.toLowerCase())
            }
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
            filterDropdown: ({
                setSelectedKeys, selectedKeys, confirm
            }: FilterDropdownProps) => {
                return (
                    <div style={{
                        width: '230px',
                        position: 'relative'
                    }}>
                        <Input
                            value={selectedKeys[0]}
                            onPressEnter={() => {
                                confirm();
                            }}
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                            }}
                            onBlur={() => {
                                confirm();
                            }}
                        />
                    </div>
                )

            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value: string | number | boolean, record: IUser): boolean => {
                if (typeof value !== 'string') return false
                return record?.userType.toLowerCase().includes(value.toLowerCase());
            }
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
                dataSource={user}
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