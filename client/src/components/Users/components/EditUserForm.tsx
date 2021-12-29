import { FC, useContext } from 'react';
import { IPropsEditUserForm } from '../../../interfaces/componentsInterface';
import FormItemForInput from '../../FormItemForInput/FormItemForInput';
import FormItemForSelect from '../../FormItemForSelect/FormItemForSelect';
import FooterForModal from '../../FooterForModal/FooterForModal';
import {
    Typography,
    Divider,
    Form,
    message,
} from 'antd';
import { UserContext } from '../../../state/UserContext';
import { UserTypeContext } from '../../../state/UserTypeContext'
import { IProject, IUser } from '../../../interfaces/stateInterface/stateInterface';
import DeleteButtonForModalEditUser from '../../DeleteButtonForModalEditUser/DeleteButtonForModalEditUser';

const { Text } = Typography;

const EditUserForm: FC<IPropsEditUserForm> = ({ setVisible, editUser, setEditUser }) => {

    const [user, setUser] = useContext(UserContext);

    const [userType, ] = useContext(UserTypeContext);

    const [form] = Form.useForm();

    const onDeleteUser = (editUser: IUser) => {
        setUser((previos: IUser[]) => {
            return previos.filter((item: IUser) => item.key !== editUser.key)
        })
        setVisible(false);
    }



    const onFinish = (): void => {
        setVisible(false);
        setUser((pre: IUser[]) => {
            return pre.map((user: IUser) => {
                if (user.key !== editUser.key) return user;
                return editUser
            })
        });
    }

    const onFinishFailed = (): void => {
        message.error('Submit failed!');
    }

    return (
        <Form form={form} onFinish={onFinish}
            onFinishFailed={onFinishFailed} name="control-hooks">
            <Text type="secondary">
                User ID:
            </Text>
            <Divider />

            <FormItemForInput
                style={{ marginBottom: "2px" }}
                className={"input-border"}
                label={"E-mail"}
                required={true}
                message={"Please enter a valid email"}
                type={"email"}
                value={editUser?.email}
                setter={setEditUser}
                editable={'email'}
            />

            <FormItemForInput
                style={{ marginBottom: "2px" }}
                className={"input-border"}
                label={"Имя:"}
                required={true}
                message={"Please enter a valid first name"}
                type={"name"}
                value={editUser?.firstName}
                setter={setEditUser}
                editable={"firstName"}
            />

            <FormItemForInput
                style={{ marginBottom: "10px" }}
                className={"input-border"}
                label={"Фамилия:"}
                required={true}
                message={"Please enter a valid last name"}
                type={"name"}
                value={editUser?.lastName}
                setter={setEditUser}
                editable={"lastName"}
            />

            <FormItemForSelect
                style={{ marginBottom: "10px" }}
                className={"input-border"}
                label={"Тип пользователя:"}
                required={true}
                value={editUser?.userType}
                setter={setEditUser}
                editable={"userType"}
                optionValue={userType.map((item: any) => [{ key: item.key, value: item.userType }])}
                // optionValue={[
                //     { id: 0, value: 'Developer' },
                //     { id: 1, value: 'Manager' },
                //     { id: 2, value: 'Admin company' },
                //     { id: 3, value: 'Owner company' },
                //     { id: 4, value: 'Sys Admin all system' },
                // ]}
            />

            <FormItemForSelect
                style={{ marginBottom: "10px" }}
                className={"input-border"}
                label={"Проект:"}
                mode={'tags'}
                required={true}
                value={editUser?.project}
                setter={setEditUser}
                editable={"project"}
                optionValue={user.map((item: any) => [{ key: item.key, value: item.projectName }])}
                // optionValue={[
                //     { id: 0, value: ' Teamgeist 0 ' },
                //     { id: 1, value: ' Teamgeist 1 ' },
                //     { id: 2, value: ' Teamgeist 2 ' },
                //     { id: 3, value: ' Teamgeist 3 ' },
                //     { id: 4, value: ' Teamgeist 4 ' },
                // ]}
            />

            <FormItemForSelect
                style={{ marginBottom: "10px" }}
                className={"input-border"}
                label={"Выберите тип проекта"}
                message={"Please enter valid project type"}
                required={true}
                value={editUser?.projectType}
                setter={setEditUser}
                editable={"projectType"}
                optionValue={[
                    [{ key: 0, value: 'Внутренний' }],
                    [{ key: 1, value: 'Внешний' }],
                ]}
            />

            <DeleteButtonForModalEditUser
                setVisible={setVisible}
                onDeleteUser={onDeleteUser}
                editUser={editUser}
                firstButtonName="Удалить все скриншоты"
                secondButtonName="Удалить пользователя"
            />

            <Divider />

            <FooterForModal
                setVisible={setVisible}
                firstButtonName="Отмена"
                secondButtonName="Обновить" />

        </Form>
    );
};

export default EditUserForm;