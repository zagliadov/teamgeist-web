import { FC, useContext, useState } from 'react';
import { Form, message } from 'antd';
import { IValueAddUserForm, IPropsSetVisible } from '../../../interfaces/componentsInterface';
import { UserContext } from '../../../state/UserContext';
import { ProjectContext } from '../../../state/ProjectContext';
import { IUser, IProject } from '../../../interfaces/stateInterface/stateInterface';
import FormItemForInput from '../../FormItemForInput/FormItemForInput';
import FormItemForSelect from '../../FormItemForSelect/FormItemForSelect';
import FooterForModal from '../../FooterForModal/FooterForModal';
import { UserTypeContext } from '../../../state/UserTypeContext';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};

const AddUserForm: FC<IPropsSetVisible> = ({ setVisible }) => {

    const [form] = Form.useForm();
    const [open, setOpen] = useState<boolean>(false);
    const [, setUser] = useContext(UserContext);
    const [userType, ] = useContext(UserTypeContext);
    const [project, setProject] = useContext(ProjectContext)

    const onAddUser = (value: any) => {
        let rndmnum = Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 111111);
        let rndpass: string = Math.random().toString(36).slice(-8);

        let newUser = {
            key: String(rndmnum),
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            userType: value.userType,
            project: value.project,
            password: rndpass,
            projectType: value.projectType
        }
        setUser((pre: IUser[]) => {
            return [...pre, newUser]
        })
    };
    const onAddProject = (value: any) => {
        let rndmnum = Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 111111);

        let newProject = {
            key: String(rndmnum),
            projectName: value.project,
            status: 'Открыт',
            description: 'no description',
            projectType: value.projectType,
        }
        setProject((pre: IProject[]) => {
            return [...pre, newProject]
        });
    }

    const onFinish = (value: IValueAddUserForm): void => {
        setVisible(false);
        onAddUser(value);
        onAddProject(value);
    }

    const onFinishFailed = (): void => {
        message.error('Submit failed!');
    }

    return (
        <Form {...layout} form={form} onFinish={onFinish}
            onFinishFailed={onFinishFailed} name="control-hooks" >

            <FormItemForInput
                className={"input-border"}
                placeholder={"Введите email"}
                label={"E-mail:"}
                required={true}
                message={"Please enter a valid email"}
                type={"email"}
                name={"email"}
            />

            <FormItemForInput
                className={"input-border"}
                placeholder={"Введите имя"}
                label={"Имя:"}
                required={true}
                message={"Please enter valid first name"}
                name={"firstName"}
            />

            <FormItemForInput
                className={"input-border"}
                placeholder={"Введите фамилию"}
                label={"Фамилия:"}
                required={true}
                message={"Please enter valid last name"}
                name={"lastName"}
            />

            <FormItemForSelect
                name={"userType"}
                label={"Тип пользователя:"}
                required={true}
                message={"Please enter valid user type"}
                placeholder={"Выберите тип пользователя"}
                className={"input-border"}
                optionValue={userType.map((item: any) => [{ key: item.key, value: item.userType }])}
            />

            <FormItemForSelect
                name={"project"}
                label={"Проект:"}
                setOpen={setOpen}
                required={false}
                mode={"tags"}
                message={"Please enter valid project"}
                placeholder={"Выберите проект..."}
                className={"input-border"}
                optionValue={project.map((item: any) => [{ key: item.key, value: item.projectName }])}
            />
            {open ?
                <FormItemForSelect
                    style={{ marginBottom: "10px" }}
                    className={"input-border"}
                    label={"Выберите тип проекта"}
                    message={"Please enter valid project type"}
                    required={true}
                    name={"projectType"}
                    optionValue={[
                        [{ key: 0, value: 'Внутренний' }],
                        [{ key: 1, value: 'Внешний' }],
                    ]}
                />
                : null}

            <FooterForModal
                setVisible={setVisible}
                firstButtonName="Отмена"
                secondButtonName="Создать" />

        </Form>
    );
};

export default AddUserForm;