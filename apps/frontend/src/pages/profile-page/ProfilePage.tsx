import { AntDesignOutlined, EditOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { useSelector } from 'react-redux'
import { userSelector } from '@/features/auth/authSelectors'
import { Link } from 'react-router-dom'
import './ProfilePage.scss'

const ProfilePage = () => {
  const user = useSelector(userSelector)

  return (
    <div className="profile-page">
      <div className="profile-info">
        <div className="profile-info-name">
          <Avatar size={64} icon={<AntDesignOutlined />} />
          <div className="profile-info-name__content">
            <div>{user?.username}</div>
            <div>{user?.email}</div>
          </div>
        </div>
        <div className="profile-info-links">
          <div className="profile-info-links__item">
            <EditOutlined />
            <Link to="">Редактировать имя</Link>
          </div>
          <div className="profile-info-links__item">
            <SettingOutlined twoToneColor="#95de64" />
            <Link to="">Настройки</Link>
          </div>
          <div className="profile-info-links__item">
            <LogoutOutlined twoToneColor="#95de64" />
            <Link to="">Выход</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
