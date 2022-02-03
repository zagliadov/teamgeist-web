import {
  Button,
  Form,
  Input,
  PageHeader,
  Spin,
  Layout,
  Card,
  Divider,
  Row,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FC, useContext, useEffect } from "react";
import { AppContext } from "../../state/AppContext";
import { UserContext } from "../../state/UserContext";
import { useNavigate } from "react-router-dom";
import { IValueFromLoginForm } from "../../interfaces/componentsInterface";
import { useTranslation } from "react-i18next";
import logo from "../Logo/logo.svg";
import "../../i18n";
import "./login.sass";
import { ActionType } from "../../state/actions";

const lngs: any = {
  en: { nativeName: "en" },
  ru: { nativeName: "ру" },
};

const Login: FC = () => {
  const { t, i18n } = useTranslation();
  const { Content } = Layout;
  const [state, dispatch] = useContext(AppContext);
  const [user] = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(state.isLoading)
  }, [state])
  const onFinish = (values: IValueFromLoginForm) => {
    setTimeout(() => {
      const person = user.filter((item: IValueFromLoginForm) => {
        return item.email === values.email;
      });
      localStorage.clear();
      switch (person[0].userType) {
        case "admin":
          dispatch({
            type: ActionType.SET_AUTH,
            payload: {
              isAuthificated: true,
              role: "admin",
            },
          });
          navigate(`/${person[0].userType}/users`, {
            state: person[0].userType,
          });
          localStorage.setItem("user", `${person[0].userType}`);
          break;
        case "developer":
          dispatch({
            type: ActionType.SET_AUTH,
            payload: {
              isAuthificated: true,
              role: "developer",
            },
          });
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
    dispatch({
      type: ActionType.SET_ISLOADING,
      payload: false,
    });
  };

  return (
    <Layout className="transparent">
      <div className="background-part-1" />
      <div className="background-part-2" />
      <PageHeader
        className="text-center transparent"
        extra={
          <div className="lang-buttons">
            {Object.keys(lngs).map((lng) => (
              <Button
                key={lng}
                type={i18n.resolvedLanguage === lng ? "primary" : "default"}
                ghost
                size="small"
                shape="round"
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng].nativeName}
              </Button>
            ))}
          </div>
        }
      ></PageHeader>

      <PageHeader className="text-center transparent">
        <img src={logo} className="Logo" alt="img" />
      </PageHeader>

      <Content>
        <Layout className="white_content">
          <Content
            style={{
              width: "35%",
              margin: "6vh",
              backgroundColor: "#ffffff",
            }}
          >
            <Card
              style={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.07)",
                margin: "auto",
              }}
            >
              <h2 style={{ textAlign: "center", fontWeight: 600 }}>
                {t("logInForm.logIn")}
              </h2>
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
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: t("logInForm.PleaseInputYourEmail"),
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined style={{ color: "#BDBDBD" }} />}
                    placeholder={t("logInForm.eMail")}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: t("logInForm.pswrdMessage") },
                  ]}
                >
                  <Input.Password
                    // bordered={false}
                    prefix={<LockOutlined style={{ color: "#BDBDBD" }} />}
                    placeholder={t("logInForm.pswrd")}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="link"
                    style={{ padding: 0 }}
                    onClick={() => {
                      navigate("/reset_password");
                    }}
                  >
                    {t("logInForm.forgotPswrd")}
                  </Button>
                </Form.Item>

                <Spin spinning={state?.isLoading} size="large">
                  <Form.Item>
                    <Button
                      block
                      type="primary"
                      size="large"
                      shape="round"
                      htmlType="submit"
                      onClick={() => {
                        dispatch({
                          type: ActionType.SET_ISLOADING,
                          payload: true,
                        });
                      }}
                    >
                      {t("logInForm.signInBtn")}
                    </Button>
                  </Form.Item>

                  <Row justify="center" align="middle">
                    <span>{t("logInForm.DontHaveAnAccount")}</span>
                    <Button
                      type="link"
                      style={{ color: "#03A473" }}
                      onClick={() => {
                        navigate("/registration");
                      }}
                    >
                      {t("logInForm.signUp")}
                    </Button>
                  </Row>
                </Spin>
              </Form>
            </Card>

            <Divider style={{ marginTop: "4vh" }}>Download App:</Divider>

            <Row justify="space-between">
              <Button
                shape="round"
                type="default"
                style={{
                  color: "#03A473",
                  border: "1px solid #03A473",
                }}
                onClick={() => {
                  console.log("download Ubuntu");
                }}
              >
                Ubuntu
              </Button>
              <Button
                shape="round"
                type="default"
                style={{
                  color: "#03A473",
                  border: "1px solid #03A473",
                }}
                onClick={() => {
                  console.log("download MacOs");
                }}
              >
                MacOs
              </Button>
            </Row>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Login;
