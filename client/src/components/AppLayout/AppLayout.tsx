import { FC } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import AppContent from '../AppContent/AppContent';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const headerOptions = [
    { id: 0, name: 'Пользователи', to: '/admin/users' },
    { id: 1, name: 'Проекты', to: '/admin/projects' },
    { id: 2, name: 'Статистика', to: '/admin/statistics' },
    { id: 3, name: 'Отчеты о собоях', to: '/admin/crash_reports' },
    { id: 4,name: 'Выход', to: '/login' },
]

const AppLayout: FC = () => {
    const userType = localStorage.getItem('user');
    console.log(userType);
    return (
        <Layout style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
        }}>
            {userType === 'admin' && <AppHeader headerOption={headerOptions} />}


            <AppContent>
                <Outlet />
            </AppContent>
        </Layout>
    )
};


export default AppLayout;