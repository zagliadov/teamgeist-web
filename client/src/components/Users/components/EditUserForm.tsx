import { FC, useContext } from 'react';
import { IPropsSetVisible } from '../../../interfaces/componentsInterface';
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

const EditUserForm: FC<IPropsSetVisible> = ({ setVisible, person}) => {

    const [, setUser] = useContext(UserContext);
    const [form] = Form.useForm();
    console.log(person)
    const editUser = (value: IUser) => {
        console.log(value)

    }
    const onDeleteUser = (person: IUser) => {
        setUser((previos: IUser[]) => {
            return previos.filter((item: IUser) => item.key !== person.key)
        })
        setVisible(false);
    }
    const onFinish = (value: IUser): void => {
        setVisible(false);
        editUser(value)
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
            <Form.Item name="email" style={{ marginBottom: "2px" }} label="E-mail:" rules={[{ required: true }]}>
                <Input className='input-border' value={person?.email} />
            </Form.Item>
            <Form.Item name="firstName" style={{ marginBottom: "2px" }} label="Имя:" rules={[{ required: true }]}>
                <Input className='input-border' value={person?.firstName} />
            </Form.Item>
            <Form.Item name="lastName" style={{ marginBottom: "10px" }} label="Фамилия:" rules={[{ required: true }]}>
                <Input className='input-border' value={person?.lastName} />
            </Form.Item>

            <Form.Item name="userType" style={{ marginBottom: "10px" }} label="Тип пользователя:" rules={[{ required: true }]}>
                <Select
                    bordered={false}
                    className='input-border'
                    value={person?.userType}
                    allowClear
                >
                    <Option value="Developer">Developer</Option>
                    <Option value="Manager">Manager</Option>
                    <Option value="Admin company">Admin company</Option>
                    <Option value="Owner company">Owner company</Option>
                    <Option value="Sys Admin all system">Sys Admin all system</Option>
                </Select>
            </Form.Item>

            <Form.Item name="project" style={{ marginBottom: "10px" }} label="Проект:" rules={[{ required: true }]}>
                <Select
                    mode='multiple'
                    bordered={false}
                    className='input-border'
                    value={person?.project}
                    allowClear
                >
                    <Option value="Teamgeist">Teamgeist1</Option>
                    <Option value="Teamgeist2">Teamgeist2</Option>
                    <Option value="Teamgeist3">Teamgeist3</Option>
                    <Option value="Teamgeist4">Teamgeist4</Option>
                    <Option value="Teamgeist5">Teamgeist5</Option>
                </Select>
            </Form.Item>
            <Form.Item name="password" label="Пароль:" rules={[{ required: true }]}>
                <Input className='input-border' />
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
                        onClick={() => onDeleteUser(person)}>
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
                        onClick={() => editUser(person)}
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