import { Form, Input, Select } from 'antd';
import { FC, useState } from 'react';

const { Option } = Select;


interface IOption {
    id: number;
    value: string;
}

interface IPropsFormItemForSelect {
    style?: any;
    className: any;
    label: string;
    message?: string;
    name?: string;
    placeholder?: string;
    mode?: 'multiple' | 'tags';
    required: boolean;
    value?: string | Array<string>;
    setter?: (arg0: any) => void;
    editable?: string;
    optionValue: IOption[]
}

const FormItemForSelect: FC<IPropsFormItemForSelect> = ({
    style,
    className,
    message,
    label,
    name,
    placeholder,
    mode,
    required,
    value,
    setter,
    editable,
    optionValue,
}) => {

    const [open, setOpen] = useState<boolean>(false);


    return (
        <>
            <Form.Item style={style} name={name} label={label}
                rules={[
                    {
                        required: required,
                        message: message,
                    },
                ]}
                hasFeedback>
                <Select
                    bordered={false}
                    maxTagTextLength={15}
                    className={className}
                    mode={mode}
                    placeholder={placeholder}
                    allowClear
                    value={value}
                    onChange={(value) => {
                        if (mode === 'tags') {
                            console.log(value)
                            setOpen(true);
                        }



                        if (typeof setter === 'undefined') return
                        if (typeof editable === 'undefined') return
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
            {open ? <Input name="project-type" /> : null}
        </>

    );
};

export default FormItemForSelect;

