import { Button, Form, Input, Spin } from 'antd'
import { LockOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons'
import './LoginForm.scss'

interface IProps {
  onFormChange: (values: any) => void
  login: (values: any) => void
  isLoading: boolean
}

const LoginForm = ({ login, onFormChange, isLoading }: IProps) => {
  const roundLoader = <LoadingOutlined style={{ fontSize: 20 }} spin />

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
        <Button block type="primary" htmlType="submit" disabled={isLoading}>
          {isLoading ? <Spin indicator={roundLoader} className="login-form__button-spin" /> : 'Войти'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
