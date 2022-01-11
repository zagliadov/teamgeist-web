import { FC } from 'react';
import { ICompanyRegisterForm } from '../../interfaces/componentsInterface';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button
} from 'antd';


const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 32,
    },
    sm: {
      span: 12,
    },
  },
  wrapperCol: {
    xs: {
      span: 32,
    },
    sm: {
      span: 24,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CompanyRegistration: FC = () => {

  const [form] = Form.useForm();

  const onFinish = (values: ICompanyRegisterForm) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        role: "leader",
        agreement: true,
      }}
      scrollToFirstError
    >
        <Form.Item
        name="company_name"
        label="Имя компании"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите имя вашей компании!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Пожалуйста, введите ваш E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="register_name"
        label="Ваше имя и фамилия"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите ваши имя и фамилию!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="role"
        label="Ваша должность"
        rules={[{ required: true, message: 'Пожалуйста выберите вашу должность!' }]}
      >
        <Select placeholder="выберите вашу должность">
          <Option value="project_manager">Проджект менеджер</Option>
          <Option value="admin">Админ</Option>
          <Option value="leader">Руководитель</Option>
        </Select>
      </Form.Item>


      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: 'Введите ваш пароль!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Подтвердите пароль"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Подтвердите ваш пароль!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Пароли не совпадают!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Необходимо принять Соглашение')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Я прочитал(а) <a href="">Соглашение</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Зарегистрировать
        </Button>
      </Form.Item>
    </Form>
  );
};


export default CompanyRegistration;