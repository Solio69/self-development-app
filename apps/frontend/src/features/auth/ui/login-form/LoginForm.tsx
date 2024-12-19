import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import './LoginForm.scss'

interface IProps {
  onFormChange: (values: any) => void
  login: (values: any) => void
}

const LoginForm = ({ login, onFormChange }: IProps) => {
  return (
    <Form name="login" size="large" onChange={onFormChange} onFinish={login} className="login-form">
      <Form.Item
        name="email"
        className="login-form__item"
        rules={[{ required: true, message: 'Email обязетлен для заполнения!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        className="login-form__item"
        name="password"
        hasFeedback
        rules={[{ required: true, message: 'Пароль обязетлен для заполнения!' }]}
      >
        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item className="login-form__item">
        <Button block type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
