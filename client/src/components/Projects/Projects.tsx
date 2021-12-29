import { FC, useState } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import AddProjectForm from './components/AddProjectForm/AddProjectForm';
import ProjectList from './components/ProjectList/ProjectList';

const Projects: FC = () => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <TableHeader
                title={"Список проектов"}
                whatDoesTheButtonDo={"Создать проект"}
                modalTitle={"Создать проект"}
                footer={null}
                setVisible={setVisible}
                visible={visible}
                maskClosable={false}
            >
                <AddProjectForm setVisible={setVisible} />

            </TableHeader>
            
            <ProjectList />
        </>
    );
};

export default Projects;