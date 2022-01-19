import { FC, useContext, useEffect, useState } from "react";
import { Col, Input, Modal, Row, Table, Tooltip } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { UserContext } from "../../../state/UserContext";
import { IUser } from "../../../interfaces/stateInterface/stateInterface";
import EditUserForm from "./EditUserForm";
import { ColumnsType } from "antd/es/table";
import { NavLink } from "react-router-dom";
import { asyncDispatch, makeNewArrayForTable } from "../../../helpers/helpers";
import { AppContext } from "../../../state/AppContext";
import { ActionType } from "../../../state/actions";
import { getAllUsers } from "../../../state/controllers/users";

const UsersList: FC = () => {
  const [state, dispatch] = useContext(AppContext);

  const [user, setUser] = useContext(UserContext);

  const [userFilterArray, setUserFilterArray] = useState<any>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterArray: any = [];

  const [letter, setLetter] = useState("");
  const [editUser, setEditUser] = useState<any>();

  const [visible, setVisible] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  useEffect(() => {
    makeNewArrayForTable(user, letter, filterArray, "firstName", "lastName");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letter, filterArray, user]);

  useEffect(() => {
    setUserFilterArray(filterArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letter]);

  useEffect(() => {
    asyncDispatch(dispatch, ActionType.USER_GET_ALL_USERS, getAllUsers());
  }, [dispatch]);
  console.log(state.users);

  const columns: ColumnsType<IUser> = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: (
        <Input
          placeholder="Фамилия Имя"
          onChange={(e) => setLetter(e.target.value)}
        />
      ),
      dataIndex: ["lastName", "firstName", "key"],
      key: "lastName",
      render: (text, row) => {
        return (
          <NavLink style={{ color: "#000000" }} to={`workdiary/${row["key"]}`}>
            {row["firstName"]} {row["lastName"]}
          </NavLink>
        );
      },
    },
    {
      title: "Проекты",
      dataIndex: ["project", "projectType"],
      key: "project",
      render: (text, row) => (
        <>
          <span
            key="project"
            style={{
              color: row["projectType"] === "Внутренний" ? "#F4B700" : "green",
            }}
          >
            {row["project"]}
          </span>
        </>
      ),
    },
    {
      title: "Тип пользователя",
      dataIndex: "userType",
      key: "userType",
    },
    {
      title: "Действия",
      align: "center",
      dataIndex: "actions",
      render: (value: boolean, record: IUser) => {
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
              <Tooltip
                placement="left"
                title={<span>Edit this user?</span>}
              >
                <EditTwoTone
                  twoToneColor="#03a473"
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    setEditUser(record);
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
                title={<span>Remove this user</span>}
              >
                <DeleteTwoTone
                twoToneColor="#eb2f96"
                style={{ fontSize: "20px" }}
                onClick={() => {
                  onDeleteUser(value, record);
                }}
              />
              </Tooltip>
              
            </Col>
          </Row>
        );
      },
    },
  ];

  const onDeleteUser = (value: boolean, record: IUser) => {
    Modal.confirm({
      title: "Are your sure, you want to delete this User record?",
      okText: "Yes",
      okType: "danger",
      maskClosable: false,
      onOk: () => {
        setUser((pre: IUser[]) => {
          return pre.filter((item: IUser) => item.key !== record.key);
        });
      },
    });
  };
  return (
    <>
      <Table<IUser>
        dataSource={userFilterArray ? userFilterArray : user}
        columns={columns}
      />

      <Modal
        title="Редактировать пользователя"
        visible={visible}
        onOk={handleOk}
        footer={null}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <EditUserForm
          setVisible={setVisible}
          editUser={editUser}
          setEditUser={setEditUser}
        />
      </Modal>
    </>
  );
};

export default UsersList;
