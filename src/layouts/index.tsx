import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from '../assets/logo.png';
import Nav from '../components/nav';

const { Header, Content, Sider } = Layout;

const BasicLayout: React.FC = (props) => {
  return (
    <ConfigProvider>
      <div className="layoutBox">
        <Layout>
          <Header className="header">
            <img src={Logo} alt="" className="logo" />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Nav />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default BasicLayout;
