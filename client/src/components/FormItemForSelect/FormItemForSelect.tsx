import { Form, Select } from 'antd';
import { FC } from 'react';




const { Option } = Select;

interface IOption {
    key: number;
    value: string;
}
interface IPropsFormItemForSelect {
    style?: any;
    className: any;
    label: string;
    message?: string;
    name?: string;
    placeholder?: string;
    setOpen?: (arg0: boolean) => void;
    mode?: 'multiple' | 'tags';
    required: boolean;
    value?: string | Array<string>;
    setter?: (arg0: any) => void;
    editable?: string;
    optionValue: any;
}

const FormItemForSelect: FC<IPropsFormItemForSelect> = ({
    style,
    className,
    message,
    label,
    setOpen,
    name,
    placeholder,
    mode,
    required,
    value,
    setter,
    editable,
    optionValue,
}) => {



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
                        if (typeof setter !== 'undefined'
                            && typeof editable !== 'undefined') {
                            setter((pre: any) => {
                                return { ...pre, [editable]: value }
                            });
                        }
                        
                        if (typeof setOpen !== 'undefined') {
                            setOpen(true);
                            if (value.length === 0) setOpen(false)
                        }
                    }}
                >

                    {optionValue && optionValue.map((item: IOption[]) => {
                        if (typeof item === 'undefined') return null
                        return <Option value={item[0].value} key={item[0].key}>{item[0].value}</Option>
                    })}
                </Select>
            </Form.Item>
        </>

    );
};

export default FormItemForSelect;

