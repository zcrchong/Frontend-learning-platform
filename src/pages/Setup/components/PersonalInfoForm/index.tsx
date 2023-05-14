import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Form, Input, Upload } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const maxLength = (max: any) => ({
  max,
  message: `超过最大字数限制${max}个字符`,
});

const requiredRule = {
  required: true,
  message: '此项为必填项',
};

const PersonalInfoForm = () => {
  const [avatarImage, setAvatarImage] = useState(null);

  const onFinish = (values: any) => {
    console.log('提交的表单数据: ', values);
  };

  const onAvatarChange = (info: any) => {
    if (info.file.status === 'done') {
      const reader = new FileReader();
      // @ts-ignore
      reader.addEventListener('load', () => setAvatarImage(reader.result));
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const avatarUploadButton = (
    <div>
      <UserOutlined />
      <div style={{ marginTop: 8 }}>更换头像</div>
    </div>
  );

  return (
    <Card title="个人资料" bordered={false} style={{ width: 1000 }}>
      <Form {...layout} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="username" label="用户名" rules={[requiredRule, maxLength(20)]}>
          <Input />
        </Form.Item>
        <Form.Item name="position" label="职位" rules={[maxLength(50)]}>
          <Input />
        </Form.Item>
        <Form.Item name="company" label="公司" rules={[maxLength(50)]}>
          <Input />
        </Form.Item>
        <Form.Item name="homepage" label="个人主页" rules={[maxLength(100)]}>
          <Input />
        </Form.Item>
        <Form.Item name="introduction" label="个人介绍" rules={[maxLength(100)]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="头像">
          <Avatar size={128} src={avatarImage} />
          <Upload accept="image/*" showUploadList={false} onChange={onAvatarChange}>
            <Button>{avatarUploadButton}</Button>
          </Upload>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PersonalInfoForm;
