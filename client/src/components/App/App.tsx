import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./app.less";
/////////////////////////////////////pages
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Users from "../Users/Users";
import NotFound from "../NotFound/NotFound";
import Projects from "../Projects/Projects";
import AppLayout from "../AppLayout/AppLayout";
import Statistics from "../Statistics/Statistics";
import CrashReports from "../CrashReports/CrashReports";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ProjectList from "../Projects/components/ProjectList/ProjectList";
import { Workdiary } from "../Workdiary/Workdiary";

const App: FC = () => {
  return (
    <>
      {/* Route prototype for admin */}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/projects" element={<Projects />} />
          <Route path="/admin/statistics" element={<Statistics />} />
          <Route path="/admin/crash_reports" element={<CrashReports />} />
          <Route path="/admin/users/workdiary/:id" element={<Workdiary />} />
        </Route>
        {/* Route prototype for developer */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />} />
          <Route path="/developer/project-list" element={<ProjectList />} />
        </Route>

        <Route path="/" element={<AppLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
