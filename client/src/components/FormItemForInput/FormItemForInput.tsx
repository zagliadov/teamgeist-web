import { Form, Input } from "antd";
import { FC } from "react";

interface IPropsFormItemForInput {
  style?: any;
  className?: string;
  name?: string;
  label: string;
  required: boolean;
  message: string;
  type?: any;
  placeholder?: string;
  value?: string;
  setter?: (arg0: any) => void;
  editable?: string;
}

const FormItemForInput: FC<IPropsFormItemForInput> = ({
  style,
  className,
  label,
  name,
  required,
  message,
  placeholder,
  type,
  value,
  setter,
  editable,
}) => {
  return (
    <Form.Item
      style={style}
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: message,
        },
        {
          type: type,
          message: message,
          validateTrigger: "onBlur",
        },
      ]}
      hasFeedback
    >
      <Input
        value={value}
        placeholder={placeholder}
        allowClear
        onChange={(e) => {
          if (typeof setter === "undefined") return;
          if (typeof editable === "undefined") return;

          setter((pre: any) => {
            return {
              ...pre,
              [editable]: e.target.value,
            };
          });
        }}
      />
    </Form.Item>
  );
};

export default FormItemForInput;
