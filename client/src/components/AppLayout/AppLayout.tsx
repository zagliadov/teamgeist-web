import { FC } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import AppContent from '../AppContent/AppContent';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';

const headerOptionsForAdmin = [
    { id: 0, name: 'Пользователи', to: '/admin/users' },
    { id: 1, name: 'Проекты', to: '/admin/projects' },
    { id: 2, name: 'Статистика', to: '/admin/statistics' },
    { id: 3, name: 'Отчеты о собоях', to: '/admin/crash_reports' },
    { id: 4, name: 'Выход', to: '/login' },
];
const headerOptionsForDeveloper = [
    { id: 0, name: 'Список проектов', to: '/developer/project-list' },
    { id: 1, name: 'Выход', to: '/login' },
];

const AppLayout: FC = () => {
    const userType = localStorage.getItem('user');
    const location = useLocation();

    return (
        <Layout style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
        }}>
            {(userType === 'admin' || location?.state === 'admin')
                && <AppHeader headerOption={headerOptionsForAdmin} />}
            {(userType === 'developer' || location?.state === 'developer')
                && <AppHeader headerOption={headerOptionsForDeveloper} />}
                
            <AppContent>
                <Outlet />
            </AppContent>
        </Layout>
    )
};


export default AppLayout;