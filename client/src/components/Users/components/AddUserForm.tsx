import { FC, useContext } from 'react';
import { Form, Input, Button, Select, message, Space } from 'antd';
import { UserContext } from '../../../state/UserContext';
import {IValueAddUserForm} from '../../../interfaces/componentsInterface';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};

interface IProps {
    setVisible: (arg0: boolean) => void;
}


const AddUserForm: FC<IProps> = ({ setVisible }) => {

    const [user, setUser] = useContext(UserContext);
    const [form] = Form.useForm();

    const onFinish = (value: IValueAddUserForm): void => {
        setVisible(false);
        console.log(value)

    }

    const onFinishFailed = (): void => {
        message.error('Submit failed!');

    }


    return (
        <Form {...layout} form={form} onFinish={onFinish}
            onFinishFailed={onFinishFailed} name="control-hooks" >
            <Form.Item name="email" label="E-mail:" rules={[{ required: true }]}>
                <Input className='input-border' />
            </Form.Item>
            <Form.Item name="firstName" label="Имя:" rules={[{ required: true }]}>
                <Input className='input-border' />
            </Form.Item>
            <Form.Item name="lastName" label="Фамилия:" rules={[{ required: true }]}>
                <Input className='input-border' />
            </Form.Item>
            <Form.Item name="userType" label="Тип пользователя:" rules={[{ required: true }]}>
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

            <Form.Item name="project" label="Проект:" rules={[{ required: true }]}>
                <Select
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

            <Form.Item name="password" label="Пароль:" rules={[{ required: true }]}>
                <Input className='input-border' />
            </Form.Item>
            <Form.Item name="password2" label="Подтвердите пароль:" rules={[{ required: true }]}>
                <Input className='input-border' />
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