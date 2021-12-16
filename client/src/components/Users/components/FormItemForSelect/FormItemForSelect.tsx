import { Form, Select } from 'antd';
import { FC } from 'react';
import { IUser } from '../../../../interfaces/stateInterface/stateInterface';

const { Option } = Select;


interface IOption {
    id: number;
    value: string;
}

interface IPropsFormItemForSelect {
    style: any;
    className: any;
    label: string;
    mode?: 'multiple';
    required: boolean;
    value: string | Array<string>;
    setter: (arg0: any) => void;
    editable: string;
    optionValue: IOption[]
}

const FormItemForSelect: FC<IPropsFormItemForSelect> = ({
    style,
    className,
    label,
    mode,
    required,
    value,
    setter,
    editable,
    optionValue,
}) => {
    return (
        <Form.Item style={style} label={label} rules={[{ required: required }]}>
            <Select
                bordered={false}
                className={className}
                mode={mode}
                allowClear
                value={value}
                onChange={(value) => {
                    setter((pre: any) => {
                        return { ...pre, [editable]: value }
                    })
                }}
            >
                {optionValue && optionValue.map((item: IOption) => {
                    return <Option value={item.value} key={item.id}>{item.value}</Option>
                })}
            </Select>
        </Form.Item>
    );
};

export default FormItemForSelect;