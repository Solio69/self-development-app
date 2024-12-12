import React from 'react'
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
    <section className="login-page">
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
        <Link className="login-page__form-item--link" to={PATHS.register}>
          Регистрация
        </Link>
      </Form>
    </section>
  )
}

export default LoginPage
