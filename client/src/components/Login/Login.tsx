import { Button, Form, Space, Input, PageHeader, Spin, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FC, useState, useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { UserContext } from '../../state/UserContext';
import { useNavigate } from 'react-router-dom';
import { IValueFromLoginForm } from '../../interfaces/componentsInterface';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import '../../i18n';


const FOOTER_DESCRIPTION: string = 'FaceIt - 2022';


const lngs: any = {
  en: { nativeName: 'en' },
  ru: { nativeName: 'ру' }
};


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
          <div>
            {Object.keys(lngs).map((lng) => (
              <Button 
              key={lng} 
              type={i18n.resolvedLanguage === lng ? 'primary' : 'default' } 
              ghost
              size="small"
              shape="round"
              onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
              </Button>
            ))}
          </div>]}>
      </PageHeader>

        <Content>
          <Layout style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
          >
            <PageHeader
              title={t('logInForm.logIn')}
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
                <Form.Item
                  name="e-mail"
                  // label={t('logInForm.eMail')}
                  rules={[{ required: true, message: t('logInForm.PleaseInputYourEmail') }]}
                >
                  <Input 
                  bordered={false} 
                  prefix={<UserOutlined style={{ color: "#BDBDBD"}} />} 
                  placeholder={t('logInForm.eMail')} />
                </Form.Item>

                <Form.Item
                  // label={t('logInForm.pswrd')}
                  name="password"
                  rules={[{ required: true, message: t('logInForm.pswrdMessage') }]}
                >
                  <Input.Password
                  bordered={false} 
                  prefix={<LockOutlined style={{ color: "#BDBDBD"}} />}
                  placeholder={t('logInForm.pswrd')}
                  />
                </Form.Item>

                <Form.Item>
                  <Button type='link' style={{padding: 0}} onClick={() => {
                    navigate('/reset_password')
                  }}>{t('logInForm.forgotPswrd')}
                  </Button>
                </Form.Item>

                <Spin spinning={loading} size="large">
                  <Form.Item >
                    {/* <Space direction='vertical'> */}
                      <Button 
                      block
                      type='primary' 
                      shape='round' 
                      htmlType="submit" 
                      onClick={() => {
                        setLoading(true);
                      }}>
                        {t('logInForm.signInBtn')}
                      </Button>
                  </Form.Item>

                      <Button 
                      block
                      type='primary' 
                      shape='round' 
                      onClick={() => {
                        navigate('/registration')
                      }}>
                        {t('logInForm.signUp')}
                      </Button>
                    {/* </Space> */}
                  
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