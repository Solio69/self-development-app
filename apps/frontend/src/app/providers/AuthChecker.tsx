import { useCurrentQuery } from '@/shared/api'

interface IProps {
  children: JSX.Element
}

const AuthChecker = ({ children }: IProps) => {
  const { isLoading, error } = useCurrentQuery()

  //TODO: add loader and error
  if (isLoading) return <div>loading</div>
  if (error) return <div>error</div>

  return children
}

export default AuthChecker
