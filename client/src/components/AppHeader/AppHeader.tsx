import { FC, useContext } from "react";
import { Col, Layout, Menu, Row } from "antd";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import {AppContext} from '../../state/AppContext';
import { ActionType } from "../../state/actions";
const { Header } = Layout;

const AppHeader: FC<any> = ({ headerOption }) => {
  const [state, dispatch] = useContext(AppContext);


  const handleClick = () => {
    dispatch({
      type: ActionType.SET_ISLOADING,
      payload: false,
    });
  }


  return (
    <Header
      style={{
        background: "#ffffff",

        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Row style={{ width: "90%" }}>
        <Col
          span={3}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Logo />
        </Col>

        <Col span={18}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["5"]}
            className="menu"
          >
            {headerOption.map((item: any) => {
              return (
                <Menu.Item key={item.id} className="menu__item">
                  <NavLink
                    to={item.to}
                    key={item.id}
                    className={({ isActive }) => (isActive ? "active" : "link")}
                  >
                    {item.name}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>

        <Col
          span={3}
          style={{
            display: "flex",
            justifyContent: "center",
            borderLeft: "2px solid rgba(167, 167, 167, 0.376)",
          }}
        >
          <NavLink
            to="/login"
            onClick={() => handleClick()}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            Выход
          </NavLink>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
