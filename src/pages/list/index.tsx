import './index.less';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import ListContent from '../listContent';

export default function List() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [list, setList] = useState<any[]>([]);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.setFieldsValue({
      userName: '',
    });
  };
  const [form] = Form.useForm();
  useEffect(() => {
    setIsModalVisible(true);
    form.setFieldsValue({
      userName: '',
    });
  }, []);
  const addItem = () => {
    const params = form.getFieldValue(['userName']);
    const newList = [...list, params];
    setList(newList);
    console.log(newList);
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
    addItem();
    // setIsModalVisible(false);
    // console.log(params.userName)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="list">
      <div className="title">
        <span>小朋友信息管理</span>
        <Button type="primary" onClick={showModal}>
          新增信息
        </Button>
      </div>
      <div>
        <Modal
          title="添加小朋友信息"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          className="add-dialog"
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="姓名"
              name="userName"
              rules={[{ required: true, message: '请输入小朋友名字!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div>
        <ListContent />
      </div>
    </div>
  );
}
