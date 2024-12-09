import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  BookOutlined,
  CheckCircleTwoTone,
  DeleteOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
                  <MenuUnfoldOutlined style={{ fontSize: '30px' }} />
                ) : (
                  <MenuFoldOutlined style={{ fontSize: '30px' }} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            />
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
                  <BookOutlined
                    style={{ fontSize: '20px', color: '#fa8c16' }}
                  />
                ),
                label: <Link to={PATHS.notes}>{MENU_ITEMS_LABEL.notes}</Link>,
              },
              {
                key: '2',
                className: 'layout-menu-item',
                icon: (
                  <CheckCircleTwoTone
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
                  <DeleteOutlined
                    style={{ fontSize: '20px', color: '#f5222d' }}
                  />
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
