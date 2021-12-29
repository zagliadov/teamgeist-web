import { FC, useContext, useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { ProjectContext } from '../../../../state/ProjectContext';
import { IProject } from '../../../../interfaces/stateInterface/stateInterface';
import { ColumnsType } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import EditProjectForm from '../EditProjectForm/EditProjectForm';

const ProjectList: FC = () => {

    const [project, setProject] = useContext(ProjectContext);
    const [editProject, setEditProject] = useState<any>();
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


    const columns: ColumnsType<IProject> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Название',
            dataIndex: 'projectName',
            key: 'projectName',
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
            onFilter: (value: string | number | boolean, record: IProject): boolean => {
                if (typeof value !== 'string') return false
                return record?.projectName.includes(value.toLowerCase());
            }
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: 'description',
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
            onFilter: (value: string | number | boolean, record: IProject): boolean => {
                if (typeof value !== 'string') return false
                return record?.description.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
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
            onFilter: (value: string | number | boolean, record: IProject): boolean => {
                if (typeof value !== 'string') return false
                return record?.status.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Тип',
            dataIndex: 'projectType',
            key: 'projectType',
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
            onFilter: (value: string | number | boolean, record: IProject): boolean => {
                if (typeof value !== 'string') return false
                return record?.projectType.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            render: (value: boolean, record: IProject) => {
                return (
                    <>
                        <EditOutlined
                            style={{ padding: '0px 5px' }}
                            onClick={() => {
                                setEditProject(record);
                                showModal();
                            }}
                        />
                        <DeleteOutlined
                            style={{ padding: '0px 5px' }}
                            onClick={() => {
                                onDeleteProject(value, record)
                            }} />
                    </>
                )

            }
        },
    ];



    const onDeleteProject = (value: boolean, record: IProject) => {
        Modal.confirm({
            title: 'Are your sure, you want to delete this project record?',
            okText: 'Yes',
            okType: 'danger',
            maskClosable: false,
            onOk: () => {
                setProject((pre: IProject[]) => {
                    return pre.filter((item: IProject) => item.key !== record.key)
                })
            }
        })
    }

    return (
        <>

            <Table<IProject>
                dataSource={project}
                columns={columns}
            />
            <Modal
                title="Редактировать проект"
                visible={visible}
                onOk={handleOk}
                footer={null}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                maskClosable={false}
            >

                <EditProjectForm setVisible={setVisible} editProject={editProject} setEditProject={setEditProject} />
            </Modal>

        </>

    );
};

export default ProjectList;