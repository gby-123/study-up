import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import './index.less';
import { Layout } from 'antd';
import Nav from '../components/nav';
// import Header from "../components/header"

const { Content, Sider } = Layout;

const BasicLayout: React.FC = (props) => {
  return (
    <ConfigProvider>
      <div className="layoutBox">
        <Layout>
          {/* <Header/> */}
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Nav />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
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
