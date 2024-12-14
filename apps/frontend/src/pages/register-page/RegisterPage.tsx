import React from 'react'
import { Button, Form, Input } from 'antd'
import './RegisterPage.scss'

const RegisterPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <section className="register-page">
      <Form
        size="large"
        layout="vertical"
        className="register-page__form"
        name="register"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label="E-mail"
          className="register-page__form-item"
          rules={[
            {
              type: 'email',
              message: 'Некорректный E-mail!',
            },
            {
              required: true,
              message: 'Укажите E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          className="register-page__form-item"
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
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Подтвердите пароль"
          dependencies={['password']}
          hasFeedback
          className="register-page__form-item"
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
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="Имя"
          tooltip="Имя которое будет использоваться в приложении"
          className="register-page__form-item"
          rules={[
            {
              required: true,
              message: 'Укажите имя!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="register-page__form-item">
          <Button block type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </section>
  )
}

export default RegisterPage
