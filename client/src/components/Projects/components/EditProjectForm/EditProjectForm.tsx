import { Form, message } from 'antd';
import { FC, useContext } from 'react';
import { IPropsEditProjectForm } from '../../../../interfaces/componentsInterface';
import { IProject } from '../../../../interfaces/stateInterface/stateInterface';
import { ProjectContext } from '../../../../state/ProjectContext';
import FooterForModal from '../../../FooterForModal/FooterForModal';
import FormItemForInput from '../../../FormItemForInput/FormItemForInput';
import FormItemForSelect from '../../../FormItemForSelect/FormItemForSelect';



const EditProjectForm: FC<IPropsEditProjectForm> = ({ setVisible, editProject, setEditProject }) => {

    const [project, setProject] = useContext(ProjectContext);

    const [form] = Form.useForm();

    const onDeleteUser = (editProject: IProject) => {
        setProject((previos: IProject[]) => {
            return previos.filter((item: IProject) => item.key !== editProject.key)
        })
        setVisible(false);
    }



    const onFinish = (): void => {
        setVisible(false);
        setProject((pre: IProject[]) => {
            return pre.map((project: IProject) => {
                if (project.key !== editProject.key) return project;
                return editProject
            })
        })
    }

    const onFinishFailed = (): void => {
        message.error('Submit failed!');
    }

    return (
        <Form form={form} onFinish={onFinish}
            onFinishFailed={onFinishFailed} name="control-hooks">

            
             <FormItemForInput
                className={"input-border"}
                placeholder={"Название проекта..."}
                label={"Название проекта:"}
                name={"projectName"}
                required={true}
                value={editProject?.projectName}
                setter={setEditProject}
                editable={"projectName"}
                message={"Please enter a valid projectName"}
                
            />

            <FormItemForInput
                className={"input-border"}
                placeholder={"Описание"}
                label={"Описание:"}
                required={true}
                value={editProject?.description}
                setter={setEditProject}
                editable={"description"}
                message={"Please enter a valid description"}
                name={"description"}
            />

            <FormItemForSelect
                name={"status"}
                label={"Статус:"}
                setter={setEditProject}
                value={editProject?.status}
                required={false}
                editable={"status"}
                message={"Please enter valid status"}
                placeholder={"Выберирите статус проекта..."}
                className={"input-border"}
                //optionValue={project}
                optionValue={[
                    [{ key: 0, value: 'Открыт' }],
                    [{ key: 1, value: 'Удален' }],
                ]}
            />

            <FormItemForSelect
                style={{ marginBottom: "10px" }}
                className={"input-border"}
                label={"Выберите тип проекта"}
                message={"Please enter valid project type"}
                value={editProject?.projectType}
                setter={setEditProject}
                placeholder={"Выберирите тип проекта..."}
                required={true}
                editable={"projectType"}
                name={"projectType"}
                //optionValue={[project.key, project.projectType]}
                optionValue={[
                    [{ key: 0, value: 'Внутренний' }],
                    [{ key: 1, value: 'Внешний' }],
                ]}
            />


            <FooterForModal
                setVisible={setVisible}
                firstButtonName="Отмена"
                secondButtonName="Обновить" />

        </Form>
    );
};

export default EditProjectForm;