import { FC, useContext } from 'react';
import { IPropsEditUserForm } from '../../../interfaces/componentsInterface';
import FormItemForInput from '../../FormItemForInput/FormItemForInput';
import FormItemForSelect from '../../FormItemForSelect/FormItemForSelect';
import {
    Typography,
    Divider,
    Form,
    Button,
    message,
    Space
} from 'antd';
import { UserContext } from '../../../state/UserContext';
import { IUser } from '../../../interfaces/stateInterface/stateInterface';

const { Text } = Typography;

const EditUserForm: FC<IPropsEditUserForm> = ({ setVisible, editUser, setEditUser }) => {

    const [, setUser] = useContext(UserContext);
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
        })
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
                optionValue={[
                    { id: 0, value: 'Developer' },
                    { id: 1, value: 'Manager' },
                    { id: 2, value: 'Admin company' },
                    { id: 3, value: 'Owner company' },
                    { id: 4, value: 'Sys Admin all system' },
                ]}
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
                optionValue={[
                    { id: 0, value: ' Teamgeist 0 ' },
                    { id: 1, value: ' Teamgeist 1 ' },
                    { id: 2, value: ' Teamgeist 2 ' },
                    { id: 3, value: ' Teamgeist 3 ' },
                    { id: 4, value: ' Teamgeist 4 ' },
                ]}
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
                    { id: 0, value: 'Внутренний' },
                    { id: 1, value: 'Внешний' },
                ]}
            />
            
            <Form.Item>
                <Space style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                }}>
                    <Button
                        type="primary" danger
                        onClick={() => setVisible(false)}>
                        Удалить все скриншоты
                    </Button>


                    <Button htmlType="submit"
                        type="primary" danger
                        onClick={() => {
                            onDeleteUser(editUser)
                        }
                        }>
                        Удалить пользователя
                    </Button>
                </Space>
            </Form.Item>
            <Divider />

            <Form.Item>
                <Space style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                }}>
                    <Button className={'white__btn'} onClick={() => setVisible(false)}>
                        Отмена
                    </Button>

                    <Button
                        htmlType="submit"
                        className="brand__btn">
                        Обновить
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default EditUserForm;