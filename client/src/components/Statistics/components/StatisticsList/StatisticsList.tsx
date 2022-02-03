import { FC, useContext } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { UserContext } from "../../../../state/UserContext";
import { useToGetWeeks } from "../../../../hooks/useToGetWeeks";
import {AppContext} from '../../../../state/AppContext';

interface IProps {
  timeStep: string,
}

const ProjectList: FC<IProps> = ({ timeStep }) => {
  const [user] = useContext(UserContext);
  const [state, ] = useContext(AppContext);
  const arrayOfWeeks = useToGetWeeks(state.monthString);

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
      title: <span>{arrayOfWeeks[0].firstWeekOfMonth}</span>,
      dataIndex: "id",
      key: "firstWeekOfMonth",
    },
    {
      title: <span>{arrayOfWeeks[1].secondWeekOfMonth}</span>,
      dataIndex: "id",
      key: "secondWeekOfMonth",
    },
    {
      title: <span>{arrayOfWeeks[2].thirdWeekOfMonth}</span>,
      dataIndex: "id",
      key: "thirdWeekOfMonth",
    },
    {
      title: <span>{arrayOfWeeks[3].fourthWeekOfMonth}</span>,
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
