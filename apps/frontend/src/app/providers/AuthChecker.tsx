import { useCurrentQuery } from '@/shared/api'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../routes/router'
import MainLoader from '@/shared/ui/main-loader/MainLoader'

interface IProps {
  children: JSX.Element
}

const AuthChecker = ({ children }: IProps) => {
  const { isLoading, error } = useCurrentQuery()
  const navigate = useNavigate()

  if (isLoading) return <MainLoader />

  if (error) navigate(PATHS.login)

  return children
}

export default AuthChecker
