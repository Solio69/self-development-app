import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { PATHS } from '../../app/routes/router'
import './LoginPage.scss'

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="login-page">
      <section className="login-page__content">
        <h1 className="register-page__title">Войти</h1>
        <Form
          name="login"
          size="large"
          onFinish={onFinish}
          className="login-page__form"
        >
          <Form.Item
            name="email"
            className="login-page__form-item"
            rules={[
              { required: true, message: 'Email обязетлен для заполнения!' },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            className="login-page__form-item"
            name="password"
            rules={[
              { required: true, message: 'Пароль обязетлен для заполнения!' },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item className="login-page__form-item">
            <Button block type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
          <div className={'login-page__form-item-link'}>
            <span>Еще не зарегистрированы?</span>
            <Link to={PATHS.register}>Зарегистрироваться</Link>
          </div>
        </Form>
      </section>
    </div>
  )
}

export default LoginPage
