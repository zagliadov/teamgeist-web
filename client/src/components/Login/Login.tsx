import { Button, Form, Space, Input, PageHeader, Spin, Layout } from 'antd';
import { FC, useState, useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { UserContext } from '../../state/UserContext';
import { useNavigate } from 'react-router-dom';
import { IValueFromLoginForm } from '../../interfaces/componentsInterface';
import FormItemForInput from '../FormItemForInput/FormItemForInput';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import '../../i18n';

<<<<<<< HEAD
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
<<<<<<< HEAD
        }, 500);

    };
=======
        }, 1000);
=======
const FOOTER_DESCRIPTION: string = 'FaceIt - 2022';
>>>>>>> dev

const lngs: any = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Русский' }
};
>>>>>>> dev

const Login: FC = () => {
  const { t, i18n } = useTranslation();
  const { Footer, Content } = Layout;
  const [loading, setLoading] = useState<boolean>(false);
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
      }, 1000);

    };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    setLoading(false);
  };

  return (
    <Layout>
      <PageHeader
        ghost={false}
        title={<Logo/>}
        extra={[
          <Button.Group>
            {Object.keys(lngs).map((lng) => (
              <Button key={lng} type={i18n.resolvedLanguage === lng ? 'primary' : 'default' } onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
              </Button>
            ))}
          </Button.Group>]}>
      </PageHeader>

        <Content>
          <Layout style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
          >
            <PageHeader
              title={t('description.logIn')}
            />

            <Content style={{width: 400}}>
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
                  message={t('description.PleaseInputYourEmail')}
                  name={"email"}
                />

                <Form.Item
                  label={t('description.pswrd')}
                  name="password"
                  rules={[{ required: true, message: t('description.pswrdMessage') }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type='link' style={{padding: 0}} onClick={() => {
                    navigate('/reset_password')
                  }}>{t('description.forgotPswrd')}
                  </Button>
                </Form.Item>

                <Spin spinning={loading} size="large">
                  <Form.Item >
                    <Space>
                      <Button className='brand__btn' htmlType="submit" onClick={() => {
                        setLoading(true);
                      }}>
                        {t('description.signInBtn')}
                      </Button>

                      <Button className='brand__btn' onClick={() => {
                        navigate('/registration')
                      }}>
                        {t('description.signUp')}
                      </Button>
                    </Space>
                  </Form.Item>
                </Spin>
              </Form>
            </Content>
          </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>{FOOTER_DESCRIPTION}</Footer>
    </Layout>
  );
};

export default Login;