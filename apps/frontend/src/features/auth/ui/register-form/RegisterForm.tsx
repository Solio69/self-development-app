import { Button, Form, Input, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './RegisterForm.scss'

interface IProps {
  register: (values: any) => void
  onFormChange: (values: any) => void
  isLoading: boolean
}

const RegisterForm = ({ register, onFormChange, isLoading }: IProps) => {
  const roundLoader = <LoadingOutlined style={{ fontSize: 20 }} spin />

  return (
    <Form
      size="large"
      layout="vertical"
      className="register-form"
      name="register"
      onFinish={register}
      onChange={onFormChange}
    >
      <Form.Item
        name="username"
        tooltip="Имя которое будет использоваться в приложении"
        className="register-form__item"
        rules={[
          {
            required: true,
            message: 'Укажите имя!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Имя" />
      </Form.Item>
      <Form.Item
        name="email"
        className="register-form__item"
        rules={[
          {
            type: 'email',
            message: 'Некорректный Email!',
          },
          {
            required: true,
            message: 'Укажите Email!',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        className="register-form__item"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Укажите пароль!',
          },
          {
            min: 6,
            message: 'Пароль должен содержать не менее 6 символов!',
          },
        ]}
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        className="register-form__item"
        rules={[
          {
            required: true,
            message: 'Подтвердите пароль!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Пароли не совпадают!'))
            },
          }),
        ]}
      >
        <Input.Password placeholder="Подтвердите пароль" />
      </Form.Item>
      <Form.Item className="register-form__item">
        <Button block type="primary" htmlType="submit" disabled={isLoading}>
          {isLoading ? <Spin indicator={roundLoader} className="login-form__button-spin" /> : 'Зарегистрироваться'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm
