import { Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import './index.less';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'umi';

export default function Nav() {
  return (
    <div className="navBox">
      <div className="logo-box">
        <img src={Logo} alt="" className="logo" />
        <span className="storeName">Study Up</span>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="h0" icon={<UserOutlined />}>
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="h1" icon={<LaptopOutlined />}>
          <Link to="/list">
            <b>小朋友管理</b>
          </Link>
        </Menu.Item>
      </Menu>
      <div className="footer-nav">
        <ExportOutlined />
        <span className="logout">Logout</span>
      </div>
    </div>
  );
}
