import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  BookOutlined as NoteIcon,
  CheckCircleTwoTone as DaySummaryIcon,
  DeleteOutlined as TrashIcon,
  MenuFoldOutlined as MenuFoldOutlinedIcon,
  MenuUnfoldOutlined as MenuUnfoldOutlinedIcon,
  UserOutlined as UserPickIcon,
} from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
import { PATHS } from '../../app/routes/router'
import { MENU_ITEMS_LABEL } from './constants'
import './HomePage.scss'

const { Sider, Content } = Layout

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="home-page">
      <Layout className="layout">
        <Sider
          theme="light"
          trigger={null}
          width={380}
          collapsible
          collapsed={collapsed}
        >
          <div className="layout-collapsed">
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlinedIcon style={{ fontSize: '30px' }} />
                ) : (
                  <MenuFoldOutlinedIcon style={{ fontSize: '30px' }} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            />
            {!collapsed && (
              <Link to={PATHS.profile}>
                <UserPickIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
              </Link>
            )}
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            className="layout-menu"
            items={[
              {
                key: '1',
                className: 'layout-menu-item',
                icon: (
                  <NoteIcon style={{ fontSize: '20px', color: '#fa8c16' }} />
                ),
                label: <Link to={PATHS.notes}>{MENU_ITEMS_LABEL.notes}</Link>,
              },
              {
                key: '2',
                className: 'layout-menu-item',
                icon: (
                  <DaySummaryIcon
                    twoToneColor="#a0d911"
                    style={{ fontSize: '20px' }}
                  />
                ),
                label: (
                  <Link to={PATHS.daySummary}>
                    {MENU_ITEMS_LABEL.daySummary}
                  </Link>
                ),
              },
              {
                key: '3',
                className: 'layout-menu-item',
                icon: (
                  <TrashIcon style={{ fontSize: '20px', color: '#f5222d' }} />
                ),
                label: <Link to={PATHS.trash}>{MENU_ITEMS_LABEL.trash}</Link>,
              },
            ]}
          />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  )
}

export default HomePage
