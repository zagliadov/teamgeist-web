import { Form, Input } from 'antd';
import { FC } from 'react';
import { IUser } from '../../../../interfaces/stateInterface/stateInterface';


interface ISetterProps {
    email: string;
    firstName: string;
    lastName: string;
    userType: string;
    project: Array<string>;
}

interface IPropsFormItemForInput {
    style: any;
    label: string;
    required: boolean;
    message: string;
    type: any;
    value: string;
    setter: (arg0: any) => void;
    editable: string;
}



const FormItemForInput: FC<IPropsFormItemForInput> = ({
    style,
    label,
    required,
    message,
    type,
    value,
    setter,
    editable
}) => {
    return (
        <Form.Item style={style} label={label}
            rules={[
                {
                    required: required,
                    message: message,
                },
                {
                    type: type,
                    message: message
                }
            ]}
            hasFeedback>
            <Input className='input-border' value={value}
                onChange={(e) => {


                    setter((pre: any) => {
                        return {
                            ...pre,
                            [editable]: e.target.value
                        }
                    })

                }}
            />
        </Form.Item>
    );
};

export default FormItemForInput;