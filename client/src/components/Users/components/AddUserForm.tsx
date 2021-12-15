import { FC, useContext } from 'react';
import { Form, Input, Button, Select, message, Space } from 'antd';
import { IValueAddUserForm, IPropsSetVisible } from '../../../interfaces/componentsInterface';
import { UserContext } from '../../../state/UserContext';
import { IUser } from '../../../interfaces/stateInterface/stateInterface';

const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};



const AddUserForm: FC<IPropsSetVisible> = ({ setVisible }) => {

    const [form] = Form.useForm();
    const [, setUser] = useContext(UserContext);

    const onAddUser = (value: any) => {
        let rndmnum = Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 111111);
        let rndpass: string = Math.random().toString(36).slice(-8);

        let newUser = {
            key: String(rndmnum),
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            userType: value.userType,
            project: value.project,
            password: rndpass,
        }
        setUser((pre: IUser[]) => {
            return [...pre, newUser]
        })
    }

    const onFinish = (value: IValueAddUserForm): void => {
        setVisible(false);
        onAddUser(value);
    }

    const onFinishFailed = (): void => {
        message.error('Submit failed!');
    }


    return (
        <Form {...layout} form={form} onFinish={onFinish}
            onFinishFailed={onFinishFailed} name="control-hooks" >

            <Form.Item name="email" label="E-mail:"
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
                hasFeedback
            >
                <Input className='input-border' />
            </Form.Item>

            <Form.Item name="firstName" label="Имя:"
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
                <Input className='input-border' placeholder="Введите имя" />
            </Form.Item>
            <Form.Item name="lastName" label="Фамилия:"
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
                <Input className='input-border' placeholder="Введите фамилию" />
            </Form.Item>
            <Form.Item name="userType" label="Тип пользователя:"
                rules={[
                    {
                        required: true,
                        message: 'Please enter valid user type',
                    },
                    {
                        whitespace: true,
                    }
                ]}
                hasFeedback>
                <Select
                    bordered={false}
                    className='input-border'
                    placeholder="Developer"
                    allowClear
                >
                    <Option value="Developer">Developer</Option>
                    <Option value="Manager">Manager</Option>
                    <Option value="Admin company">Admin company</Option>
                    <Option value="Owner company">Owner company</Option>
                    <Option value="Sys Admin all system">Sys Admin all system</Option>
                </Select>
            </Form.Item>

            <Form.Item name="project" label="Проект:" hasFeedback>
                <Select
                    mode='multiple'
                    bordered={false}
                    className='input-border'
                    placeholder="Выберирите проект..."
                    allowClear
                >
                    <Option value="Teamgeist">Teamgeist</Option>
                    <Option value="Teamgeist2">Teamgeist</Option>
                    <Option value="Teamgeist3">Teamgeist</Option>
                    <Option value="Teamgeist4">Teamgeist</Option>
                    <Option value="Teamgeist5">Teamgeist</Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Space style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                }}>
                    <Button className={'white__btn'} onClick={() => setVisible(false)}>
                        Отмена
                    </Button>


                    <Button htmlType="submit" className="brand__btn">
                        Добавить
                    </Button>
                </Space>
            </Form.Item>



        </Form>
    );
};

export default AddUserForm;