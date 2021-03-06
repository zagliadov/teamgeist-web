import { Form, message } from "antd";
import { FC, useContext } from "react";
import { IPropsSetVisible } from "../../../../interfaces/componentsInterface";
import { ProjectContext } from "../../../../state/ProjectContext";
import FormItemForInput from "../../../FormItemForInput/FormItemForInput";
import FormItemForSelect from "../../../FormItemForSelect/FormItemForSelect";
import FooterForModal from "../../../FooterForModal/FooterForModal";
import { IProject } from "../../../../interfaces/stateInterface/stateInterface";

const AddProjectForm: FC<IPropsSetVisible> = ({ setVisible }) => {
  const [form] = Form.useForm();
  const [, setProject] = useContext(ProjectContext);

  const onAddProject = (value: any) => {
    let rndmnum =
      Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 111111);

    let newProject = {
      key: String(rndmnum),
      status: String(value.status),
      projectName: String(value.projectName),
      description: String(value.description),
      projectType: String(value.projectType),
    };
    setProject((pre: IProject[]) => {
      return [...pre, newProject];
    });
  };

  const onFinish = (value: any): void => {
    setVisible(false);
    onAddProject(value);
  };

  const onFinishFailed = (): void => {
    message.error("Submit failed!");
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      labelAlign={"left"}
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 24 }}
      onFinishFailed={onFinishFailed}
      name="control-hooks"
    >
      <FormItemForInput
        placeholder={"Название проекта"}
        label={"Название проекта:"}
        required={true}
        message={"Please enter a valid project name"}
        name={"projectName"}
      />

      <FormItemForInput
        placeholder={"Описание"}
        label={"Описание:"}
        required={true}
        message={"Please enter a valid description"}
        name={"description"}
      />

      <FormItemForSelect
        name={"status"}
        label={"Статус:"}
        required={false}
        message={"Please enter valid status"}
        placeholder={"Выберирите статус проекта..."}
        optionValue={[
          [{ key: 0, value: "Открыт" }],
          [{ key: 1, value: "Удален" }],
        ]}
      />

      <FormItemForSelect
        style={{ marginBottom: "10px" }}
        label={"Выберите тип проекта"}
        message={"Please enter valid project type"}
        placeholder={"Выберирите тип проекта..."}
        required={true}
        name={"projectType"}
        optionValue={[
          [{ key: 0, value: "Внутренний" }],
          [{ key: 1, value: "Внешний" }],
        ]}
      />

      <FooterForModal
        setVisible={setVisible}
        firstButtonName="Отмена"
        secondButtonName="Создать"
      />
    </Form>
  );
};

export default AddProjectForm;
