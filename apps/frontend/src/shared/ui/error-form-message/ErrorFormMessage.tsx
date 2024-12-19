import { Alert } from 'antd'

interface IProps {
  message?: string
}

const ErrorFormMessage = ({ message }: IProps) => {
  if (!message) return null

  return <Alert message={message} type="error" />
}

export default ErrorFormMessage
