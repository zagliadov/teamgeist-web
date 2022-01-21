import { FC, useState } from "react";
import UsersList from "./components/UsersList";
import TableHeader from "../TableHeader/TableHeader";
import AddUserForm from "./components/AddUserForm";

const Users: FC = () => {
  let [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <TableHeader
        title={"Список пользователей"}
        whatDoesTheButtonDo={"Добавить пользователя"}
        modalTitle={"Добавить пользователя"}
        footer={null}
        setVisible={setVisible}
        visible={visible}
        maskClosable={false}
      >
        <AddUserForm setVisible={setVisible} />
      </TableHeader>

      <UsersList />
    </>
  );
};

export default Users;
