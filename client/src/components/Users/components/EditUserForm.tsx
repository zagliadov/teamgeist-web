import { FC, useContext } from 'react';
import { IPropsEditUserForm } from '../../../interfaces/componentsInterface';
import {
    Typography,
    Divider,
    Form,
    Input,
    Button,
    Select,
    message,
    Space
} from 'antd';
import { UserContext } from '../../../state/UserContext';
import { IUser } from '../../../interfaces/stateInterface/stateInterface';

const { Option } = Select;
const { Text } = Typography;

const EditUserForm: FC<IPropsEditUserForm> = ({ setVisible, editUser, setEditUser }) => {

    const [user, setUser] = useContext(UserContext);
    const [form] = Form.useForm();


    console.log(editUser, 'user')



    const onDeleteUser = (editUser: IUser) => {
        setUser((previos: IUser[]) => {
            return previos.filter((item: IUser) => item.key !== editUser.key)
        })
        setVisible(false);
    }

    const onFinish = (): void => {
        setVisible(false);
        setUser((pre: any) => {
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
            <Form.Item style={{ marginBottom: "2px" }} label="E-mail:"
                rules={[
                    {
                        required: true,
                        message: 'Please enter valid email',
                    },
                    {
                        type: "email",
                        message: 'Please enter a valid email'
                    }
                ]}
                hasFeedback>
                <Input className='input-border' value={editUser?.email}
                    onChange={(e) => {
                        setEditUser((pre: any) => {
                            return { ...pre, email: e.target.value }
                        })
                    }}
                />
            </Form.Item>
            <Form.Item style={{ marginBottom: "2px" }} label="Имя:"
                rules={[
                    {
                        required: true,
                        message: 'Please enter valid first name',
                    },
                    {
                        whitespace: true,
                    }
                ]}
                hasFeedback>
                <Input className='input-border' value={editUser?.firstName}
                    onChange={(e) => {
                        setEditUser((pre: any) => {
                            return { ...pre, firstName: e.target.value }
                        })
                    }}
                />
            </Form.Item>
            <Form.Item style={{ marginBottom: "10px" }} label="Фамилия:"
                rules={[
                    {
                        required: true,
                        message: 'Please enter valid last name',
                    },
                    {
                        whitespace: true,
                    }
                ]}
                hasFeedback>
                <Input className='input-border' value={editUser?.lastName}
                    onChange={(e) => {
                        setEditUser((pre: any) => {
                            return { ...pre, lastName: e.target.value }
                        })
                    }}
                />
            </Form.Item>

            <Form.Item style={{ marginBottom: "10px" }} label="Тип пользователя:" rules={[{ required: true }]}>
                <Select
                    bordered={false}
                    className='input-border'
                    allowClear
                    value={editUser?.userType}
                    onChange={(value) => {
                        setEditUser((pre: any) => {
                            return { ...pre, userType: value }
                        })
                    }}
                >
                    <Option value="Developer"
                    >Developer</Option>
                    <Option value="Manager">Manager</Option>
                    <Option value="Admin company">Admin company</Option>
                    <Option value="Owner company">Owner company</Option>
                    <Option value="Sys Admin all system">Sys Admin all system</Option>
                </Select>
            </Form.Item>

            <Form.Item style={{ marginBottom: "10px" }} label="Проект:"
                rules={[
                    {
                        required: true,
                        message: 'Please enter valid user type',
                    },
                ]}
                hasFeedback>
                <Select
                    mode='multiple'
                    bordered={false}
                    className='input-border'
                    allowClear
                    value={[editUser?.project]}
                    onChange={(value) => {
                        setEditUser((pre: any) => {
                            return { ...pre, project: [...value] }
                        })
                    }}
                >
                    <Option value="Teamgeist ">Teamgeist1</Option>
                    <Option value="Teamgeist2 ">Teamgeist2</Option>
                    <Option value="Teamgeist3 ">Teamgeist3</Option>
                    <Option value="Teamgeist4 ">Teamgeist4</Option>
                    <Option value="Teamgeist5 ">Teamgeist5</Option>
                </Select>
            </Form.Item>

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
                        // onClick={() => {
                        //     if (typeof userKey === "undefined") return
                        //     editUser(userKey)
                        // }}
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