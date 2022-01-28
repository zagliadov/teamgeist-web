import { FC, useContext, useState } from "react";
import { Col, Input, Modal, Row, Table, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { ProjectContext } from "../../../../state/ProjectContext";
import { IProject } from "../../../../interfaces/stateInterface/stateInterface";
import { ColumnsType } from "antd/es/table";
import EditProjectForm from "../EditProjectForm/EditProjectForm";
import { useFilter } from "../../../../hooks/filter";
import { useModal } from "../../../../hooks/useModal";

const ProjectList: FC = () => {
  const [project, setProject] = useContext(ProjectContext);
  const [letter, setLetter] = useState("");
  const [editProject, setEditProject] = useState<any>();
  const filterArray = useFilter(project, letter, "projectName");
  const {
    showModal,
    handleOk,
    handleCancel,
    visible,
    setVisible,
    confirmLoading,
  } = useModal();

  const columns: ColumnsType<IProject> = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: (
        <Input
          placeholder="Название"
          onChange={(e) => {
            setLetter(e.target.value);
          }}
        />
      ),
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Тип",
      dataIndex: "projectType",
      key: "projectType",
      render: (text, row) => (
        <>
          <span
            key="projectType"
            style={{
              color: row["projectType"] === "Внутренний" ? "#F4B700" : "green",
            }}
          >
            {row["projectType"]}
          </span>
        </>
      ),
    },
    {
      title: "Действия",
      dataIndex: "actions",
      align: "center",
      render: (value: boolean, record: IProject) => {
        return (
          <Row justify="center">
            <Col
              span={10}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip placement="left" title={<span>Edit this project?</span>}>
                <EditTwoTone
                  twoToneColor="#03a473"
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    setEditProject(record);
                    showModal();
                  }}
                />
              </Tooltip>
            </Col>
            <Col
              span={10}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip
                placement="right"
                title={<span>Remove this project</span>}
              >
                <DeleteTwoTone
                  twoToneColor="#eb2f96"
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    onDeleteProject(value, record);
                  }}
                />
              </Tooltip>
            </Col>
          </Row>
        );
      },
    },
  ];

  const onDeleteProject = (value: boolean, record: IProject) => {
    Modal.confirm({
      title: "Are your sure, you want to delete this project record?",
      okText: "Yes",
      okType: "danger",
      maskClosable: false,
      onOk: () => {
        setProject((pre: IProject[]) => {
          return pre.filter((item: IProject) => item.key !== record.key);
        });
      },
    });
  };

  return (
    <>
      <Table<IProject>
        dataSource={filterArray ? filterArray : project}
        columns={columns}
      />
      <Modal
        title="Редактировать проект"
        visible={visible}
        onOk={handleOk}
        footer={null}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <EditProjectForm
          setVisible={setVisible}
          editProject={editProject}
          setEditProject={setEditProject}
        />
      </Modal>
    </>
  );
};

export default ProjectList;
