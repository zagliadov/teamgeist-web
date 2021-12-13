import { FC } from 'react';
import { Form, Input, Button, Select, message } from 'antd';


const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface IProps {
    setVisible: (arg0: boolean) => void;
}

const AddUserForm: FC<IProps> = ({setVisible}) => {

    const [form] = Form.useForm();
    const onFinish = () => {
        setVisible(false)
    }

    const onFinishFailed = () => {
        message.error('Submit failed!');
        
    }


    return (
        <Form {...layout} form={form} onFinish={onFinish}
            onFinishFailed={onFinishFailed} name="control-hooks" >
            <Form.Item name="email" label="E-mail:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="firstName" label="Имя:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="lastName" label="Фамилия:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="userType" label="Тип пользователя:" rules={[{ required: true }]}>
                <Select
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
                <Input />
            </Form.Item>
            <Form.Item name="password2" label="Подтвердите пароль:" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" onClick={() => setVisible(false)}>Отмена</Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddUserForm;