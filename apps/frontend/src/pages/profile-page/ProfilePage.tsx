import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AntDesignOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { userSelector } from '@/features/auth/selectors'
import { PATHS } from '@/app/routes/router'
import ModalConfirm from '@/shared/ui/modal/ModalConfirm'
import { useAppDispatch } from '@/app/hooks'
import { logout } from '@/features/auth/slice'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/features/auth/constants'
import './ProfilePage.scss'

const PROFILE_BUTTON_TEXT = {
  editName: 'Редактировать имя',
  settings: 'Настройки',
  out: 'Выход',
}

const PROFILE_MODAL_DATA = {
  title: 'Выход',
  text: 'Вы точно хотите выйти?',
  confirmText: 'Выйти',
  cancelText: 'Отменить',
}

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const user = useSelector(userSelector)
  const navigate = useNavigate()

  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false)

  const onLogout = () => setIsShowModalConfirm(true)
  const onCancelLogout = () => setIsShowModalConfirm(false)

  const onConfirmLogout = () => {
    setIsShowModalConfirm(false)
    dispatch(logout())
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    navigate(PATHS.login)
  }

  return (
    <>
      <ModalConfirm
        modalTitle={PROFILE_MODAL_DATA.title}
        modalText={PROFILE_MODAL_DATA.text}
        isOpen={isShowModalConfirm}
        onConfirm={onConfirmLogout}
        onCancel={onCancelLogout}
        confirmButtonText={PROFILE_MODAL_DATA.confirmText}
        cancelButtonText={PROFILE_MODAL_DATA.cancelText}
      />
      <div className="profile-page">
        <div className="profile-header">
          <Avatar size={64} icon={<AntDesignOutlined />} />
          <div className="profile-header__content">
            <div>{user?.username}</div>
            <div>{user?.email}</div>
          </div>
        </div>
        <div className="profile-links">
          {/* TODO: import Link from react-router-dom and icons from @ant-design/icons*/}
          {/* <Link to="" className="profile-links__item">
            <EditOutlined />
            <span>{PROFILE_BUTTON_TEXT.editName}</span>
          </Link>
          <Link to="" className="profile-links__item">
            <SettingOutlined />
            <span>{PROFILE_BUTTON_TEXT.settings}</span>
          </Link> */}
          <button className="profile-links__item" onClick={onLogout}>
            <LogoutOutlined twoToneColor="#95de64" />
            {PROFILE_BUTTON_TEXT.out}
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
