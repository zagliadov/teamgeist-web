import { FC, useContext } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { UserContext } from "../../../../state/UserContext";
import { useToGetWeeks } from "../../../../hooks/useToGetWeeks";
import { AppContext } from "../../../../state/AppContext";

const ProjectList: FC = () => {
  const [user] = useContext(UserContext);
  const [state] = useContext(AppContext);
  const arrayOfWeeks = useToGetWeeks(state.monthString);
  const { timeStep } = state;

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
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: arrayOfWeeks[0].firstWeekOfMonth,
      dataIndex: "id",
      key: "firstWeekOfMonth",
    },
    {
      title: arrayOfWeeks[1].secondWeekOfMonth,
      dataIndex: "id",
      key: "secondWeekOfMonth",
    },
    {
      title: arrayOfWeeks[2].thirdWeekOfMonth,
      dataIndex: "id",
      key: "thirdWeekOfMonth",
    },
    {
      title: arrayOfWeeks[3].fourthWeekOfMonth,
      dataIndex: "id",
      key: "fourthWeekOfMonth",
    },
  ];

  return (
    <>
      <Table
        dataSource={timeStep === "week" ? user : arrayOfWeeks}
        columns={timeStep === "week" ? week : month}
      />
    </>
  );
};

export default ProjectList;
