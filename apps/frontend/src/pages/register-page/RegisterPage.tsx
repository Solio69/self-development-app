import { Link } from 'react-router-dom'
import { PATHS } from '@/app/routes/router'
import RegisterForm from '@/features/auth/ui/register-form/RegisterForm'
import { useState } from 'react'
import ErrorFormMessage from '@/shared/ui/error-form-message/ErrorFormMessage'
import './RegisterPage.scss'

const RegisterPage = () => {
  const [error, setError] = useState('')

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="register-page">
      <section className="register-page__content">
        <h1 className="register-page__title">Зарегистрироваться</h1>
        <RegisterForm register={onFinish} onFormChange={() => setError('')} />
        <div className="register-page__error">
          <ErrorFormMessage message={error} />
        </div>
        <div className="register-page__link">
          <span>У вас уже есть аккаунт?</span>
          <Link to={PATHS.login}>Войдите</Link>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage
