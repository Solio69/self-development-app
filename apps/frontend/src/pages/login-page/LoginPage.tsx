import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '@/shared/api'
import LoginForm from '@/features/auth/ui/login-form/LoginForm'
import ErrorFormMessage from '@/shared/ui/error-form-message/ErrorFormMessage'
import { PATHS } from '@/app/routes/router'
import { LoginValues } from '@/features/auth/authTypes'
import { isErrorMessage } from '@/shared/lib/isErrorWithMessage'
import { UNKNOWN_ERROR } from '@/shared/consts/errors'
import './LoginPage.scss'

const LoginPage = () => {
  const navigate = useNavigate()

  const [loginUser, loginUserResult] = useLoginMutation()
  const [error, setError] = useState('')

  const login = async (values: LoginValues) => {
    try {
      setError('')
      await loginUser(values).unwrap()
      navigate(PATHS.home)
    } catch (e) {
      const maybeError = isErrorMessage(e)
      setError(maybeError ? e.data.message : UNKNOWN_ERROR)
    }
  }

  return (
    <div className="login-page">
      <section className="login-page__content">
        <h1 className="login-page__title">Войти</h1>
        <LoginForm login={login} onFormChange={() => setError('')} isLoading={loginUserResult.isLoading} />
        <div className="login-page__error">
          <ErrorFormMessage message={error} />
        </div>
        <div className={'login-page__link'}>
          <span>Еще не зарегистрированы?</span>
          <Link to={PATHS.register}>Зарегистрироваться</Link>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
