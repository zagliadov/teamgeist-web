import { Button, Form, Input, PageHeader, Spin, Layout, Card, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FC, useState, useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { UserContext } from '../../state/UserContext';
import { useNavigate } from 'react-router-dom';
import { IValueFromLoginForm } from '../../interfaces/componentsInterface';
import { useTranslation } from 'react-i18next';
import logo from '../Logo/logo.svg';
import '../../i18n';
import './login.sass';

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
  const [user] = useContext(UserContext);

  const navigate = useNavigate();

  const onFinish = (values: IValueFromLoginForm) => {
    setTimeout(() => {
      const person = user.filter((item: IValueFromLoginForm) => {
        return item.email === values.email;
      });
      localStorage.clear();
      switch (person[0].userType) {
        case "admin":
          setAuth(true);
          navigate(`/${person[0].userType}/users`, {
            state: person[0].userType,
          });
          localStorage.setItem("user", `${person[0].userType}`);
          break;
        case "developer":
          setAuth(true);
          navigate(`/${person[0].userType}/project-list`, {
            state: person[0].userType,
          });
          localStorage.setItem("user", `${person[0].userType}`);
          break;
        default:
          break;
      }
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    setLoading(false);
  };

  return (
    <Layout className='transparent'>
      <div className="background-part-1" />
      <div className="background-part-2" />
      <PageHeader
        title={<img src={logo} className='Logo' />}
        className='transparent'
        ghost={true}
        extra={
          <div>
            {Object.keys(lngs).map((lng) => (
              <Button 
              style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)"}}
              key={lng} 
              type={i18n.resolvedLanguage === lng ? 'primary' : 'default' } 
              ghost
              size="small"
              shape="round"
              onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
              </Button>
            ))}
          </div>}>
      </PageHeader>

      {/* <PageHeader className='text-center transparent'>
        <img src={logo} className='Logo' />
      </PageHeader> */}

      <Content>
        <Layout className='white_content'> 
          <Content style={{
            width: '35%',
            margin:'6vh'
            }}>
            <Card style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.07)",
              margin: 'auto',
              }}>
            <h2 style={{textAlign: 'center', fontWeight: 600}}>{t('logInForm.logIn')}</h2>
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
                style={{borderBottom: "line-width"}}
                // label={t('logInForm.eMail')}
                rules={[{ required: true, message: t('logInForm.PleaseInputYourEmail') }]}
              >
                <Input 
                bordered={false} 
                prefix={<UserOutlined style={{ color: "#BDBDBD"}} />} 
                placeholder={t('logInForm.eMail')} 
                />
              </Form.Item>
              <Divider/>
              
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
              <Divider/>

              <Form.Item>
                <Button type='link' style={{padding: 0}} onClick={() => {
                  navigate('/reset_password')
                }}>{t('logInForm.forgotPswrd')}
                </Button>
              </Form.Item>

              <Spin spinning={loading} size="large">
                <Form.Item >
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
                ghost
                type='primary' 
                shape='round' 
                onClick={() => {
                  navigate('/registration')
                }}>
                  {t('logInForm.signUp')}
                </Button>

              </Spin>
            </Form>          
            </Card>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default Login;
