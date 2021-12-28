import { Button, Form, message, Space } from 'antd';
import { FC, useContext, useState } from 'react';
import { IPropsSetVisible } from '../../../../interfaces/componentsInterface';
import { UserContext } from '../../../../state/UserContext';
import FormItemForInput from '../../../FormItemForInput/FormItemForInput';
import FormItemForSelect from '../../../FormItemForSelect/FormItemForSelect';
import FooterForModal from '../../../FooterForModal/FooterForModal';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};

const AddProjectForm: FC<IPropsSetVisible> = ({ setVisible }) => {


    const [form] = Form.useForm();
    const [open, setOpen] = useState<boolean>(false);
    const [, setUser] = useContext(UserContext);


    const onFinish = (value: any): void => {
        setVisible(false);
        console.log(value)
    }

    const onFinishFailed = (): void => {
        message.error('Submit failed!');
    }


    return (
        <Form {...layout} form={form} onFinish={onFinish}
            onFinishFailed={onFinishFailed} name="control-hooks" >

            <FormItemForInput
                className={"input-border"}
                placeholder={"Название проекта"}
                label={"Название проекта:"}
                required={true}
                message={"Please enter a valid project"}
                name={"project"}
            />

            <FormItemForInput
                className={"input-border"}
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
                className={"input-border"}
                optionValue={[
                    { id: 0, value: 'Открыт' },
                    { id: 1, value: 'Удален' },
                ]}
            />

            <FormItemForSelect
                style={{ marginBottom: "10px" }}
                className={"input-border"}
                label={"Выберите тип проекта"}
                message={"Please enter valid project type"}
                placeholder={"Выберирите тип проекта..."}
                required={true}
                name={"projectType"}
                optionValue={[
                    { id: 0, value: 'Внутренний' },
                    { id: 1, value: 'Внешний' },
                ]}
            />

            <FooterForModal
                setVisible={setVisible}
                firstButtonName="Отмена"
                secondButtonName="Создать" />
            
        </Form>
    );
};

export default AddProjectForm;