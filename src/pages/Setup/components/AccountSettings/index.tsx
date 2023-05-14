import { Button, Form, Input, Switch } from 'antd';
import { useState } from 'react';
// import { LockOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

const DemoPage = () => {
  const [phone, setPhone] = useState('18888881235');
  const [wechat, setWechat] = useState('小镇错题家');
  const [email, setEmail] = useState('');
  const [weibo, setWeibo] = useState('');
  const [github, setGithub] = useState('');
  // const [passwordReset, setPasswordReset] = useState(false);
  const [, setPasswordReset] = useState(false);

  const [accountLogout, setAccountLogout] = useState(false);

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

  const handleAccountLogout = () => {
    setAccountLogout(true);
  };

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
    <div>
      <Form>
        <FormItem label="手机号码">
          <Input
            disabled={phone === '未绑定'}
            value={phone === '未绑定' ? '188****1235' : phone}
            onChange={handlePhoneChange}
          />
          <Button onClick={handlePhoneButtonClick}>{phone === '未绑定' ? '绑定' : '换绑'}</Button>
        </FormItem>

        <FormItem label="微信">
          <Input disabled={wechat === '未绑定'} value={wechat} onChange={handleWechatChange} />
          <Button onClick={handleWechatButtonClick}>{wechat === '未绑定' ? '绑定' : '解绑'}</Button>
        </FormItem>

        <FormItem label="电子邮箱">
          <Input disabled={email === '未绑定'} value={email} onChange={handleEmailChange} />
          <Button onClick={handleEmailButtonClick}>{email === '未绑定' ? '绑定' : '解绑'}</Button>
        </FormItem>

        <FormItem label="新浪微博">
          <Input disabled={weibo === '未绑定'} value={weibo} onChange={handleWeiboChange} />
          <Button onClick={handleWeiboButtonClick}>{weibo === '未绑定' ? '绑定' : '解绑'}</Button>
        </FormItem>

        <FormItem label="GitHub">
          <Input disabled={github === '未绑定'} value={github} onChange={handleGithubChange} />
          <Button onClick={handleGithubButtonClick}>{github === '未绑定' ? '绑定' : '解绑'}</Button>
        </FormItem>

        <FormItem label="密码">
          <Button onClick={handlePasswordReset}>重置</Button>
        </FormItem>

        <FormItem label="账号注销">
          <Switch checked={accountLogout} onChange={handleAccountLogout} />
        </FormItem>
      </Form>
    </div>
  );
};

export default DemoPage;
