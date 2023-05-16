import { Button, Card, Divider, Form, Input, Space } from 'antd';
import { useState } from 'react';
// import { LockOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

const DemoPage = () => {
  const [phone, setPhone] = useState('18888881235');
  const [wechat, setWechat] = useState('小镇错题家');
  const [email, setEmail] = useState('zcrjs@163.com');
  const [weibo, setWeibo] = useState('@螺蛳粉');
  const [github, setGithub] = useState('zcrchong');
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [passwordReset, setPasswordReset] = useState(false);
  const [, setPasswordReset] = useState(false);

  // const [accountLogout, setAccountLogout] = useState(false);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleWechatChange = (e) => {
    setWechat(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWeiboChange = (e) => {
    setWeibo(e.target.value);
  };

  const handleGithubChange = (e) => {
    setGithub(e.target.value);
  };

  const handlePasswordReset = () => {
    setPasswordReset(true);
  };

  // const handleAccountLogout = () => {
  //   setAccountLogout(true);
  // };

  const handlePhoneButtonClick = () => {
    if (phone === '未绑定') {
      setPhone('');
    } else {
      setPhone('未绑定');
    }
  };

  const handleWechatButtonClick = () => {
    if (wechat === '未绑定') {
      setWechat('');
    } else {
      setWechat('未绑定');
    }
  };
  // const handlePasswordButtonClick = () => {
  //   if (wechat === '未绑定') {
  //     setWechat('');
  //   } else {
  //     setWechat('未绑定');
  //   }
  // };

  const handleEmailButtonClick = () => {
    if (email === '未绑定') {
      setEmail('');
    } else {
      setEmail('未绑定');
    }
  };

  const handleWeiboButtonClick = () => {
    if (weibo === '未绑定') {
      setWeibo('');
    } else {
      setWeibo('未绑定');
    }
  };

  const handleGithubButtonClick = () => {
    if (github === '未绑定') {
      setGithub('');
    } else {
      setGithub('未绑定');
    }
  };

  return (
    <Card title="账号设置" bordered={false} style={{ width: 1450 }}>
      <Form>
        <FormItem label="手机号码">
          <Input
            disabled
            value={phone === '未绑定' ? '188****1235' : phone}
            onChange={handlePhoneChange}
            style={{ width: 504 }}
          />
          <Button type="link" onClick={handlePhoneButtonClick}>
            {phone === '未绑定' ? '绑定' : '换绑'}
          </Button>
        </FormItem>
        <Divider />
        <FormItem label="微   信">
          <Input
            disabled
            value={wechat}
            style={{ width: 504, marginLeft: 25 }}
            onChange={handleWechatChange}
          />
          <Button type="link" onClick={handleWechatButtonClick}>
            {wechat === '未绑定' ? '绑定' : '解绑'}
          </Button>
        </FormItem>
        <Divider />
        <FormItem label="电子邮箱">
          <Input disabled style={{ width: 504 }} value={email} onChange={handleEmailChange} />
          <Button type="link" onClick={handleEmailButtonClick}>
            {email === '未绑定' ? '绑定' : '解绑'}
          </Button>
        </FormItem>
        <Divider />
        <FormItem label="新浪微博">
          <Input disabled style={{ width: 504 }} value={weibo} onChange={handleWeiboChange} />
          <Button type="link" onClick={handleWeiboButtonClick}>
            {weibo === '未绑定' ? '绑定' : '解绑'}
          </Button>
        </FormItem>
        <Divider />
        <FormItem label="GitHub">
          <Input
            disabled
            style={{ width: 504, marginLeft: 10 }}
            // value={github}
            onChange={handleGithubChange}
          />
          <Button type="link" onClick={handleGithubButtonClick}>
            {github === '未绑定' ? '绑定' : '解绑'}
          </Button>
        </FormItem>
        <Divider />
        <FormItem label="密码">
          <Space direction="vertical">
            <Space direction="horizontal">
              <Input.Password
                disabled
                placeholder="input password"
                style={{ width: 504, marginLeft: 26 }}
                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
              />
            </Space>
          </Space>
          <Button type="link" onClick={handlePasswordReset}>
            重置
          </Button>
        </FormItem>
        <Divider />
        <FormItem label="账号注销">
          <Button type="primary" style={{ width: 540 }} block>
            注销
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
};

export default DemoPage;
