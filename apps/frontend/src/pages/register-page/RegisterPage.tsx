import { Button, Form, Input } from 'antd'
import { PATHS } from '../../app/routes/router'
import { Link } from 'react-router-dom'
import './RegisterPage.scss'

const RegisterPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="register-page">
      <section className="register-page__content">
        <h1 className="register-page__title">Зарегистрироваться</h1>
        <Form
          size="large"
          layout="vertical"
          className="register-page__form"
          name="register"
          onFinish={onFinish}
        >
          <Form.Item
            name="nickname"
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
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item
            name="email"
            className="register-page__form-item"
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
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Form.Item
            name="confirm"
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
            <Input.Password placeholder="Подтвердите пароль" />
          </Form.Item>
          <Form.Item className="register-page__form-item">
            <Button block type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
          <div className={'register-page__form-item-link'}>
            <span>У вас уже есть аккаунт?</span>
            <Link to={PATHS.login}>Войдите</Link>
          </div>
        </Form>
      </section>
    </div>
  )
}

export default RegisterPage
