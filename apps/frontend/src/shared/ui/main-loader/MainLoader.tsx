import './MainLoader.scss'
import { Spin } from 'antd'

const contentStyle: React.CSSProperties = {
  padding: 50,
}

const MainLoader = () => {
  const content = <div style={contentStyle} />

  return (
    <div className="main-loader">
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </div>
  )
}

export default MainLoader
