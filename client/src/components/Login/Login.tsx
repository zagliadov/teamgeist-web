import { Button, Form, Input, Modal } from 'antd';
import { FC, useState, useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { UserContext } from '../../state/UserContext';
import { useNavigate, Navigate } from 'react-router-dom';
import { IValueFromLoginForm } from '../../interfaces/componentsInterface';

const Login: FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);
    const [, setAuth] = useContext(AuthContext);
    const [user,] = useContext(UserContext);

    const navigate = useNavigate();



    const onFinish = (values: IValueFromLoginForm) => {
        const person = user.filter((item: IValueFromLoginForm) => {
            return item.email === values.email
        });
        localStorage.clear();
        switch (person[0].userType) {
            case 'admin':
                setAuth(true);
                navigate(`/${person[0].userType}/users`, 
                { state: person[0].userType });
                localStorage.setItem('user', `${person[0].userType}`);
                break;
            case 'developer':
                setAuth(true);
                navigate(`/${person[0].userType}/project-list`, 
                { state: person[0].userType });
                localStorage.setItem('user', `${person[0].userType}`);
                break;
            default:
                break;
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal
            title="Вход в систему"
            visible={isModalVisible}
            closable={false}
            maskStyle={{ background: 'silver' }}
            onOk={handleOk}
            centered={true}
            footer={null}
            maskClosable={false}>


            <Form
                name="basic"
                labelCol={{ span: 16 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="E-mail:"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль:"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 20 }}>
                    <Button type="primary" htmlType="submit">
                        Вход
                    </Button>
                </Form.Item>
            </Form>

        </Modal>
    );
};

export default Login;