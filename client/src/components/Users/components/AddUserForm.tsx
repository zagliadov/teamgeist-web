import { FC, useContext, useEffect, useState } from 'react';
import { Form, Button, message, Space, Progress } from 'antd';
import { IValueAddUserForm, IPropsSetVisible } from '../../../interfaces/componentsInterface';
import { UserContext } from '../../../state/UserContext';
import { IUser } from '../../../interfaces/stateInterface/stateInterface';
import FormItemForInput from '../../FormItemForInput/FormItemForInput';
import FormItemForSelect from '../../FormItemForSelect/FormItemForSelect';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};



const AddUserForm: FC<IPropsSetVisible> = ({ setVisible }) => {

    const [form] = Form.useForm();
    const [, setUser] = useContext(UserContext);




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
        }
        setUser((pre: IUser[]) => {
            return [...pre, newUser]
        })
    }



    const onFinish = (value: IValueAddUserForm): void => {
        console.log(value.project)
        setVisible(false);
        onAddUser(value);
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
                placeholder={"Выберить тип пользователя"}
                className={"input-border"}
                optionValue={[
                    { id: 0, value: 'Developer' },
                    { id: 1, value: 'Manager' },
                    { id: 2, value: 'Admin company' },
                    { id: 3, value: 'Owner company' },
                    { id: 4, value: 'Sys Admin all system' },
                ]}
            />

            <FormItemForSelect
                name={"project"}
                label={"Проект:"}
                required={false}
                mode={"tags"}
                message={"Please enter valid project"}
                placeholder={"Выберирите проект..."}
                className={"input-border"}
                optionValue={[
                    { id: 0, value: ' Teamgeist 0 ' },
                    { id: 1, value: ' Teamgeist 1 ' },
                    { id: 2, value: ' Teamgeist 2 ' },
                    { id: 3, value: ' Teamgeist 3 ' },
                    { id: 4, value: ' Teamgeist 4 ' },
                ]}
            />


            <Form.Item>
                <Space style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                }}>
                    <Button className={'white__btn'} onClick={() => setVisible(false)}>
                        Отмена
                    </Button>


                    <Button htmlType="submit" className="brand__btn">
                        Добавить
                    </Button>
                </Space>
            </Form.Item>

        </Form>
    );
};

export default AddUserForm;