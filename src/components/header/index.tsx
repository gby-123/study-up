import Logo from '../../assets/logo.png';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import './index.less';

const { Header } = Layout;
const handleClick = () => {
  console.log('logout');
};
const menu = (
  <Menu>
    <Menu.Item onClick={handleClick}>注销用户</Menu.Item>
  </Menu>
);

export default function HeaderBox() {
  return (
    <div>
      <Header className="headerWrap">
        <div className="logo-card">
          <img src={Logo} alt="" className="logo" />
          <span className="storeName">Study Up</span>
        </div>
        <div className="dropdown-wrap">
          <Dropdown overlay={menu}>
            <div>
              <Avatar size="large" className="userName">
                Biubiubiu
              </Avatar>
            </div>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
}
