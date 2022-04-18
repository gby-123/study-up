import { Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import './index.less';
import { useState } from 'react';
import { Link } from 'umi';

export default function Nav() {
  return (
    <div className="navBox">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="h0">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="h1">
          <Link to="/list">
            <b>工具页</b>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
