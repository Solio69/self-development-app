import { Link, useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/routes/router'
import RegisterForm from '@/features/auth/ui/register-form/RegisterForm'
import { useState } from 'react'
import ErrorFormMessage from '@/shared/ui/error-form-message/ErrorFormMessage'
import { useRegisterMutation } from '@/shared/api'
import { isErrorMessage } from '@/shared/lib/isErrorWithMessage'
import { UNKNOWN_ERROR } from '@/shared/consts/errors'
import { RegisterValues } from '@/features/auth/authTypes'
import './RegisterPage.scss'

const RegisterPage = () => {
  const navigate = useNavigate()

  const [registerUser, registerUserResult] = useRegisterMutation()
  const [error, setError] = useState('')

  const register = async (values: RegisterValues) => {
    try {
      setError('')
      await registerUser(values).unwrap()
      navigate(PATHS.home)
    } catch (e) {
      const maybeError = isErrorMessage(e)
      setError(maybeError ? e.data.message : UNKNOWN_ERROR)
    }
  }

  return (
    <div className="register-page">
      <section className="register-page__content">
        <h1 className="register-page__title">Зарегистрироваться</h1>
        <RegisterForm register={register} onFormChange={() => setError('')} isLoading={registerUserResult.isLoading} />
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
