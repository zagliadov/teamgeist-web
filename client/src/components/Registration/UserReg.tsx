import { FC } from 'react';
import { IUserRegisterForm } from '../../interfaces/componentsInterface';
import {
  Form,
  Input,
  Checkbox,
  Button
} from 'antd';

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

const UserRegistration: FC = () => {

  const [form] = Form.useForm();

  const onFinish = (values: IUserRegisterForm) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        agreement: true,
      }}
      scrollToFirstError
    >
    
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


export default UserRegistration;