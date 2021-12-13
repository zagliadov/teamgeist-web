import { FC } from 'react';
import { Col, Layout, Row } from 'antd';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;


const AppHeader: FC<any> = ({ headerOption }) => {

    

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

                <Col span={21}>
                    {headerOption.map((item: any) => {
                        return (
                            <NavLink to={item.to} key={item.id} 
                                className={({ isActive }) => isActive ? 'active' : 'link'} >
                                {item.name}
                            </NavLink>
                        )
                    })}
                </Col>




            </Row>
        </Header>
    )
};

export default AppHeader;



// <Col span={18}>

// <Menu theme="light" mode='horizontal' defaultSelectedKeys={['5']} className='menu'>
//     <Menu.Item key="1" className='menu__item' >
//         <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'active' : 'link'} >
//             Пользователи
//         </NavLink>
//     </Menu.Item>

//     <Menu.Item key="2" className='menu__item'>
//         <NavLink to='/admin/projects' className={({ isActive }) => isActive ? 'active' : 'link'} >
//             Проекты
//         </NavLink>
//     </Menu.Item>

//     <Menu.Item key="3" className='menu__item'>
//         <NavLink to='/admin/statistic' className={({ isActive }) => isActive ? 'active' : 'link'} >
//             Статистика
//         </NavLink>
//     </Menu.Item>

//     <Menu.Item key="4" className='menu__item'>
//         <NavLink to='/admin/crash_reports' className={({ isActive }) => isActive ? 'active' : 'link'} >
//             Отчеты о собоях
//         </NavLink>
//     </Menu.Item>

// </Menu>
// </Col>
// <Col span={3}>
// <Menu theme="light" mode='horizontal' defaultSelectedKeys={['1']} className='menu'>
//     <Menu.Item key="5" className='link' >
//         Выход
//     </Menu.Item>
// </Menu>
// </Col>