import { FC, useContext, useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { UserContext } from '../../../../state/UserContext';
import { IProject } from '../../../../interfaces/stateInterface/stateInterface';
import { ColumnsType } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/lib/table/interface';

const ProjectList: FC = () => {

    const [user, ] = useContext(UserContext);
 

    const columns: ColumnsType<IProject> = [
        {
            title: 'Программисты',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Пн',
            dataIndex: 'key',
            key: 'projectName',
        },
        {
            title: 'Вт',
            dataIndex: 'key',
            key: 'description',    
        },
        {
            title: 'Ср',
            dataIndex: 'key',
            key: 'projectType',
        },
        {
            title: 'Чт',
            dataIndex: 'key',
            key: 'projectType',
        },
        {
            title: 'Пт',
            dataIndex: 'key',
            key: 'projectType',
        },
        {
            title: 'Сб',
            dataIndex: 'key',
            key: 'projectType',
        },
        {
            title: 'Вс',
            dataIndex: 'key',
            key: 'projectType',
        },
        {
            title: 'Итого',
            dataIndex: 'key',
            key: 'projectType',
        },
    ];

    return (
        <>

            <Table<IProject>
                dataSource={user}
                columns={columns}
            />
            

        </>

    );
};

export default ProjectList;