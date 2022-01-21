import { Button, Form, Space } from "antd";
import { FC } from "react";
import { IDeleteButtonForModalEditUser } from "../../interfaces/componentsInterface";

const DeleteButtonForModalEditUser: FC<IDeleteButtonForModalEditUser> = ({
  setVisible,
  firstButtonName,
  secondButtonName,
  onDeleteUser,
  editUser,
}) => {
  return (
    <Form.Item>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        <Button type="primary" danger onClick={() => setVisible(false)}>
          {firstButtonName}
        </Button>

        <Button
          htmlType="submit"
          type="primary"
          danger
          onClick={() => {
            onDeleteUser(editUser);
          }}
        >
          {secondButtonName}
        </Button>
      </Space>
    </Form.Item>
  );
};

export default DeleteButtonForModalEditUser;
