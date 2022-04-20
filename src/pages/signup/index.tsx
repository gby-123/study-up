import './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'umi';

export default function Signup() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="signupWrap">
      <div className="signupBox">
        <div className="title">Signup</div>
        <div className="content">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="邀请码"
              name="invitationCode"
              rules={[{ required: true, message: '请输入邀请码!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="PIN码"
              name="pinCode"
              rules={[{ required: true, message: '请输入PIN码!' }]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to="/login">
                <Button type="primary" htmlType="submit" className="toBtn">
                  去登陆
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
