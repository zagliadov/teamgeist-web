import { Button, Form, Space, Input, Modal, Spin } from 'antd';
import { FC, useState, useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { UserContext } from '../../state/UserContext';
import { useNavigate } from 'react-router-dom';
import { IValueFromLoginForm } from '../../interfaces/componentsInterface';
import FormItemForInput from '../FormItemForInput/FormItemForInput';

const Login: FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [, setAuth] = useContext(AuthContext);
    const [user,] = useContext(UserContext);

    const navigate = useNavigate();



    const onFinish = (values: IValueFromLoginForm) => {
        
        setTimeout(() => {
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
        }, 500);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        setLoading(false);
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
                <FormItemForInput
                    className={"input-border"}
                    label={"E-mail:"}
                    required={true}
                    message={"Please input your email!"}
                    name={"email"}
                />

                <Form.Item
                    label="Пароль:"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type='link' style={{padding: 0}} onClick={() => {
                        navigate('/reset_password')
                    }}>
                        Забыли пароль?
                    </Button>
                </Form.Item>


                <Spin spinning={loading} size="large">
                    <Form.Item >
                        <Space>
                            <Button className='brand__btn' htmlType="submit" onClick={() => {
                                setLoading(true);
                            }}>
                                Вход
                            </Button>      

                            <Button className='brand__btn' onClick={() => {
                                navigate('/registration')
                            }}>
                                Регистрация
                            </Button>                      
                        </Space>

                    </Form.Item>

                </Spin>
            </Form>

        </Modal>
    );
};

export default Login;