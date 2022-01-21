import { FC, useContext } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { UserContext } from "../../../../state/UserContext";

interface IProps {
  timeStep: string;
}

const ProjectList: FC<IProps> = ({ timeStep }) => {
  const [user] = useContext(UserContext);

  const week: ColumnsType<any> = [
    {
      title: "Программисты",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Пн",
      dataIndex: "key",
      key: "projectName",
    },
    {
      title: "Вт",
      dataIndex: "key",
      key: "description",
    },
    {
      title: "Ср",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "Чт",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "Пт",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "Сб",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "Вс",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "Итого",
      dataIndex: "key",
      key: "projectType",
    },
  ];

  const month: ColumnsType<any> = [
    {
      title: "Программисты",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "26.04.2021 | 02.05.2021",
      dataIndex: "key",
      key: "projectName",
    },
    {
      title: "26.04.2021 | 02.05.2021",
      dataIndex: "key",
      key: "description",
    },
    {
      title: "26.04.2021 | 02.05.2021",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "26.04.2021 | 02.05.2021",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "26.04.2021 | 02.05.2021",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "26.04.2021 | 02.05.2021",
      dataIndex: "key",
      key: "projectType",
    },
    {
      title: "Итого",
      dataIndex: "key",
      key: "projectType",
    },
  ];

  return (
    <>
      <Table dataSource={user} columns={timeStep === "week" ? week : month} />
    </>
  );
};

export default ProjectList;
