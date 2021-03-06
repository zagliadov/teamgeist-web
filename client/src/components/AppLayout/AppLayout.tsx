import { FC, useContext } from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppContent from "../AppContent/AppContent";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../state/AppContext";
import { Layout } from "antd";
import { IHeaderOption } from "../../interfaces/componentsInterface";

const headerOptionsForAdmin: IHeaderOption[] = [
  { id: 0, name: "Пользователи", to: "/admin/users" },
  { id: 1, name: "Проекты", to: "/admin/projects" },
  { id: 2, name: "Статистика", to: "/admin/statistics" },
  { id: 3, name: "Отчеты о сбоях", to: "/admin/crash_reports" },
];
const headerOptionsForDeveloper: IHeaderOption[] = [
  { id: 0, name: "Список проектов", to: "/developer/project-list" },
];

const AppLayout: FC = () => {
  const [state, ] = useContext(AppContext);
  
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {state.adminUsers[state.auth.role] ? (
        <AppHeader headerOption={headerOptionsForAdmin} />
      ) : (
        <AppHeader headerOption={headerOptionsForDeveloper} />
      )}

      <AppContent>
        <Outlet />
      </AppContent>
    </Layout>
  );
};

export default AppLayout;
