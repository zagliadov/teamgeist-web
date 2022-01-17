import { FC, useContext, useEffect, useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { ProjectContext } from '../../../../state/ProjectContext';
import { IProject } from '../../../../interfaces/stateInterface/stateInterface';
import { ColumnsType } from 'antd/es/table';
import EditProjectForm from '../EditProjectForm/EditProjectForm';
import { makeNewArrayForTable } from '../../../../helpers/helpers';


const ProjectList: FC = () => {

    const [project, setProject] = useContext(ProjectContext);
    const [projectFilterArray, setProjectFilterArray] = useState<any>();
    // const [twoFilterArray, setTwoFilterArray] = useState<any>();
    const [letterProjectName, setLetterProjectName] = useState('');
    const [letterDescription, setLetterDescription] = useState('');
    const [editProject, setEditProject] = useState<any>();
    const [visible, setVisible] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let firstFilterArray: any = [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let secondFilterArray: any = [];

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

    useEffect(() => {
        makeNewArrayForTable(project, letterProjectName, firstFilterArray, 'projectName');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [letterProjectName, firstFilterArray, project]);

    useEffect(() => {
        makeNewArrayForTable(project, letterDescription, secondFilterArray, 'description');
    }, [secondFilterArray, letterDescription, project]);


    useEffect(() => {
        if (firstFilterArray.length > 0) {
            setProjectFilterArray(firstFilterArray);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [letterProjectName])

    useEffect(() => {
        if (secondFilterArray.length > 0) {
            setProjectFilterArray(secondFilterArray);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [letterDescription])

    const columns: ColumnsType<IProject> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: <Input
                placeholder='Название'
                onChange={(e) => {
                    setLetterProjectName(e.target.value)
                }} />,
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: <Input
                placeholder='Описание'
                onChange={(e) => {
                    setLetterDescription(e.target.value)
                }} />,
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Тип',
            dataIndex: 'projectType',
            key: 'projectType',
            render: (text, row) => (
                <>
                    <span key="projectType"
                        style={{
                            color: (row["projectType"] === 'Внутренний') ? '#F4B700' : 'green'

                        }}>{row["projectType"]}</span>
                </>
            )
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
                dataSource={(projectFilterArray?.length !== 0) ? projectFilterArray : project}
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