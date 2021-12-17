import { FC, useState } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import AddUserForm from '../Users/components/AddUserForm';

const Projects: FC = () => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <TableHeader
            title={"Список проектов"}
            whatDoesTheButtonDo={"Создать проект"}
            modalTitle={"Создать проект"}
            footer={null}
            setVisible={setVisible}
            visible={visible}
            maskClosable={false}
        >
            <AddUserForm setVisible={setVisible} />

        </TableHeader>
    );
};

export default Projects;