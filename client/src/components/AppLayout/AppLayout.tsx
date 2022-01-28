import { FC } from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppContent from "../AppContent/AppContent";
import { Outlet, useLocation } from "react-router-dom";
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
  const userType = localStorage.getItem("user");
  const location = useLocation();

  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {(userType === "admin" || location?.state === "admin") && (
        <AppHeader headerOption={headerOptionsForAdmin} />
      )}
      {(userType === "developer" || location?.state === "developer") && (
        <AppHeader headerOption={headerOptionsForDeveloper} />
      )}

      <AppContent>
        <Outlet />
      </AppContent>
    </Layout>
  );
};

export default AppLayout;
