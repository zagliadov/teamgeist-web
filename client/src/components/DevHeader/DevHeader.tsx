import { FC } from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;


const DevHeader: FC = () => {


    return (
        <Header style={{
            background: '#ffffff',

            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Row style={{ width: '90%' }}>
                <Col span={3} style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Logo />
                </Col>


                <Col span={18}>

                    <Menu theme="light" mode='horizontal' defaultSelectedKeys={['1']} className='menu'>
                        <Menu.Item key="1" className='menu__item' >
                            <NavLink to="/developer/project-list" className={({ isActive }) => isActive ? 'active' : 'link'} >
                                Списиок проектов
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={3}>
                    <Menu theme="light" mode='horizontal' defaultSelectedKeys={['1']} className='menu'>
                        <Menu.Item key="5" className='link' >
                            Выход
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
};

export default DevHeader;